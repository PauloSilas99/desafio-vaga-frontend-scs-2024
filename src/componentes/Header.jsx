import '../styles/Header.css'
import icon from '../assets/icon-user.svg'
import mustang from '../assets/icon-mustang.svg'

function Header() {
  

  return (  
        <header>
            <div className='divIconMustang'>
                <img src={mustang} alt="mustang" />
            </div>

            <nav>
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Tabela</li>
                    <li>Fale Conosco</li>
                </ul>
            </nav>

            <nav>
                <ul>
                    <li>Entrar</li>
                    <li><img src={icon} alt="icon" /></li>
                </ul>
            </nav>
        </header>
  )
}

export default Header
