import './Home.css'
import Hero from '../../features/Hero/Hero'
import MainLayout from '../../layouts/MainLayout/MainLayout'

export default function Home() {
   return (
      <MainLayout>
         <section className='Home-main-container'>

            < Hero />
            {/* < Projects /> */}
            {/* < Bio /> */}
            {/* < Fotter /> */}

         </section>
      </MainLayout>
   )
}
