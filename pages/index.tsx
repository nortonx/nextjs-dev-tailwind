import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../src/components/footer/Footer';
import Header from '../src/components/header/Header';

const Home: NextPage = () => {
  const paragraphCount = 4;
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center bg-gradient-to-b from-white to-zinc-200">
        <h1 className="text-lg font-bold">Main Home content</h1>
        
        {[...Array(paragraphCount)].map((element, i) => {
          return (
          <p className="text-left bg-slate-300 p-4 border border-zinc-400 rounded mb-2" key={i}>{i + 1}: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil iure perferendis omnis quas itaque deleniti asperiores nobis inventore, assumenda commodi, labore consequuntur possimus ducimus laudantium natus necessitatibus dolor quaerat numquam.</p>
          )
        })}
        
        
      </main>

      <Footer />
    </div>
  )
}

export default Home
