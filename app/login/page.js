// "use client"
import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

function page() {
  return (
    <>
   <div className='flex justify-between'>
   <div className='ml-24 mr-16 max-w-96'>
   <h4 className='text-2xl font-bold tracking-normal leading-tight whitespace-pre-line mt-[1%]'>Log in to Hi Squares</h4>
   <p className='mt-3 text-xs font-semibold'>By Log in to Hi Squares,I agree to the <Link href="" className='text-red-500'>Condition of use</Link> and <Link href="" className='text-red-500'>Privacy policy</Link></p>
   <div className='grid grid-cols-0 gap-3 max-w-8'>
   <button variant='light' className='border border-solid border-black cursor-pointer'>
   <div className='flex gap-6 py-[7px] px-12'><FontAwesomeIcon icon={faGoogle} className='max-w-8 h-6'/> 
      <h5 className='text-nowrap text-1xl font-bold'>Continue with Google</h5>
      </div>
   </button>
   <button variant='light' className='border border-solid border-black cursor-pointer'>
   <div className='flex gap-6 py-[7px] px-12'><FontAwesomeIcon icon={faApple} className='max-w-8 h-6'/> 
      <h5 className='text-nowrap text-1xl font-bold'>Continue with Apple</h5>
      </div>
   </button>
   <button variant='light' className='border border-solid border-black cursor-pointer'>
   <div className='flex gap-6 py-[7px] px-12'><FontAwesomeIcon icon={faFacebookF} className='max-w-8 h-6'/> 
      <h5 className='text-nowrap text-1xl font-bold'>Continue with Facebook</h5>
      </div>
   </button>
   <div className="flex items-center justify-center mt-[-2%] mb-[-2%]">
      <div className="border-b-2 border-black mr-2 w-[117px]"></div>
      <span className="text-gray-500">or continue with</span>
      <div className="border-b-2 border-black ml-2 w-[117px]"></div>
    </div>
    <form className="">
        <input type="email" id="email" name="email" className="p-2 w-full border border-black" placeholder="Email*"
        />
        <input type="password" id="password" name="password" className="mt-2 p-2 w-full border border-black" placeholder="Password*"
        />
      <button
        type="submit"
        className="mt-2 w-full bg-red-500 text-white py-2 px-4 hover:bg-black"
      >
        <span className='text-sm font-semibold tracking-wider'>Log in</span>
      </button>
    </form>
    <div className='mb-[-7%]'>
        <p className='text-xs font-semibold'>This site is protected by reCAPTCHA Enterprise and the Google <Link href="" className='text-red-500'>Privacy Policy</Link> and <Link href="" className='text-red-500'>Terms of Service</Link> apply.</p>
    </div>
    <div>
        <h5><span className='font-bold'>Don't have an account?</span> <Link href="/signup" className='text-red-500 text-xl font-bold'>Sign up</Link></h5>
    </div>
   </div>

   </div>
   <div style={{ width: '900px', height: '100vh' ,overflow: 'hidden'}}>
      <Image
        src="/images/signin.png"
        alt="Example Image"
        width={1200}
        height={600}
        objectFit="cover"
        className="max-h-full"
      />
    </div>
   </div>
    </>
  )
}

export default page