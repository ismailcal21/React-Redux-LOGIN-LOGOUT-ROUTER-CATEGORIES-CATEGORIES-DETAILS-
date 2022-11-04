import Category from "./components";
import useApi from "../hooks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryDetails = (props) => {
  const api = useApi();
  const params = useParams();
  console.log(">>>params", params);
  const [listCategoryDetails, setListCategoryDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api
      .get(`public/categories/getBySlug/${params.slug}`)
      .then((response) => {
        console.log(">>>CategoryDetails RESPONSE", response);
        setListCategoryDetails(response.data.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(">>>CategoryDetails ERR", err);
      });
  }, []);

  return (
    <div>
      <div>
        <div>
          {loading === false ? (
            <img src="loa.gif" />
          ) : (
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
              {listCategoryDetails.services.map((category) => {
                return <Category key={category.id} categoryProps={category} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
