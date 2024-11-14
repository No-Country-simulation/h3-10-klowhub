import Link from "next/link";
import Inputlogin from "../FormLogin/Input-login";
import FacebookIcon from "../FormLogin/iconos/FacebookIcon";
import GithubIcon from "../FormLogin/iconos/GithubIcon";
import GoogleIcon from "../FormLogin/iconos/GoogleIcon";
import Image from "next/image";
export default function LoginPage() {
  return (
    <div className="relative flex w-screen h-screen max-xl:flex-col max-md:h-auto ">
      <Image 
       src={'/fondosimg/fondo1.png'}
       alt="Fondo de login"
       fill
       priority
       className=" -z-10 object-cover object-center"
       />
       <h2 className="pb-6 w-[50%] max-xl:w-auto max-xl:text-center 
       max-xl:backdrop-blur-md max-xl:bg-[rgba(32,34,47,0.23)] max-md:px-0 font-semibold text-6xl pt-20 pl-12 ">KlowHub</h2>
      <div className="w-[50%] max-xl:w-auto h-full flex flex-col items-center justify-center 
      backdrop-blur-md bg-[#20222F3B] px-5">
        <section className="flex flex-col items-center gap-3 max-w-[552px]">
        <h6 className="text-base font-bold mb-8">Bienvenido de nuevo. Inicia sesión para continuar creando y aprendiendo en KlowHub.</h6>
        
        <form className="flex flex-col gap-3  ">
          <Inputlogin type="email" name="email" placeholder="Email"/>
          <Inputlogin type="password" name="password" placeholder="Password"/>
          <p className="text-[17px] mt-10 mb-5 text-center">Al registrarse, aceptas nuestras 
            <Link className="text-[#BCA2FF]" href={''}> Condiciones de uso</Link> y nuestra 
            <Link href={''} className="text-[#BCA2FF]"> Política de privacidad</Link></p>
          <button  type="submit" className="transition-colors w-full max-w-[300px] mx-auto border-transparent rounded-md
           my-5 py-3 bg-[#702486] hover:bg-transparent hover:border-white border-2 border-solid">Iniciar sesión</button>
        </form>

        <p className="text-[16px] font-bold">O continuar con</p>
        <section className="flex w-full gap-4 justify-center ">
          <span className="border-solid border-2 border-white p-3 rounded-full"> <GithubIcon/> </span>
          <span className="border-solid border-2 border-white p-3 rounded-full"> <FacebookIcon/> </span>
          <span className="border-solid border-2 border-white p-3 rounded-full"> <GoogleIcon/> </span> 
        </section>
        
        <div className="flex items-start justify-center gap-3 mt-3">
          <Inputlogin type="checkbox" name="checkbox" placeholder="" className="w-[22px] h-[22px]  max-w-7"/>
          <p>Quiero recibir novedades y consejos de la plataforma</p>
        </div>
        
        <div className="flex gap-3 justify-evenly items-center mt-7">
          <p>¿No tienes tienes cuenta?</p>
          <Link href={'/register'} className="text-[#7CB4FF]">Regístrate</Link>
        </div>
        
        </section>
        
      </div>
    </div>
  )
}
