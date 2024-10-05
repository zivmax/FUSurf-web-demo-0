import * as React from "react";
import Content from "contents/index.mdx";

interface MdxPageProps {}

const MDXPage: React.FC<MdxPageProps> = () => {
  return <Content />;
};

export default MDXPage;
