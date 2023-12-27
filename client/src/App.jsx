import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateProductPage from "./pages/CreateProductPage";
import ViewProductPage from "./pages/ViewProductPage";
import EditProductForm from "./components/EditProductForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/create" element={<CreateProductPage />} />
          <Route path="/product/view/:id" element={<ViewProductPage />} />
          <Route path="/product/edit/:id" element={<EditProductForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
