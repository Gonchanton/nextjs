import styles from './page.module.css'
import Link from 'next/link'


import {FaInstagram} from 'react-icons/fa'
import {FaTelegramPlane} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'

export default function Contects() {
  return (
        <>
          <dev className={styles.contacts}>
            <p><HiMail/> Email: gonchantonn@gmail.com</p> 
            <p><FaInstagram/> Instagram: @gonch_anton</p> 
            <p><FaTelegramPlane/> Telegram: <Link href="https://t.me/gonch_anton" className={styles.link}>https://t.me/gonch_anton</Link><span className={styles.terminalcursor}>|</span></p>  
          </dev>
        </>
  )
}
