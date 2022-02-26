import { useEffect, useState } from "react";
import axios from "axios";

export const useApi = (ids, currentId) => {
  const [menuItems, setMenuItems] = useState();

  useEffect(() => {
    inicioAPI();
  }, []);

  const inicioAPI = async () => {
    // 2ab39748b90c4f72a6b58307c3689a08 = cdb
    // 17c7dd4fade249ca9a7a5e602211a421 = dev
    // 8938f15d4c21410ca0b78494fbda0c16 = alm
    await axios
      .get(`https://api.spoonacular.com/food/menuItems/${ids[currentId]}?apiKey=8938f15d4c21410ca0b78494fbda0c16`)
      .then((res) => {
        setMenuItems(res.data.menuItems);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (!menuItems) {
  } else {
    var { title, image, price, restaurantChain } = menuItems;
  }
  return [title, image, price, restaurantChain];
};
