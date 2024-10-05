import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import Content from "contents/index.mdx";

// Define your custom components or shortcuts
interface CustomComponents {
  h1: React.FC<React.HTMLAttributes<HTMLHeadingElement>>;
  p: React.FC<React.HTMLAttributes<HTMLParagraphElement>>;
  // Add more components or overrides as needed
  [key: string]: React.ComponentType<any>;
}

const components: CustomComponents = {
  h1: (props) => <h1 style={{ color: "tomato" }} {...props} />,
  p: (props) => <p style={{ fontSize: "18px" }} {...props} />,
  // Add more components or overrides as needed
};

interface MdxPageProps {}

const MDXPage: React.FC<MdxPageProps> = () => {
  return (
    <MDXProvider components={components}>
      <Content />
    </MDXProvider>
  );
};

export default MDXPage;
