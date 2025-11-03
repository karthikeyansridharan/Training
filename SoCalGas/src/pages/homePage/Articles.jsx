import React, { useState } from 'react'
import clsx from 'clsx';

const Articles = () => {
  const btns = ["News","Socials","Articles","Our Community"];
  const articles = [
    {image:'/card-bg-2.jpg',heading:'publication',content:'Here is a sentence that is quite long & descriptive to have a wrap text. This is the second sentence.',date:'2 days ago'},
    {image:'/card-bg-2.jpg',heading:'publication',content:'Here is a sentence that is quite long & descriptive to have a wrap text. This is the second sentence.',date:'2 days ago'},
    {image:'/card-bg-2.jpg',heading:'publication',content:'Here is a sentence that is quite long & descriptive to have a wrap text. This is the second sentence.',date:'2 days ago'},
    {image:'/card-bg-2.jpg',heading:'publication',content:'Here is a sentence that is quite long & descriptive to have a wrap text. This is the second sentence.',date:'2 days ago'},
  ];
  const [activeBtnIndex,setbtnActiveIndex] = useState(0);
  return (
    <div className='text-black px-4 bg-white py-10 font-mulish flex flex-col gap-10'>
      <div className="flex flex-col gap-3 md:text-center">
        <h1 className='text-[18px] leading-[100%] md:text-[32px] md:font-bold'>News & Articles</h1>
        <h3 className='text-[32px] font-bold leading-[100%] md:text-[18px] md:font-normal'>Our Latest</h3>
        <div className="flex flex-wrap w-full justify-between md:justify-center md:gap-5 md:mt-5 md:max-w-screen">
          {
            btns.map((btn,index)=>
              <button onClick={()=>setbtnActiveIndex(index)} className={clsx('text-sm leading-[18px]',activeBtnIndex===index ? 'font-bold bg-black rounded-2xl px-2 py-1 text-white' : 'font-normal bg-[#00000012] rounded-2xl px-2 py-1')} key={index}>{btn}</button>
            )
          }
        </div>
      </div>
      <div className="md:w-1/2 md:mx-auto">
        {
          articles.map((article,index)=>
            <div key={index} className="border-b border-[#00000054] py-3">
              <div className={clsx('flex items-center',index===0?'flex-col-reverse gap-5':'')}>
                <div className="">
                  <p className='font-semibold text-[#5A5A5A] text-[10px] leading-[100%]'>{article.heading}</p>
                  <p className={clsx('font-bold text-sm leading-4 my-2',index===0?'text-[18px] leading-5':'')}>{article.content}</p>
                  <p className='font-medium text-[10px] leading-[100%] text-[#5A5A5A]'>{article.date}</p>
                </div>
                <div className={clsx (index===0?'w-full':'')}>
                  <img className={clsx('h-13 w-40 rounded-lg md:h-20',index===0?'h-45 w-full md:h-100':'')} src={article.image} alt="article-image" />
                </div>
              </div>  
            </div>
          )
        }
      </div>
      <button className='text-socal-light-blue text-sm leading-5 font-bold border-2 border-socal-light-blue flex items-center rounded-3xl px-2 py-1 w-fit mx-auto'>See More <img className='w-5 h-5' src="/right-arrow-blue.png" alt="right-arrow" /></button>
    </div>
  )
}

export default Articles