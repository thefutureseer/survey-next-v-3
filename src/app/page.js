import Image from "next/image";
import styles from "./page.module.css";
import surveyJson from "../data/surveyContainer.json";

export default function Home() {
  return (
   <body>
    <main className={styles.main}>
      Hello Next
     { surveyJson? " World!" : "no survey at this time!"}
    </main>
   </body> 
  );
}
