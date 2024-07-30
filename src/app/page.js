import {
  IconReactjsLine,
  IconTsnode,
  IconGit,
  IconGithub,
  IconJs,
  IconNodejs,
  IconHtml5,
  IconBxlCss3,
  IconBrandJavascript,
  IconMysql,
} from "./components/IconsSvg.jsx";

export default function Home() {
  return (
    <main className="min-h-screen w-full p-10 mb-20">
      <section className="mb-20">
        <article>
          <h2
            id="onboarding"
            className="sm:text-3xl text-2xl text-center font-bold p-20"
          >
            ONBOARDING: MARTÍN CASTRO
          </h2>
          <p>
            Lorem34 ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            nec purus nec nunc tincidunt tincidunt
          </p>
        </article>
      </section>
      <section className="mb-20">
        <article>
          <h2
            id="skills"
            className="sm:text-3xl text-2xl text-center font-bold p-20"
          >
            SKILLS: TECNOLOGÍAS DESTACADAS
          </h2>
          <p>Sólido conocimiento en las bases:</p>
          <div className="flex justify-around gap-10 my-10">
            <IconHtml5 className="text-white" width="100px" height="100px" />
            <IconBxlCss3 className="text-white" width="100px" height="100px" />
            <IconBrandJavascript
              className="text-white"
              width="100px"
              height="100px"
            />
          </div>
          <p>
            Para el desarrollo backend me especializo en las siguientes
            tecnologías:
          </p>
          <div className="flex justify-around gap-10 my-10">
            <IconNodejs className="text-white" width="100px" height="100px" />
            <IconTsnode className="text-white" width="100px" height="100px" />
            <IconMysql className="text-white" width="100px" height="100px" />
          </div>
          <p>
            Para el desarrollo frontend me especializo en las siguientes
            tecnologías:
          </p>
          <div className="flex justify-around gap-10 my-10">
            <IconReactjsLine
              className="text-white"
              width="100px"
              height="100px"
            />
            <IconTsnode className="text-white" width="100px" height="100px" />
          </div>
          <p>
            Para el control de versiones y colaboración en equipo me especializo
            en las siguientes tecnologías:
          </p>
          <div className="flex justify-around gap-10 my-10">
            <IconGit className="text-white" width="100px" height="100px" />
            <IconGithub className="text-white" width="100px" height="100px" />
          </div>
        </article>
      </section>
      <section className="mb-20">
        <article>
          <h2
            id="product"
            className="sm:text-3xl text-2xl text-center font-bold p-20"
          >
            PRODUCTO: QUÉ PUEDO OFRECERTE
          </h2>
          <p>
            Lorem34 ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            nec purus nec nunc tincidunt tincidunt
          </p>
        </article>
      </section>
    </main>
  );
}
