import React from "react";
import { useLocation } from "react-router-dom";
import { useGetTrucksQuery } from "../../generated/graphql";
import ErrorMessage from "../errorMessage/errorMessage";
import LoadingContainer from "../loader";
import AddLogbookItem from "./addLogbookItem";

const useQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const AddLogbookItemContainer = () => {
  const { data, error, loading } = useGetTrucksQuery();
  let query = useQuery();

  if (loading) {
    return <LoadingContainer></LoadingContainer>;
  }

  if (error || !data) {
    return <ErrorMessage message={error?.message}></ErrorMessage>;
  }

  return <AddLogbookItem trucks={data} type={query.get("type") || undefined} />;
};

export default AddLogbookItemContainer;