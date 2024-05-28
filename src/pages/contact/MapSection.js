import React from "react";

import mapImg from "../../assets/images/contact/1.png";

const Map = (props) => {
  return (
    <div class="react-contacts pt-106">
      <div class="react-image-maping">
        <a
          href="https://www.google.com/maps/place/IQTISODIYOT+VA+PEDAGOGIKA+UNIVERSITETI/@38.889739,65.8093176,15z/data=!4m6!3m5!1s0x3f4ea7b2fb101a8d:0x8736f5d032eef3f!8m2!3d38.889739!4d65.8093176!16s%2Fg%2F11jt3gwjpd?entry=ttu"
          target="_blank"
        >
          <img src={mapImg} alt="Map" style={{ width: "100%" }} />
          <div class="react-ripple react-tooltip1">
            <div class="box">{/* <span>New York</span> */}</div>
          </div>{" "}
        </a>
      </div>
    </div>
  );
};

export default Map;
