import { useState } from 'react'
import DropdownList from './DropdownList';

const Dropdown = () => {
  const [state, setState] = useState(false);
  const items = ['Profile information', 'Change Password', 'Become PRO', 'Help', 'Log Out'];
  const f = () => {
    setState(!state)
  }

  return (
    <div>
      <button className='btn' onClick={f}>ACCOUNT SETTINGS<i className="material-icons">public</i></button>
      <DropdownList items={items}
                    state={state}/>
    </div>
  )
}

export default Dropdown;