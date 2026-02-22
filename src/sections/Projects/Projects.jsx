import styles from "./ProjectsStyles.module.css";
import Jus from "../../assets/advogada.png";
import Barbearia from "../../assets/Barbearia.png";
import salao from "../../assets/salao de beleza.png";
import Loja from "../../assets/loja de roupas.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projetos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Jus}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Advocacia"
          p="LandingPage"
        />
        <ProjectCard
          src={Barbearia}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Barbearia"
          p="Html Css Js"
        />
        <ProjectCard
          src={salao}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={Loja}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
