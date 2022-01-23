import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.scss'


export default function Home() {

  const [selection, setSelection] = useState('home')

  function makeSelection(selection) {
    setSelection(selection)
  }

  function getSelection() {
    switch (selection) {
      case 'home':
        console.log('hit home')
        return (
          <div>
            <h1>Hey, let&apos;s make some cool shit.</h1>
            <div className={styles.actionButtons}>
              <button onClick={() => makeSelection('hellyeah')}>Hell Yeah!</button>
              <button onClick={() => makeSelection('what')}>What kinda cool shit?</button>
              <button onClick={() => makeSelection('who')}>Who even are you?</button>
            </div>
          </div>
        )
      case 'hellyeah':
        console.log('hit hellyeah')
        return (<div>success</div>)
      case 'what':
        console.log('hit what')
        return (<div>what?</div>)
      case 'who':
        console.log('hit who')
        return (<div>who?</div>)
      default:
        console.log('hit default')
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
