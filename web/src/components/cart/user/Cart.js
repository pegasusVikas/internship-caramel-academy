import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Login/common/logo.png";
import DashboardIcon from '@material-ui/icons/Dashboard';
import axios from 'axios';
//import { getCartProducts } from "../repository";
import CartItem from "./CartItem";
import userContext from '../../context/user/userContext';
import EmailIcon from '@material-ui/icons/Email';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

export default class Cart extends React.Component {
  static contextType=userContext;
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }
  componentDidMount(){
    const context=this.context;
   

  }
  componentWillMount() {
    const context = this.context;
    if(context.user._id){
      context.getCourses(context.user._id);
      console.log("hello")
      }
      else if(this.props.location.state._id){
      console.log("heere",this.props.location.state._id) 
      var profile=this.props.location.state;
			profile.type="user"
      context.setUser(profile);
     console.log(this.context) 
     }
      else
      this.props.location.push("/lms/user/login")

    
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

  enroll=()=>{
    const context=this.context;
    //const formdata=new FormData();
    //formdata.append('courses',context.user.cart)
    axios.post(`http://localhost:3004/api/courses/user/${context.user._id}`, { "courses": context.user.cart})
    .then(res => {
      if(res.data.message){
        context.removeAllCourses(context.user._id);
        window.alert("Done");
      }
      else{
        console.log("Error: cant checkout")
      }
  })
  .catch(err => console.log(err.message));
  }

  render() {
    const { total } = this.state;
    const products =this.context.user.cart||[];
    return (
      <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      {/*<Link className="navbar-brand" to="/lms/user/cart">*/}
        <Link className="navbar-brand" to="/">
          <img src="../../Caramellogo.png" alt="logo" style={{ width: "240px", height: "65px", margin: "0px 0px 0px 0px" }} />
        </Link>
        <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
          <ul class="navbar-nav">
            <li><Link className="nav-link" style={{ backgroundColor: "#343a40" }} to="/index"><HomeRoundedIcon />{" "}IT Services Home</Link></li>
            <li><Link className="nav-link" style={{ backgroundColor: "#343a40" }} to="/nodecontactform/acadamycontact"><EmailIcon />{" "}Contact Us</Link></li>
            <li><Link className="nav-link" style={{ backgroundColor: "#343a40" }} to="/lms/user/dashboard"><DashboardIcon/>{" "}Dashboard</Link></li>
            <li><img src={Logo} width="50px" alt="mern" height="50px"/></li>
          </ul>
        </div>
      </nav>
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
        <button className="btn btn-success float-right" onClick={this.enroll}>Checkout</button>
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
      </div>
    );
  }
}
