/* eslint-disable react/jsx-key */
const ProjectList = ({ projects }) => {
  let index = 0;
  return (
    projects.map(
      (project) => <img key={index++} src={project.img}></img>
    )
  )
}

export default ProjectList;