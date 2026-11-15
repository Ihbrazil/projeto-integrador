import UserTemplate from '../../templates/user-template';
import { FaHandshake, FaGlobeAmericas, FaTrophy, FaShieldAlt } from 'react-icons/fa';

export default function About() {
  const values = [
    {
      id: 1,
      icon: <FaHandshake size={40} className="text-secondary" />,
      title: "Confiança",
      description: "Construímos relacionamentos baseados em transparência e honestidade com nossos usuários."
    },
    {
      id: 2,
      icon: <FaGlobeAmericas size={40} className="text-secondary" />,
      title: "Acessibilidade",
      description: "Tornamos o comércio digital acessível para todos, em qualquer lugar do Brasil."
    },
    {
      id: 3,
      icon: <FaTrophy size={40} className="text-secondary" />,
      title: "Excelência",
      description: "Buscamos constantemente melhorar e oferecer o melhor serviço do mercado."
    },
    {
      id: 4,
      icon: <FaShieldAlt size={40} className="text-secondary" />,
      title: "Segurança",
      description: "Protegemos dados e transações com as melhores práticas de segurança digital."
    }
  ];

  const team = [
    {
      id: 1,
      name: "Carlos Silva",
      role: "Fundador & CEO",
      image: "👨‍💼"
    },
    {
      id: 2,
      name: "Marina Costa",
      role: "Diretora de Tecnologia",
      image: "👩‍💻"
    },
    {
      id: 3,
      name: "Roberto Alves",
      role: "Diretor Comercial",
      image: "👨‍💼"
    },
    {
      id: 4,
      name: "Ana Santos",
      role: "Gerente de Atendimento",
      image: "👩‍💼"
    }
  ];

  return (
    <UserTemplate>
      {/* Hero Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-12 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Bem-vindo à Unybay</h1>
          <p className="text-xl mb-6">
            A plataforma mais confiável para comprar e vender online no Brasil
          </p>
          <p className="text-lg opacity-90">
            Conectando milhões de pessoas e oportunidades desde 2015
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-primary">Nossa História</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-justify mb-4 text-gray-700">
              Fundada em 2015, a Unybay nasceu com uma missão simples, mas poderosa: 
              democratizar o comércio eletrônico e dar oportunidades iguais para todos 
              os brasileiros. Começamos como uma pequena startup de 5 pessoas em São Paulo 
              e hoje somos referência no mercado de marketplace.
            </p>
            <p className="text-justify text-gray-700">
              Ao longo dos anos, evoluímos constantemente para oferecer uma experiência 
              segura, intuitiva e confiável. Hoje, facilitamos milhões de transações por ano 
              e contamos com uma comunidade ativa de vendedores e compradores em todo o país.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-secondary">8M+</span>
                <span className="text-gray-700">Usuários Ativos</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-secondary">50M+</span>
                <span className="text-gray-700">Produtos Anunciados</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-secondary">500K+</span>
                <span className="text-gray-700">Vendedores Cadastrados</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-secondary">R$ 10B+</span>
                <span className="text-gray-700">Volume de Transações</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-primary">Missão, Visão & Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-primary">
            <h3 className="text-2xl font-bold text-primary mb-3">Missão</h3>
            <p className="text-gray-700">
              Conectar pessoas e oportunidades, tornando o comércio digital seguro, 
              acessível e inclusivo para todos os brasileiros.
            </p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-lg border-2 border-primary">
            <h3 className="text-2xl font-bold text-primary mb-3">Visão</h3>
            <p className="text-gray-700">
              Ser a plataforma mais confiável e inovadora de marketplace da América Latina, 
              transformando vidas através do comércio digital.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg border-2 border-primary">
            <h3 className="text-2xl font-bold text-primary mb-3">Valores</h3>
            <p className="text-gray-700">
              Confiança, Transparência, Inovação, Segurança e Responsabilidade Social 
              guiam todas as nossas decisões.
            </p>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-primary">Por Que Confiar em Nós</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div key={value.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-secondary">
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-primary">{value.title}</h3>
              <p className="text-gray-700 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-primary">Nossos Diferenciais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="text-3xl">🚀</div>
            <div>
              <h3 className="text-lg font-bold mb-2">Tecnologia de Ponta</h3>
              <p className="text-gray-700">
                Utilizamos inteligência artificial e machine learning para melhor 
                experiência de busca e recomendações personalizadas.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">🛡️</div>
            <div>
              <h3 className="text-lg font-bold mb-2">Proteção ao Comprador</h3>
              <p className="text-gray-700">
                Garantia de compra segura com proteção de pagamento e 
                reembolso garantido em caso de problemas.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">🚚</div>
            <div>
              <h3 className="text-lg font-bold mb-2">Logística Integrada</h3>
              <p className="text-gray-700">
                Parcerias com as melhores transportadoras para garantir 
                entrega rápida e segura em todo o Brasil.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">💬</div>
            <div>
              <h3 className="text-lg font-bold mb-2">Suporte 24/7</h3>
              <p className="text-gray-700">
                Equipe de atendimento disponível 24 horas por dia para 
                resolver suas dúvidas e problemas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nosso Time */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-primary">Nosso Time</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-primary to-secondary h-32 flex items-center justify-center text-6xl">
                {member.image}
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compromisso Social */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-primary">Compromisso Social</h2>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
          <p className="text-gray-700 mb-6">
            Acreditamos que o sucesso dos negócios deve vir acompanhado de responsabilidade social. 
            A Unybay investe em programas de inclusão digital, educação e sustentabilidade ambiental.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-primary mb-2">📚 Educação</h4>
              <p className="text-sm text-gray-700">
                Oferecemos cursos gratuitos de empreendedorismo e comércio digital 
                para comunidades carentes.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-primary mb-2">🌍 Sustentabilidade</h4>
              <p className="text-sm text-gray-700">
                Compensamos emissões de carbono e promovemos venda de produtos 
                sustentáveis na plataforma.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-primary mb-2">👥 Inclusão</h4>
              <p className="text-sm text-gray-700">
                Temos programas especiais para mulheres empreendedoras e 
                pessoas com deficiência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-16 bg-primary text-white rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
        <p className="text-lg mb-6 opacity-90">
          Junte-se a milhões de usuários e descubra uma nova forma de comprar e vender
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Cadastre-se como Comprador
          </button>
          <button className="bg-secondary px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">
            Torne-se Vendedor
          </button>
        </div>
      </section>
    </UserTemplate>
  );
}