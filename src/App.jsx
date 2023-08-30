import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import PopularProducts from "./sections/PopularProducts";
import Suscribe from "./sections/Suscribe";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import CustomerReview from "./sections/CustomerReview";
import SuperQuality from "./sections/SuperQuality";
import Nav from "./sections/Nav";
// import { useState, useEffect } from "react";

export const App = () => {
  // // const [theme, setTheme] = useState("light");

  // const darkMode = () => {
  //   document.querySelector("body").setAttribute("data-theme", "dark");
  // };

  // const lightMode = () => {
  //   document.querySelector("body").setAttribute("data-theme", "light");
  // };

  // darkMode();




  return (
    <main className="relative dark:bg-black">
      <Nav />
      {/* <button onClick={handleClick} className="text-black dark:text-white">dark</button> */}
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Suscribe />
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
