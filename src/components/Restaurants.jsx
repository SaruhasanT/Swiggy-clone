import { useEffect, useState } from "react";
import rating from "../assets/icons/rating.png";

const Restaurants = () => {
  const [restaurantList, setRestaurantList] = useState();
  const getRestaurant = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setRestaurantList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  useEffect(() => {
    getRestaurant;
    getRestaurant();
  }, []);

  return (
    <div>
      <div>
        <h2 className='text-3xl text-[#161a1f] font-bold'>
          Restaurants with online food delivery in Bangalore
        </h2>
        <div className='flex items-center gap-5 py-10'>
          <div className='rounded-full border-[1px] shadow-sm border-slate-200 px-4 py-2 cursor-pointer'>
            Filter
          </div>
          <div className='rounded-full border-[1px] shadow-sm border-slate-200 px-4 py-2 cursor-pointer'>
            Sory By
          </div>
          <div className='rounded-full border-[1px] shadow-sm border-slate-200 px-4 py-2 cursor-pointer'>
            Fast Delivery
          </div>
          <div className='rounded-full border-[1px] shadow-sm border-slate-200 px-4 py-2 cursor-pointer'>
            New on Swiggy
          </div>
          <div className='rounded-full border-[1px] shadow-sm border-slate-200 px-4 py-2 cursor-pointer'>
            Ratings 4.0+
          </div>
          <div className='rounded-full border-[1px] shadow-sm border-slate-200 px-4 py-2 cursor-pointer'>
            Pure Veg
          </div>
          <div className='rounded-full border-[1px] shadow-sm border-slate-200 px-4 py-2 cursor-pointer'>
            Offers
          </div>
          <div className='rounded-full border-[1px] shadow-sm border-slate-200 px-4 py-2 cursor-pointer'>
            Rs. 300-Rs. 600
          </div>
          <div className='rounded-full border-[1px] shadow-sm border-slate-200 px-4 py-2 cursor-pointer'>
            Less than Rs. 300
          </div>
        </div>
      </div>
      {restaurantList ? (
        <div className='flex flex-wrap justify-between'>
          {restaurantList.map((res) => {
            return (
              <div
                key={res.info.id}
                className='w-[280px] min-w-[280px] overflow-hidden cursor-pointer hover:scale-[0.97] transition-all'>
                <div className='relative shadow-inner'>
                  <img
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/" +
                      res.info.cloudinaryImageId
                    }
                    className='w-full h-[200px] object-cover rounded-3xl'
                  />
                  <div className='absolute bottom-1 left-4 text-[1.6rem] font-extrabold text-white z-10'>
                    {res.info.aggregatedDiscountInfoV3?.header &&
                    res.info.aggregatedDiscountInfoV3.header != "ITEMS"
                      ? res.info.aggregatedDiscountInfoV3.header + " "
                      : ""}
                    {res.info.aggregatedDiscountInfoV3?.subHeader
                      ? res.info.aggregatedDiscountInfoV3.subHeader
                      : ""}
                  </div>
                  <div className='absolute top-[50%] bottom-0 left-0 right-0 bg-gradient-to-t from-[#1b1e24] to-transparent rounded-b-3xl'></div>
                </div>
                <div className='pl-5'>
                  <div className='font-bold text-[1.3rem] text-[#414449] w-max overflow-ellipsis overflow-hidden'>
                    {res.info.name}
                  </div>
                  <div className='flex items-center text-[1.2rem] font-bold text-[#414449]'>
                    <img src={rating} className='w-6' />
                    <span className='pl-1'>{res.info.avgRating}</span>
                    <span className='text-2xl px-1'>&middot;</span>
                    <span>{res.info.sla.slaString}</span>
                  </div>
                  <div className='text-[1.1rem] font-semibold overflow-ellipsis w-max overflow-hidden'>
                    {res.info.cuisines.join(",")}
                  </div>
                  <div className='text-[1.1rem] font-semibold p-0 m-0S'>
                    {res.info.areaName}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Restaurants;
