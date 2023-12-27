import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function EditProductForm() {
  const navigate = useNavigate();
  const param = useParams();
  const [inputName, setInputName] = useState("");
  const [inputImg, setInputImg] = useState("");
  const [inputPrice, setInputPrice] = useState();
  const [inputDetail, setInputDetail] = useState("");
  const getProduct = async () => {
    const result = await axios.get(
      `http://localhost:4001/products/${param.id}`
    );
    const product = result.data.data;
    setInputName(product.name);
    setInputImg(product.image);
    setInputPrice(product.price);
    setInputDetail(product.description);
    console.log(result.data.data);
  };
  const putProduct = async () => {
    await axios.put(`http://localhost:4001/products/${param.id}`, {
      name: inputName,
      image: inputImg,
      price: inputPrice,
      description: inputDetail,
    });
  };
  useEffect(() => {
    getProduct();
  }, []);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    putProduct();
    navigate("/");
  };
  return (
    <form className="product-form" onSubmit={handleOnSubmit}>
      <h1>Edit Product Form</h1>
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
            rows={4}
            cols={30}
            value={inputDetail}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
