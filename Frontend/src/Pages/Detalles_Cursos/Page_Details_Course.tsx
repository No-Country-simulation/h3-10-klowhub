'use client';

import { useBreadcrumbs } from "@/Hooks/useBreadcrumbs";
import { detalles_pages } from "@/mock/db";
import Link from "next/link";

interface Props {
  id: number;
}

export function Page_Details_Course({ id }: Props) {


  const parsedId = Number(id);

  const filteredInfo = detalles_pages.find(item => {
    console.log("Comparando item.id:", item.id, "con parsedId:", parsedId);
    return item.id === parsedId;
  });


  const breadcrumbs = useBreadcrumbs();
  return (
    <section>
      <div>
        <div className="flex flex-row mt-4 mb-4">
          {breadcrumbs?.map(({ name, path, isLast }) => (
            <li key={path} className="flex flex-row items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <div className="flex flex-row">
                  <span className="font-bold">{filteredInfo?.title}</span>
                </div>
              ) : (
                <Link href={path} className="hover:underline">
                  {name}
                </Link>
              )}
            </li>
          ))}
        </div>
      </div>
      <div>
        {filteredInfo ? (
          <>
            <h2>titulo: {filteredInfo.title}</h2>
            <p>Descripcion: {filteredInfo.description}</p>
          </>
        ) : (
          <p>No information available.</p>
        )}
      </div>
    </section>
  );
}
