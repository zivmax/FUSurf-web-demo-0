import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import Content from "contents/index.mdx";
import components from "src/components/index";
import Footer from "src/components/footer";
import Hero from "src/components/hero";

import "src/styles/styles.scss";
import { Script } from "gatsby";

interface MdxPageProps {}

const MDXPage: React.FC<MdxPageProps> = () => {
  return (
    <>
      <Script src="/js/bulma-carousel.min.js" />
      <Script src="/js/bulma-slider.min.js" />
      <Script src="/js/index.js" />

      <Hero />
      <div className="container is-max-desktop">
        <MDXProvider components={components}>
          <Content />
        </MDXProvider>
      </div>
      <Footer />
    </>
  );
};

export default MDXPage;
