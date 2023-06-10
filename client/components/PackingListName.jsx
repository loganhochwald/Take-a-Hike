import { Link } from "react-router-dom";

const PackingListName = ({packingList}) => {

  return (
    <Link to={`/packinglist/${packingList.id}`}>
      <div>{packingList.name}</div>
    </Link>
  );
};

export default PackingListName;
s;
