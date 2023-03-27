import React from 'react'
import { useNavigate } from 'react-router-dom';
import Work from '../assets/work.svg';
import Logo from '../assets/logosample.svg';

function LoginPage() {
    const navigate = useNavigate();

  function handleClick(e) {

    navigate("/home");
  }
  return (

        <section>

            <div className='w-20 ml-44 mt-4'>
                <img src={Logo} alt=""/>
                <h6 className='text-[14px] text-[#0cbaba] font-bold  mt-2 ml-3'>ISO Audit</h6>
            </div>

        <section className='bg-white mt-28  flex items-center justify-center'>

            <div className='bg-white flex rounded-2xl max-w-6xl py-8 px-5 items-center'>

                <div className='sm:w-1/2 px-16  md:px-16'>

                    <h2 className='font-bold text-2xl text-[#0cbaba]'>Login</h2>
                    <form action='' className='flex flex-col gap-4'>

                        <input className='p-2 mt-8 rounded-xl border' type="text" name="email" placeholder='Email'></input>
                        
                        <div className='relative'>
                        
                        <input className='p-2 rounded-xl border w-full' type="password" name="password" placeholder='Password'></input>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>
                        
                        </div>
                        
                        <button className='bg-[#0cbaba] rounded-xl text-white py-2'onClick={handleClick}>Login</button>

                    </form>

                    <div className='mt-10 grid grid-cols-3 items-center text-gray-400'>

                        <hr className='border-gray-400'/>
                        <p className='text-center'>OR</p>
                        <hr className='border-gray-400'/>

                    </div>

                    <div class="mt-5 text-regular text-[#0cbaba]">
                        
                        <a href="#">Forgot your password?</a>
                    
                    </div>

                </div>

                <div className='sm:block hidden w-1/2 bg-gray-50'>
                <img src={Work} alt="" />
                </div>

            </div>

        </section>

        </section>


  );
}

export default LoginPage
