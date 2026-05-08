// src/components/common/ScrollToTop.jsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      let attempts = 0;

      const scrollToHash = () => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "instant" });
        } else if (attempts < 10) {
          attempts++;
          setTimeout(scrollToHash, 100); 
        }
      };

      scrollToHash();
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
}