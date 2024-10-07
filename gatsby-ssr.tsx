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
    <style key="custom-font-normal">
      {`
        @font-face {
          font-family: "Noto Sans";
          font-display: swap;
          font-weight: 100 900;
          font-style: normal;
          src: url("${withPrefix(
            "/fonts/noto-sans-variable-font-wdth-wght.woff2"
          )}") format("woff2");
        }
      `}
    </style>,
    <style key="custom-font-italic">
      {`
        @font-face {
          font-family: "Noto Sans";
          font-display: swap;
          font-weight: 100 900;
          font-style: italic;
          src: url("${withPrefix(
            "/fonts/noto-sans-italic-variable-font-wdth-wght.woff2"
          )}") format("woff2");
        }
      `}
    </style>,
  ]);
};
