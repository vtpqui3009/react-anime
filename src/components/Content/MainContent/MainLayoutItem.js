const MainLayoutItem = (props) => {
  return (
    <div className="main-layout-item">
      <div className="main-layout-banner">
        <span>{props.episodeNumber}</span>
        <img alt="" />
        <div>
          <span>{props.comment}</span>
          <span>{props.view}</span>
        </div>
      </div>
      <div className="main-layout-content">
        <li>{props.tag}</li>
        <h2>{props.animeName}</h2>
      </div>
    </div>
  );
};
export default MainLayoutItem;
