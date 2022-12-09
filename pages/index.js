import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'

export default function Home() {
  return (
    <>
      <NavBar />
      <AboutMe />
    </>
  )
}
