import { useEffect, useState } from "react";
import rating from "../assets/icons/rating.png";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const RestaurantChain = () => {
  const [chains, setChains] = useState();
  async function getChain() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setChains(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  useEffect(() => {
    getChain();
  }, []);
  return (
    <div className="mt-10">
      <div className="flex justify-between font-bold py-4 px-5">
        <h2 className="text-3xl text-[#161a1f]">
          Top restaurant chains in Bangalore
        </h2>
        <div className="flex items-center gap-2 ">
          <button
            onClick={() => {
              document.querySelector(".chain").scrollLeft -= 1000;
            }}
            className="bg-slate-300 rounded-full w-10 h-10 flex items-center justify-center"
          >
            <BsArrowLeft className="scale-125" />
          </button>
          <button
            onClick={() => {
              document.querySelector(".chain").scrollLeft += 1000;
            }}
            className={
              "rounded-full w-10 h-10 flex items-center justify-center bg-slate-300"
            }
          >
            <BsArrowRight className="scale-125" />
          </button>
        </div>
      </div>
      {chains ? (
        <div className="chain flex overflow-auto flex-shrink-0 gap-12 scrollbar-none scroll-smooth">
          {chains.map((chain) => {
            return (
              <div
                key={chain.info.id}
                className="w-[220px] min-w-[220px] overflow-hidden cursor-pointer hover:scale-[0.97] transition-all"
              >
                <div className="relative shadow-inner">
                  <img
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/" +
                      chain.info.cloudinaryImageId
                    }
                    className="w-full h-[140px] object-cover rounded-3xl"
                  />
                  <div className="absolute bottom-1 left-4 text-[1.6rem] font-extrabold text-white z-10">
                    {chain.info.aggregatedDiscountInfoV3?.header &&
                    chain.info.aggregatedDiscountInfoV3.header != "ITEMS"
                      ? chain.info.aggregatedDiscountInfoV3.header + " "
                      : ""}
                    {chain.info.aggregatedDiscountInfoV3?.subHeader
                      ? chain.info.aggregatedDiscountInfoV3.subHeader
                      : ""}
                  </div>
                  <div className="absolute top-[50%] bottom-0 left-0 right-0 bg-gradient-to-t from-[#1b1e24] to-transparent rounded-b-3xl"></div>
                </div>
                <div className="pl-5">
                  <div className="font-bold text-[1.4rem] text-[#414449]">
                    {chain.info.name}
                  </div>
                  <div className="flex items-center text-[1.2rem] font-bold text-[#414449]">
                    <img src={rating} className="w-6" />
                    <span className="pl-1">{chain.info.avgRating}</span>
                    <span className="text-2xl px-1">&middot;</span>
                    <span>{chain.info.sla.slaString}</span>
                  </div>
                  <div className="text-[1.1rem] font-semibold overflow-ellipsis w-max overflow-hidden">
                    {chain.info.cuisines.join(",")}
                  </div>
                  <div className="text-[1.1rem] font-semibold">
                    {chain.info.areaName}
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

export default RestaurantChain;
