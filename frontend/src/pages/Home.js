import { useState, useEffect } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();

  useEffect(() => {
    const fetchWorkout = async () => {
      const result = await fetch("/api/workouts");
      const json = await result.json();

      if (result.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
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
      <WorkoutForm />
    </div>
  );
};

export default Home;
