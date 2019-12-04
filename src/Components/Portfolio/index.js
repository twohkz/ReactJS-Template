import React, {useEffect,useState} from 'react';
import axios from 'axios';
import {Title,TitleSpan,ThePortfolio,PortfolioList,ListItem,Image,ImageWarpper,Overlay,OverlaySpan} from './style.js';

const Portfolio = () => {

      const [images, setImages] = useState ([])

      useEffect ( () => {
        axios.get('./js/data.json').then( res => { setImages(res.data.portfolio) })
      }, [] )

      const PortfolioImages = images.map ( (ImageItem) => {
          return (
                    <ImageWarpper key={ImageItem.id}>
                    <Image src={ImageItem.image} alt="" />
                        <Overlay>
                            <OverlaySpan>
                                Show Image
                            </OverlaySpan>
                        </Overlay>
                    </ImageWarpper>

          )

      } )


      return (
          

          <ThePortfolio>
            <Title><TitleSpan>My</TitleSpan> Portfolio</Title>
            <PortfolioList>
                <ListItem active>All</ListItem>
                <ListItem>HTML</ListItem>
                <ListItem>Photoshop</ListItem>
                <ListItem>Wordpress</ListItem>
                <ListItem>Mobile</ListItem>
            </PortfolioList>
            
            <div class="box">
                
                
                {PortfolioImages}
                
                
            </div>
            
        </ThePortfolio>

        
      );
    }
  

export default Portfolio;
