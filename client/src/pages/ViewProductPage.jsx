import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ViewProductPage() {
  const [product, setProducts] = useState({});

  const params = useParams();
  const navigate = useNavigate();

  const getProductById = async () => {
    const result = await axios.get(`http://localhost:4001/products/${params.id}`);
    setProducts(result.data.data);
  };

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>Name: {product.name}</h2>
        <p>{product.price} THB</p>
        <p>{product.description}</p>
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
