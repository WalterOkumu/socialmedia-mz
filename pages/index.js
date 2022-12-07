import Head from 'next/head'
import Image from 'next/image'
import Cards from '../components/Cards'
import Form from '../components/Form'
import Header from '../components/Header'
import Testemunhos from '../components/Testemunhos'
import Top from '../components/Top'
import Script from 'next/script'

export default function Home() {
  return (
    <div className='pb-10'>
        <div className="pt-8 md:h-screen px-10 bg-no-repeat bg-cover bg-center bg-[url('../public/background-hero-mobile.png')] xl:bg-[url('../public/background-hero.png')]">
         <Header></Header>
         <Top></Top>
        </div>
        <Cards></Cards>
        <Form />
        {/*<Lead />*/}
        {/*<Testimonials />*/}

    </div>
  )
}
