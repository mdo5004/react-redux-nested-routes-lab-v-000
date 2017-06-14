import React from 'react';
import { connect } from 'react-redux';

const PetsShow = ({ pet }) => 
  <div className="col-md-8">
   <h1>Pets Show</h1>
    <h2>{pet.name}</h2>
    <p>{pet.description}</p>
  </div>;

const mapStateToProps = (state, ownProps) => {
  return {
    pet: {}
  };
};

export default connect(mapStateToProps)(PetsShow);
