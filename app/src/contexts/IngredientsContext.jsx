import { createContext, useContext, useEffect, useReducer } from "react";

import { ResponseError } from "../utils/errors";
import { DEFAULT_PORT } from "../utils/constants";
import { convertTo2DecPoints } from "../utils/helpers";
import useToastFactory from "../hooks/useToastFactory";

const initialState = {
  totalPrice: 0,
  ingredients: [],
  orderList: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ingredient/added":
      let alreadyAdded = false;
      let updatedOrderList = state.orderList.map((item) => {
        const match = item.id === action.payload.id;
        if (match) {
          alreadyAdded = true;
        }

        return match ? { ...item, amount: item.amount + 1 } : item;
      });

      if (!alreadyAdded) {
        updatedOrderList.push({ ...action.payload, amount: 1 });
      }

      return {
        ...state,
        totalPrice: convertTo2DecPoints(
          state.totalPrice + action.payload.price
        ),
        orderList: updatedOrderList,
      };
    case "ingredient/removed":
      return {
        ...state,
        totalPrice: convertTo2DecPoints(
          state.totalPrice - action.payload.price
        ),

        // It is made sure that each "item.amount" would
        // never reach negative values
        orderList: state.orderList.map((item) =>
          item.id === action.payload.id
            ? { ...item, amount: item.amount - 1 }
            : item
        ),
      };
    case "ingredients/loaded":
      return { ...state, ingredients: action.payload };
    case "reset":
      return { ...state, orderList: [], totalPrice: 0 };
    default:
      throw new Error("Unknown action type");
  }
}

var SERVER_PORT = import.meta.env.VITE_SERVER_PORT;
SERVER_PORT = SERVER_PORT || DEFAULT_PORT;
const IngredientsContext = createContext();
function IngredientsProvider({ children }) {
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

  function addToCart(data) {
    dispatch({ type: "ingredient/added", payload: data });
  }
  function removeFromCart(data) {
    dispatch({ type: "ingredient/removed", payload: data });
  }

  function reset() {
    dispatch({ type: "reset" });
  }

  return (
    <IngredientsContext.Provider
      value={{ ...state, addToCart, removeFromCart, reset }}
    >
      {children}
    </IngredientsContext.Provider>
  );
}

function useIngredients() {
  const context = useContext(IngredientsContext);
  if (context === undefined)
    throw new Error(
      "IngredientsContext was used outside the IngredientsProvider"
    );
  return context;
}

export { IngredientsProvider, useIngredients };
