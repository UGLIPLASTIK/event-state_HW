/* eslint-disable react/prop-types */
const CardView = ({ items }) => {
  let index = 0;
  return (
    <div  className="cardView">
      {items.map(
        (item) => (
          <div style={{
            backgroundImage: `url(${item.img})`}} key={index++} className="cardItem">
            <h1>{item.name}</h1>
            <h3>{item.color}</h3>
            <div className="priceGroup">
              <button className="btn">ADD TO CART</button>
              <span>$ {item.price}</span>
            </div>
          </div>
      )
    )}
    </div>
  )
}

export default CardView;