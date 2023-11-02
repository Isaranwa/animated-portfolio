import React from "react";

const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];
  return (
    <div className="links">
      {items.map((item) => (
        <a href={`#${item}`}>{item}</a>
      ))}
    </div>
  );
};

export default Links;
