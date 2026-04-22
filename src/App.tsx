import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { GetBetter } from "./components/GetBetter/GetBetter";
import { FavoriteTools } from "./FavoriteTools/FavoriteTool";
import { FAQ } from "./components/FAQ/FAQ";

export function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <FAQ />
      <FavoriteTools />
      <GetBetter />
    </div>
  );
}
