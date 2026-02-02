import "./App.css";
import Card from "./components/card/card";
import FadeIn from "./components/fadeIn/FadeIn";
import Project from "./components/project/Project";

function App() {
  return (
    <>
      <header>
        <h1>&lt;kaua&gt;</h1>
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#projetos">Projetos</a>
          {/* <a href="#premiacoes">Premiações</a> */}
        </nav>
        <div>
          <a href="https://wa.me/82987424440" id="whatsapp" target="blank"></a>
          <a href="https://www.linkedin.com/in/kauaxavier032/" id="linkedin" target="blank"></a>
          <a href="https://github.com/Kaua032" id="github" target="blank"></a>
          {/* <form>
            <select name="language" id="language">
              <option value="pt-br">Português</option>
              <option value="en">English</option>
            </select>
          </form>  */}
        </div>
      </header>
      <section id="inicio">
        <div id="inicio_1">
          <FadeIn>
            <div id="inicio_text">
              <p id="ola">Olá, me chamo</p>
              <p id="nome">Kauã Xavier</p>
              <p id="texto">Sou desenvolvedor fullstack especializado na criação de soluções personalizadas para negócios. Com expertise em desenvolvimento web e aplicativos, atuo em todas as etapas do processo, desde a concepção até a entrega, transformando ideias em soluções tecnológicas que impulsionam resultados.</p>

              <a href="https://wa.me/82987424440" target="blank">Vamos Conversar</a>
            </div>
          </FadeIn>
          <FadeIn>
            <div>
              <img src="./inicioImg.png" alt="" />
            </div>
          </FadeIn>
        </div>
        <FadeIn>

        <div id="carrossel">
          <div className="track">
            <img src="./Nodejs.png" alt="" />
            <img src="./Express.png" alt="" />
            <img src="JavaScript.png" alt="" />
            <img src="React.png" alt="" />
            <img src="/Bootstrap.png" alt="" />
            <img src="/Tailwind.png" alt="" />
            <img src="/MySQL.png" alt="" />
            <img src="/MongoDB.png" alt="" />
            <img src="/Github.png" alt="" />
            <img src="/Sequelize.png" alt="" />
            <img src="/Handlebars.png" alt="" />
          </div>
          <div className="track" aria-hidden="true">
            <img src="./Nodejs.png" alt="" />
            <img src="./Express.png" alt="" />
            <img src="JavaScript.png" alt="" />
            <img src="React.png" alt="" />
            <img src="/Bootstrap.png" alt="" />
            <img src="/Tailwind.png" alt="" />
            <img src="/MySQL.png" alt="" />
            <img src="/MongoDB.png" alt="" />
            <img src="/Github.png" alt="" />
            <img src="/Sequelize.png" alt="" />
            <img src="/Handlebars.png" alt="" />
          </div>
        </div>
        </FadeIn>
      </section>
      <section id="projetos">
        <FadeIn>
          <h2>Projetos</h2>
        </FadeIn>
        <div id="projetos_area">
          <FadeIn>
            <Project link="https://github.com/Kaua032/Vida_Ativa_API" url="VidaAtiva.png" title="Vida Ativa" text="Desenvolvi um sistema de frequência para uma Associação, permitindo o registro de alunos, professores e chamadas. Ele ajuda os professores a monitorar a média de faltas diárias e mensais, contribuindo para a gestão eficiente." stacks={["NodejsMini.png", "ExpressMini.png", "JavaScriptMini.png", "ReactMini.png", "BootstrapMini.png", "MongoDBMini.png"]}/>
          </FadeIn>

          <FadeIn>
            <Project link="https://github.com/Kaua032/QDP-API" url="Quita do ypuã.png" title="Quinta do Ypuã" text="Um software dividido em duas partes. A primeira era a da pousada, onde mantinha o controle dos quarto reservados, livres e ocupados. A segunda já era do lado do cliente, onde poderia escolher os quartos  e efetuar suas reservas." stacks={["NodejsMini.png", "ExpressMini.png", "JavaScriptMini.png", "HandlebarsMini.png", "BootstrapMini.png", "SequelizeMini.png"]}/>
          </FadeIn>

          <FadeIn>

            <Project link="https://github.com/Kaua032/Jovem_Trabalhador_API" url="JovemTrabalhador.png" title="Jovem Trabalhador" text="O sistema consiste em uma base de dados de alunos provenientes de diversas escolas e instituições. É um software que funciona offline, permitindo que o cliente colete dados em escolas mais isoladas e com menor infraestrutura." stacks={["NodejsMini.png", "ExpressMini.png", "JavaScriptMini.png", "ReactMini.png", "BootstrapMini.png", "MongoDBMini.png"]}/>
          </FadeIn>
        </div>
      </section>
      {/* <section id="premiacoes">
        <h2>Premiações</h2>
        <div>
          <img src="./febic.jpeg" alt="" />
        </div>
      </section> */}
      <footer>
        <p>© 2025 - Kauã Xavier - Todos os direitos reservados</p>
      </footer>
    </>
  );
}

export default App;
