import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between w-full h-full lg:h-screen bg-white">
        <div className="flex max-w-[900px] max-h-[300px] md:max-w-[1200px] lg:max-h-[900px] xl:max-w-none xl:max-h-none">
          <Image
            width={2000}
            height={2000}
            src="/home_splash.png"
            alt="splash image"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col justify-start items-end px-8 sm:px-12 md:px-16 lg:px-20 xl:px-32 pb-20">
          <div className="py-5">
            <Image
              width={220}
              height={108}
              src="/logo_doce_punto.png"
              alt="doce punto logo"
            />
          </div>
          <span className="text-black pt-4 lg:pt-20 pb-8 font-bold">
            ACERCA DE NOSOTROS
          </span>
          <div className="flex flex-col lg:max-w-[408px] md:min-w-[408px] text-black text-sm text-justify">
            <span>
              Somos una organización con más de 29 años de experiencia en
              conjunto dentro del sector financiero.
            </span>
            <br />
            <span>
              Buscamos estimular el crecimiento de nuestros clientes,
              ofreciéndoles la más alta calidad en servicios financieros a
              título personal o por medio de factoraje financiero.
            </span>
            <br />
            <span>
              Fundada en 2022, nos convertimos en SOFOM con la finalidad de
              afianzar la solidez financiera que nos permite ampliar nuestros
              servicios a más PyMEs mexicanas.
            </span>
            <br />
            <span className="font-bold">
              Soluciones financieras para hacer crecer tu negocio.
            </span>
            <br />
            <span>
              Somos tu aliado estratégico para ofrecerte soluciones a la medida
              de tus necesidades con una alta asesoría personalizada, para
              llevar tu empresa al siguiente nivel.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
