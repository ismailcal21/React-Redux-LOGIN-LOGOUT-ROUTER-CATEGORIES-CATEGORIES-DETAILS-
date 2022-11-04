const Category = (props) => {
  console.log(">>>DENEME PROPS", props);
  return (
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">{props.name}</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">
            {props.id}
            <small class="text-muted fw-light"></small>
          </h1>
          <img src={props.image} style={{ width: "100%", height: "100%" }} />
          <a
            type="button"
            class="w-100 btn btn-lg btn-outline-primary"
            href={"/deneme/" + props.slug}
          >
            Sign up for free
          </a>
        </div>
      </div>
    </div>
  );
};

export default Category;
