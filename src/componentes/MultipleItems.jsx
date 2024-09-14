
import Slider from "react-slick";
import "../styles/MultipleItems.css"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// icones
import flash from '../assets/icon-flash.svg'
import date from '../assets/icon-date.svg'
import speed from '../assets/icon-speed.svg'
import users from '../assets/icon-usersCar.svg'
// carros
import branco from '../assets/carros/carro-branco.svg'
import prata from '../assets/carros/carro-prata.svg'
import preto from '../assets/carros/carro-preto.svg'


function MultipleItems() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider className="SliderDiv" {...settings}>

        <div className="CarItem">
            <div className="carroIcon">
                <img src={branco} alt="branco" />
            </div>
          <h3>Mustang</h3>
          <div className="DivIcones">
            <div className="icones">
                <img src={date} alt="date" />
                <span>2025</span>
            </div>
            <div className="icones">
                <img src={speed} alt="speed" />
                <span>190 km/h</span>
            </div>
            <div className="icones">
                <img src={flash} alt="flash" />
                <span>9/10</span>
            </div>
            <div className="icones">
                <img src={users} alt="users" />
                <span>8/10</span>
            </div>
          </div>
          <button>Ver Carro</button>
        </div>

        <div className="CarItem">
            <div className="carroIcon upTop">
                <img src={prata} alt="prata" />
            </div>
          <h3>Mustang</h3>
          <div className="DivIcones">
            <div className="icones">
                <img src={date} alt="date" />
                <span>2025</span>
            </div>
            <div className="icones">
                <img src={speed} alt="speed" />
                <span>190 km/h</span>
            </div>
            <div className="icones">
                <img src={flash} alt="flash" />
                <span>9/10</span>
            </div>
            <div className="icones">
                <img src={users} alt="users" />
                <span>8/10</span>
            </div>
          </div>
          <button>Ver Carro</button>
        </div>

        <div className="CarItem">
            <div className="carroIcon upTop">
                <img src={preto} alt="preto" />
            </div>
          <h3>Mustang</h3>
          <div className="DivIcones">
            <div className="icones">
                <img src={date} alt="date" />
                <span>2025</span>
            </div>
            <div className="icones">
                <img src={speed} alt="speed" />
                <span>190 km/h</span>
            </div>
            <div className="icones">
                <img src={flash} alt="flash" />
                <span>9/10</span>
            </div>
            <div className="icones">
                <img src={users} alt="users" />
                <span>8/10</span>
            </div>
          </div>
          <button>Ver Carro</button>
        </div>

        <div className="CarItem">
            <div className="carroIcon upTop">
                <img src={prata} alt="prata" />
            </div>
          <h3>Mustang</h3>
          <div className="DivIcones">
            <div className="icones">
                <img src={date} alt="date" />
                <span>2025</span>
            </div>
            <div className="icones">
                <img src={speed} alt="speed" />
                <span>190 km/h</span>
            </div>
            <div className="icones">
                <img src={flash} alt="flash" />
                <span>9/10</span>
            </div>
            <div className="icones">
                <img src={users} alt="users" />
                <span>8/10</span>
            </div>
          </div>
          <button>Ver Carro</button>
        </div>

        <div className="CarItem">
            <div className="carroIcon">
                <img src={branco} alt="branco" />
            </div>
          <h3>Mustang</h3>
          <div className="DivIcones">
            <div className="icones">
                <img src={date} alt="date" />
                <span>2025</span>
            </div>
            <div className="icones">
                <img src={speed} alt="speed" />
                <span>190 km/h</span>
            </div>
            <div className="icones">
                <img src={flash} alt="flash" />
                <span>9/10</span>
            </div>
            <div className="icones">
                <img src={users} alt="users" />
                <span>8/10</span>
            </div>
          </div>
          <button>Ver Carro</button>
        </div>

        <div className="CarItem">
            <div className="carroIcon upTop">
                <img src={preto} alt="preto" />
            </div>
          <h3>Mustang</h3>
          <div className="DivIcones">
            <div className="icones">
                <img src={date} alt="date" />
                <span>2025</span>
            </div>
            <div className="icones">
                <img src={speed} alt="speed" />
                <span>190 km/h</span>
            </div>
            <div className="icones">
                <img src={flash} alt="flash" />
                <span>9/10</span>
            </div>
            <div className="icones">
                <img src={users} alt="users" />
                <span>8/10</span>
            </div>
          </div>
          <button>Ver Carro</button>
        </div>
            
      </Slider>
    </div>
  );
}

export default MultipleItems;