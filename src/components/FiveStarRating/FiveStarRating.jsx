import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

export function FiveStarRating(props) {
  const starIcon = [];
  let c = 0;
  for (let i = 0; i < Math.floor(props.rating); i++) {
    starIcon.push(<StarFill key={"star-fill" + c} />);
    c++;
  }
  if (props.rating % 1 !== 0) {
    starIcon.push(<StarHalf key={"star-half" + c} />);
    c++;
  }

  while (c < 5) {
    starIcon.push(<StarEmpty key={"star-empty" + c} />);
    c++;
  }

  return <div>{starIcon}</div>;
}
