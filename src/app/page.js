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
    <main className="min-h-screen w-full p-10 mb-20 bg-gray-900">
      <section className="mb-20" id="onboarding">
        <article>
          <h2 className="sm:text-3xl text-2xl text-center font-bold p-20 text-white">
            ONBOARDING: MARTÍN CASTRO
          </h2>
          <p className="text-white text-center mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            purus nec nunc tincidunt tincidunt.
          </p>
        </article>
      </section>
      <section id="skills">
        <section className="mb-20">
          <article>
            <h2 className="sm:text-3xl text-2xl text-center font-bold p-20 text-white">
              TECNOLOGÍAS FUNDAMENTALES
            </h2>
            <p className="text-white text-center mb-6">
              Tecnologías fundamentales para el desarrollo web:
            </p>
            <div className="flex justify-around gap-10 my-10">
              <IconHtml5 className="text-white" width="100px" height="100px" />
              <IconBxlCss3
                className="text-white"
                width="100px"
                height="100px"
              />
              <IconBrandJavascript
                className="text-white"
                width="100px"
                height="100px"
              />
            </div>
          </article>
        </section>
        <section className="mb-20">
          <article>
            <h2 className="sm:text-3xl text-2xl text-center font-bold p-20 text-white">
              TECNOLOGÍAS BACKEND
            </h2>
            <p className="text-white text-center mb-6">
              Para el desarrollo backend me especializo en las siguientes
              tecnologías:
            </p>
            <div className="flex justify-around gap-10 my-10">
              <IconNodejs className="text-white" width="100px" height="100px" />
              <IconTsnode className="text-white" width="100px" height="100px" />
              <IconMysql className="text-white" width="100px" height="100px" />
            </div>
          </article>
        </section>
        <section className="mb-20">
          <article>
            <h2 className="sm:text-3xl text-2xl text-center font-bold p-20 text-white">
              TECNOLOGÍAS FRONTEND
            </h2>
            <p className="text-white text-center mb-6">
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
          </article>
        </section>
        <section className="mb-20">
          <article>
            <h2 className="sm:text-3xl text-2xl text-center font-bold p-20 text-white">
              CONTROL DE VERSIONES
            </h2>
            <p className="text-white text-center mb-6">
              Para el control de versiones y colaboración en equipo me
              especializo en las siguientes tecnologías:
            </p>
            <div className="flex justify-around gap-10 my-10">
              <IconGit className="text-white" width="100px" height="100px" />
              <IconGithub className="text-white" width="100px" height="100px" />
            </div>
          </article>
        </section>
      </section>
      <section id="product">
        <article>
          <h2 className="sm:text-3xl text-2xl text-center font-bold p-20 text-white">
            PRODUCTO: QUÉ PUEDO OFRECERTE
          </h2>
          <p className="text-white text-center mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            purus nec nunc tincidunt tincidunt.
          </p>
        </article>
      </section>
    </main>
  );
}
