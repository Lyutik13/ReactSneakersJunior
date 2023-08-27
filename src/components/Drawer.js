function Drawer({ onClouseBasket, items = [], onRemuve }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина
          <img
            onClick={onClouseBasket}
            className="btnClouse"
            src="img/btn/btnClouseActive.svg"
            alt="btnClouse"
          />
        </h2>

        {items.length > 0 ?
          <div>
            <div className="cartItems">
              {items.map((obj) => (
                <div className="cartItem">
                  <img width={70} height={70} src={obj.imageUrl} alt="sneakers2" />
                  <div>
                    <p>{obj.name}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemuve(obj.id)}
                    className="btnClouse"
                    src="img/btn/btnClouseActive.svg"
                    alt="btnClouse"
                  />
                </div>
              ))}
            </div>
            <div className="cartFooterBlock">
              <ul className="cartFooter">
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб. </b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб. </b>
                </li>
              </ul>
              <button className="greenBtn">
                Оформить заказ
                <img src="img/btn/btnImg.svg" alt="" />
              </button>
            </div>
          </div> :
          <div className="cartEmpty">
            <img src="img/box.jpg" alt="box" />
            <h2>Корзина пустая</h2>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={onClouseBasket} className="greenBtn greenBtnLeftImg"><img src="img/btn/btnImgLeft.svg" alt="btnImgLeft" />Вернуться назад</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Drawer
