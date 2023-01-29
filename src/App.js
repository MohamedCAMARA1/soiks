import React, { useEffect, useState } from "react";
import { commerce } from "./lib/commerce";

import Navbar from "./components/Navbar/Navbar";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
import Welcome from "./components/welcome/Welcome";
import AboutUs from "./components/AboutUs/AboutUs";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [cart, setCart] = useState({});

  const fetchArticles = async () => {
    const { data } = await commerce.products.list(); //retourne une promesse qu'on attend (await) pour voir ce qu'elle contient
    setArticles(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (articleId, quantity) => {
    const item = await commerce.cart.add(articleId, quantity);

    setCart(item);
    // setCart(item.cart);
  };

  useEffect(() => {
    fetchArticles();
    fetchCart();
  }, []);

  console.log(cart);
  // console.log(articles);
  //regler le souci du total item qui est à 118
  return (
    <>
      <Navbar />
      {/* <Navbar totalItems={cart.total_items} /> */}
      <Welcome />
      <Articles articles={articles} onAddToCart={handleAddToCart} />
      <AboutUs />
      <Footer />
    </>
  );
};

export default App;
