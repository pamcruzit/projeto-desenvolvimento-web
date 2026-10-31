
function Header() {
  return (
    <header>
      <h1>Auto G3 Multimarcas</h1>
    </header>
  );
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
}

function Article({ titulo, autor, data, conteudo }) {
  return (
    <article>
      <h2>{titulo}</h2>
      <p>Por: {autor}</p>
      <time dateTime="2026-08-05">{data}</time>

      <figure>
        <img
          src="https://static.wixstatic.com/media/34df90_5c6c21cabaa64843bbc0f6575616f534~mv2.png/v1/fill/w_1071,h_507,al_c,q_90,enc_avif,quality_auto/Mustang.png"
          alt="Veículo anunciado pela Auto G3 Multimarcas"
          width="300"
        />
      </figure>

      <p>{conteudo.descricao}</p>

      <ul>
        {conteudo.opcionais.map((opcional) => (
          <li key={opcional}>{opcional}</li>
        ))}
      </ul>

      <p>{conteudo.mensagem}</p>
      <p>{conteudo.endereco}</p>
      <p>{conteudo.telefone}</p>
      <p>{conteudo.promocao}</p>
    </article>
  );
}

function Sidebar() {
  return (
    <aside>
      <h2>Visite o site oficial</h2>
      <p>
        Clique neste{" "}
        <a
          href="https://www.autog3multimarcas.com/"
          target="_blank"
          rel="noreferrer"
        >
          site
        </a>{" "}
        para saber mais.
      </p>

      <h3>Posts relacionados</h3>
      <ul>
        <li><a href="#estoque">Conheça nosso estoque</a></li>
        <li><a href="#contato">Entre em contato</a></li>
      </ul>
    </aside>
  );
}

function Footer() {
  return (
    <footer id="contato">
      <p>Entre em contato e agende sua visita!</p>
      <p>&copy; 2026 Auto G3 Multimarcas. Todos os direitos reservados.</p>
    </footer>
  );
}

function App() {
  const post = {
    titulo: "CITROËN C4 LOUNGE TENDANCE 2.0 FLEX AUTOMÁTICO",
    autor: "Auto G3 Multimarcas",
    data: "05 de agosto de 2026",
    conteudo: {
      descricao:
        "Ano/Modelo: 2014 | Motor 2.0 Flex | Câmbio Automático | 169.000 km | R$ 49.900,00",
      opcionais: [
        "Central multimídia touchscreen",
        "Ar-condicionado digital dual zone",
        "Rodas de liga leve",
        "Direção elétrica",
        "Vidros e travas elétricas",
        "Faróis de neblina",
      ],
      mensagem: "Veículo de ótima procedência, pronto para rodar!",
      endereco: "Rua Cuiabá, 2538 – Cascavel/PR",
      telefone: "(45) 98809-9315",
      promocao:
        "Seu próximo carro está aqui na AUTO G3 MULTIMARCAS! Aceitamos seu usado na troca e facilitamos o financiamento.",
    },
  };

  return (
    <>
      <Header />
      <Navigation />

      <main id="estoque">
        <Article
          titulo={post.titulo}
          autor={post.autor}
          data={post.data}
          conteudo={post.conteudo}
        />
        <Sidebar />
      </main>

      <Footer />
    </>
  );
}

export default App;
