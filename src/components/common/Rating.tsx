import { Star } from "lucide-react";

const Rating = ({ rating, size, color }: {rating: number, size: number, color: string}) => {
  const star = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      star.push(<Star key={i} size={size} className={`fill-current ${color}`} />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      star.push(<HalfStar key={i} size={size} color={color}/>);
    } else {
      star.push(<Star key={i} size={size} className={color}/>);
    }
  }

  return <div style={{display: "flex"}}>{star}</div>;
};

export default Rating;


const HalfStar = ({ size, color }: {size: number, color: string}) => (
  <div className="relative inline-block" style={{ width: size, height: size }}>
    <Star 
      size={size} 
      className={`absolute top-0 left-0 ${color}`} 
    />
    <div className="absolute top-0 left-0 overflow-hidden" style={{ width: size / 2 }}>
      <Star 
        size={size} 
        className={`fill-current ${color}`} 
      />
    </div>
  </div>
);