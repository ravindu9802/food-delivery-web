import { FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-gray1 w-full h-auto text-white2 text-xl lg:flex justify-center py-10">
      <div className="mx-auto p-10 lg:w-6/12">
        <p className="mb-4 text-gray2 font-black text-3xl">Description</p>
        <p className="w-auto text-justify">
          FastFoody is an innovative online food delivery service that has
          revolutionized the way people experience the convenience of enjoying
          their favorite meals. With a user-friendly interface and an extensive
          network of partner restaurants, FastFoody seamlessly connects hungry
          customers with a diverse range of culinary delights. The platform
          offers a swift and efficient ordering process, allowing users to
          browse through a plethora of cuisines, customize their meals, and
          track the delivery in real-time.
        </p>
      </div>
      <div className="mx-auto p-10 lg:w-3/12">
        <p className="mb-4 text-gray2 font-black text-3xl">Menu</p>
        <p className="">Home</p>
        <p className="">About Us</p>
        <p className="">Contact</p>
      </div>
      <div className="mx-auto p-10 lg:w-3/12">
        <p className="mb-4 text-gray2 font-black text-3xl">Contact</p>
        <p className="flex">
          <FaEnvelope size={28} className="mr-2" />
          fastfoody@xyz.com
        </p>
        <p className="flex">
          <FaPhoneSquareAlt size={28} className="mr-2" /> +94 71 740 9398
        </p>
        {/* <p className="">About Us</p> */}
        {/* <p className="">Contact</p> */}
      </div>
    </div>
  );
};

export default Footer;
