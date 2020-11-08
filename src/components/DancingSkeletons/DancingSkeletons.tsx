import * as React from "react";
import skeletonGif from "./assets/skelly.gif";
import "./DancingSkeletons.scss";

export interface Props {}

const DancingSkeletons: React.SFC<Props> = () => {
  return (
    <img src={skeletonGif} className="DancingSkeleton" alt="Dancing Skelly" />
  );
};

export default DancingSkeletons;
