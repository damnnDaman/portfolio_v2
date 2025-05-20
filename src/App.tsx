import './App.css'
import Hero from './components/Hero';
import { FloatingNav } from './components/ui/FloatingNavbar';
import { navItems } from '../data/index'
import { ThemeProvider } from './components/ThemeProvider';
import Grid from './components/Grid';
import RecentProjects from './components/RecentProjects';
import Experience from './components/Experience';
import Approach from './components/Approach';
import Footer from './components/Footer';

function App() {
  

  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="dark"
    enableSystem
    disableTransitionOnChange
  >
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero/>
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach/>
        <Footer/>
      </div>
    </main>
  </ThemeProvider>
  )
}

export default App
