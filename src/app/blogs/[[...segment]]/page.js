import React from 'react';

const SingleBlogPage = ({params}) => {

    const [year, id ]= params.segment || [];

    return (
        <div>
            Single Blog Page { year || new Date().getFullYear()}
        </div>
    );
};

export default SingleBlogPage;