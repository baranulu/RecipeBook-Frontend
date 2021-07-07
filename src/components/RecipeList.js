import { MDBCol, MDBRow } from "mdbreact";
import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Card from "./Card";
import PaginationPage from "./PaginationPage";
import SearchBar from './SearchBar';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategory: "",
      recipes: [],
      totalrecipe: 0,
      pageNumber: 1,
      recipesPerPage: 3,
      filteredData: ''
    };
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getRecipes(category.id);
  };

  handleCallBack=(childSearchData)=>{
    this.setState({filteredData:childSearchData})
  }

  changePagination = (pageNumber) => {
    let url = `http://localhost:5001/api/recipes?pagenumber=${pageNumber}`;

    fetch(url) 
      .then((response) => response.json()) 
      .then((data) => this.setState({ recipes: data }));
  };

  getRecipes = (categoryId) => {
    let url = "http://localhost:5001/api/recipes";
    if (categoryId) {
      url += "/" + categoryId;
    }

    fetch(url) 
      .then((response) => response.json()) 
      .then((data) => this.setState({ recipes: data }));
  };
  componentDidMount() {
    this.getRecipes();
  }
searchFilter=(filtered)=> {
 console.log(filtered);
 this.setState({recipes:filtered})
}

  render() {
    const {filteredData}=this.state;
    return (
      <div>
      <MDBRow>
      <SearchBar 
      parentCallback = {this.handleCallBack}
      filter={this.searchFilter}
     />
     
      </MDBRow>
        <MDBRow>
          <MDBCol md="2">
            <CategoryList
              currentCategory={this.state.currentCategory}
              changeCategory={this.changeCategory}
            />
          </MDBCol>
          <MDBCol md="8">
            <Card recipes={this.state.recipes} />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <PaginationPage
            pageNumber={this.state.pageNumber}
            changePageNumber={this.changePagination}
            totalPaginationPages={this.totalPage}
            recipesPerPage={this.recipesPerPage}
            recipes={this.state.recipes}
          />
        </MDBRow>
      </div>
    );
  }
}
export default RecipeList;
