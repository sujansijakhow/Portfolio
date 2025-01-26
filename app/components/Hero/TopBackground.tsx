import React from 'react'
import Image from 'next/image';


const TopBackground = () => {
  return (
    <>
        <div className='absolute w-full max-w-[360px]
            md:max-2-screen-lg h-[285px] md:h-[656px]
            top-[188px] md:top-11 left-1/2 -translate-x-1/2
            md:overflow-x-hidden z-10'>
                <div className='w-full h-full relative'>
                    <div className='circle-icon top-0 left-[171px] md:top-28 md:left-72'>
                        <Image src='/rocket_icon.svg' alt='Rocket icon' width={23} height={23} />
                    </div>
                    <div className='circle-icon top-162px -left-5 md:top-64 md:left-0'>
                        <Image src='/bracket_icon.svg' alt='Bracket icon' width={23} height={23} />
                    </div>
                    <div className='circle-icon top-60 left-[149px] md:top-[570px] md:left-44'>
                        <Image src='/github_icon.svg' alt='GitHub icon' width={23} height={23} />
                    </div>
                    
                    <div className='md:circle-icon md:top-[592px] md:left-[608px]'>
                        <Image src='/electricity_icon.svg' alt='Electricity icon' width={23} height={23} />
                    </div>
                    
                </div>

        </div>
    </>
  )
}

export default TopBackground;