import { useState, useEffect } from "react";
import { ArrowIcon } from "../../../assets";
import "./style.scss";

const Button = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const { scrollY } = window;

      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`rvw-scroll-to-top ${isVisible ? "visible" : ""}`}>
      <button className="rvw-scroll-top-button" onClick={scrollToTop}>
        <ArrowIcon />
      </button>
    </div>
  );
};

export default Button;
