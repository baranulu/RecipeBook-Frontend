import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RecipeDetail from "./RecipeDetail";
import Home from "./Home";
import RecipeList from "./RecipeList";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <Router>
          <MDBNavbar color="black" dark expand="md">
            <MDBNavbarBrand>
              <MDBNavLink to="/">
                <strong className="white-text">
                  <MDBIcon icon="hamburger" /> Leziz Tarifler Sepeti{" "}
                  <MDBIcon icon="cookie-bite" />
                </strong>
              </MDBNavLink>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="/">Anasayfa</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/Tarifler">Tarifler</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/TarifDetay">İletişim</MDBNavLink>
                </MDBNavItem>
                
                
              </MDBNavbarNav>
              {/* <MDBNavbarNav>
              <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <MDBIcon icon="user" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="#!">Giriş Yap</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Kayıt Ol</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav> */}
            </MDBCollapse>
          </MDBNavbar>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Tarifler" component={RecipeList} />
            <Route path="/TarifDetay/:id">
              <RecipeDetail recipes={this.props.recipes} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default NavbarPage;
