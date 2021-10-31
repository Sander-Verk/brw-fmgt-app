import { useParams } from "react-router-dom";
import { useGetTruckQuery } from "../../generated/graphql";
import LoadingContainer from "../loader";
import TruckDetail from "./truckDetail";

const TruckDetailContainer = () => {
  let { id } = useParams<{ id: string }>();
  const { data, error, loading } = useGetTruckQuery({
    variables: { id },
  });

  if (loading) {
    return <LoadingContainer></LoadingContainer>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <TruckDetail data={data} />;
};

export default TruckDetailContainer;