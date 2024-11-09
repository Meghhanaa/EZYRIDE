import { useViewContext } from "../Context_api/contextApi";

function BookCar() {
  const { handleSearch, vehicleInputChange, searchVehData } = useViewContext();

  const carOptions = {
    Car: ["Audi A1 S-Line", "VW Golf 6", "Toyota Camry", "BMW 320 ModernLine", "Mercedes-Benz GLK", "VW Passat CC"],
    Scooty: ["Honda Activa", "TVS Jupiter", "Hero Maestro", "Suzuki Access"],
    Bike: ["Yamaha R15", "Kawasaki Ninja", "Bajaj Pulsar", "Royal Enfield Classic"]
  };

  return (
    <section id="booking-section" className="book-section">
      <div className="container">
        <div className="book-content">
          <div className="book-content__box">
            <h2>Book a Vehicle</h2>
            
            <form className="box-form" onSubmit={(e) => e.preventDefault()}>
              {/* Vehicle Type Selection */}
              <div className="box-form__car-type">
                <label><i className="fa-solid fa-motorcycle"></i> &nbsp; Select Vehicle Type </label>
                <select
                  name="vehicleType" 
                  value={searchVehData.vehicleType} 
                  onChange={(e) => vehicleInputChange(e)}
                >
                  <option>Vehicle type</option>
                  <option value="Car">Car</option>
                  <option value="Scooty">Scooty</option>
                  <option value="Bike">Bike</option>
                </select>
              </div>

              {/* Vehicle Preference */}
              {/* <div className="box-form__car-type">
                <label><i className="fa-solid fa-car"></i> &nbsp; Select Vehicle Preference </label>
                <select 
                  name="carType"
                  value={searchVehData.carType} 
                  onChange={(e) => vehicleInputChange(e)} 
                  disabled={!searchVehData.vehicleType}
                >
                  <option>Select Preference</option>
                  {searchVehData.vehicleType && carOptions[searchVehData.vehicleType].map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div> */}

              {/* Color Selection */}
              <div className="box-form__car-type">
                <label><i className="fa-solid fa-palette"></i> &nbsp; Color </label>
                <select 
                  name="color"
                  value={searchVehData.color} 
                  onChange={vehicleInputChange}
                >
                  <option>Select color</option>
                  <option value="Red">Red</option>
                  <option value="White">White</option>
                  <option value="Black">Black</option>
                  <option value="Blue">Blue</option>
                  <option value="Blue">Yellow</option>
                  <option value="Blue">Green</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="box-form__car-type">
                <label><i className="fa-solid fa-dollar-sign"></i> &nbsp; Price Range </label>
                <select 
                  name="priceRange"
                  value={searchVehData.priceRange} 
                  onChange={vehicleInputChange}
                >
                  <option>Select price range</option>
                  <option value="100">Below 100</option>
                  <option value="150">100 - 150</option>
                  <option value="500">150 - 500</option>
                </select>
              </div>

              {/* Pick-up Location */}
              <div className="box-form__car-type">
                <label><i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up </label>
                <select
                  name="pickUp"
                  value={searchVehData.pickUp} 
                  onChange={vehicleInputChange}
                >
                  <option>Select pick up location</option>
                  <option>MANIT</option>
                  <option>MP NAGAR</option>
                  <option>INDRAPURI</option>
                  <option>KOLAR</option>
                  <option>ARERA HILLS</option>
                </select>
              </div>

              {/* Drop-off Location
              <div className="box-form__car-type">
                <label><i className="fa-solid fa-location-dot"></i> &nbsp; Drop-off </label>
                <select 
                  name="dropOff"
                  value={searchVehData.dropOff} 
                  onChange={vehicleInputChange}
                >
                  <option>Select drop off location</option>
                  <option>MANIT</option>
                  <option>MP NAGAR</option>
                  <option>INDRAPURI</option>
                  <option>KOLAR</option>
                  <option>ARERA HILLS</option>
                </select>
              </div> */}

              {/* Pick-up Date & Time */}
              <div className="box-form__car-time">
                <label htmlFor="pickdate"><i className="fa-regular fa-calendar-days"></i> &nbsp; Pick-up </label>
                <input 
                  id="pickdate" 
                  name="pickDate"
                  value={searchVehData.pickDate} 
                  onChange={vehicleInputChange} 
                  type="date" 
                />
                <input 
                  id="picktime" 
                  name="pickTime"
                  value={searchVehData.pickTime} 
                  onChange={vehicleInputChange} 
                  type="time" 
                />
              </div>

              {/* Drop-off Date & Time */}
              <div className="box-form__car-time">
                <label htmlFor="dropdate"><i className="fa-regular fa-calendar-days"></i> &nbsp; Drop-off </label>
                <input 
                  id="dropdate" 
                  name="dropDate"
                  value={searchVehData.dropDate} 
                  onChange={vehicleInputChange} 
                  type="date" 
                />
                <input 
                  id="droptime" 
                  name="dropTime"
                  value={searchVehData.dropTime} 
                  onChange={vehicleInputChange} 
                  type="time" 
                />
              </div>

              {/* Driver Requirement */}
              <div className="box-form__car-type">
                <label><i className="fa-solid fa-dollar-sign"></i> &nbsp; Required Driver <b>*</b></label>
                <select 
                  name="driverRequired"
                  value={searchVehData.driverRequired} 
                  onChange={vehicleInputChange}
                >
                  <option>Select </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              {/* Submit Button */}
              <button className="form-btn" onClick={handleSearch}>SEARCH</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookCar;
