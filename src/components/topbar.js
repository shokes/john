import React from "react";
import { links } from "./navData";
import { IoIosRocket } from "react-icons/io";
import TrackVisibility from "react-on-screen";
import Home from "../pages/Home";
import { Projects } from "../pages/Projects";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="animate__animated animate__flipInX container text-black font-bold text-3xl mt-4 flex justify-between">
      <Link to="/">
        Ose<span className="opacity-50">zei</span>
      </Link>

      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
            <button className="bouncing-button">
              <IoIosRocket />
            </button>
          </div>
        )}
      </TrackVisibility>
    </div>
  );
};

export default Topbar;
