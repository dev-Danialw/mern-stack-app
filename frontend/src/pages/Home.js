import { useState, useEffect } from "react";

import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {
  const [workouts, setworkouts] = useState(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      const result = await fetch("/api/workouts");
      const json = await result.json();

      if (result.ok) {
        setworkouts(json);
      }
    };
    fetchWorkout();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};

export default Home;
