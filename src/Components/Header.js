import axios from "axios";
import React, { useEffect, useState } from "react";

const api = "https://api.postalpincode.in/pincode/800001";
function Header() {
  const [Pin, setPin] = useState("");

  useEffect(() => {
    const debouncing = setTimeout(() => {
      axios
        .get(api + Pin)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }, 2000);

    return () => {
      clearTimeout(debouncing);
    };
  }, [Pin]);

  return (
    <div className="text-center">
      <h1>Header</h1>
      <input
        type="text"
        onChange={(e) => setPin(e.target.value)}
        placeholder="Name"
      />
      <br /> <br />
    </div>
  );
}

export default Header;
