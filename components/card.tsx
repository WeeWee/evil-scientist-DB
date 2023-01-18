import { listType } from "../pages";
import {
  UsersIcon,
  CalendarDaysIcon,
  MinusSmallIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
const Card = ({ item }: { item: listType }) => {
  return (
    item && (
      <article className="">
        <div className="px-2 flex flex-col items-start text-gray-600">
          <h1 className="text-2xl font-semibold capitalize text-black py-2">
            {item.name}
          </h1>
          <p className="flex items-center py-1">
            <CalendarDaysIcon className="w-6 h-6" />
            {item.age} years old
          </p>
          <p className="flex items-center py-1">
            <UsersIcon className="w-6 h-6" />
            {item.henchmen} henchmen
          </p>

          <p className="flex items-center py-1">
            <StarIcon className="w-6 h-6" />
            {item.description}
          </p>
        </div>
      </article>
    )
  );
};

export default Card;
