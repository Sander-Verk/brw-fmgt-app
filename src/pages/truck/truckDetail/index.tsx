import { useParams } from "react-router-dom";
import { useGetTruckQuery } from "generated/graphql";
import ErrorMessage from "components/errorMessage/errorMessage";
import LoadingContainer from "components/loader";
import TruckDetail from "./truckDetail";
import React from "react";
import TruckPrintDetail from "./components/printDetail/truckPrintDetail";

const TruckDetailContainer = () => {
  let { id } = useParams<{ id: string }>();
  const [isPrintState, setPrintState] = React.useState(false);
  const { data, error, loading } = useGetTruckQuery({
    variables: { id },
  });

  const printDetail = () => {
    setPrintState(true);
    setTimeout(() => {
      window.print();
    }, 100);
  }

  window.onafterprint = () => {
    setPrintState(false);
  };

  if (loading) {
    return <LoadingContainer></LoadingContainer>;
  }

  if (error || !data) {
    return <ErrorMessage message={error?.message}></ErrorMessage>;
  }

  return !isPrintState ? <TruckDetail data={data} printDetail={printDetail}/> : <TruckPrintDetail data={data} />;
};

export default TruckDetailContainer;