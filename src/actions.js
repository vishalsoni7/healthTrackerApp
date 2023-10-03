import axios from "axios";

// fetch
export const fetchExerciseData = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://assignment17.vishalsoni7.repl.co/exercises"
    );
    const data = response.data.allExercises;
    dispatch({ type: "FETCH_EXERCISES_DATA", payload: data });
  } catch (error) {
    console.error("Error while fetching exercise data", error);
    dispatch({ type: "FETCH_EXERCISES_FAILURE" });
  }
};

export const fetchFoodData = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://assignment17.vishalsoni7.repl.co/foods"
    );
    const data = response.data.allFoods;
    dispatch({ type: "FETCH_FOODS_DATA", payload: data });
  } catch (error) {
    console.error("error while fetching food data", error);
    dispatch({ type: "FETCH_FOODS_FAILURE" });
  }
};

export const fetchGoalData = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://assignment17.vishalsoni7.repl.co/goals"
    );
    const data = response.data.allGoals;
    dispatch({ type: "FETCH_GOALS_DATA", payload: data });
  } catch (error) {
    console.error("error while fetching goal data", error);
    dispatch({ type: "FETCH_GOALS_FAILURE" });
  }
};

// add
export const addExerciseData = (exerciseData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://assignment17.vishalsoni7.repl.co/exercises",
      exerciseData
    );
    const data = response.data.exerciseToBeAdded;
    dispatch({ type: "ADD_EXERCISE", payload: data });
  } catch (error) {
    console.error("error while adding exercise data", error);
    dispatch({ type: "FAILED_TO_ADD_EXERCISE" });
  }
};

export const addFoodData = (foodData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://assignment17.vishalsoni7.repl.co/foods",
      foodData
    );
    const data = response.data.newFood;
    dispatch({ type: "ADD_FOOD", payload: data });
  } catch (error) {
    console.error("error while adding food data", error);
    dispatch({ type: "FAILED TO ADD FOOD" });
  }
};

export const addGoalData = (goalData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://assignment17.vishalsoni7.repl.co/goals",
      goalData
    );
    const data = response.data.newGoal;
    dispatch({ type: "ADD_GOAL", payload: data });
  } catch (error) {
    console.error("error while adding goal data", error);
    dispatch({ type: "FAILED_TO_ADD_GOAL" });
  }
};

// delete
export const deleteExerciseData = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `https://assignment17.vishalsoni7.repl.co/exercises/${id}`
    );
    const data = await response.data.deletedExercise;
    dispatch({ type: "DELETE_EXERCISE", payload: data });
  } catch (error) {
    console.error("error while deleting exercise data", error);
    dispatch({ type: "FAILED TO DELETE GOAL" });
  }
};

export const deleteFoodData = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `https://assignment17.vishalsoni7.repl.co/foods/${id}`
    );
    const data = await response.data.deletedFood;
    dispatch({ type: "DELETE_FOOD", payload: data });
  } catch (error) {
    console.error("error while deleting food data", error);
    dispatch({ type: "FAILED TO DELETE GOAL" });
  }
};

export const deleteGoalData = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `https://assignment17.vishalsoni7.repl.co/goals/${id}`
    );
    const data = await response.data.deletedGoal;

    dispatch({ type: "DELETE_GOAL", payload: data });
  } catch (error) {
    console.error("error while deleting goal data", error);
    dispatch({ type: "FAILED TO DELETE GOAL" });
  }
};
