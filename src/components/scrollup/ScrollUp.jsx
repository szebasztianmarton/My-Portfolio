import React from "react";
import "./scrollup.css";
import { HiOutlineArrowSmUp } from "react-icons/hi";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollUp");
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className="scrollUp">
      <HiOutlineArrowSmUp className="scrollUp__icon" />
    </a>
  );
};

export default ScrollUp;
 