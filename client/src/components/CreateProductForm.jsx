import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateProductForm() {
  const navigate = useNavigate();
  const [inputName, setInputName] = useState("");
  const [inputImg, setInputImg] = useState("");
  const [inputPrice, setInputPrice] = useState();
  const [inputDetail, setInputDetail] = useState("");
  const createProduct = async () => {
    await axios.post("http://localhost:4001/products", {
      name: inputName,
      image: inputImg,
      price: inputPrice,
      description: inputDetail,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    createProduct();
    navigate("/");
  };
  return (
    <form className="product-form" onSubmit={handleOnSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(e) => {
              setInputName(e.target.value);
            }}
            value={inputName}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(e) => {
              setInputImg(e.target.value);
            }}
            value={inputImg}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(e) => {
              setInputPrice(e.target.value);
            }}
            value={inputPrice}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(e) => {
              setInputDetail(e.target.value);
            }}
            value={inputDetail}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
