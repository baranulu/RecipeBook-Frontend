import {useEffect,useState} from 'react'
import axios from 'axios';
import '../scss/food.scss';

import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView, MDBBtn,Link } from "mdbreact";

 function Sections(props) {

  let [lastAddedRecipe, setLastAddedRecipe] = useState('');



  useEffect(  async() => {
    const result =  await axios.get("http://localhost:5001/api/recipes/lastaddedrecipe");
    setLastAddedRecipe(result.data);
    
  }, []);
  
  return (
    <div className="baran">
      <div>
      <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src={lastAddedRecipe.imgUrl}
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7" right>
            <a href="#!" className="green-text">
              
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Son Eklenen</strong>
            </h3>
            <h4>
            {lastAddedRecipe.recipeName}</h4>
            <p>
              {lastAddedRecipe.recipeText}
            </p>
            
            <Link to={`/TarifDetay/${lastAddedRecipe.id}` }>
                <h4 color="black">Tarifi İncele</h4>
            </Link>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>

    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src={lastAddedRecipe.imgUrl}
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7" right>
            <a href="#!" className="green-text">
              
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Günün Tarifi</strong>
            </h3>
            <h4>
            {lastAddedRecipe.recipeName}</h4>
            <p>
              {lastAddedRecipe.recipeText}
            </p>
            
            <Link to={`/TarifDetay/${lastAddedRecipe.id}` }>
                <h4 color="black">Tarifi İncele</h4>
            </Link>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
    </div>
    </div>
    
  )
}
export default Sections;

