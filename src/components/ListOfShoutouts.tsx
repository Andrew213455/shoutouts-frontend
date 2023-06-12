import Shoutout from "../models/Shoutout";
import "./ListOfShoutouts.css";
import SingleShoutout from "./SingleShoutout";

interface Props {
  shoutouts: Shoutout[];
  name?: string;
  update: () => void;
}

const ListOfShoutouts = ({ shoutouts, name, update }: Props) => {
  return (
    <div className="ListOfShoutouts">
      {name ? <h2>Shoutouts to {name}</h2> : <h2>All Shoutouts</h2>}
      <ul>
        {shoutouts.map((so) => {
          return <SingleShoutout key={so._id} shoutout={so} update={update} />;
        })}
      </ul>
    </div>
  );
};

export default ListOfShoutouts;
