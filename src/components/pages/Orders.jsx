import React from 'react'
import axios from 'axios'

import Card from '../Card/Card'

function Orders() {
  const [orders, setOrders] = React.useState([])
  const [isLoadingOrders, setIsLoadingOrders] = React.useState(true)

  React.useEffect(() => {
    /* 		async function fetchData() {
      const { data } = await axios.get(
        'https://64ecd4d3f9b2b70f2bfb00e2.mockapi.io/orders'
      )
      console.log(data)

      setOrders(data)
    }

    fetchData() */

    ; (async () => {
      try {
        const { data } = await axios.get(
          'https://64ecd4d3f9b2b70f2bfb00e2.mockapi.io/orders'
        )
        setOrders(data.reduce((sum, obj) => [...obj.items, ...sum], []))
        setIsLoadingOrders(false)
      } catch (error) {
        alert('Ошибка при получении заказов в "моих заказах"')
      }
    })()
  }, [])

  return (
    <div className="content clear">
      <div className="search">
        <h1>Мои заказы</h1>
      </div>

      <div className="cardWrapper">
        {(isLoadingOrders ? [...Array(8)] : orders).map((item, index) => (
          <Card
            key={index}
            // onFavorite={(obj) => onLikeToCart(obj)}
            // onPlus={onAddToCart}
            loaging={isLoadingOrders}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}

export default Orders
