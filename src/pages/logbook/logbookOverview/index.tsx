import LogbookOverview from "./logbookOverview";

const LogbookOverviewContainer = () => {
  // const { data, error, loading } = useGetLogbookQuery();

  // if (loading) {
  //   return <LoadingContainer></LoadingContainer>;
  // }

  // if (error || !data) {
  //   return <ErrorMessage message={error?.message}></ErrorMessage>;
  // }

  return <LogbookOverview />;
};

export default LogbookOverviewContainer;