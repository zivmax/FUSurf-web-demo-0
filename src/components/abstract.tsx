import React, { ReactNode } from "react";

interface AbstractProps {
  children: ReactNode;
}

const Abstract: React.FC<AbstractProps> = ({ children }) => (
  <div className="container is-max-desktop">
    <div className="columns is-centered has-text-centered">
      <div className="column is-four-fifths">
        <h2 className="title is-3">Abstract</h2>
        <div className="content has-text-justified">{children}</div>
      </div>
    </div>
  </div>
);

export default Abstract;
