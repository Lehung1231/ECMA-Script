import { projectList } from "../data/data";
const ProjectDetailPage = ({data: {id}}) => {
    console.log(id);

    const project = projectList.find(function(project){
        return project.id == id
    })
  //  console.log(project);
    if(!project){
        return `
        <h1>Không có đường dẫn</h1>
    `
    }else{
        return `
        <h1>${project.name}</h1>
    `;
    }
}
export default ProjectDetailPage