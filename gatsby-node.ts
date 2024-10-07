import type { GatsbyNode } from "gatsby";
import * as path from "path";

// Disable source maps when building
export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  stage,
  actions,
  loaders,
}) => {
  if (stage === `build-javascript`) {
    actions.setWebpackConfig({
      devtool: false,
    });
  }

  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, `./`), `node_modules`],
    },
  });

  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bulma-carousel/,
            use: loaders.null(),
          },
          {
            test: /bulma-slider/,
            use: loaders.null(),
          }
        ],
      },
    });
  }
};
