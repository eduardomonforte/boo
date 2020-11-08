import React from "react";
import "./NotFound.scss";
export interface Props {}

const NotFound: React.SFC<Props> = () => {
  return (
    <div className="NotFound">
      <iframe
        title="Not Found"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/84qJttZjp94?autoplay=1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default NotFound;
