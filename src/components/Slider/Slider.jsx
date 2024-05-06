import './Slider.css'

export default function Slider({
   value,
   width = '100%',
   min = 0,
   max = 100,
   ...others
}) {
   
   const styles = {
      wrapper: {
         width
      },
   }

   return (
      <div className='Slider-main-container'>
         <div className='Slider-wrapper-container' style={styles.wrapper}>
            <input
               {...others}
               type="range"
               min={min}
               max={max}
               value={value}
               className='Slider--rangeInput'
            />
            <progress
               className='Slider--progress'
               min={min}
               max={max}
               value={value}
            >
            </progress>
         </div>
      </div>
   )
}
