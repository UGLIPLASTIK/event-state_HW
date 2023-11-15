import { useState } from 'react';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';

const Portfolio = ({ projects }) => {
  const [selected, setSelected] = useState('All');
  const [filtredProjects, setFilter] = useState(projects)

  let filters = ['All']
  for(const project of projects){
    filters.push(project.category)
  }
  filters = Array.from(new Set(filters));
  const filter = (e) => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((item) => item.classList.remove('btnActive'));
    e.target.classList.add('btnActive');
    const select = e.target.textContent;

    if (select === 'All') {
      setFilter(projects);
    } else {
      // setFilter(projects);

      setFilter(filters.filter(project => project === select));
    }

    setSelected(select);
}
  // console.log(filtredProjects)
  return(
    <div>
      <Toolbar filters={filters}
               selected={selected}
               onSelectFilter={filter}/>
      <ProjectList projects={filtredProjects}/>
    </div>
  )
}

export default Portfolio;