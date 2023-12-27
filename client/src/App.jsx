import "./App.css";
import HomePage from "./pages/HomePage";
import CreateProductPage from "./pages/CreateProductPage";
import ViewProductPage from "./pages/ViewProductPage";
import EditProductPage from "./pages/EditProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<CreateProductPage />}></Route>
        <Route path="/product/:id" element={<ViewProductPage />}></Route>
        <Route path="/edit/:id" element={<EditProductPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
