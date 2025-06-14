import React from 'react'
import Image from 'next/image'
import Reveal from '../Reveal'


const Hero = () => {
  return (
   <section
   
    className='relative flex flex-row items-center z-20 mx-auto
        md:gap-[37px] md:mx-10'>
        <div className='flex flex-col gap-[13px] items-center
            md:gap-[34px] md:my-[58px] md:items-start'>
            <Reveal initialX={-25}>
                <h1 className='text-2xl/1 text-center font-semibold block
                    md:text-[40px] md:text-start md:inline'>
                <span className='-ml-3'>👏</span>
                Hello I&#8217;m Sujan Sijakhow, I&#8217;m a {" "} 
                <span className='block text-[27px] highlight mt-2
                    md:text-[45px] md:inline md:mt-0'>Web Developer</span>
                </h1>
            </Reveal>
            <Reveal initialX={-30} delay={0.2}>   
                <p className='text-center text-sm mx-6
                    md:text-start md:mx-0'> I&#8217;m obssessed with creating dynamic and user-friendly applications
                </p>
            </Reveal>     
            <Reveal initialX={-40} delay={0.4}>
                <a href="mailto:sujansijakhow@gmail.com" className='self-center bg-primary
                    text-white p-2.5 rounded flex gap-2.5 items-center text-sm 
                    md:self-start md:text-xl/6'>Let&#8217;s Connect{" "} <img src="/arrow_right_icon.svg" alt="Arrow right icon" />
                </a>
            </Reveal>

        </div>
        <div className='relative group'>
            <Reveal>
                <Image src="/profile_light_purple.png" alt='light purple rectangle' width={372}
                height={430} className='hidden md:block w-[372px] h-[430px] absolute right-0 -z-10 top-0 group-hover:scale-[102%]
                group-hover:-rotate-2 ease-in-out duration-300' />
                <Image src="/profile_dark_purple.png" alt='Dark purple rectangle' width={372}
                height={430} className='hidden md:block w-[372px] h-[430px] absolute right-0 -z-10 top-0 group-hover:scale-[102%]
                group-hover:rotate-2 ease-in-out duration-300' />
                <Image src="/sujan_profile.jpeg" alt='Profile Picture ' width={357}
                height={417} className='hidden md:block min-w-[357px] h-[417px] z-10 ml-[7px] mr-[7px] my-[6.5px] rounded-md group-hover:scale-[102%]
                ease-in-out duration-300' />
            </Reveal>   
        </div>
   </section>
  )
}

export default Hero