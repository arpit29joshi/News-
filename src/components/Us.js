import { Fragment } from "react";
import useFetchData from "../Http/GetData";
import CardData from "./CardData";
import LoadingSpinner from "./UI/LoadingSpinner";
function Us() {
  const context=useFetchData('us');
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

export default Us;
