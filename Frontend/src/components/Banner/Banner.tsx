import Link from "next/link";
import Image from "next/image";
import BackgroundBanner from "../../../public/Fondos_img/BackgroundBanner.png";
import { Banner_Props } from "@/services/Interfaces";

const Banner: React.FC<Banner_Props> = ({
  backgroundImage,
  title,
  redirectTo,
  classes,
}) => {
  return (
    <div className={classes}>
      <div className="hover:opacity-80 relative rounded-lg">
        <Link href={redirectTo}>
          <Image
            src={backgroundImage || BackgroundBanner}
            alt="Background image with abstract purple shapes"
            objectFit="cover"
            className="overflow-hidden"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-md md:text-lg lg:text-2xl font-bold">
              {title}
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
