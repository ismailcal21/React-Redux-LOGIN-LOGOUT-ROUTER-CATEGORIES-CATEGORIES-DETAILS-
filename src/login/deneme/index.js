import { useEffect, useState } from "react";
import useApi from "../../hooks";
import Category from "./components";

const Deneme = (props) => {
  const [listCategories, setListCategories] = useState(null);
  const [loading, setLoading] = useState(false);
  const api = useApi();

  useEffect(() => {
    api
      .get("public/categories/listMainCategories")
      .then((response) => {
        console.log(">>>HOME RESPONSE", response);
        setListCategories(response.data.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(">>>HOME ERR", err);
      });
  }, []);
  return (
    <main>
      <div>
        {loading === false ? (
          <img src="loa" />
        ) : (
          <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
            {listCategories.map((category) => {
              return <Category categoryProps={category} />;
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default Deneme;
