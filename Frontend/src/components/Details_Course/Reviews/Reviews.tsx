import { reviews } from "@/mock/db"
import { Icon_Start_reviews } from "../../../../public/icons/Details_Course_Icon/Reviews/Icon_Start";

interface propms {
    id: number,
    stars: number,
    name: string,
    description: string,
}

export function Reviews() {

    const info: propms[]= reviews;

    const renderStars = (stars: number) => {
        const fullStar = (index: number) => index < Math.floor(stars);
        
        return (
            <div className="flex">
                {Array.from({ length: stars }).map((_, index: number) => (
                    <Icon_Start_reviews className="mx-0.5" key={index} fill={fullStar(index) ? "#FBBC05" : "#fff"} />
                ))}
            </div>
        );
    };
    return (
        <section>
            <div>
                {info.map((item, index: number) => {
                    return (
                        <div key={index} className="border-b-2 mb-5 mt-5 pb-5">
                            <div className="flex flex-row mb-3 items-center gap-x-4">
                                {renderStars(item.stars)}
                                <p>{item.name}</p>
                            </div>
                            <p>{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
