import { useParams } from 'next/navigation';
import React from 'react';

const SingleBlog = ({params}) => {

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