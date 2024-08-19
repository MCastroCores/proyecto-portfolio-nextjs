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
        <article className="flex flex-col justify-center items-center">
          <h2
            id="onboarding"
            className="text-xl sm:text-3xl text-center font-extrabold p-20 text-white"
          >
            ONBOARDING: MARTÍN CASTRO
          </h2>
          <p className="text-white text-justify mb-10 leading-relaxed sm:w-2/3">
            Soy Martín, un programador web con una pasión innata por la
            tecnología y el desarrollo de soluciones digitales. Desde muy joven,
            me sentí atraído por el mundo de la programación, lo que me llevó a
            especializarme en el diseño y desarrollo de sitios web. Mi enfoque
            principal es crear experiencias de usuario intuitivas y funcionales,
            combinando creatividad con una sólida base técnica.
          </p>
          <p className="text-white text-justify mb-10 leading-relaxed sm:w-2/3">
            He trabajado en una amplia variedad de proyectos, desde pequeñas
            páginas personales hasta complejas plataformas de comercio
            electrónico. Mi habilidad para adaptarme a diferentes tecnologías y
            lenguajes de programación me convierte en un profesional versátil,
            capaz de abordar cualquier desafío que se presente en el entorno
            digital.
          </p>
          <p className="text-white text-justify mb-10 leading-relaxed sm:w-2/3">
            Además de mi experiencia técnica, me gusta trabajar de manera
            colaborativa. Disfruto de estar en estrecha comunicación con mis
            clientes y equipos de trabajo para asegurarme de que cada proyecto
            cumpla con los objetivos establecidos y supere las expectativas. Mi
            atención al detalle y mi compromiso con la calidad son aspectos que
            me distinguen en cada tarea que emprendo.
          </p>
          <p className="text-white text-justify mb-10 leading-relaxed sm:w-2/3">
            En un mundo donde la tecnología avanza a pasos agigantados, me
            esfuerzo por mantenerme siempre actualizado con las últimas
            tendencias y herramientas, lo que me permite ofrecer soluciones
            modernas y efectivas. Sin duda, mi dedicación y amor por la
            programación se reflejan en cada línea de código que escribo,
            haciendo de mí un aliado confiable para cualquier proyecto digital.
          </p>
        </article>
      </section>
      <section id="skills">
        <section className="mb-20">
          <article>
            <h2 className="text-xl sm:text-3xl text-center font-extrabold p-20 text-white">
              TECNOLOGÍAS PILARES
            </h2>
            <p
              p
              className="text-white text-center mb-6 text-lg leading-relaxed"
            >
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
        <article className="flex flex-col justify-center items-center">
          <h2 className="text-xl sm:text-3xl text-center font-extrabold p-20 text-white">
            PRODUCTO: QUÉ PUEDO OFRECERTE
          </h2>
          <p className="text-white text-justify mb-10 leading-relaxed sm:w-2/3">
            Como desarrollador web, mi objetivo es ofrecer un producto de
            calidad que cubra cada fase del proceso de creación de páginas web
            estáticas o aplicaciones web, desde el análisis funcional hasta el
            despliegue final. Comienzo con un análisis funcional detallado,
            donde trabajo de cerca contigo para entender las necesidades
            específicas de tu proyecto. Esta fase es crucial para garantizar que
            todas las características y funcionalidades que necesitas se
            integren de manera efectiva en el diseño final.
          </p>
          <p className="text-white text-justify mb-10 leading-relaxed sm:w-2/3">
            Una vez que tenemos clara la funcionalidad, me enfoco en la
            experiencia de usuario (UX). Creo que una interfaz intuitiva y
            amigable es esencial para el éxito de cualquier aplicación o sitio
            web. Trabajo en la creación de flujos de navegación simples y
            efectivos, asegurándome de que los usuarios puedan interactuar con
            tu producto de manera fluida y satisfactoria. Esto no solo mejora la
            usabilidad, sino que también incrementa la satisfacción y retención
            de los usuarios.
          </p>
          <p className="text-white text-justify mb-10 leading-relaxed sm:w-2/3">
            En cuanto al desarrollo, utilizo tecnologías modernas y mejores
            prácticas de codificación para garantizar que el producto sea
            robusto, eficiente y escalable. Ya sea que estés buscando una página
            web estática rápida y sencilla o una aplicación web compleja, me
            adapto a las necesidades específicas del proyecto, asegurando un
            código limpio y bien estructurado.
          </p>
          <p className="text-white text-justify mb-10 leading-relaxed sm:w-2/3">
            Finalmente, me encargo del despliegue de la aplicación o sitio web.
            Gestiono todo el proceso, desde la configuración del servidor hasta
            la optimización para SEO, garantizando que tu producto esté listo
            para ser lanzado y cumplir con todas las expectativas. Con este
            enfoque integral, me comprometo a entregar un producto final que no
            solo cumpla, sino que supere tus expectativas.
          </p>
        </article>
      </section>
    </main>
  );
}
