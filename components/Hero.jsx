import Image from "next/image"

export const Hero = () => {
  return (
    <>
    <div className="flex justify-between items-center w-full h-screen">
      <div className="flex w-[700px]">
      <Image width={2000} height={2000} src="/home_splash.png" alt="" objectFit="cover"/>

      </div>
      <div className="flex justify-end items-start">
        <span className="">
          ACERCA DE NOSOTROS
        </span>
      </div>
    </div>
    </>
  )
}