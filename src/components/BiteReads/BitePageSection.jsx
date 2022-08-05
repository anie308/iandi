import React from 'react'
import { default as api } from "../../redux/apiSlice";

function BitePageSection() {
    const { data, isFetching, isSuccess, isError } = api.useGetBitesQuery();

    const bites = data?.posts;
  
    let biteList;
  return (
    <div>BitePageSection</div>
  )
}

export default BitePageSection