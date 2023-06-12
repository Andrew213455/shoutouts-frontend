import { useContext, useEffect, useState } from "react";
import ListOfShoutouts from "./ListOfShoutouts";
import "./Main.css";
import NewSOForm from "./NewSOForm";
import { getAllShoutouts } from "../services/shoutoutApiService";
import Shoutout from "../models/Shoutout";
import AuthContext from "../context/AuthContext";
import SignIn from "./SignIn";

const Main = () => {
  const [allShoutouts, setAllShoutouts] = useState<Shoutout[]>([]);
  const { user } = useContext(AuthContext);

  const updateShoutouts = (): void => {
    getAllShoutouts().then((res) => {
      setAllShoutouts(res);
      console.log(res);
    });
  };

  useEffect(() => {
    updateShoutouts();
  }, []);
  return (
    <main className="Main">
      <ListOfShoutouts shoutouts={allShoutouts} update={updateShoutouts} />
      {user ? <NewSOForm update={updateShoutouts} /> : <SignIn />}
    </main>
  );
};

export default Main;
