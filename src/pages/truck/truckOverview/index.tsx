
import ErrorMessage from "components/errorMessage/errorMessage";
import { TruckFilterInput, useGetTrucksQuery } from "graphql/schema";
import TruckOverview from "./truckOverview";

const TruckOverviewContainer = () => {
  const { data, error, loading, refetch } = useGetTrucksQuery({
    variables: { }
  });

  const onFilterChange = (filter: TruckFilterInput) => {
    refetch({ filter });
  };

  if (error || !data) {
    return <ErrorMessage message={error?.message}></ErrorMessage>;
  }

  return <TruckOverview loading={loading} data={data} onFilterChange={onFilterChange} />;
};

export default TruckOverviewContainer;