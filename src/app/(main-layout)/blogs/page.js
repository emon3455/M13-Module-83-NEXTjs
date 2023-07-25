// "use client"
// import { useRouter } from 'next/navigation';

import loadBlogsData from '@/utils/loadBlogsData';
import Link from 'next/link';
import React from 'react';


const BlogsPage = async () => {

    const blogs = await loadBlogsData();

    return (
        <div className='container mx-auto'>
            <h2 className='text-4xl text-center font-bold my-10'>Blogs page</h2>
            <h4>Total Blogs: {blogs ? blogs.length : 0}</h4>
            <div className="">
                {
                    blogs.map((blg)=><div key={blg.id} className='block border border-red-400 mb-2 p-2'>
                        <h2 className='text-xl font-semibold'>{blg.id}: {blg.title}</h2>
                        <p>
                            {blg.body.slice(0,40)+"..."}
                        </p>
                        <Link className='inline-block bg-blue-500 px-2 py-1 text-white mt-4' href={`/blogs/${blg.id}`}>
                            <button>View Details</button>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default BlogsPage;