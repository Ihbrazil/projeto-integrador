import UserTemplate from '../../templates/user-template';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carosel1 from '../../assets/carousel-1.png';
import carosel2 from '../../assets/carousel-2.png';
import carosel3 from '../../assets/carousel-3.png';

export default function Details() {
  return (
    <UserTemplate>
      <p className="text-[30px]">Echo Dot 8ª Geração</p>
      <div className=" flex mt-10 gap-10 justify-center">
        <div className="w-[40%]">
          <Carousel showThumbs={false}>
            <div>
              <img src={carosel1} alt="Banner 1" />
            </div>
            <div>
              <img src={carosel2} alt="Banner 2" />
            </div>
            <div>
              <img src={carosel3} alt="Banner 3" />
            </div>
          </Carousel>
        </div>
        <div>
          <div className="shadow-sm bg-white px-10 py-2">
            <p>Informações do vendedor</p>
            <p>Nome: João da Silva</p>
            <p>Email: joao.silva@example.com</p>
            <p>Telefone: (11) 98765-4321</p>
          </div>
          <div className="shadow-sm mt-4 bg-white px-10 py-2">
            <p className="text-[30px]">R$ 799,00</p>
          </div>
        </div>
      </div>

      <h3 className="mt-10 text-[20px]">Descrição do produto</h3>
      <div className="mt-3">
        <p>
          O Echo Dot 8ª Geração é um dispositivo inteligente com Alexa, que permite controlar sua casa inteligente, ouvir música, obter informações e muito mais, tudo com comandos de voz.
        </p>
        <p>
          Compatível com dispositivos inteligentes, controle por voz e integração com serviços de música.
        </p>
      </div>
   </UserTemplate>
  );
}