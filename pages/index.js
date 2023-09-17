import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Footer from '@/components/Footer'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  return (
    <div >
   
      <Hero posts={props.posts}/>
      <Section />
      <Footer />
    </div>
    )
}

export async function getServerSideProps(context) {
  const Postres = await axios.get('http://localhost:3000/api/post');
if(Postres.status !== 200) {
  return new Error('Fetching data failed')
}
const posts = await Postres.data;

const CatRes = await fetch('http://localhost:3000/api/post');
const categories = await CatRes.json();
console.log(categories);
  return { 
    props: { posts, categories },
  };
}
 
