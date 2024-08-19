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
  IconNextdotjs,
  IconGithubactions,
  IconFirebase,
  IconVercel,
} from "./components/IconsSvg.jsx";

export default function Home() {
  return (
    <main className="min-h-screen w-full p-10 mb-20 bg-gray-900">
      <section className="mb-20">
        <article>
          <h2
            id="onboarding"
            className="text-xl sm:text-3xl text-center font-extrabold p-20 text-white"
          >
            ONBOARDING: MARTÍN CASTRO
          </h2>
          <p className="text-white text-center mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            purus nec nunc tincidunt tincidunt.
          </p>
        </article>
      </section>
      <section id="skills">
        <section className="mb-20">
          <article>
            <h2 className="text-xl sm:text-3xl text-center font-extrabold p-20 text-white">
              TECNOLOGÍAS PILARES
            </h2>
            <p className="text-white text-center mb-6 leading-relaxed">
              Tecnologías fundamentales para el desarrollo web:
            </p>
            <div className="flex justify-around gap-10 my-10">
              <IconHtml5
                className="text-white transition-transform transform hover:scale-110"
                width="100px"
                height="100px"
              />
              <IconBxlCss3
                className="text-white transition-transform transform hover:scale-110"
                width="100px"
                height="100px"
              />
              <IconBrandJavascript
                className="text-white transition-transform transform hover:scale-110"
                width="100px"
                height="100px"
              />
            </div>
          </article>
        </section>
      </section>
      <section className="mb-20">
        <article>
          <h2 className="text-xl sm:text-3xl text-center font-extrabold p-20 text-white">
            TECNOLOGÍAS BACKEND
          </h2>
          <p className="text-white text-center mb-6 text-lg leading-relaxed">
            Para el desarrollo backend me especializo en las siguientes
            tecnologías:
          </p>
          <div className="flex justify-around gap-10 my-10">
            <IconNodejs
              className="text-white transition-transform transform hover:scale-110"
              width="100px"
              height="100px"
            />
            <IconTsnode
              className="text-white transition-transform transform hover:scale-110"
              width="100px"
              height="100px"
            />
            <IconMysql
              className="text-white transition-transform transform hover:scale-110"
              width="100px"
              height="100px"
            />
          </div>
        </article>
      </section>
      <section className="mb-20">
        <article>
          <h2 className="text-xl sm:text-3xl text-center font-extrabold p-20 text-white">
            TECNOLOGÍAS FRONTEND
          </h2>
          <p className="text-white text-center mb-6 text-lg leading-relaxed">
            Para el desarrollo frontend me especializo en las siguientes
            tecnologías:
          </p>
          <div className="flex justify-around gap-10 my-10">
            <IconReactjsLine
              className="text-white transition-transform transform hover:scale-110"
              width="100px"
              height="100px"
            />
            <IconTsnode
              className="text-white transition-transform transform hover:scale-110"
              width="100px"
              height="100px"
            />
            <IconNextdotjs
              className="text-white transition-transform transform hover:scale-110"
              width="100px"
              height="100px"
            />
          </div>
        </article>
      </section>
      <section className="mb-20">
        <article>
          <h2 className="text-xl sm:text-3xl text-center font-extrabold p-20 text-white">
            CONTROL DE VERSIONES
          </h2>
          <p className="text-white text-center mb-6 text-lg leading-relaxed">
            Para el control de versiones y colaboración en equipo me especializo
            en las siguientes tecnologías:
          </p>
          <div className="flex justify-around gap-10 my-10">
            <IconGit
              className="text-white transition-transform transform hover:scale-110"
              width="100px"
              height="100px"
            />
            <IconGithub
              className="text-white transition-transform transform hover:scale-110"
              width="100px"
              height="100px"
            />
          </div>
        </article>
      </section>
      <section className="mb-20">
        <article>
          <h2 className="text-xl sm:text-3xl text-center font-extrabold p-20 text-white">
            DESPLIEGUE DE APLICACIONES
          </h2>
          <p className="text-white text-center mb-6 text-lg leading-relaxed">
            Para el despliegue de aplicaciones me especializo en las siguientes:
          </p>
          <div className="flex justify-around gap-10 my-10">
            <IconGithubactions
              className="text-white transition-transform transform hover:scale-110"
              width="100px"
              height="100px"
            />
            <IconFirebase
              className="text-white transition-transform transform hover:scale-110"
              width="100px"
              height="100px"
            />
            <IconVercel
              className="text-white transition-transform transform hover:scale-110"
              width="100px"
              height="100px"
            />
          </div>
        </article>
      </section>
      <section id="product" className="mb-20">
        <article>
          <h2 className="text-xl sm:text-3xl text-center font-extrabold p-20 text-white">
            PRODUCTO: QUÉ PUEDO OFRECERTE
          </h2>
          <p className="text-white text-center mb-6 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            purus nec nunc tincidunt tincidunt.
          </p>
        </article>
      </section>
    </main>
  );
}
