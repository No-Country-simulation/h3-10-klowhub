import CardMentoresComponent from "@/components/MentoresComp/CardMentoresComponent";

const mentor = {
    mentorImage: '/img/imagen.jpg', // URL de la imagen del mentor
    fullName: "Yhordi Choque Espinoza", // Nombre completo del mentor
    projectName: "GreenTech Innovations", // Nombre del proyecto del mentor
    projectImage: '/img/logo.png', // URL de la imagen del proyecto
    reviewCount: 75, // Cantidad de reseñas
    sessionCount: 150, // Cantidad de sesiones realizadas
    language: "Spanish", // Idioma que habla el mentor
    countryFlagIcon: '/img/bandera.png', // URL del ícono de la bandera del país
    hourlyRate: 100, // Precio por hora en dólares
    detailsLink: "", // Enlace para ver más detalles
  };
  
export default function PruebaPage() {
  return (
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
         detailsLink={mentor.detailsLink}/>
    </div>
  )
}
