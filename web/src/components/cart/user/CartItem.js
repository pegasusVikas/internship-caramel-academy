import React from "react";

export default class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { product } = this.props;
    return (
      <div
        className="card border border-primary rounded"
        style={{ marginBottom: "10px" }}
      >
        <div className="card-body  p-3 mb-2 bg-light text-dark">
          <h4 className="card-header p-3 mb-2 bg-secondary text-white">
            {product.name}
          </h4>
          {
            <h4 className="card-text">
              <small>Instructor: </small>
              {product.instructor}
            </h4>
          }
          <p className="card-text">{product.description}</p>
          <h5 className="card-text">
            <small>price: </small>${product.price}
          </h5>

          <button
            className="btn btn-sm btn-warning float-right"
            onClick={() => this.props.remove(product._id)}
          >
            Remove from cart
          </button>
        </div>
      </div>
    );
  }
}
