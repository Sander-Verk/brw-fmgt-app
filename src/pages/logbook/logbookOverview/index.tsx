import { useGetLogbookQuery } from "generated/graphql";
import ErrorMessage from "components/errorMessage/errorMessage";
import LoadingContainer from "components/loader";
import LogbookOverview from "./logbookOverview";

const LogbookOverviewContainer = () => {
  const { data, error, loading } = useGetLogbookQuery();

  if (loading) {
    return <LoadingContainer></LoadingContainer>;
  }

  if (error || !data) {
    return <ErrorMessage message={error?.message}></ErrorMessage>;
  }

  return <LogbookOverview data={data} />;
};

export default LogbookOverviewContainer;