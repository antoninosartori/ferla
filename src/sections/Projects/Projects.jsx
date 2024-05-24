import './Projects.css'
import { PROJECTS_DATA } from '../../assets/DATA_PROJECTS'
import { Card } from '../../components/Card/Card'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext/AppContext'

export default function Projects() {
   const { setPlayer } = useContext(AppContext)

   return (
      <section className='ProjectsPage-main-container'>

         <div className='ProjectsPage-wrapper-container'>
            <h2 className='ProjectsPage--title'>projects</h2>

            <div className='ProjectsPage-grid-container'>
               {PROJECTS_DATA?.map(project => (
                  < Card
                     key={project.id}
                     title={project.title}
                     image={project.image}
                     onClick={() => setPlayer(project)} />
               ))}
            </div>
         </div>

      </section>
   )
}