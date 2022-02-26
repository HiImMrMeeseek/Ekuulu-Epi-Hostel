import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import '../css/MenuForm.css';

const Menu = () => {
  const [data,setData] = useState("")

  const onChange = (e) => {
    const {value} = e.target;
    setData(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <NavBar />
      <form id="form" className="input-group mb-3" onSubmit={handleSubmit}>
        <input
          className="form-control"
          name="name"
          type="text"
          placeholder="Ingrese el nombre del producto"
          aria-label="Recipient's username" 
          aria-describedby="button-addon2"
          onChange={onChange}
          value={data}
          id="input"
        ></input>
        <button type="submit" className="btn btn-outline-secondary" id="button-addon2" className="btn">
          Ordenar
        </button>
      </form>
      <Card datas={data} />
    </>
  );
};

export default Menu;
