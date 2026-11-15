import { BsLinkedin, BsFacebook } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="bg-primary text-white p-10">
        <h2 className="text-[22px] font-bold mb-5">Unybay</h2>

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