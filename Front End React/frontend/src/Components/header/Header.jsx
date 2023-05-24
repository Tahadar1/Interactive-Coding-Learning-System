import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import "./header.css";

//Admin Navbar
const navLinks = [
  {
    display: "Add",
    url: "/addcourse",
  },
  {
    display: "Account",
    url: "/account",
  },
  {
    display: "Logout",
    url: "/login",
  },
];
const navLinkStudent = [
  {
    display: "Compiler",
    url: "/code"
  },
  
  {
    display: "Courses",
    url: "/course",
  },
  {
    display: "Account",
    url: "/account",
  },
  {
    display: "Logout",
    url: "/login",
  },
];
//main navbar
const navLinks1 = [
  {
    display: "About",
    url: "/about",
  },
  {
    display: "Login",
    url: "/login",
  },
  {
    display: "Register",
    url: "/register",
  },
];

const Header = () => {
  const [user, setUser] = useState("");

  const handleSubmit = () => {
    if (
      localStorage.getItem("isLoggedIn") === "true" &&
      localStorage.getItem("userrole") === "STUDENT"
    ) {
      window.location.href = "http://localhost:3000/dashboard";
    } else if (
      localStorage.getItem("isLoggedIn") === "true" &&
      localStorage.getItem("userrole") === "ADMIN"
    ) {
      window.location.href = "http://localhost:3000/admin";
    } else {
      window.location.href = "http://localhost:3000/";
    }
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("userrole");
    window.reload("/login");
  };
  const getUserType = () => {
    const userIs = localStorage.getItem("isLoggedIn");
    setUser(userIs);
  };

  const menuRef = useRef();
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  useEffect(() => {
    getUserType();
  }, []);
  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2
              className=" d-flex align-items-center  nav-link-home"
              onClick={handleSubmit}
            >
              <i class="ri-pantone-line"></i>Learners.
            </h2>
          </div>
          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {user === "true"
                  ? localStorage.getItem("userrole") === "ADMIN"
                    ? navLinks.map((item, index) => (
                        <li key={index} className="nav__item">
                          <Link
                            onClick={() =>
                              item.display === "Logout" && user === "true" // User is logged in
                                ? logout()
                                : null
                            }
                            to={item.url}
                          >
                            {item.display}{" "}
                          </Link>
                        </li>
                      ))
                    : navLinkStudent.map((item, index) => (
                        <li key={index} className="nav__item">
                          <Link
                            onClick={() =>
                              item.display === "Logout" && user === "true"
                                ? logout()
                                : null
                            }
                            to={item.url}
                          >
                            {item.display}{" "}
                          </Link>
                        </li>
                      ))
                  : navLinks1.map((item, index) => (
                      <li key={index} className="nav__item">
                        <Link to={item.url}>{item.display} </Link>
                      </li>
                    ))}
              </ul>
            </div>
          </div>
          <div className="mobile_menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
