import { useGetTrucksQuery } from "graphql/schema";
import React from "react";
import { useLocation } from "react-router-dom";
import ErrorMessage from "../errorMessage/errorMessage";
import LoadingContainer from "../loader";
import AddLogbookItem from "./addLogbookItem";

const useQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const AddLogbookItemContainer = () => {
  const { data, error, loading } = useGetTrucksQuery();
  const query = useQuery();

  if (loading) {
    return <LoadingContainer></LoadingContainer>;
  }

  if (error || !data) {
    return <ErrorMessage message={error?.message}></ErrorMessage>;
  }

  return <AddLogbookItem trucks={data} type={query.get("type") || undefined} />;
};

export default AddLogbookItemContainer;