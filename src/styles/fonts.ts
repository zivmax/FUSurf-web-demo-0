import { withPrefix } from "gatsby";

export const injectFontFaces = (): void => {
  const style = document.createElement("style");
  style.innerHTML = `
    @font-face {
      font-family: "Noto Sans";
      font-display: swap;
      font-weight: 100 900;
      font-style: normal;
      src: url("${withPrefix(
        "/fonts/noto-sans-variable-font-wdth-wght.woff2"
      )}") format("woff2");
    }
    @font-face {
      font-family: "Noto Sans";
      font-display: swap;
      font-weight: 100 900;
      font-style: italic;
      src: url("${withPrefix(
        "/fonts/noto-sans-italic-variable-font-wdth-wght.woff2"
      )}") format("woff2");
    }
  `;
  document.head.appendChild(style);
};
