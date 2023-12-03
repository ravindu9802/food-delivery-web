import food from "../../assets/food.png";
import { useAppDispatch } from "../../redux/hooks";
import { showLogInPopup } from "../../redux/authSlice";

const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="bg-gray1 w-full h-24 text-white2 text-xl flex">
      <img alt="logo" src={food} className="p-2 w-18 h-18 ml-20"></img>

      <div className="flex w-full justify-end">
        <p className="my-auto mr-20 hidden sm:flex justify-start cursor-pointer hover:text-white1 hover:underline">
          Home
        </p>
        <p className="my-auto mr-20 hidden sm:flex cursor-pointer hover:text-white1 hover:underline">
          About Us
        </p>
        <p className="my-auto mr-20 hidden sm:flex cursor-pointer hover:text-white1 hover:underline">
          Contact
        </p>
        <button
          className="my-auto mr-20 hidden sm:flex hover:text-white1 hover:underline"
          onClick={() => dispatch(showLogInPopup())}
        >
          Login
        </button>

        <button className="sm:hidden text-white2 mr-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
