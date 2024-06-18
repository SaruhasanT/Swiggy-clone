import RestaurantChain from "./RestaurantChain";
import FoodSlider from "./FoodSlider";
import Restaurants from "./Restaurants";
const Body = () => {
  return (
    <div className='px-[220px] py-4'>
      <FoodSlider />
      <RestaurantChain />
      <Restaurants />
    </div>
  );
};

export default Body;
