import './PlayerSlider.css'

export default function PlayerSlider({
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
      <div className='PlayerSlider-main-container'>
         <div className='PlayerSlider-wrapper-container' style={styles.wrapper}>
            <input
               {...others}
               type="range"
               min={min}
               max={max}
               value={value}
               className='PlayerSlider--rangeInput'
            />
            <progress
               className='PlayerSlider--progress'
               min={min}
               max={max}
               value={value}
            >
            </progress>
         </div>
      </div>
   )
}
