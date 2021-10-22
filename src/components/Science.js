import { Fragment } from "react";
import useFetchData from "../Http/GetData";
import CardData from "./CardData";
import LoadingSpinner from "./UI/LoadingSpinner";

function Science() {
  const context=useFetchData('science');
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

export default Science;
