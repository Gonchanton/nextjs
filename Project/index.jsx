import Image from 'next/image'; 
import Link from 'next/link'; 
import styles from './project.module.css';

const Project = ({ title, photo, description }) => {
  return (
    <div className={styles.project}>
      <Image src={photo} alt="photo" className={styles.photo} />
      <div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>
        {description}
      </p>
      
      </div>
    </div>
  );
};

export default Project;
