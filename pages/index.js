import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '../components/Logo'
import HeroImage from '../public/bghero.jpg'

export default function Home() {
  
  return (
    
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center bg-my-darkblue">
      <Image src={HeroImage} fill className=''/>
      <div className='relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-my-black rounded-xl backdrop-blur-sm'> 
        <Logo />
        <p>
          Power your content creation process with generative AI, effortlessly producing custom tailored blog pieces at the click of a button.
        </p>
        <Link href="/post/new" className='text-my-white bg-my-lightblue w-64 text-center cursor-pointer uppercase px-4 py-2 rounded-md hover:bg-my-white hover:text-my-black transition-colors block text-heading-500 tracking-widest my-4 mx-auto'> Begin </Link>
      </div>
    </div>
  )

}
