import Image from 'next/image'
import Link from 'next/link'
import { NEWSData } from '../types/types'
import NewsGcardlist from '../components/newsgallery/NewsGcardlist'
import prisma from '../../lib/prismaClient'

async function getNewsData() {
  const newsData = await prisma.news.findMany({orderBy: {id: 'desc'}})
  return newsData
}


export default async function Home() {
  const newsData = await getNewsData()
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">

        <div id="bodyTitle" className="relative z-10 flex flex-col flex-start items-left justify-center h-screen w-screen text-white z-2 px-20">
        <div className="Title text-left mb-8">
          <h1 className="text-9xl md:text-8xl font-bold mb-2">北坂研究室</h1>
          <h3 className="text-2xl lmd:text-2xl">Medical Image Processing Laboratory</h3>
        </div>
        </div>
        <div id="top1" className="absolute top-0 left-0 w-screen h-screen z-1">
          <Image
            src={"https://github.com/KITASAKA-labo/KITASAKA-labo.github.io/blob/main/public/images/top/topimg1.png?raw=true"}
            alt="Top image 1"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

      <div id="news_g" className="container w-100vh mx-auto mt-20 px-4">
        <h2 className="text-4xl font-bold mb-10">News</h2>
        <ul id="news_garrary" className="w-[100%] space-y-6 item-center">
          <NewsGcardlist newsData={newsData}/>
        </ul>
      </div>

    </main>
  )
}