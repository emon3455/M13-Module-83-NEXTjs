// "use client"
// import { useRouter } from 'next/navigation';

import Link from 'next/link';
import React from 'react';

const blogs=[
    {
        id: 1,
        year: 2022,
        title: "blog-1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eligendi numquam soluta odit? Nulla soluta accusamus ipsam rem! Accusantium, sit?"
    },
    {
        id: 2,
        year: 2021,
        title: "blog-2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eligendi numquam soluta odit? Nulla soluta accusamus ipsam rem! Accusantium, sit?"
    },
    {
        id: 3,
        year: 2020,
        title: "blog-3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eligendi numquam soluta odit? Nulla soluta accusamus ipsam rem! Accusantium, sit?"
    },
    {
        id: 4,
        year: 2023,
        title: "blog-4",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eligendi numquam soluta odit? Nulla soluta accusamus ipsam rem! Accusantium, sit?"
    },
]

const BlogsPage = () => {

    // const router  = useRouter();

    return (
        <div className='container mx-auto'>
            <h2 className='text-4xl text-center font-bold my-10'>Blogs page</h2>
            <div className="">
                {
                    blogs.map(({id,year,title})=><Link className='block border border-red-400 mb-2' 
                    href={
                        {
                            pathname: `/blogs/${year}/${id}`,
                            query:{
                                title: title
                            }
                        }
                    }

                    /*onClick={()=> router.push(`/blogs/${year}/${id}?title=${title}`)}*/
                    key={id}
                    >

                        {title}
                    </Link>)
                }
            </div>
        </div>
    );
};

export default BlogsPage;