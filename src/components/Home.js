import { Fragment } from "react";
import useFetchData from "../Http/GetData";
import CardData from "./CardData";
import LoadingSpinner from "./UI/LoadingSpinner";
function Home() {
  const context = useFetchData("home");
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

export default Home;
