import { createContext, useContext, useEffect, useReducer } from "react";

import { DEFAULT_PORT } from "../utils/constants";
import { ResponseError } from "../utils/errors";
import useToastFactory from "../utils/useToastFactory";
import { roundUpTo2DecPlaces } from "../utils/helpers";

var itemSceleton = {
  id: 0,
  name: "",
  price: 0,
  pricePer: "item",
};
const initialState = {
  ingredients: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ingredients/loaded":
      return { ...state, ingredients: action.payload };
    case "ingredient/added":
      const newItem = {
        ...itemSceleton,
        // Always guarantee a unique id in the App's environment
        id: state.ingredients[state.ingredients.length - 1].id + 1,
      };

      return { ...state, ingredients: [...state.ingredients, newItem] };
    case "ingredientProp/updated":
      const alias = action.payload.alias;
      const value = action.payload.newFieldValue;

      return {
        ...state,
        ingredients: state.ingredients.map((item) =>
          item.id !== action.payload.id
            ? item
            : alias === "name"
            ? { ...item, name: value }
            : alias === "price"
            ? { ...item, price: roundUpTo2DecPlaces(value) }
            : { ...item, pricePer: value }
        ),
      };
    case "ingredient/removed":
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (item) => item.id !== action.payload
        ),
      };
    default:
      throw new Error("Unknown action type");
  }
}

var SERVER_PORT = import.meta.env.VITE_SERVER_PORT;
SERVER_PORT = SERVER_PORT || DEFAULT_PORT;
const EditorContext = createContext();
function EditorProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const errorToast = useToastFactory();

  // Preload the ingredients from the back-end if there are any
  useEffect(() => {
    async function getIngredients() {
      try {
        const res = await fetch(
          `http://localhost:${SERVER_PORT}/ingredients/get`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        // In this case we don't really care what the error message is.
        // Just want to use some good practices
        if (!res.ok) throw new ResponseError("Bad fetch response", res);

        const resData = await res.json();

        // In case the file does not exist yet
        if (!resData) {
          return;
        }

        dispatch({ type: "ingredients/loaded", payload: resData });
      } catch {
        errorToast(
          "There was an error loading the ingredients from the Back-End..."
        );
      }
    }

    getIngredients();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function updateIngredients() {
    try {
      const res = await fetch(
        `http://localhost:${SERVER_PORT}/ingredients/set`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(state.ingredients),
        }
      );

      // In this case we don't really care what the error message is.
      // Just want to use some good practices
      if (!res.ok) throw new ResponseError("Bad fetch response", res);
    } catch {
      errorToast("There was an error saving the ingredients list...");
    }
  }

  function updateItem(id, alias, newFieldValue) {
    dispatch({
      type: "ingredientProp/updated",
      payload: { id, alias, newFieldValue },
    });
  }

  function removeItem(id) {
    dispatch({ type: "ingredient/removed", payload: id });
  }

  function addEmptyItem() {
    dispatch({ type: "ingredient/added" });
  }

  function save() {
    updateIngredients();
  }

  return (
    <EditorContext.Provider
      value={{ ...state, updateItem, removeItem, save, addEmptyItem }}
    >
      {children}
    </EditorContext.Provider>
  );
}

function useEditor() {
  const context = useContext(EditorContext);
  if (context === undefined)
    throw new Error("EditorContext was used outside the EditorProvider");
  return context;
}

export { EditorProvider, useEditor };
