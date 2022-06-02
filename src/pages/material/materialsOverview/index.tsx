import { useGetMaterialTypesQuery } from "graphql/schema";
import ErrorMessage from "components/errorMessage/errorMessage";
import LoadingContainer from "components/loader";
import MaterialOverview from "./materialsOverview";

const MaterialOverviewContainer = () => {
  const defaultAmount = 10;
  const { data, error, loading, refetch } = useGetMaterialTypesQuery({
    variables: {
      skip: 0,
      limit: defaultAmount
    }
  });

  const refetchData = (skip: number, limit: number) => {
    refetch({
      skip,
      limit
    });
  };

  if (loading) {
    return <LoadingContainer></LoadingContainer>;
  }

  if (error || !data) {
    return <ErrorMessage message={error?.message}></ErrorMessage>;
  }

  return <MaterialOverview data={data} refetchData={refetchData}/>;
};

export default MaterialOverviewContainer;