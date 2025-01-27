import React from 'react'

type Props = {
    plainText: string;
    highlightText: String;
}

const SectionHeader = ({plainText, highlightText}: Props) => {
  return (
    <h2 className='text-[22px] md:text-[35px] text-center'
        >{plainText}{" "}<span className='highlight px-2 whitespace-nowrap'>{highlightText}</span></h2>
  )
}

export default SectionHeader