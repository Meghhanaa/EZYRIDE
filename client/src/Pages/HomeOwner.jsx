import PlanTrip from "../components/PlanTrip";
import Footer from "../components/Footer";
import Hero from "../components/Hero/Hero";
import Reviews from "../components/Reviews";
import NavbarOwner from "../components/NavbarOwner";

function HomeOwner() {
  return (
    <>
      <NavbarOwner></NavbarOwner>
      <Hero />
      <PlanTrip />
      <Reviews/>
      <Footer /> 
    </>
  );
}

export default HomeOwner;
