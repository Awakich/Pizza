import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Other/Nav';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

const App: FC = () => {

  return (
    <section className='max-w-5xl mx-auto py-12 space-y-10'>
      <Nav />

      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<NotFound />} path='*' />
        <Route element={<Cart />} path='/cart' />
      </Routes>
    </section>
  )
}

export default App
