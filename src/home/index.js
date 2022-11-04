import Category from "./components";
import useApi from "../hooks";
import { useEffect, useState } from "react";

const Home = (props) => {
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
        <div>
          {loading === false ? (
            <img src="loa.gif" />
          ) : (
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
              {listCategories.map((category) => {
                return <Category key={category.id} categoryProps={category} />;
              })}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
