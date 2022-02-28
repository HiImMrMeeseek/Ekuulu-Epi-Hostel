import React, { useEffect, useState } from "react";
import arrowL from "../images/arrow-left-circle.svg";
import arrowR from "../images/arrow-right-circle.svg";
import "../css/MainHome.css";
import axios from "axios";

const MainHome = () => {
  const ids = [424571, 278131, 248482, 356956, 242951, 247942, 224351];
  var [currentId, setCurrentId] = useState(4);
  const [menuItems, setMenuItems] = useState();

  useEffect(() => {
    inicioAPI();
  }, []);

  const mostrarP = () => {
    var { id } = menuItems;
    id = ids[currentId];
    console.log(id);
    console.log(menuItems)
  };

  const inicioAPI = async () => {
    // 2ab39748b90c4f72a6b58307c3689a08 = cdb
    // 17c7dd4fade249ca9a7a5e602211a421 = dev
    // 8938f15d4c21410ca0b78494fbda0c16 = alm
    await axios
      .get(`https://api.spoonacular.com/food/menuItems/${ids[currentId]}?apiKey=17c7dd4fade249ca9a7a5e602211a421`)
      .then((res) => {
        setMenuItems(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (!menuItems) {
  } else {
    var { title, image, restaurantChain } = menuItems;
  }

  const RightOnClick = () => {
    setCurrentId(currentId + 1)
    if (currentId > ids.length - 1) {
      currentId = 0;
    }
    mostrarP(currentId);
    console.log(currentId);
  };

  const LeftOnClick = () => {
    setCurrentId(currentId - 1)
    if (currentId < 0) {
      currentId = ids.length - 1;
    }
    mostrarP(currentId);
    console.log(currentId);
  };

  return (
    <>
      <article className="mostrario-container">
        <button onClick={() => LeftOnClick()} className="buttons">
          <img id="arrow" src={arrowL} alt="arrow left" />
        </button>
        <ul>
          <div className="centro-container">
            <h4 name="titulo" id="title-img">
              {title}
            </h4>
            <h5>{restaurantChain}</h5>
            <img
              name="imgs"
              className="imagen-centro"
              src={image}
              alt="main img"
            />
          </div>
        </ul>
        <button onClick={() => RightOnClick()} className="buttons">
          <img id="arrow" src={arrowR} alt="arrow right" />
        </button>
      </article>
    </>
  );
};

export default MainHome;
