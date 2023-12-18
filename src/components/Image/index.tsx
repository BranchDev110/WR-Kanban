import { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Image = ({ src }: any) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const handleLoaded = () => {
    setIsImgLoaded(true);
  };

  return (
    <>
      {!isImgLoaded && (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <p>
            <Skeleton count={3} />
          </p>
        </SkeletonTheme>
      )}
      <img
        src={src}
        className="rounded-xl"
        onLoad={handleLoaded}
        alt="img source"
      />
    </>
  );
};

export default Image;
