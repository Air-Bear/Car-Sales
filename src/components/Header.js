import React from 'react';
import { connect } from "react-redux";

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.carOnProps.image} alt={props.carOnProps.name} />
      </figure>
      <h2>{props.carOnProps.name}</h2>
      <p>Amount: ${props.carOnProps.price}</p>
    </>
  );
};

const mapStateToProps = (state)=>{
  return{
    carOnProps: state.car
  };
};

export default connect(
  mapStateToProps,
  {}
)(Header);
