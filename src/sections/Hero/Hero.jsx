import styles from "./HeroStyles.module.css";
import HeroImg from "../../assets/hero-img.png";

function Hero() {
  return (
    <section id="hero">
      <div className={styles.colorModeContainer}>
        <img
          classname={styles.hero}
          src={HeroImg}
          alt="porfifolio foto isaac"
        />
      </div>
    </section>
  );
}

export default Hero;
