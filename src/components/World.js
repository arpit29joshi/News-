import LoadingSpinner from "./UI/LoadingSpinner";
import useFetchData from "../Http/GetData";
import CardData from "./CardData";
import { Fragment } from "react";
function World() {
  const context=useFetchData('world');
  const loading = context.loading;

  return (
    <Fragment>
    {loading ? (
      <LoadingSpinner />
    ) : (
      <CardData contextData={context.initalData} />
    )}
  </Fragment>
  );
}

export default World;
