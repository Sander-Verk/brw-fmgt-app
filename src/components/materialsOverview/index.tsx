import { useGetMaterialsQuery } from "../../generated/graphql";
import LoadingContainer from "../loader";
import MaterialOverview from "./materialsOverview";

const MaterialOverviewContainer = () => {
  const { data, error, loading } = useGetMaterialsQuery();

  if (loading) {
    return <LoadingContainer></LoadingContainer>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <MaterialOverview data={data} />;
};

export default MaterialOverviewContainer;