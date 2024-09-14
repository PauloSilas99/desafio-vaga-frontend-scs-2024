
import './styles/App.css'
import HeaderDiv from './componentes/Header'
import FooterDiv from './componentes/Footer'
import MultipleItems from './componentes/MultipleItems'

function App() {
  

  return (
    <>
      <div className='DivBg'>
        <HeaderDiv />
      </div>
      <div className='presentation'>
        <MultipleItems />
      </div>
      <FooterDiv />
    </>
  )
}

export default App