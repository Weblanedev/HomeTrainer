import React, { useLayoutEffect, useState } from "react";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderBurgerPopUp from "../../BurgerMenu/HeaderBurgerPopUp";
import { Link } from "react-scroll";

const Header = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const [menuPop, setMenuPop] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("home");
  console.log(activeNavItem);
  console.log(pathname);
  const currentRoute = pathname.substring(1)
  console.log(currentRoute);

// const newPath = localStorage.getItem("navItem")
//   useLayoutEffect(() => { 
//     if ( newPath ){
//       setActiveNavItem(newPath)
//     }
//   }, [activeNavItem])
  useLayoutEffect(() => { 
    if ( currentRoute ){
      setActiveNavItem(currentRoute)
    
    }

  }, [activeNavItem])

  console.log(activeNavItem);

  const handleNavClick = (navItem) => {
    localStorage.removeItem("navItem")
    // setActiveNavItem(navItem);
    if (navItem === "/") {
      setActiveNavItem(navItem);
      nav("/");
    } else if (navItem === "aboutUs") {
      setActiveNavItem(navItem);
      nav("/aboutUs");
    } else if (navItem === "contactUs") {
      setActiveNavItem(navItem);
      nav("/contactUs");
    } else if (navItem === "blog") {
      setActiveNavItem(navItem);
      nav("/blog");
    } else if (navItem === "checkout") {
      setActiveNavItem(navItem);
      nav("/checkout");
    }
  };

  // const handleNavClick = (navItem) => {
  //   setActiveNavItem(navItem);
  // };

  // useEffect(() => {
  //   if (activeNavItem === "home") {
  //     console.log("Welcome");
  //     nav("/");
  //   } else if (activeNavItem === "about") {

  //     nav("/aboutUs");
  //   } else if (activeNavItem === "contact") {
  //     nav("/contactUs");
  //   } else if (activeNavItem === "blog") {
  //     alert("matters")
  //     nav("/blog");
  //   }
  // }, [activeNavItem, nav]);

  return (
    <>
      <div className="mainHeader">
        <div className="mainHeaderWrapper">
          <div
            className="Mainheaderlogo"
            onClick={() => handleNavClick("/")}
          >
            <h3 className="header__h3">HomeTrainer</h3>
            {/* <img src="./icons/docmate1232.png" className="Mainheaderlogoimag" /> */}
          </div>
          <div className="headerhome">
            <nav
              className={activeNavItem === "/" ? "active" : "nav"}
              onClick={() => handleNavClick("/")}
            >
              Home
            </nav>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => handleNavClick("aboutUs")}
            >
              <nav 
              // href="/about"
                className={activeNavItem === "aboutUs" ? "active" : "nav"}
                // onClick={() => handleNavClick("about")}
              >
                About Us
              </nav>
            </Link>
            <nav
              className={activeNavItem === "blog" ? "active" : "nav"}
              onClick={() => handleNavClick("blog")}
            >
              Blog
            </nav>
            <nav
              className={activeNavItem === "contactUs" ? "active" : "nav"}
              onClick={() => handleNavClick("contactUs")}
            >
              Contact Us
            </nav>
          </div>
          <div className="registerbody">
            <button className="headlogin" onClick={()=>handleNavClick("checkout")}>Join Now</button>
          </div>
          <div
            className="landingPageBurgerMenu"
            onClick={() => setMenuPop(true)}
          >
            <img src="/icons/menu.png" alt="" />
          </div>
        </div>
      </div>
      {menuPop ? <HeaderBurgerPopUp setMenuPop={setMenuPop} /> : null}
    </>
  );
};

export default Header;
