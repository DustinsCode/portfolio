import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'


export default function Home() {

  const [selection, setSelection] = useState('home')

  function makeSelection(selection) {
    setSelection(selection)
  }


  //TODO: make these route to another page instead of render 
  //       new html so back button will work
  function getSelection() {
    switch (selection) {
      case 'home':
        return (
          <div>
            <h1>Hey, let&apos;s make some cool shit.</h1>
            <div className={styles.actionButtons}>
              <Link href="/contact" passHref>
                <button>Hell Yeah!</button>
              </Link>
              <Link href="/portfolio" passHref>
                <button>What kinda cool shit?</button>
              </Link>
              <Link href="/about" passHref>
                <button onClick={() => makeSelection('who')}>Who are you?</button>
              </Link>
            </div>
          </div>
        )
      case 'hellyeah':
        return (<div>success</div>)
      case 'what':
        return (<div>what?</div>)
      case 'who':
        return (<div>who?</div>)
      default:
        makeSelection('home')
    }
  }

  return (
    <div className={styles.headerDiv}>
      <span className={styles.mainText}>
        {getSelection()}
      </span>
    </div>
  )



}
