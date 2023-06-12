import Shoutout from "../models/Shoutout";
import "./SingleShoutout.css";
import { Link } from "react-router-dom";
import { deleteOneShoutout } from "../services/shoutoutApiService";

interface Props {
  shoutout: Shoutout;
  update: () => void;
}

const SingleShoutout = ({ shoutout, update }: Props) => {
  const deleteHandler = (): void => {
    deleteOneShoutout(shoutout._id!).then((res) => {
      console.log(res);
      update();
    });
  };

  return (
    <li className="SingleShoutout">
      <Link to={`/user/${encodeURIComponent(shoutout.to)}`}>
        <h3>Shoutout to {shoutout.to}</h3>
      </Link>
      <Link to={`/user/${encodeURIComponent(shoutout.from)}`}>
        <p>- from {shoutout.from}</p>
      </Link>
      <p>{shoutout.text}</p>
      {shoutout.shoutoutPhoto && (
        <img src={shoutout.shoutoutPhoto} alt="shoutout" />
      )}
      <button onClick={deleteHandler}>delete</button>
    </li>
  );
};

export default SingleShoutout;
