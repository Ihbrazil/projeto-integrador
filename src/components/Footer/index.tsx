import { BsLinkedin, BsFacebook } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-white p-10">
        
        <div className="flex justify-between mb-5">
          <h2 className="text-[22px] font-bold mb-5">Unybay</h2>
          <Link to="/contact" className="underline hover:no-underline">Fale conosco</Link>
        </div>

        <p className="text-center">
            © 2026 Unyleya Educacional | Todos os direitos reservados.
        </p>

        <div className="flex justify-center gap-2 mt-[20px]">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <BsLinkedin size={24} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <BsFacebook size={24} />
            </a>
        </div>
    </footer>
  );
}