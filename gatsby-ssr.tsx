import React from "react";
import { withPrefix } from "gatsby";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href={withPrefix("/fonts/noto-sans-variable-font-wdth-wght.woff2")}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="notoSansNormal"
    />,
    <link
      rel="preload"
      href={withPrefix("/fonts/noto-sans-italic-variable-font-wdth-wght.woff2")}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="notoSansItalic"
    />,
  ]);
};
