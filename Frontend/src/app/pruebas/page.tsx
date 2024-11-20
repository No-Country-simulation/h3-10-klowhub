import CardMentoresComponent from "@/components/MentoresComp/CardMentoresComponent";
import { db } from '../../mock/db'

export default function PruebaPage() {

  const base = db


  return (
    <div className="flex flex-row gap-x-4 justify-center mt-10">
      {base.map((items) => {
        return <CardMentoresComponent mentor={items} />
      })}
    </div>
  )
}
