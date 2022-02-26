import React, { useEffect, useState } from "react";
import axios from "axios";
import CardInfo from "./CardInfo";

const Card = (data) => {
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    search(data.datas);
  }, [data.datas]);

  const search = async (name) => {
    // 2ab39748b90c4f72a6b58307c3689a08 = cdb
    // 17c7dd4fade249ca9a7a5e602211a421 = dev
    // 8938f15d4c21410ca0b78494fbda0c16 = alm
    await axios
      .get(
        `https://api.spoonacular.com/food/menuItems/search?query=${name}&apiKey=8938f15d4c21410ca0b78494fbda0c16`
      )
      .then((res) => {
        setProducto(res.data.menuItems);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className="cards-container">
        {producto.map((item) =>
          !item.image ? (
            console.log(item.image)
          ) : (
            <CardInfo key={item.id} producto={item} />
          )
        )}
      </div>
    </>
  );
};

export default Card;
