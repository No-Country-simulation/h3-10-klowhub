import CardCoursesComponent from "@/components/CoursesComp/CardCourses";
import CardMentoresComponent from "@/components/MentoresComp/CardMentoresComponent";

const mentor = {
  mentorImage: "/img/imagen.jpg", // URL de la imagen del mentor
  fullName: "Yhordi Choque Espinoza", // Nombre completo del mentor
  projectName: "GreenTech Innovations", // Nombre del proyecto del mentor
  projectImage: "/img/logo.png", // URL de la imagen del proyecto
  reviewCount: 75, // Cantidad de reseñas
  sessionCount: 150, // Cantidad de sesiones realizadas
  language: "Spanish", // Idioma que habla el mentor
  countryFlagIcon: "/img/bandera.png", // URL del ícono de la bandera del país
  hourlyRate: 100, // Precio por hora en dólares
  detailsLink: "", // Enlace para ver más detalles
};

const course = {
  mainImageCourse: "/img/imagen.jpg",
  altMainImageCourse: "imagen del curso",
  title: "Metodologías Ágiles",
  projectName: "GreenTech Innovations", // Nombre del proyecto del mentor
  projectImage: "/img/logo.png", // URL de la imagen del proyecto
  description:
    "Este es un curso sobre metodologías ágiles, como Kanban, Scrum, XProgramming, etcétera",
  sector: "string",
  sellerImage: "/img/imagen.jpg",
  premium: false,
  stars: 4.5,
  tags: ["Proyect Managment", "Agilidad", "Scrum"],
  price: 878,
  califications: 98,
  width: 30,
  heigth: 10,
};

export default function PruebaPage() {
  return (
    <div>
      <div>
        <h1>Aqui puedo hacer mis pruebas</h1>
        <CardMentoresComponent
          mentorImage={mentor.mentorImage}
          fullName={mentor.fullName}
          projectImage={mentor.projectImage}
          projectName={mentor.projectName}
          reviewCount={mentor.reviewCount}
          sessionCount={mentor.sessionCount}
          language={mentor.language}
          countryFlagIcon={mentor.countryFlagIcon}
          hourlyRate={mentor.hourlyRate}
          detailsLink={mentor.detailsLink}
        />
      </div>
      <div>
        <CardCoursesComponent
          mainImageCourse={course.mainImageCourse}
          altMainImageCourse={course.altMainImageCourse}
          title={course.title}
          description={course.description}
          tags={course.tags}
          projectName={course.projectName}
          projectImage={course.projectImage}
          sector={course.sector}
          stars={course.stars}
          premium={course.premium}
          sellerImage={course.sellerImage}
          califications={course.califications}
          price={course.price}
        ></CardCoursesComponent>
      </div>
    </div>
  );
}
