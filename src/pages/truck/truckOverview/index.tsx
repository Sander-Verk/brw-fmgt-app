
import ErrorMessage from "components/errorMessage/errorMessage";
import LoadingContainer from "components/loader";
import { useGetTrucksQuery } from "generated/graphql";
import TruckOverview from "./truckOverview";

const TruckOverviewContainer = () => {
  const { data, error, loading } = useGetTrucksQuery();

  if (loading) {
    return <LoadingContainer></LoadingContainer>;
  }

  if (error || !data) {
    return <ErrorMessage message={error?.message}></ErrorMessage>;
  }

  return <TruckOverview data={data} />;
};

export default TruckOverviewContainer;