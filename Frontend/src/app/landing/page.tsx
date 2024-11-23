import { courseCard } from "@/mock/db";
import CardCourse from "@/components/Card_Course/CardCourse";
export default function landing() {
  const base = courseCard;
  return (
    <div>
      <p>Cursos</p>
      <main className="h-screen ">
        {base.map((items) => {
          return <CardCourse course={items} key={items.title} />;
        })}
      </main>
    </div>
  );
}
