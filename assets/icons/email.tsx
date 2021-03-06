import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const email = () => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M14.8287 6.30591L10.9187 9.45399C10.1788 10.0341 9.14151 10.0341 8.40156 9.45399L4.45801 6.30591"
        stroke="#807A7A"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.31405 1.20825H13.9563C15.2024 1.22223 16.3884 1.74902 17.2382 2.66594C18.0879 3.58286 18.5272 4.80986 18.4536 6.06119V12.0451C18.5272 13.2964 18.0879 14.5234 17.2382 15.4403C16.3884 16.3573 15.2024 16.884 13.9563 16.898H5.31405C2.63746 16.898 0.833496 14.7205 0.833496 12.0451V6.06119C0.833496 3.38575 2.63746 1.20825 5.31405 1.20825Z"
        stroke="#807A7A"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default email;
