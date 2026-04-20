import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { GetBetter } from "./components/GetBetter/GetBetter";

export function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <GetBetter />
    </div>
  );
}
