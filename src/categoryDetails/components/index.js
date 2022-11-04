const Category = (props) => {
  console.log("CATEGORyDETAILsPROPS", props);
  return (
    <div className="col ">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal">
            <a style={{ textDecoration: "none" }}>{props.categoryProps.name}</a>
          </h4>
        </div>
        <div className="card-body">
          <img
            src={props.categoryProps.image}
            style={{ width: "50%", textDecoration: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
