import "./App.css";
import Card from "./components/card/card";
import Project from "./components/project/Project";

function App() {
  return (
    <>
      <header>
        <h1>&lt;kaua&gt;</h1>
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#sobre">Sobre</a>
          <a href="projetos">Projetos</a>
        </nav>
        <div>
          <a href="https://wa.me/82987424440" id="whatsapp" target="blank"></a>
          <a href="https://www.linkedin.com/in/kauaxavier032/" id="linkedin" target="blank"></a>
          <a href="https://github.com/Kaua032" id="github" target="blank"></a>
          <form>
            <select name="language" id="language">
              <option value="pt-br">Português</option>
              <option value="en">English</option>
            </select>
          </form>
        </div>
      </header>
      <section id="inicio">
        <div id="inicio_1">
          <div id="inicio_text">
            <p id="ola">Olá, me chamo</p>
            <p id="nome">Kauã Xavier</p>
            <p id="texto">Sou desenvolvedor fullstack especializado na criação de soluções personalizadas para negócios. Com expertise em desenvolvimento web e aplicativos, atuo em todas as etapas do processo, desde a concepção até a entrega, transformando ideias em soluções tecnológicas que impulsionam resultados.</p>

            <a href="https://wa.me/82987424440" target="blank">Vamos Conversar</a>
          </div>
          <div>
            <img src="./inicioImg.png" alt="" />
          </div>
        </div>
        <div id="carrossel">
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
      </section>
      <section id="sobre">
        <div id="sobre_1">
          <div>
            <img src="./sobrePerfil.png" alt="" />
          </div>
          <div id="sobreMim">
            <h2>Sobre <strong>mim</strong></h2>
            <p>Sou uma pessoa proativa, autodidata e resiliente, com facilidade para aprender de forma prática e resolver problemas de forma criativa. Tenho boa organização e gestão do tempo, conciliando faculdade, curso técnico e projetos pessoais com consistência. Gosto de colaborar em equipe, busco sempre melhorar processos e estou em constante evolução pessoal e profissional.</p>
            <div id="info">
              <p><strong>Nome:</strong> Kauã de Araújo Xavier</p>
              <p><strong>Idade:</strong> 20</p>
              <p><strong>Telefone:</strong> (82) 987424440</p>   
              <p><strong>Gmail:</strong> kauaxavier032@gmail.com</p>           
            </div>
            <a href="">Download CV</a>
          </div>
        </div>
        <div id="sobre_2">
          <h2>O que eu faço?</h2>
          <div id="sobre_area">
            <Card url="design-de-ux.png" title="UI/UX" text="Desenvolvimento de todo o design da sua aplicação."/>
            <Card url="desenvolvimento-web.png" title="Desenvolvimento" text="Faço todo o desenvolvimento do seu Web Site ou App."/>
            <Card url="cloud-rain.png" title="Branding" text="Reuniões para acrescentar ideias e saber se o desenvolvimento está de acordo com o que deseja."/>
          </div>
        </div>
      </section>
      <section id="projetos">
        <h2>Projetos</h2>
        <div id="projetos_area">
          <Project link="" url="" title="Vida Ativa" text="Desenvolvi um sistema de frequência para uma Associação, permitindo o registro de alunos, professores e chamadas. Ele ajuda os professores a monitorar a média de faltas diárias e mensais, contribuindo para a gestão eficiente." stacks={["NodejsMini.png", "ExpressMini.png", "JavaScriptMini.png", "ReactMini.png", "BootstrapMini.png", "MongoDBMini.png"]}/>
        </div>
      </section>
    </>
  );
}

export default App;
