import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";
const FoodSlider = () => {
  return (
    <div className='border-b-2 pb-14'>
      <div className='flex justify-between font-bold px-5'>
        <h2 className='text-3xl text-[#161a1f]'>What's on your mind?</h2>
        <div className='flex items-center gap-2 '>
          <button
            onClick={() => {
              document.querySelector(".slider").scrollLeft -= 500;
            }}
            className='bg-slate-300 rounded-full w-10 h-10 flex items-center justify-center'>
            <BsArrowLeft className='scale-125' />
          </button>
          <button
            onClick={() => {
              document.querySelector(".slider").scrollLeft += 500;
            }}
            className={
              "rounded-full w-10 h-10 flex items-center justify-center bg-slate-300"
            }>
            <BsArrowRight className='scale-125' />
          </button>
        </div>
      </div>
      <div className='flex overflow-x-auto scrollbar-none slider scroll-smooth'>
        <EachImg />
      </div>
    </div>
  );
};

const EachImg = () => {
  const [cardData, setCardData] = useState();
  async function getImgCard() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setCardData(json.data.cards[0].card.card.imageGridCards.info);
  }
  useEffect(() => {
    getImgCard;
    getImgCard();
  }, []);

  return cardData ? (
    <>
      {cardData.map((data, index) => {
        return (
          <img
            key={index}
            className='min-w-48 cursor-pointer'
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              data.imageId
            }
            alt=''
          />
        );
      })}
    </>
  ) : (
    <h1>Waiting for the data</h1>
  );
};

export default FoodSlider;
