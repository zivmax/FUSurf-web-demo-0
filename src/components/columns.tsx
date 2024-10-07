import React from "react";

const Columns: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="columns is-centered">{children}</div>
);

const Column: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="column">{children}</div>
);

export { Columns, Column };
