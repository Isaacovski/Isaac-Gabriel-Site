import styles from "./ProjectsStyles.module.css";
import Jus from "../../assets/advogada.png";
import Barbearia from "../../assets/Barbearia.png";
import salao from "../../assets/salao de beleza.png";
import Loja from "../../assets/loja de roupas.jpg";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projetos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Jus}
          link="https://github.com/Isaacovski/site-juridico-freelancer"
          h3="Advocacia"
          p="Html Css Js"
        />
        <ProjectCard
          src={Barbearia}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Barbearia"
          p="em construção"
        />
        <ProjectCard
          src={salao}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Salão de beleza"
          p="em construção"
        />
        <ProjectCard
          src={Loja}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Loja De Roupas"
          p=" em construção"
        />
      </div>
    </section>
  );
}

export default Projects;
