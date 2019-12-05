import React from 'react';
import {AboutSection, AboutInfo, AboutTitle, AboutSpan, AboutDir, AboutDesc, ABoutA } from './style.js';


const  About = () => {
      return (
        <AboutSection>
            <div class="container">
                <AboutInfo>
                    <AboutTitle><AboutSpan>This is</AboutSpan> Me</AboutTitle>
                    <AboutDir>Creative Director</AboutDir>
                    <AboutDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <a href="#">explicabo</a> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </AboutDesc>
                    <AboutDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </AboutDesc>
                </AboutInfo>
            </div>
        </AboutSection>
      )
    }
  

export default About;
