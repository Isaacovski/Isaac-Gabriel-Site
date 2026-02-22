import styles from "./HeroStyles.module.css";
import HeroImg from "../../assets/IsaacWhite (5).jpg";
import themeIcon from "../../assets/sun.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import githubIcon from "../../assets/github-light.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import CV from "../../assets/cva.pdf";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          classname={styles.hero}
          src={HeroImg}
          alt="porfifolio foto isaac"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="color mode icon"
        />
      </div>
      <div className={styles.info}>
        <h1>
          isaac <br></br>
          gabriel
        </h1>
        <h2>Front End Developer</h2>

        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
