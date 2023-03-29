import twinmug1 from "../assets/twinmug1.jpg";
import pitcher1 from "../assets/pitcher1.jpg";
import curvymug1 from "../assets/curvymug1.jpg";
import set1 from "../assets/set1.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade" data-bs-ride="carousel ">
      <div class="carousel-inner relative w-auto overflow-hidden">
        <div class="carousel-item active w-full" data-bs-interval="10000">
          <img src={twinmug1} class="block " alt="Twin Mug" />
          <h5 class="absolute bottom-20 sm:bottom-40 text-black italic px-20 fontFamily text-4xl sm:text-5xl mb-6 sm:mb-0">
            handmade in atlanta, georgia
          </h5>
          <Link to="/products">
            <button class="rounded-md absolute bottom-10 sm:bottom-20 left-20 bg-[#A5A58D] text-white italic px-20 py-2 shadow hover:shadow-lg m-2">
              Shop Collection
            </button>
          </Link>
        </div>
        <div class="carousel-item relative float-left w-full" data-bs-interval="10000">
          <img src={pitcher1} class="block w-full" alt="Pitcher" />
          <h5 class="absolute bottom-20 sm:bottom-40 text-black italic px-20 fontFamily text-4xl sm:text-5xl mb-6 sm:mb-0">
            handmade in atlanta, georgia
          </h5>
          <Link to="/products">
            <button class="rounded-md sm:bottom-20  bg-[#A5A58D] text-white italic px-20 py-2 shadow hover:shadow-lg m-2">
              Shop Collection
            </button>
          </Link>
        </div>
        <div class="carousel-item relative float-left w-full" data-bs-interval="10000">
          <img src={curvymug1} class="block w-full" alt="Curvy Mug" />
          <h5 class="absolute bottom-20 sm:bottom-40 text-black italic px-20 fontFamily text-4xl sm:text-5xl mb-6 sm:mb-0">
            handmade in atlanta, georgia
          </h5>
          <Link to="/products">
            <button class="rounded-md absolute bottom-10 sm:bottom-20 left-20 bg-[#A5A58D] text-white italic px-20 py-2 shadow hover:shadow-lg m-2">
              Shop Collection
            </button>
          </Link>
          <div class="carousel-item relative float-left w-full" data-bs-interval="10000">
            <img src={set1} class="block w-full" alt="Full Set" />
            <h5 class="absolute bottom-20 sm:bottom-40 text-black italic px-20 fontFamily text-4xl sm:text-5xl mb-6 sm:mb-0">
              handmade in atlanta, georgia
            </h5>
            <Link to="/products">
              <button class="rounded-md absolute bottom-10 sm:bottom-20 left-20 bg-[#A5A58D] text-white italic px-20 py-2 shadow hover:shadow-lg m-2">
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
