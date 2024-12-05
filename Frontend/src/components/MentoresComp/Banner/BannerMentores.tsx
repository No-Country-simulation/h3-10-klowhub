import Link from "next/link";
import Image from "next/image";
import BackgroundBanner from "../../../../public/Fondos_img/BackgroundBanner.png";
import { Banner_Props } from "@/services/Interfaces";

const BannerMentores: React.FC<Banner_Props> = ({
  backgroundImage,
  title,
  redirectTo,
  classes,
}) => {
  return (
    <div
      className={`relative w-full max-h-[500px] h-[300px] rounded-lg overflow-hidden ${classes}`}
    >
   
      <Image
        src={backgroundImage || BackgroundBanner}
        alt="Background image with abstract purple shapes"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />

    
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 z-10 bg-gradient-to-t from-black/50 to-transparent">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-sm md:text-lg leading-relaxed max-w-3xl">
          Aprende de los mejores: Impulsa tu conocimiento con nuestros mentores
          especializados, mejora tus habilidades con proyectos prácticos y
          obtén resultados reales en tus áreas de interés.
        </p>
        <Link href={redirectTo}>
        </Link>
      </div>
    </div>
  );
};

export default BannerMentores;
