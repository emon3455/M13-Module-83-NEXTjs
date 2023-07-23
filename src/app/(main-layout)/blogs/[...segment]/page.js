"use client"

import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';

const SingleBlog = ({params, searchParams}) => {

    // console.log(params.segment, searchParams.title);

    const param2 = useParams();
    const searchParams2 = useSearchParams();

    console.log(param2.segment, searchParams2.get("title"));

    const [year,id] = params.segment || [];

    return (
        <div>
            <p>
                The blog: {id && id} is published on {year && year}
            </p>
        </div>
    );
};

export default SingleBlog;