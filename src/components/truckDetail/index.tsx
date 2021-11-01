import { useParams } from "react-router-dom";
import { useGetTruckQuery } from "../../generated/graphql";
import ErrorMessage from "../errorMessage/errorMessage";
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
    return <ErrorMessage message={error?.message}></ErrorMessage>;
  }

  return <TruckDetail data={data} />;
};

export default TruckDetailContainer;