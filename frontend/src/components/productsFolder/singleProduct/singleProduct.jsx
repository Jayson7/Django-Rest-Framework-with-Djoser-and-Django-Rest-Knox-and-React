import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
const ViewProduct = () => {
  const { id } = useParams();
  // console.log(typeof id);

  const authCheck = useSelector((state) => state.authStore.token);
  const product = useSelector((state) => state.products.product);
  const item = product.find((item) => item.id === parseInt(id));

  if (product) {
    return (
      <div className="d-flex justify-content-center align-content-center mt-5">
        <div className="col-md-4 mt-5">
          <div className="card m-3 bg-light">
            <div className="card-body">
              <img className="card-image" src={item.image} alt="" />
              <h5 className="card-title text-center my-2 h3 text-capitalize">
                {" "}
                {item.name_of_product}{" "}
              </h5>{" "}
              <div className="d-flex justify-content-around align-content-center flex-column h6 my-3">
                <p className="card-text"> Category: {item.category} </p>{" "}
                <p className="card-text"> Price: {item.price} </p>{" "}
                <p className="card-text"> Quantity: {item.quantity} </p>{" "}
                <p className="card-text"> Views: {item.views} </p>{" "}
              </div>{" "}
              <div className="d-flex align-content-center justify-content-evenly flex-wrap">
                <Link to="/">
                  <Button variant="primary" className="mx-2 my-2 px-5">
                    Home
                  </Button>{" "}
                </Link>{" "}
                <Link to={`/item/${item.id}`}>
                  <Button variant="primary" className="mx-2 my-2 px-4">
                    Add to Cart{" "}
                  </Button>{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    );
  } else {
    return (
      <div className="mt-5 container text-center">
        <br />
        <br />
        <h1>Product not found</h1>
      </div>
    );
  }
};

export default ViewProduct;
