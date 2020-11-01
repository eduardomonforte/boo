import * as React from "react";
import skeletonGif from "./assets/skelly.gif";
import "./DancingSkeleton.scss";

export interface Props {}

const DancingSkeleton: React.SFC<Props> = () => {
  return (
    <img src={skeletonGif} className="DancingSkeleton" alt="Dancing Skelly" />
  );
};

export default DancingSkeleton;
