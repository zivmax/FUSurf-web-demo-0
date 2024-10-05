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
            test: /scrollreveal/,
            use: loaders.null(),
          },
          {
            test: /plotly.js-finance-dist/,
            use: loaders.null(),
          }
        ],
      },
    });
  }
};
