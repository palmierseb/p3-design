import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import SideBar from '../components/SideBar'
import { fetchMessags } from '../utils/fetchMessags'
import { Messag } from '../typings'


interface Props {
  messags: Messag[]
}

const Home = ({ messags }: Props) => {
  console.log(messags)
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>SavMe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
     <main className='grid grid-cols-9'>
      <SideBar />
 <Feed messags={messags}/>
 

     </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const messags = await fetchMessags();
  return {
    props:{
     messags, 
    }
  }

}