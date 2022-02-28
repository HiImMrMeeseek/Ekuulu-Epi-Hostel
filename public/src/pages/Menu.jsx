import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import '../css/MenuForm.css';
import MenuSeleccionado from "../components/MenuSeleccionado";
import axios from "axios";
import '../css/Card.css';

const Menu = () => {
  const [data, setData] = useState("")
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    search(data);
  }, [data]);

  const search = async (name) => {
    // 2ab39748b90c4f72a6b58307c3689a08 = cdb
    // 17c7dd4fade249ca9a7a5e602211a421 = dev
    // 8938f15d4c21410ca0b78494fbda0c16 = alm
    await axios
      .get(
        `https://api.spoonacular.com/food/menuItems/search?query=${name}&apiKey=17c7dd4fade249ca9a7a5e602211a421`
      )
      .then((res) => {
        setProducto(res.data.menuItems);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onChange = (e) => {
    const { value } = e.target;
    setData(value);
    console.log("idItem");
  }


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <NavBar />
      <MenuSeleccionado />
      <form onSubmit={handleSubmit} id="form" className="input-group mb-3" >
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
      </form>
      <div className="cards-container">
        {producto.map((item) => (
          <>
            <Card key={item.id} producto={item} />

            <button id="btn-carro" className="btn btn-outline-success">
              🛒
            </button>
          </>
        ))}
      </div>
    </>
  );
};

export default Menu;
