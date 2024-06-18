import { HiMagnifyingGlass } from "react-icons/hi2";
import { BiData, BiSolidOffer } from "react-icons/bi";
import { PiSuitcaseSimpleThin } from "react-icons/pi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { BsCart } from "react-icons/bs";
const Header = () => {
  return (
    <header className='flex items-center py-4 shadow-2xl shadow-slate-100 px-[5%] pl-[0] font-Figtree text-xl'>
      <div className='flex items-center w-4/12 justify-evenly'>
        <div>
          <img
            src='https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png'
            className='w-28 cursor-pointer transition-all hover:scale-110'
          />
        </div>
        <div className='flex gap-2 text-base mt-2'>
          <p className='border-b-[3px] border-b-[#3d4152] font-bold cursor-pointer text-[#3d4152] pb-2 hover:text-[#fc8019]'>
            Koramangala
          </p>
          <p className='text-[#686b78] hover:text-[#93959f] cursor-pointer'>
            Bengaluru, Karnataka, India
          </p>
        </div>
      </div>
      <ul className='flex items-center justify-between w-8/12'>
        <li className='flex items-center gap-3 cursor-pointer text-[#3d4152] font-semibold'>
          <span className='scale-125'>
            <PiSuitcaseSimpleThin />
          </span>
          <span className=' hover:text-[#fc8019]'>Swiggy Corporate</span>
        </li>
        <li className='flex items-center gap-3 cursor-pointer text-[#3d4152] font-semibold hover:text-[#fc8019]'>
          <span className='scale-125'>
            <HiMagnifyingGlass />
          </span>
          <span>Search</span>
        </li>
        <li className='flex items-center gap-3 cursor-pointer text-[#3d4152] font-semibold hover:text-[#fc8019]'>
          <span className='scale-125'>
            <BiSolidOffer />
          </span>
          <span>Offers</span>
        </li>
        <li className='flex items-center gap-3 cursor-pointer text-[#3d4152] font-semibold hover:text-[#fc8019]'>
          <span className='scale-125'>
            <IoHelpBuoyOutline />
          </span>
          <span>Help</span>
        </li>
        <li className='flex items-center gap-3 cursor-pointer text-[#3d4152] font-semibold hover:text-[#fc8019]'>
          <span className='scale-125'>
            <GoPerson />
          </span>
          <span>Sign In</span>
        </li>
        <li className='flex items-center gap-3 cursor-pointer text-[#3d4152] font-semibold hover:text-[#fc8019]'>
          <span className='scale-125'>
            <span className='absolute text-xs left-[7px] top-[1px]'>0</span>
            <BsCart />
          </span>
          <span>Cart</span>
        </li>
      </ul>
    </header>
  );
};

export default Header;
