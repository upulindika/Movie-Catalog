import React from "react";

import { Image } from "./Thumb.styles";

const Thumb = ({ image, moveId, clickable }) => (
  <div>
    <Image src={image} alt="movie-thumb" />
  </div>
);

export default Thumb;
