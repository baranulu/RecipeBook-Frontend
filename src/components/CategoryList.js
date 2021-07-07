import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import { Component } from 'react';

class CategoryList extends Component {
    state={
        categories:[]
    }

    getCategoriesForSidebar=()=>{
        fetch("http://localhost:5001/api/categories").then(response=>response.json())
        .then(data=>this.setState({categories:data}));
    }
    componentDidMount(){
        this.getCategoriesForSidebar();
    }



    render(){
return (
<MDBContainer>
  <MDBListGroup style={{ width: "22rem" }}>
  {this.state.categories.map((category)=>
    <MDBListGroupItem
    onClick={()=>this.props.changeCategory(category)}
    key={category.id}
    >{category.categoryName}</MDBListGroupItem>
  )}
  </MDBListGroup>
  
</MDBContainer>

);
}
}


export default CategoryList;