/* eslint-disable react/prop-types */
const ListView = ({ items }) => {
  let index = 0;
  return (
    <div className="listView">
      {items.map(
        (item) => (
          <div key={index++} className="listItem">
            <img src={item.img} alt="" />
            <h1>{item.name}</h1>
            <h3>{item.color}</h3>
            <span>$ {item.price}</span>
            <button className="btn">ADD TO CART</button>
          </div>
      )
    )}
    </div>
  )
}

export default ListView;