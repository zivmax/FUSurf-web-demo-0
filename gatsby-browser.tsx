import { injectFontFaces } from "./src/styles/fonts";

export const onClientEntry = (): void => {
  injectFontFaces();
};
