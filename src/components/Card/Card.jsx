import { useState } from 'react';
import './Card.css'
import CardSkeleton from './CardSkeleton';

export function Card({ title, image, height = "medium", ...others }) {
   const [isLoaded, setIsLoaded] = useState(false);

   const heightMap = {
      big: '600px',
      medium: '422px',
   };

   let computedHeight;
   if (typeof height === 'number') {
      computedHeight = `${height}px`;
   } else {
      computedHeight = heightMap[height] || height;
   }

   const styles = {
      height: computedHeight,
   };

   return (
      <article
         style={styles}
         className="Card-main-container"
         {...others}
      >
         {!isLoaded && < CardSkeleton />}
         <img
            src={image}
            onLoad={() => setIsLoaded(true)}
            alt="card background"
            className={`Card--image ${isLoaded ? '' : 'image--none'}`}
         />
         <div className="Card-title-container">
            <h3>{title}</h3>
         </div>
      </article>
   );
}
