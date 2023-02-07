import React, { useState } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"

const CodePostAnswers = () => {
  
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className='p-3 border border-brandGrey'>
      <button onClick={() => {
        setIsOpen(!isOpen)
      }}
      
      className='flex items-center space-x-3 '>
        <h5 className='text-brandBlue'>Answers</h5>
        {
          isOpen ? <AiFillCaretDown />
          : <AiFillCaretUp />
        }
      </button>
    </section>
  )
}

export default CodePostAnswers