import loadBlogsData from '@/utils/loadBlogsData';
import loadSingleBlogData from '@/utils/loadSingleBlogData';
import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';

export const generateMetadata = async({params})=>{
    const {title} = await loadSingleBlogData(params.id);
    return  {
        title: title
    }
}

export const generateStaticParams = async()=>{
    const blogs = await loadBlogsData();
    
    return blogs.map((blog)=>({
        id: blog.id.toString()
    }));
}

const SingleBlog = async ({ params }) => {

    const {id, title, body} = await loadSingleBlogData(params.id);

    return (
        <div className='container mx-auto my-10 border border-red-400 mb-2 p-2'>
            <h2 className='text-xl font-semibold'>{id}: {title}</h2>
            <p>
                {body}
            </p>
        </div>
    );
};

export default SingleBlog;