
import {MDBContainer} from 'mdbreact';
import CarouselPage from './CarouselPage'
import Sections from './Sections'
import '../scss/food.scss';
import FooterPagePro from './Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
 function Home() {




  return (
    <div className="oyku">
      <div>
          <MDBContainer>
              <CarouselPage
              />
              <Sections/>
              <FooterPagePro/>
          </MDBContainer>
        </div>
    </div>
  )
}
export default Home;