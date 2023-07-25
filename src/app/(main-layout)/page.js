import Image from 'next/image'
import bnr1 from "@/assets/bnr3.jpg"
import Category from '@/components/homePage/Category'

export default function HomePage() {
  return (
    <main className="container mx-auto">

      <h2 className='text-3xl font-semibold text-center my-5'>Welcome To Next Hero !!</h2>

      <section className='my-5'>
        <h2 className='text-2xl font-bold text-violet-500'>Our All Categorys:</h2>
        <Category></Category>
        
      </section>
      
    </main>
  )
}
