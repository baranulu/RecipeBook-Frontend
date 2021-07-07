import {useState,useEffect} from "react";
import { MDBContainer, MDBBtn } from "mdbreact";
import axios from 'axios';


function SearchBar(props) {
  const [query, setQuery] = useState('');
  let [filteredRecipes, setfilteredRecipes] = useState('');

  const handleChange = (event) => {
    const enteredName = event.target.value;
    setQuery(enteredName);
  }

  const search =  async (enteredName) => {
    let searchName = enteredName.target.value;
    const response= await axios(`http://localhost:5001/api/recipes/name/${searchName}`);
    setfilteredRecipes(response.data);
  }

  useEffect(() => {
    if(filteredRecipes){
      props.filter(filteredRecipes);
    }
  },[filteredRecipes]);

  return (
    <MDBContainer>
      <div className="input-group md-form form-sm form-2 pl-0">
        <input className="form-control my-0 py-1 red-border" type="text" placeholder="Ara" aria-label="Search" 
        onChange={handleChange}  />
        <div className="input-group-append">
            <MDBBtn 
            value={query}
            onClick={search}
            color="unique" 
            rounded size="sm" 
            type="submit" 
            className="mr-auto">Ara</MDBBtn>
        </div>
      </div>
    </MDBContainer>
  );
}

export default SearchBar;

