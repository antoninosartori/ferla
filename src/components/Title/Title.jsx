import './Title.css'
export default function Title({ text }) {
   if (!text) return null

   return (
      <h2 className="Title--text">{text}</h2>
   )
}
