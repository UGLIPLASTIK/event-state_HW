/* eslint-disable react/prop-types */
const Toolbar = ({ filters, selected, onSelectFilter }) => {

  return (
    <div className="toolbar">
      {filters.map((item) => (
        <button
          onClick={onSelectFilter}
          key={item}
          className={item === selected ? 'active' : ''}
        >
          {item}
        </button>
      )
     )}
    </div>
  )
}

export default Toolbar;