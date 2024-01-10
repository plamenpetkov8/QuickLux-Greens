import { Suspense } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import "react-toastify/dist/ReactToastify.css";

import useTheme from "./hooks/useTheme";
import Homepage from "./pages/Homepage";
import Checkout from "./pages/Checkout";
import Ingredients from "./pages/Ingredients";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IngredientsProvider } from "./contexts/IngredientsContext";
import ToastContainer from "./components/ToastContainer";

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IngredientsProvider>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="ingredients" element={<Ingredients />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </IngredientsProvider>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
