import React from "react";
import { useParams } from "react-router-dom";
import { useEffect,useState  } from 'react';
import axios from 'axios';

import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBView,  } from "mdbreact";



const RecipeDetail=()=>{
  const {id}=useParams();
  const [data, setData] = useState({ receipeDetail: [] });
 
  useEffect(async () => {
    const result = await axios(`http://localhost:5001/api/recipes/recipedetail/${id}`);
    setData(result.data);
  }, []);

  return(
    <div>

      <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" >
              <img
                className="img-fluid"
                src={data.imgUrl}
                alt=""
              />
              
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            
            <h2 className="font-weight-bold mb-3 p-0">
              <strong>{data.recipeName}</strong>
            </h2>
            <p>
              <h5>Gerekli Malzemeler</h5>
                <strong>{data.materials}</strong>
            </p>
            <p>
              <h5>Yapılışı</h5>
              {data.recipeText}
            </p>
            
            
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
    </div>
  )
}
        
export default RecipeDetail;




