import { useEffect } from "react";
import play from '../playground'
import styles from "../styles/Home.module.css";

export default function Home() {

useEffect(() => {
  play('washington', 30)
}, [])

  return <div>
  </div>;
}
