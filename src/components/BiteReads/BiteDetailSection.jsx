import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { default as api } from "../../redux/apiSlice";



function BiteDetailSection() {
  const { data, isFetching, isSuccess, isError } = api.useGetBitesQuery();
  const bites = data?.posts;

  const { slug } = useParams();
  const [bite, setBite] = useState(null);

  useEffect(() => {
    let bite = bites.find((bite) => bite.slug === slug);

    if (bite) {
      setBite(bite);
    }
  }, [slug]);
  return (
    <div className="">
    {bite ? (
      <div>
        {bite.title}
      </div>
    ) : (
      <div className="h-full font-[700] font-raleway text-[25px] w-full text-center">
        Hello Motherfucker!!
      </div>
    )}
  </div>
  )
}

export default BiteDetailSection