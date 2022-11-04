const Category = (props) => {
  //console.log("CATEGORyPROPS", props);
  return (
    <div className="col ">
      <div className="card mb-4 rounded-3 shadow-sm border-primary">
        <div className="card-header py-3 text-white bg-primary border-primary">
          <h4 className="my-0 fw-normal">
            <a
              href={"#/categoryDetails/" + props.categoryProps.slug}
              style={{ color: "white", textDecoration: "none" }}
            >
              {props.categoryProps.name}
            </a>
          </h4>
        </div>
        <div className="card-body">
          <img src={props.categoryProps.image} style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default Category;
