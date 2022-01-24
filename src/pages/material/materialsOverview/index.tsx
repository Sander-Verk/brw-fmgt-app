import { useGetMaterialTypesQuery } from "../../../generated/graphql";
import ErrorMessage from "../../../components/errorMessage/errorMessage";
import LoadingContainer from "../../../components/loader";
import MaterialOverview from "./materialsOverview";

const MaterialOverviewContainer = () => {
  const { data, error, loading } = useGetMaterialTypesQuery();

  if (loading) {
    return <LoadingContainer></LoadingContainer>;
  }

  if (error || !data) {
    return <ErrorMessage message={error?.message}></ErrorMessage>;
  }

  return <MaterialOverview data={data} />;
};

export default MaterialOverviewContainer;