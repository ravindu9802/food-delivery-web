const Header = () => {
  return (
    <>
      <div className="bg-gray1 w-full h-20 text-white2 text-xl flex justify-end">
        <p className="my-auto mx-10 hidden sm:block justify-start">Home</p>
        <p className="my-auto mx-10 hidden sm:block">About Us</p>
        <p className="my-auto mx-10  hidden sm:block">Contact</p>
        <button className="my-auto mx-10 hidden sm:block">Login</button>

        <button className="sm:hidden text-white2 mr-5">
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
    </>
  );
};

export default Header;
