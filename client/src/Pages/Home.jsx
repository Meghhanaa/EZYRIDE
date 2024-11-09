import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import Footer from "../components/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <BookCar />
      <PlanTrip />
      <Reviews/>
      <Footer /> 
    </>
  );
}

export default Home;
