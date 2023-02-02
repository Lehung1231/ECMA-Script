import Header from "../components/Header";
import { projectList } from "../data/data";
import ProjectList from "../components/ProjectList";
const ProjectPage = ()=>{
    return `
        ${Header()}
        <h1>ProjectPage</h1>
     
        ${ProjectList({projects : projectList})}
    `;
}

export default ProjectPage;