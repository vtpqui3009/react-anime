const TopViewHeading = (props) => {
  return (
    <header className="text-white flex items-center justify-between mb-4">
      <h1 className="uppercase text-base font-bold before:border-2 before:border-l-2 before:border-red-500 before:mr-2 before:rounded">
        {props.heading}
      </h1>
      <span>{props.action}</span>
    </header>
  );
};
export default TopViewHeading;
