import type { PropsWithChildren } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

type UserTemplateProps = PropsWithChildren & {};


export default function UserTemplate(props: UserTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
        <div className="flex flex-1 flex-col px-[10%] py-[20px]">
          {props.children}
        </div>
      <Footer />
    </div>
  );
}