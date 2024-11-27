interface StarRatingProps {
  rating: number;
  totalStars?: number;
  totalNumbers: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  totalStars = 5,
  className,
}) => {
  return (
    <div className={className}>
      <span className="flex space-x-1">
        {Array.from({ length: totalStars }, (_, index) => {
          const starIndex = index + 1;

          let starClass = "text-gray-400"; // Default: estrella vacía
          if (starIndex <= rating) {
            starClass = "text-yellow-500"; // Estrella llena
          } else if (starIndex - rating < 1) {
            starClass = "text-yellow-500 bg-clip-text text-opacity-50"; // Estrella fraccionaria
          }

          return (
            <span key={index} className={`text-2xl ${starClass}`}>
              ★
            </span>
          );
        })}
      </span>
    </div>
  );
};

export default StarRating;
