"use client"
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import React, { useEffect } from 'react';
import Project from '@/Project'

import websitephoto from "./images/website1.png"
import buttonphoto from "./images/figma.png"
import animationphoto from "./images/java.png"
import carphoto from "./images/input.png"


const ScrollableDiv = () => {
    useEffect(() => {
      const handleScroll = () => {
        const scrollableDiv = document.getElementById('myScrollableDiv');
        if (scrollableDiv.scrollTop + scrollableDiv.clientHeight >= scrollableDiv.scrollHeight) {
        }
      };
  
      const scrollableDiv = document.getElementById('myScrollableDiv');
      scrollableDiv.addEventListener('scroll', handleScroll);
  
      return () => {
        scrollableDiv.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className={styles.scrollable} id="myScrollableDiv">

        <Project
          title="Back to the Future"
          photo={websitephoto}
          description="the first site in a long time that helped me remember the basics of front-end development"
          link="#"
          />

        <Project
          title="Figma"
          photo={buttonphoto}
          description="My first project in figma, in which I tried to work out the layout of the program for the career of football players"
          link="#"
          />

        <Project
          title="First Java code"
          photo={animationphoto}
          description="Eh, the days when I started learning Java... Terrible programming language"
          link="#"
          />

        <Project
          title="Input"
          photo={carphoto}
          description="My first attempts at learning frontend..."
          link="#"
          />
        <div className={styles.con}>
            <p>I don&apos;t think I remembered everything, but not bad either<span className={styles.terminalcursor}>|</span></p>
        </div>
      </div>
    );
  };

export default function Projects() {
  return (
    <main>
        <ScrollableDiv></ScrollableDiv>
    </main>
  )
}
