import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Add this once in App.jsx (inside <BrowserRouter>). It makes links like
// "/products#m-sand" actually scroll to that element — React Router does
// NOT do this automatically, it only changes the URL.
export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // small delay so the target page has finished rendering first
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 80);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}
