'use client'

import { Accordion, Button } from "components/shared";
import { useState } from "react";

const questionAndAnswers = [
  {
    question: 'What types of commodities do you trade?',
    answer:
      'We deal in agricultural products like cashew, cocoa, and sesame, as well as critical minerals such as lithium and tantalite.',
  },
  {
    question: 'Can you help me with export financing?',
    answer:
      'We deal in agricultural products like cashew, cocoa, and sesame, as well as critical minerals such as lithium and tantalite.',
  },
  {
    question: 'Do you offer logistics within Nigeria only?',
    answer:
      'We deal in agricultural products like cashew, cocoa, and sesame, as well as critical minerals such as lithium and tantalite.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'We deal in agricultural products like cashew, cocoa, and sesame, as well as critical minerals such as lithium and tantalite.',
  },
]

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className='py-6 lg:py-24 bg-white -tracking-[0.04em]'>
      <div className='container'>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="md:w-[40%]">
            <div className=" flex flex-col gap-8 md:gap-[100px]">
              <h2 className='text-dark text-[30px] md:text-[40px] font-medium leading-9 md:leading-[100%]'>
                Frequently Asked <br /> Questions
              </h2>
              <div className=" bg-gray-light rounded-[15px] px-5 py-6 ">
                <h2 className='text-dark text-2xl md:text-[40px] font-medium leading-none'>
                  Still have questions?
                </h2>
                <div className="mt-6">
                  <p className="text-gray mb-1">Reach Out to Us</p>
                  <Button label='Contact Us' />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[60%] ">
            {questionAndAnswers.map(({ question, answer }, key) => (
              <Accordion
                key={key}
                title={question}
                className='mb-2'
                content={<p className=''>{answer}</p>}
                isActive={activeIndex === key}
                handleToggleAccordion={() => {
                  activeIndex === key ? setActiveIndex(null) : setActiveIndex(key);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}