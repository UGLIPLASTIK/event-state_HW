/* eslint-disable react/prop-types */
const Toolbar = ({ filters, selected, onSelectFilter }) => {
  const uniquefilters = Array.from(new Set(filters));

  return (
    <div className="toolbar">
      {uniquefilters.map((item) => (
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