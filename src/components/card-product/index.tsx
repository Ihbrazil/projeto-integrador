import img_product from "../../assets/product.png";
import { useNavigate } from "react-router-dom";

export  default function CardProduct() {

    const navigate = useNavigate();
  
    return (
    <button onClick={() => navigate("/details")} className="shadow-md rounded-md p-10 flex flex-col justify-center items-center">
      <h1 className="text-center">Nome do Produto</h1>

      <img src={img_product} className="w-[100px] mt-2" />

      <p className="w-full mt-3">Amazon</p>
      <p className="w-full text-[25px]">R$ 799,99</p>
    </button>
  );
}