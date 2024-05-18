// import styles from "./page.module.css";
import SurveyContainer from "./components/surveyContainer";
import Link from 'next/link';

export default function Home() {
  return (
   <body>
    <Link href="/api/results">
      <button>See all results</button>
    </Link>
    <SurveyContainer />
   </body> 
  );
}
