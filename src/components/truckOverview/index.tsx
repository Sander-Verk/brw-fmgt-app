import { useGetTrucksQuery } from "../../generated/graphql";
import TruckOverview from "./truckOverview";

const TruckOverviewContainer = () => {
  const { data, error, loading } = useGetTrucksQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <TruckOverview data={data} />;
};

export default TruckOverviewContainer;