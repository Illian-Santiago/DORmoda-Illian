import './Output.css'
import { Header } from './components/Header'
import { useState } from 'react'
import { ContentBox } from './components/ContentBox'

function App() {

  const [click, setClick] = useState(null)
  const handleClick = (point) => {
    setClick(point)
  }
  return (
    <div className='px-6'>
      <Header />
      <div className='flex bg-slate-900 py-4'>
        <li className='px-6'><button onClick={() => handleClick(1)}>punto 1</button></li>
        <li className='px-6'><button onClick={() => handleClick(2)}>punto 2</button></li>
        <li className='px-6'><button onClick={() => handleClick(3)}>punto 3</button></li>
      </div>
      {
        click === 1 && <ContentBox title='soy 1' content='hola' src='https://www.chio-lecca.edu.pe/cdn/shop/articles/chio-lecca-blog-estilo-y-moda.jpg?v=1673918894' alt='dsdsd' h='400' w='400'/>
      }
      {
        click === 2 && <ContentBox content='soy 2'/>
      }
      {
        click === 3 && <ContentBox content='soy 3'/>
      }
        </div>
  );
}
      export default App
