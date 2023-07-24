import Image from 'next/image'
import bnr1 from "@/assets/bnr3.jpg"

export default function HomePage() {
  return (
    <main className="">

      <h2>This is the main Home Page</h2>

      {/* <Image 
      width={600}
      height={400}
      alt='banner'
      src={bnr1} 
      placeholder='blur'
      /> */}

      {/* <Image width={400} height={200} alt='' src="/bnr2.jpg"></Image> */}

      <Image width={400} height={200} src="https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=850&q=80" alt=''/>
      
    </main>
  )
}
