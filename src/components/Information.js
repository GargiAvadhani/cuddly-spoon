import React from 'react'
import "./InformationStyles.css"
import Feed from "../assets/3.jpg"

const Information = () => {
  return (
    <div className="information">
    <h1>Seva Animal Welfare Charitable trust</h1>
    <div className="first-sec">
      <div className="sec-text">
         <h2>Who are we ?</h2>
             <p>Here at Seva Animal Welfare Charitable Trust, 
                we know that sometimes all it takes to change the world is a little support. 
                Since our founding in 2015 as a Non-Profit organisation, we have been determined to make an impact. 
                Beginning with a foundation of 5 people -today the trust has expanded and has over 125 active members 
                working in the interest of animal welfare throughout Pune city.</p>

    <h2> What do we do ?</h2>
    <p>Our Seva team is mainly focused on ABC drives in various areas of Pune city and we successfully sterilized more than 4000 dogs
         with the help of Canine Control And Care and Blue Cross Society Of Pune. ( Till Nov 21) and not to forget our volunteers 
         who are dedicated to this noble cause. We are always supported by Rescue Charitable Trust, Pets Force Pune and Animal Rescue Trust 
         for all our rescue cases, without whom it is always tough to attend thousands of injured animals. 
         Our adoption coordinators are always busy finding loving and forever homes for our indies which helps them live a safe and healthy life ahead. 
         Our each volunteer is a feeder himself/herself and plays a key role in our animal welfare. 
         We are animal rescuers. Our core belief that animals deserve our love, compassion and respect is the basis for everything we do. 
         We believe all our stray friends need a special care and attention.
         </p>
         </div>

         <div className="decor">
        <img alt="img" src={Feed}/>
        </div>
  </div>
  </div>
  
       



  
  );
};

export default Information;