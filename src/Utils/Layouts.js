import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Layouts({ children }) {
  return (
    <div className="container_custome">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layouts;
