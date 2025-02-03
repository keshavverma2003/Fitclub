import React, { useState } from "react";
import "./header.css";
import { Link } from "react-scroll";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuopen, setmenuopen] = useState(false);
  return (
    <>
      <div className="header">
        <img src="/images/download4.png" alt="" className="logo" />
        {menuopen === false && mobile === true ? (
          <div
            style={{
              backgroundColor: "var(--appColor)",
              padding: "0.5rem",
              borderRadius: "5px",
            }}
            onClick={() => setmenuopen(true)}
          >
            <img
              src="/images/bars.png"
              alt=""
              style={{ width: "1.5rem", height: "1.5rem" }} 
            />
          </div>
        ) : (
          <ul className="header-menu">
            <li>
              {" "}
              <Link
                onClick={() => setmenuopen(false)}
                to="home"
                span={true}
                smooth={true}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setmenuopen(false)}
                to="programs"
                span={true}
                smooth={true}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setmenuopen(false)}
                to="reasons"
                span={true}
                smooth={true}
              >
                Why us
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setmenuopen(false)}
                to="plans"
                span={true}
                smooth={true}
              >
                {" "}
                Plans
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setmenuopen(false)}
                to="testimonials"
                span={true}
                smooth={true}
              >
                Testimonilas
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;
