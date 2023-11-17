/* eslint-disable react/prop-types */
const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div className="iconSwitch">
      <span onClick={onSwitch} className="material-icons">
        {icon}
      </span>
    </div>
  )
}

export default IconSwitch;