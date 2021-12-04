import React from "react";
import { useParams } from "react-router-dom";
import { LogbookItem, useGetLogbookItemQuery } from "../../generated/graphql";
import ErrorMessage from "../errorMessage/errorMessage";
import LoadingContainer from "../loader";
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