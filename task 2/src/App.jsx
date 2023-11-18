import { useState } from 'react'
import './App.css'
import Store from './components/Store';
import IconSwitch from './components/IconSwitch';

function App() {
  const [switcher, setSwitch] = useState('view_module')
  const onSwitch = () => {
    if (switcher === 'view_module') setSwitch('view_list')
    else setSwitch('view_module')
  }

  return (
    <div>
      <IconSwitch onSwitch={onSwitch}
                  icon={switcher}/>
      <Store switcher={switcher}/>
    </div>
  )
}

export default App
