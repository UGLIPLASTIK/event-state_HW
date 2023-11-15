/* eslint-disable react/jsx-key */
const ProjectList = ({ projects }) => {
  let index = 0;
  return (
    <div className="projectList">
          {projects.map(
      (project) => <img key={index++} src={project.img}></img>
    )}
    </div>

  )
}

export default ProjectList;