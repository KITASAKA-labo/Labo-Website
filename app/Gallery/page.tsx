import Image from 'next/image'
import Link from 'next/link'
import { GALLERYData } from '../types/types'
import Gallerylist from '../components/gallery/Gallerylist'
import prisma from '../../lib/prismaClient'

async function getGalleryData() {
  const galleryData = await prisma.study.findMany()
  return galleryData
}

export default async function Home() {
  const galleryData = await getGalleryData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      <div id="thst" className="text-center pt-24">
        <div className="text-left px-[10%]">
          <h2 className="text-4xl font-bold mb-8 filter drop-shadow-[5px_5px_5px_#426181]">研究一覧</h2>
        </div>
        <Gallerylist galleryData={galleryData}/>
      </div>

      {/* <div className="bottun fixed right-[3vw] bottom-[5vh] text-center">
        <button
          id="upBtn"
          className="w-10 h-10 mb-2 bg-gray-800 text-white rounded-full cursor-pointer hover:bg-gray-700 transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="ページ上部へスクロール"
        >
          ↑
        </button>
        <button
          id="downBtn"
          className="w-10 h-10 bg-gray-800 text-white rounded-full cursor-pointer hover:bg-gray-700 transition-colors"
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          aria-label="ページ下部へスクロール"
        >
          ↓
        </button>
      </div> */}

      {/* Footer */}
      <footer className="w-full mt-36 pt-8 border-t border-gray-300 text-center">
        <div className="mb-24">
          <nav className="space-y-4">
            <Link href="/" className="block hover:text-blue-500 transition-colors">HOME</Link>
            <Link href="/gallery" className="block hover:text-blue-500 transition-colors">研究・制作</Link>
            <Link href="/contact" className="block hover:text-blue-500 transition-colors">お問い合わせ</Link>
          </nav>
        </div>
        <p className="text-sm text-gray-600">© 2024 医用画像処理研究室.</p>
      </footer>
    </main>
  )
}