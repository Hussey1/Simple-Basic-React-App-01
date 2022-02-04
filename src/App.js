import "./index.css";
import Card from "./Card";
import Loading from "./Loading";
import { useState, useEffect } from "react";
function App() {
  const url = "https://course-api.com/react-tours-project";
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeCard = (id) => {
    const newTourList = tours.filter((tour) => tour.id !== id);
    setTours(newTourList);
  };

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false);
    setTours(tours);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <Card removeCard={removeCard} tours={tours} />;
}

export default App;
