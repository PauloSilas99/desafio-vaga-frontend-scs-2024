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
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Tabela</a></li>
                    <li><a href="#">Fale Conosco</a></li>
                </ul>
            </nav>

            <nav>
                <ul>
                    <li><a href="#">Entrar</a></li>
                    <li><img src={icon} alt="icon" /></li>
                </ul>
            </nav>
        </header>
  )
}

export default Header
