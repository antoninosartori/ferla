import './Projects.css'
import { PROJECTS_DATA } from '../../assets/DATA_PROJECTS'
import { Card } from '../../components/Card/Card'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext/AppContext'
import Title from '../../components/Title/Title'
import { PROJECT_CATEGORIES } from '../../utils/project-categories-enum'

export default function Projects() {
   const { setPlayer } = useContext(AppContext)


   const projectProduction = PROJECTS_DATA?.filter(project => project.category === PROJECT_CATEGORIES.production)
   const projectSoundDesign = PROJECTS_DATA?.filter(project => project.category === PROJECT_CATEGORIES.soundDesign)
   const projectMixMastering = PROJECTS_DATA?.filter(project => project.category === PROJECT_CATEGORIES.mixMastering)


   return (
      <section className='ProjectsPage-main-container'>

         {projectProduction?.length > 0 &&
            <div className='ProjectsPage-wrapper-container'>
               < Title text={PROJECT_CATEGORIES.production} />

               <div className='ProjectsPage-grid-container'>
                  {projectProduction?.map(project => (
                     < Card
                        key={project.id}
                        title={project.title}
                        image={project.image}
                        onClick={() => setPlayer(project)} />
                  ))}
               </div>
            </div>
         }

         {projectSoundDesign?.length > 0 &&
            <div className='ProjectsPage-wrapper-container'>
               < Title text={PROJECT_CATEGORIES.soundDesign} />

               <div className='ProjectsPage-grid-container'>
                  {projectSoundDesign?.map(project => (
                     < Card
                        key={project.id}
                        title={project.title}
                        image={project.image}
                        onClick={() => setPlayer(project)} />
                  ))}
               </div>
            </div>
         }

         {projectMixMastering?.length > 0 &&
            <div className='ProjectsPage-wrapper-container'>
               < Title text={PROJECT_CATEGORIES.mixMastering} />

               <div className='ProjectsPage-grid-container'>
                  {projectMixMastering?.map(project => (
                     < Card
                        key={project.id}
                        title={project.title}
                        image={project.image}
                        onClick={() => setPlayer(project)} />
                  ))}
               </div>
            </div>
         }

      </section>
   )
}