import React from "react";

const Footer = React.memo(({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "col-start-2" : "col-start-1"
      } col-end-3 row-start-4 row-end-5 bg-primary-dark text-white text-center py-5`} style={{background:'#00796b'}}
    >
     <p class="text-center">Copyright @2022 | Designed by <a href="https://github.com/sohamm7"> Soham Pradhan</a></p>
    </div>
  );
});

export default Footer;
