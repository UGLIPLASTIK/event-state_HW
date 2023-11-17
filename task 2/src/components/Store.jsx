/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import IconSwitch from './IconSwitch'
import CardView from './CardsView'

const Store = ({ products }) => {
  const [switcher, setSwitch] = useState('view_module')
  const onSwitch = () => {
    if (switcher === 'view_module') setSwitch('view_list')
    else setSwitch('view_module')
  }

  console.log(products)

  return (
    <div>
      <IconSwitch onSwitch={onSwitch}
                  icon={switcher}/>
      <CardView items={products}/>
    </div>
  )
}

export default Store;