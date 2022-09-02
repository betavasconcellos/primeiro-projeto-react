import './assets/global.scss';
import './assets/cabecalho.scss';

import logoSvg from './assets/logo.svg';

function App() {
  return (
  <header className='cabecalho'>
    <img src={logoSvg} alt="Logo do App" />
  </header>
  )
}

export default App
