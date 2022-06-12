import React, { CSSProperties, ReactNode } from "react";

import styles from "./styles.module.css";

type CaptionedImageProps = {
  src: string;
  children: React.ReactNode;
  imgStyle?: CSSProperties;
};

const CaptionedImage = ({
  src,
  imgStyle,
  children,
}: CaptionedImageProps): JSX.Element => (
  <div className="text--center">
    <img style={imgStyle} src={src} />
    <p className={styles.caption}>{children}</p>
  </div>
);

export default CaptionedImage;
