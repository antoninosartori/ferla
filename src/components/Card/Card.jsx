import './Card.css'

export function Card({ title, image, ...others }) {

   const styles = {
      backgroundImage: `url(${image})`
   }

   return (
      <article
         style={styles}
         className="Card-main-container"
         {...others}
      >
         <div className="Card-title-container">
            <h3>{title}</h3>
         </div>
      </article>
   )
}
