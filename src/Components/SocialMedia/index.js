import React, {Component,useEffect,useState}  from 'react';
import {Social,SocialMediaS,Icon,SocialP, SocialSpan, Info} from './style.js' ;
import axios from 'axios' ;


const SocialMedia = () =>  {



                const [social, setSocial] = useState ([])

                useEffect ( () => {
                  axios.get('./js/data.json').then( res => { setSocial(res.data.social) })
                }, [] )

                const SocialItems = social.map ( (socialItem) => {
                            return (     
                                  <Social item={socialItem.id} key={socialItem.id}>
                                                <Icon className={socialItem.icon}></Icon>
                                                <SocialP>
                                                    <SocialSpan>{socialItem.title}</SocialSpan>
                                                    <Info>{socialItem.body}</Info>
                                                </SocialP>
                                  </Social>
                                  )
                    })

            
                    return (
                              <SocialMediaS>
                                
                                  {SocialItems}
                              
                              </SocialMediaS>
                            );

                   
    
  }
  

export default SocialMedia;
