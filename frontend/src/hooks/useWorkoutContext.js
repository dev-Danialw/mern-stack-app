import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useWorkoutContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "useWorkoutContext must be used within a AppContextProvider"
    );
  }

  return context;
};
