import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import PopularProducts from "./sections/PopularProducts";
import Suscribe from "./sections/Suscribe";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import CustomerReview from './sections/CustomerReview'
import SuperQuality from "./sections/SuperQuality";
import Nav from "./sections/Nav";

export const App = () => {
  
  return (
    <main className="relative">
      <Nav />
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
   
  )
}

export default App;
