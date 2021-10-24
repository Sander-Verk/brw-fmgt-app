import { useGetTrucksQuery } from "../../generated/graphql";
import LoadingContainer from "../loader";
import TruckOverview from "./truckOverview";

const TruckOverviewContainer = () => {
  const { data, error, loading } = useGetTrucksQuery();

  if (loading) {
    return <LoadingContainer></LoadingContainer>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <TruckOverview data={data} />;
};

export default TruckOverviewContainer;