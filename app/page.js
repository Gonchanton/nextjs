import Image from 'next/image'
import styles from './page.module.css'

import face from "./face.jpeg"
import { Typing } from '@/component/Typing'

export default function Home() {
  return (
        <>
          <div className={styles.faceposition}>
            <Image src={face} alt="face photo" className={styles.facepicture}/>
        </div>
        <div className={styles.borderface}>
        </div>
        <div>
          <Typing speed={150} text={"Portfolio"} className={styles.Headline}/>
        </div>
        <div>
            <Typing speed={4} text={"My name is Anton Goncharenko, 18 years old, a student at the State University of Telecommunications. By the way, my hair fell out while I was doing this lab"} className={styles.paragraphtext}/>
        </div>
        </>
  )
}
