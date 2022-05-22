import "./Footer1.css";
import { AiFillHeart } from "react-icons/ai";

function Footer1() {
  return (
    <div className="container">
      <div class="container my-5">
        <footer class="bg-light text-center text-black">
          <div class="text-center p-3">
            <h4>
              {" "}
              Build with <AiFillHeart color="red" /> by Hicham Zaidi
            </h4>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer1;
