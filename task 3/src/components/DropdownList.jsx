/* eslint-disable react/prop-types */
const DropdownList = ({ items, state }) => {
  if (state) return <ul className="dropdown">{items.map(item => <li key={item}><a href="#">{item}</a></li>)}
</ul>
}

export default DropdownList;