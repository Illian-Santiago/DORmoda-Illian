import './Output.css'
import { Header } from './components/Header'
import { useState } from 'react'
import { ContentBox } from './components/ContentBox'
import { Footer } from './components/Footer'
import { Placeholder } from './components/Placeholder'

function App() {

  const [click, setClick] = useState(null)
  const handleClick = (point) => {
    setClick(point)
  }

  const contenido1 = 'Este vestido rojo está diseñado para resaltar tu estilo y confianza. Con un corte sofisticado y un color vibrante, es perfecto para cualquier ocasión especial. Atrévete a destacar con esta pieza única que combina feminidad, glamour y comodidad en un solo diseño. ¡Haz que todas las miradas estén en ti!'

  const contenido2 = 'Este vestido verde captura la frescura y la elegancia en un diseño que deslumbra. Perfecto para cualquier evento, su color evocador y su corte impecable te harán destacar con un estilo único. Una elección ideal para quienes buscan sofisticación con un toque de frescura. ¡Luce radiante con este vestido único!'

  const contenido3 = `El vestido rojo es la encarnación de la pasión y la audacia. Su vibrante color y su diseño sofisticado te convierten en el centro de atención en cualquier evento, perfecto para quienes buscan un look atrevido y lleno de confianza.

  Por otro lado, el vestido verde destaca por su frescura y conexión con la naturaleza. Con un tono elegante y sereno, transmite sofisticación y armonía, ideal para quienes desean un estilo refinado pero con un toque fresco y equilibrado.

  Ambos vestidos son únicos en su esencia: uno evoca intensidad y energía, mientras que el otro inspira calma y elegancia. ¿Cuál se adapta mejor a tu personalidad y al mensaje que quieres transmitir? ¡Tú decides!`

  return (
    <div className='px-6'>
      <Header />
      <div className='flex bg-slate-900 py-4 rounded-t-lg '>
        <li className='px-6'><button onClick={() => handleClick(1)}>vestido rojo</button></li>
        <li className='px-6'><button onClick={() => handleClick(2)}>vestido verde</button></li>
        <li className='px-6'><button onClick={() => handleClick(3)}>comparacion</button></li>
      </div>
      {
        click === null && <Placeholder/>
      }
      {
        click === 1 && <ContentBox title='Vestido Rojo' content={contenido1} src='https://www.chio-lecca.edu.pe/cdn/shop/articles/chio-lecca-blog-estilo-y-moda.jpg?v=1673918894' alt='vestido rojo' h='' w='' />
      }
      {
        click === 2 && <ContentBox title='Vestido Verde' content={contenido2} src='https://cdn0.matrimonios.cl/article-dress/0230/original/1280/jpg/m450320.jpeg' alt='vestido verde' h='300' w='500' />
      }
      {
        click === 3 && <ContentBox title='Comparacion entre Verde y Rojo' content={contenido3} src='https://www.pacosmoda.es/uploads/photo/image/10947/gallery_A13958_yZ2j2SAz.JPG' alt='vered & rojo ' />
      }
      <Footer />
    </div>
  );
}
export default App
