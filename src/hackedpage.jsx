import { useLocation } from "react-router-dom";

const Hackedpage = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1>Datele tale au fost compromise!</h1>
      <h3>Utilizator: {location.state.username}</h3>
      <h3>Parola: {location.state.password}</h3>
    </>
  );
};

export default Hackedpage;
