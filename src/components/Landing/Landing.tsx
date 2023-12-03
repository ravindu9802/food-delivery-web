import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Landing = () => {
  return (
    <>
      <Header />

      <div className="bg-[url('./assets/pizza-bg.jpg')] flex flex-col sm:flex-row justify-around item-center ">
        <div className="border-2 border-orange-950 rounded-lg w-80 my-20 m-auto min-h-80 bg-slate-200 drop-shadow-2xl p-10">
          <p className="font-extrabold text-5xl">Enjoy Your Food</p>
          <p className=" font-extrabold text-5xl">Without leaving</p>
          <p className=" font-extrabold text-5xl">The House</p>
        </div>

        <div className="border-2 border-orange-950 rounded-lg w-80 my-20 m-auto min-h-80 bg-slate-200 drop-shadow-2xl p-10">
          <p className="font-extrabold text-5xl">Enjoy Your Food</p>
          <p className=" font-extrabold text-5xl">Without leaving</p>
          <p className=" font-extrabold text-5xl">The House</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Landing;
