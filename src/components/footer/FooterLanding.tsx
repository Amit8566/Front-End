import React from 'react'

function Footer() {
  return (
    <section className='border-t-2 pt-8 border-black'>
       <div className=' max-w-7xl mx-auto flex'>
        <div>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        </div>
        <div className='mx-auto'>
             <p> <a href='' className='text-[18px] text-[#4f7ac2] py-3 leading-6'>Instagram</a> </p>
             <p> <a href='' className='text-[18px] text-[#4f7ac2] pb-3 leading-6'>Facebook</a></p>
             <p> <a href='' className='text-[18px] text-[#4f7ac2] pb-3 leading-6'>Twitter</a></p>
             <p> <a href='' className='text-[18px] text-[#4f7ac2] pb-3 leading-6'>Linkedin</a></p>
        </div>
        <div className='flex gap-x-12 mx-auto'>
            <a href='' className='text-[18px] pt-3 leading-6 text-gray-900'>Home</a>
            <a href='' className='text-[18px] pt-3 leading-6 text-gray-900'>Home</a>
            <a href='' className='text-[18px] pt-3 leading-6 text-gray-900'>Home</a>
            <a href='' className='text-[18px] pt-3 leading-6 text-gray-900'>Home</a>
            <a href='' className='text-[18px] pt-3 leading-6 text-gray-900'>Home</a>
            <a href='' className='text-[18px] pt-3 leading-6 text-gray-900'>Home</a>
        </div>
        <div> 
            <button className='text-lg bg-[#4f7ac2] rounded-lg text-white h-12 w-40 hover:text-[#4f7ac2] hover:bg-transparent hover:border-[#4f7ac2] hover:border-2 '>Get In Touch <span aria-hidden="true">&rarr;</span></button>
        </div>
       </div>

       <div className='max-w-7xl mx-auto flex justify-between pt-10 pb-3'>
          <div className='text-[18px] pt-3 leading-6 text-gray-900'>
             ©2023 All rights reserved.
          </div>
          <div className='flex gap-x-12'>
            <a href='' className='text-[18px] pt-3 leading-6 text-gray-900'>Terms & Conditions</a>
            <a href='' className='text-[18px] pt-3 leading-6 text-gray-900'>Privacy Policy</a>
          </div>
        </div>
    </section>
  )
}

export default Footer
