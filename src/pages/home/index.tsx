import UserTemplate from '../../templates/user-template';
import CardProduct from '../../components/card-product';
import { LuGamepad2 } from "react-icons/lu";
import { GiClothes } from "react-icons/gi";
import { AiFillCar, AiOutlineGift, AiOutlineSync } from 'react-icons/ai';
import { FaTools } from 'react-icons/fa';
import { IoFastFoodOutline, IoSearch } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import { Carousel } from 'react-responsive-carousel';

import carosel1 from '../../assets/carousel-1.png';
import carosel2 from '../../assets/carousel-2.png';
import carosel3 from '../../assets/carousel-3.png';

const itemsCategory = [
  {
    id: 0,
    title: "Jogos",
    icon:<LuGamepad2 size={30} color="#555" />,
  },
  {
    id: 1,
    title: "Roupas",
    icon: <GiClothes size={30} color="#555" />,
  },
  {
    id: 2,
    title: "Veículos",
    icon: <AiFillCar size={30} color="#555" />,
  },
  {
    id: 3,
    title: "Ferramentas",
    icon: <FaTools size={30} color="#555" />,
  },
  {
    id: 4,
    title: "Comidas",
    icon: <IoFastFoodOutline size={30} color="#555" />,
  },
  {
    id: 5,
    title: "Presentes",
    icon: <AiOutlineGift size={30} color="#555" />,
  },
  {
    id: 6,
    title: "Outros",
    icon: <AiOutlineSync size={30} color="#555" />,
  }
];

export default function Home() {
  
  const navigate = useNavigate();

  return (
    <UserTemplate>
      <div className="max-w-[70%] self-center">
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

      <div className="flex flex-row h-[45px] rounded-md border-2 items-center mt-10">
        <input
          className="flex-1 h-full p-3"
          placeholder="Estou buscando por..."
        />
        <button onClick={() => navigate("/search-result")} className="px-4">
          <IoSearch size={30} />
        </button>
      </div>

      <h2 className="mt-[50px]">Itens recentes</h2>
      <div className="flex flex-wrap">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
      <p className="mt-4">Ver mais</p>

      <div className="bg-primary p-10 rounded-lg mt-[50px]">
        <h2 className="text-white text-[20px] mb-5">Categorias</h2>
        <div className="flex justify-between px-[10px]">
          {itemsCategory.map((category) => (
            <button
              onClick={() => navigate("/products/search")}
              className="flex flex-col justify-center items-center"
            >
              <div className="bg-white w-[80px] h-[80px] rounded-full flex justify-center items-center">
                {category.icon}
              </div>
              <span className="text-white mt-2">{category.title}</span>
            </button>
          ))}
        </div>
      </div>

      <h2 className="mt-[50px]">Anúncios</h2>
      <div className="flex flex-wrap">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
      <p className="mt-4">Ver mais</p>
    </UserTemplate>
  );
}