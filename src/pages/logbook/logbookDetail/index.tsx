import { useParams } from "react-router-dom";
import ErrorMessage from "components/errorMessage/errorMessage";
import LoadingContainer from "components/loader";
import { useGetLogbookItemQuery, LogbookItem } from "generated/graphql";
import LogbookItemDetail from "./logbookDetail";

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