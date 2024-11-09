import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import Footer from "../components/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <BookCar />
      <PlanTrip />
      <Footer /> 
    </>
  );
}

export default Home;
