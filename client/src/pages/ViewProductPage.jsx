import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ViewProductPage() {
  const param = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const getProduct = async () => {
    const result = await axios.get(
      `http://localhost:4001/products/${param.id}`
    );
    setProduct(result.data.data);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{product.name}</h2>
        <p>{product.price} THB</p>
        <p>{product.description}</p>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default ViewProductPage;
