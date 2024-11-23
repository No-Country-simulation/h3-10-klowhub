'use client';

import { detalles_pages } from "@/mock/db";

interface Props {
  id: number;
}

export function Page_Details_Course({ id }: Props) {

  console.log("ID recibido:", id);

  const parsedId = Number(id);

  const filteredInfo = detalles_pages.find(item => {
    console.log("Comparando item.id:", item.id, "con parsedId:", parsedId);
    return item.id === parsedId;
  });

  console.log("Detalles completos:", detalles_pages);
  console.log("Curso filtrado:", filteredInfo);

  return (
    <div>
      {filteredInfo ? (
        <>
          <h2>{filteredInfo.title}</h2>
          <p>{filteredInfo.description}</p>
        </>
      ) : (
        <p>No information available.</p>
      )}
    </div>
  );
}
