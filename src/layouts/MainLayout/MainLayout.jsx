import './MainLayout.css'

export default function MainLayout({children}) {

  return (
      <main className='MainLayout-layout-container'>
         {/* < Navbar /> */}
         {children}
      </main>
  )
}
