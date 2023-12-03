/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image";
import { useEffect, useState } from "react";

// @ts-ignore
export default function ImageFallback({ src, fallbackSrc, alt, ...rest }) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          // Broken image
          setImgSrc(fallbackSrc);
        }
      }}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
}