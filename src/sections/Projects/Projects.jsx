import styles from "./ProjectsStyles.module.css";
import Jus from "../../assets/advogada.png";
import Api from "../../assets/Api2.png";
import Livraria from "../../assets/Livraria.png";
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
          src={Api}
          link="https://github.com/Isaacovski/Api_Node.js_Typescript"
          h3="ApiRestFull"
          p="Node.js TypeScript"
        />
        <ProjectCard
          src={Livraria}
          link="https://github.com/Isaacovski/alura-books-server-final"
          h3="Livraria_Api"
          p="100% JavaScript"
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
