import React from 'react';
import styled from 'styled-components';
import {HomeSection,HomeInformation,HomeTitle,HomeInfo, HomeDesc ,Span,Homebtn} from './style.js';


const  Home =() => {
    return (
      <HomeSection>
      <div className="container">
          <HomeInformation>
              <HomeTitle>Hichem Klouz</HomeTitle>
              <HomeInfo>Creative Director</HomeInfo>
              <HomeDesc>
                  Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
              </HomeDesc>
              <Homebtn>Let's Begin</Homebtn>
          </HomeInformation>
      </div>
      </HomeSection>
      );
}
  

export default Home;
