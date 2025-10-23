//* When we scroll to any page suppose 50% of the page height & when we switch to another page than the scroll portion is also 50% in that another page, so to prevent it we use this code. Because React create SPA(Single Page Application) so router expect that we explicitly control the scroll portion.
import { useEffect } from "react";
import { useLocation } from "react-router";

//* Method1: In this it will go to top of every page whenever we switch page but because of scroll-behavior:smooth; property it will show the scroll.
// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

//* Method2: In this it will go to top of every page whenever we switch page but here the scroll-behavior:instant; property it will instant go to top so we don't see the scroll type animation.
// src/Components/ScrollToTop.jsx
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Pehle: window.scrollTo(0, 0);
    // Ab: Ek object use karenge jisme behavior 'instant' set hai.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // This is very important.
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
