import Image from "next/image";

export default function Register() {
  return (
    <main className="min-h-screen w-full p-10 mb-20 bg-gray-900">
      <h2 className="text-xl sm:text-3xl text-center font-extrabold p-20 text-white">
        PROYECTOS
      </h2>
      <section>
        <article className="flex flex-col place-items-center">
          <h3 className="text-xl sm:text-2xl text-center font-extrabold p-20 text-white">
            X-LITE
          </h3>
          <Image
            className="rounded-full"
            src="/logo-xlite.png"
            alt="Logo de X-LITE"
            width={250}
            height={250}
          />
        </article>
        <article className="flex flex-col place-items-center">
          <h3 className="text-xl sm:text-2xl text-center font-extrabold p-20 text-white">
            VITALAPP
          </h3>
          <Image
            className="rounded-full"
            src="/logo-vitalapp.svg"
            alt="Logo de Vitalapp"
            width={250}
            height={250}
          />
        </article>
        <article className="flex flex-col place-items-center">
          <h3 className="text-xl sm:text-2xl text-center font-extrabold p-20 text-white">
            KOIDATE FISIOTERAPIA
          </h3>
          <Image
            className="rounded-full"
            src="/logo-koidate.png"
            alt="Logo de Koidate"
            width={250}
            height={250}
          />
        </article>
      </section>
    </main>
  );
}
