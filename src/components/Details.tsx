import { useEffect, useState } from "react";
import { getShoutoutsByName } from "../services/shoutoutApiService";
import "./Details.css";
import ListOfShoutouts from "./ListOfShoutouts";
import Shoutout from "../models/Shoutout";
import { Link, useParams } from "react-router-dom";
import NewSOForm from "./NewSOForm";

const Details = () => {
  const [userShoutouts, setUserShoutouts] = useState<Shoutout[]>([]);

  const name: string = useParams().to!;

  const updateShoutouts = (): void => {
    getShoutoutsByName(name).then((res) => {
      setUserShoutouts(res);
      console.log(res);
    });
  };

  useEffect(() => {
    getShoutoutsByName(name).then((res) => {
      setUserShoutouts(res);
      console.log(res);
    });
  }, []);
  return (
    <div className="Details">
      <Link to={`/`}>
        <p>Back to all Shoutouts</p>
      </Link>
      <NewSOForm update={updateShoutouts} name={name} />
      <ListOfShoutouts
        shoutouts={userShoutouts}
        name={name}
        update={updateShoutouts}
      />
    </div>
  );
};

export default Details;
