import React from "react";
const MainLayout = (props) => {
  return (
    <>
      <header>
        <h1>{props.heading}</h1>
        <span>{props.action}</span>
      </header>
      <main></main>
    </>
  );
};
export default MainLayout;
