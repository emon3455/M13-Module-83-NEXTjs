import Image from 'next/image'
import bnr1 from "@/assets/bnr3.jpg"
import Category from '@/components/homePage/Category'
import PopularProduct from '@/components/homePage/PopularProduct';
import { Suspense } from 'react';
import LoadingCompo from '@/components/LoadingCompo';

export const revalidate = 5;

export default function HomePage() {

  return (
    <main className="container mx-auto">

      <h2 className='text-3xl font-semibold text-center my-5'>Welcome To Next Hero !!</h2>

      <section className='my-5'>
        <h2 className='text-2xl font-bold text-violet-500'>Our All Categorys:</h2>
        <Category></Category>  
      </section>

      <section className='my-5'>
        <h2 className='text-2xl font-bold text-violet-500'>Our All Popular Products:</h2>

        <Suspense fallback={<LoadingCompo/>}>

          <PopularProduct></PopularProduct>
          
        </Suspense>

      </section>
      
    </main>
  )
}
