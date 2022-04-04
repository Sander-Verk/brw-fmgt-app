import ErrorMessage from "components/errorMessage/errorMessage";
import LoadingContainer from "components/loader";
import { LogbookFilterInput, LogbookItem, useGetLogbookQuery } from "graphql/schema";
import LogbookOverview from "./logbookOverview";

const LogbookOverviewContainer = () => {
  const { data, error, loading, refetch } = useGetLogbookQuery();

  const onFilterChange = (filters: LogbookFilterInput) => {
    refetch({ filter: filters});
  };

  if (loading) {
    return <LoadingContainer></LoadingContainer>;
  }

  if (error || !data) {
    return <ErrorMessage message={error?.message}></ErrorMessage>;
  }

  return <LogbookOverview data={data.logbook.items as LogbookItem[] || []} onFilterChange={onFilterChange}/>;
};

export default LogbookOverviewContainer;