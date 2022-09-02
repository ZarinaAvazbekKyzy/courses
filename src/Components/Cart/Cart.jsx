import React, { useContext, useEffect } from "react";
import { cartContext } from "../../context/CartContextProvider";
import { Link } from "react-router-dom";
import "./Cart.css";
const Cart = () => {
  const { cart, getCarts, changeProductCount, deleteCartProduct } =
    useContext(cartContext);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getCarts();
  }, []);

  return (
    <div className="cart">
      {cart.products ? (
        <>
          {cart.products.length ? (
            <div className="boxCartTable">
              <h1 style={{ margin: "10px auto" }}>Cart</h1>
              <table align="center" border={1} className="tableCart">
                <thead>
                  <tr>
                    <th>name</th>
                    <th>price</th>
                    <th>number</th>
                    <th> summary</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.products.map((elem) => (
                    <tr key={elem.item.id}>
                      <td>{elem.item.title}</td>
                      <td>{elem.item.price}</td>
                      <td>
                        <input
                          id="inpSum"
                          min={1}
                          type="number"
                          value={elem.count}
                          onChange={(e) =>
                            changeProductCount(elem.item.id, e.target.value)
                          }
                        />
                      </td>
                      <td id="textSubPrice">{elem.subPrice}</td>
                      <td>
                        <button
                          onClick={() => deleteCartProduct(elem.item.id)}
                          className="redBtn cartDelete"
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h4>total price: {cart.totalPrice} dollars</h4>
              <Link to="/payment">
                <button className="btn btn-success mt-4">checkout form</button>
              </Link>
            </div>
          ) : (
            <div className="bgCart">
              <h1 style={{ margin: "0 auto" }}>
                В данный момент корзина пустая
              </h1>
              <img
                id="nullCart"
                alt="notFound"
                src="https://cdn-icons-png.flaticon.com/512/6598/6598519.png"
              />
            </div>
          )}
        </>
      ) : (
        <h2>...loading</h2>
      )}
    </div>
  );
};

export default Cart;
