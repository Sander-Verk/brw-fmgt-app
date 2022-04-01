import { useParams } from "react-router-dom";
import ErrorMessage from "components/errorMessage/errorMessage";
import LoadingContainer from "components/loader";
import LogbookItemDetail from "./logbookDetail";
import { LogbookItem, useGetLogbookItemQuery } from "graphql/schema";

const LogbookItemDetailContainer = () => {
  let { id } = useParams<{ id: string }>();
  const { data, error, loading } = useGetLogbookItemQuery({ variables: { id }});

  if (loading) {
    return <LoadingContainer></LoadingContainer>;
  }

  if (error || !data) {
    return <ErrorMessage message={error?.message}></ErrorMessage>;
  }

  return <LogbookItemDetail logbookItem={data.logbookItem as LogbookItem} />;
};

export default LogbookItemDetailContainer;