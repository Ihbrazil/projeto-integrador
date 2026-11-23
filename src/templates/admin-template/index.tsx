import type { PropsWithChildren } from 'react';
import Footer from '../../components/footer-min/index.tsx';
import HeaderAdmin from '../../components/header-admin/index.tsx';

type AuthTemplateProps = PropsWithChildren & {};

export default function AuthTemplate(props: AuthTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col">
        <div className="bg-primary flex justify-between p-2"></div>
        
        <HeaderAdmin />

        <div className="flex flex-1 flex-col px-[10px] py-[20px] justify-center">
            {props.children}
        </div>

        <Footer />
    </div>
  );
}