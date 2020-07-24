import React from "react";
import { Link } from "react-router-dom";
//import { getCartProducts } from "../repository";
import CartItem from "./CartItem";
import userContext from '../../context/user/userContext'

export default class Cart extends React.Component {
  static contextType=userContext;
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  componentWillMount() {
    const context = this.context;
    var products=context.user.cart;
    if (!products) return;
      let total = 0;
      for (var i = 0; i < products.length; i++) {
        total += products[i].price;
      }
      this.setState({ total:total });
    
  }

  removeFromCart = (product) => {
    const context = this.context;
    context.removeCourse(context.user._id,product._id);
  };

  clearCart = () => {
    const context =this.context;
    const cart=context.removeAllCourses(context.user._id);
    this.setState({ products:cart  });
  };

  render() {
    const { total } = this.state;
    const products =this.context.user.cart;
    return (
      <div className=" container">
        <h3 className="card-title">Cart</h3>
        <hr />
        {products.map((product, index) => (
          <CartItem
            product={product}
            remove={this.removeFromCart}
            key={index}
          />
        ))}
        <hr />
        {products.length ? (
          <div>
            <h4>
              <small>Total Amount:</small>
              <span className="float-right text-primary">${total}</span>
            </h4>
            <hr />
          </div>
        ) : (
          ""
        )}

        {!products.length ? (
          <h3 className="text-warning">No item on the cart</h3>
        ) : (
          ""
        )}
        <Link to="/checkout">
          <button className="btn btn-success float-right">Checkout</button>
        </Link>
        <button
          className="btn btn-danger float-right"
          onClick={this.clearCart}
          style={{ marginRight: "10px" }}
        >
          Clear Cart
        </button>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
