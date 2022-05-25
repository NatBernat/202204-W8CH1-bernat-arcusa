import axios from "axios";

const getTotalShips = async () => {
  const {
    data: { count },
  } = await axios.get("https://swapi.dev/api/starships");
  return count;
};

export { getTotalShips };
