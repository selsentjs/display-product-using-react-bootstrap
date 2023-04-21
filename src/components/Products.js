import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

let nData;
const Products = () => {
  const [data, setData] = useState([]);
  console.log('data:',data)
  nData=data;
  console.log('nData:',nData)
  // search
  const [inputSearch, setInputSearch] = useState("");

  let api = "https://fakestoreapi.com/products";
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(api);
      console.log(response.data);
      setData(response.data);
    };
    getProducts();
  }, []);

  // search
  useEffect(() => {
    const result = data?.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(inputSearch.toLowerCase());
    });

    if (inputSearch.length > 0) {
      setData(result);
    } else {
      setData(data);
    }
  }, [inputSearch]);

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bold text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        {/* search box */}
        <div>
          <input
            className="search mb-3"
            type="text"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            placeholder="search here"
          ></input>
        </div>

        {/* display card */}
        <div className="row justify-content-center">
          {data.length > 0
            ? data?.map((item) => {
                return (
                  <div className="col-md-3 mb-4">
                    <div className="card h-100 text-center p-4" key={item.id}>
                      <img
                        src={item.image}
                        className="card-img-top"
                        alt={item.title}
                        height="250px"
                      />
                      <div className="card-body">
                        <h5 className="card-title mb-0">
                          {item.title.substring(0, 12)}
                        </h5>
                        <p className="card-text lead fw-bold">${item.price}</p>
                        <NavLink
                          to={`/products/${item.id}`}
                          className="btn btn-primary"
                        >
                          Buy Now
                        </NavLink>
                      </div>
                    </div>
                  </div>
                );
              })
            : "No data available"}
        </div>
      </div>
    </div>
  );
};

export default Products;
