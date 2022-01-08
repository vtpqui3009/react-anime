import React from "react";
const MainLayout = (props) => {
  return (
    <>
      <header className="text-white flex items-center justify-between mb-4">
        <h1 className="uppercase text-xl font-bold before:border-2 before:border-l-2 before:border-red-500 before:mr-2 before:rounded">
          {props.heading}
        </h1>
        <span>{props.action}</span>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full text-white md:gap-6 gap-10">
        {props.children}
      </main>
    </>
  );
};
export default MainLayout;
