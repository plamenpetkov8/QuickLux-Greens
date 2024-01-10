import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Editor from "./pages/Editor";
import ProtectedRoute from "./pages/ProtectedRoute";
import PageNotFound from "./pages/PageNotFound";
import ToastContainer from "./components/ToastContainer";
import { EditorProvider } from "./contexts/EditorContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider>
      <EditorProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <Editor />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </EditorProvider>
    </AuthProvider>
  );
}

export default App;
