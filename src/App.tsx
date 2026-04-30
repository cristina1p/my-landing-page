import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { GetBetter } from "./components/GetBetter/GetBetter";
import { FAQ } from "./components/FAQ/FAQ";
import { FavoriteTools } from "./components/FavoriteTools/FavoriteTool";
import { StorySection } from "./components/Stories/StorySection";
import { Testimonials } from "./components/Testimonials/Testimonials";

export function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <GetBetter />
      <StorySection />
      <Testimonials />
      <FavoriteTools />
      <FAQ />
    </div>
  );
}
