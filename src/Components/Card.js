import "./Card.css";
import { useState } from "react";

const Card = (props) => {
  const [ShowMore, setShowMore] = useState(false);

  const Titles = [
    "firstName",
    "lastName",
    "email",
    "person",
    "visit",
    "mobile",
    "company",
    "jobTitle",
  ];
  const VisitorDetails = Titles.map((Title) => {
    return [Title, props.details[Title]];
  });
  let subset = VisitorDetails.slice(0, 5);
  let buttonTitle = ShowMore ? "ShowLess" : "ShowMore";
  let details = ShowMore ? VisitorDetails : subset;
  let count = 0;
  return (
    <div className="card">
      <h2>Visitor</h2>
      {details.map(([title, detail], i) => {
        return (
          <p key={i}>
            <b>{title.charAt(0).toUpperCase() + title.slice(1)} : </b> {detail}
          </p>
        );
      })}
      <button onClick={() => setShowMore(!ShowMore)}>{buttonTitle}</button>
    </div>
  );
};

export default Card;
