import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import Footer from "../components/Footer";
import Hero1 from "../components/Hero/Hero";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import { useViewContext } from "../Context_api/contextApi";
import Hero from "../components/Hero";

function Home() {
  const{role}=useViewContext();
  return (
    <>
      {/* <Navbar></Navbar> */}
      {/* <Hero1 /> */}
      <Hero/>
      {role === "" && <BookCar />}
      <PlanTrip />
      <Reviews/>
      <Footer /> 
    </>
  );
}

export default Home;
