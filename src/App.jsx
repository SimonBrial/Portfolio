import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Hero } from './components/about_me/index';
import { Skills } from './components/skills/index';
import { Projects } from './components/projects/index';
import { Interesses } from './components/interesses/index';
import Footer from './components/footer.jsx/Footer';
import Layout from './components/Layout';
import "./index.scss";
import AppState from './context/appContext/AppState'

const App = () => {
  return (
    <AppState>
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <Layout >
                <Hero />
                <Skills />
                <Projects />
                <Interesses />
                <Footer />
              </Layout>
            } />
          </Routes>
        </BrowserRouter>
      </div>
    </AppState>
  )
}

export default App