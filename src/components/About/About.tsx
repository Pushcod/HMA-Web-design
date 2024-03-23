"use client";
import usePrices from "@/Hooks/usePrices";

const About = () => {

    const pricesList = usePrices();  
  
    return (
      <section className='w-full py-16'>
        <div className="container mx-auto">
          <div className="w-full flex flex-col gap-10">
              <h2 className="h2 text-center">Цены</h2>
              <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
                {pricesList.length > 0 ? pricesList.map((item, index) => {
                  return (
                    <div key={index} className="w-full h-full bg-cover bg-right-top bg-full bg-no-repeat bg-gred p-3 rounded-xl flex flex-col items-center justify-center gap-4">
                      <div className='h-[150px] flex items-center justify-center text-white text-3xl font-bold font-monsterat'>{item.attributes?.Name}</div>
                      {/* <h3 className="text-center text-3xl uppercase font-semibold">{item.attributes?.Price}₽</h3> */}
                      <div className="h-[40px] flex flex-col items-center w-full ">
                        <p className=" text-[13px] text-center ">{item.attributes?.Include}</p>
                          <p className=" text-[13px] text-center">{item.attributes?.Description}</p>
                      </div>
                      <div className="h-[40px] text-2xl">{item.attributes?.Price}₽/месяц</div>
                      <button className="text-1xl bg-black rounded-full w-[150px] h-[40px]">Сменить план</button>
                      <div className=" text-[12px] ">Дата окончания: {item.attributes?.Date}</div>
                    </div>
                  )
                })
                :
                [1,2,3,4].map((item, index) => {
                  return (
                    <div key={index} className="w-[240px] h-[240px] rounded-xl bg-zinc-800 animate-pulse"></div>
                  );
                })}
              </div>
          </div>
        </div>
      </section>
    )
  }

export default About
