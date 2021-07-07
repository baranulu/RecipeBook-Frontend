import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBRow, MDBCol, MDBIcon,MDBBtn } from 'mdbreact';
import { Component } from 'react';
import { Link } from 'react-router-dom'

import '../scss/food.scss';

class Card extends Component{
    render(){
  return (
    <MDBRow>
        
        {this.props.recipes.map((recipes)=>
      <MDBCol md="3" key={recipes.id}>
        <MDBCard>
          <MDBCardImage
            top
            src={recipes.imgUrl}
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
          <MDBCardBody>
            <a href='#!' className='activator waves-effect waves-light mr-4'>
              
            </a>
            <MDBCardTitle>
              <MDBIcon icon="utensils" />  {recipes.recipeName}</MDBCardTitle>
            <hr />
            
            <Link to={`/TarifDetay/${recipes.id}` }>

            <MDBBtn gradient="blue">Tarife Git</MDBBtn>
            </Link>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
        )}
    </MDBRow>
  )
}
}
export default Card;