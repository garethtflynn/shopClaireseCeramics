import twinmug1 from "../assets/twinmug1.jpg";
import pitcher1 from "../assets/pitcher1.jpg";
import curvymug1 from "../assets/curvymug1.jpg";
import set1 from "../assets/set1.jpg";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel "
    >
      <div className="carousel-inner relative w-auto overflow-hidden">
        <div className="carousel-item active w-full">
          <img src={twinmug1} className="block " alt="Twin Mug" />
          <h5 className="absolute bottom-20 sm:bottom-40 text-black italic px-20 fontFamily text-4xl sm:text-5xl mb-6 sm:mb-0">
            handmade in atlanta, georgia
          </h5>
          <Link to="/products">
            <button className="rounded-md absolute bottom-10 sm:bottom-20 left-20 bg-[#A5A58D] text-white italic px-20 py-2 shadow hover:shadow-lg m-2">
              Shop Collection
            </button>
          </Link>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img src={pitcher1} className="block w-full" alt="Pitcher" />
          <h5 className="absolute bottom-20 sm:bottom-40 text-black italic px-20 fontFamily text-4xl sm:text-5xl mb-6 sm:mb-0">
            handmade in atlanta, georgia
          </h5>
          <Link to="/products">
            <button className="rounded-md sm:bottom-20  bg-[#A5A58D] text-white italic px-20 py-2 shadow hover:shadow-lg m-2">
              Shop Collection
            </button>
          </Link>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img src={curvymug1} className="block w-full" alt="Curvy Mug" />
          <h5 className="absolute bottom-20 sm:bottom-40 text-black italic px-20 fontFamily text-4xl sm:text-5xl mb-6 sm:mb-0">
            handmade in atlanta, georgia
          </h5>
          <Link to="/products">
            <button className="rounded-md absolute bottom-10 sm:bottom-20 left-20 bg-[#A5A58D] text-white italic px-20 py-2 shadow hover:shadow-lg m-2">
              Shop Collection
            </button>
          </Link>
          <div className="carousel-item relative float-left w-full">
          <img src={set1} className="block w-full" alt="Full Set" />
          <h5 className="absolute bottom-20 sm:bottom-40 text-black italic px-20 fontFamily text-4xl sm:text-5xl mb-6 sm:mb-0">
            handmade in atlanta, georgia
          </h5>
          <Link to="/products">
            <button className="rounded-md absolute bottom-10 sm:bottom-20 left-20 bg-[#A5A58D] text-white italic px-20 py-2 shadow hover:shadow-lg m-2">
              Shop Collection
            </button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
