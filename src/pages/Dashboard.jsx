import { useContext, useState, useMemo } from "react";
import { AppContext } from "../context/AppContext";

export default function Dashboard() {
  const { state, dispatch } = useContext(AppContext);
  const [task, setTask] = useState("");

  const totalTasks = useMemo(() => {
    return state.tasks.length;
  }, [state.tasks]);

  return (
    <div className="container">

      <h1>Analytics Dashboard</h1>

      <div className="card">
        <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
          Toggle Theme
        </button>
      </div>

      <div className="card">
        <h3>Add Task</h3>

        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          onClick={() => {
            dispatch({ type: "ADD_TASK", payload: task });
            setTask("");
          }}
        >
          Add
        </button>
      </div>

      <div className="card">
        <h3>Total Tasks : {totalTasks}</h3>
        <p>Performance Score : {totalTasks * 10}%</p>
      </div>

      <div className="card">
        <h3>Task List</h3>

        {state.tasks.map((t, i) => (
          <div key={i}>
            {t}
            <button
              onClick={() =>
                dispatch({ type: "DELETE_TASK", payload: i })
              }
            >
              Delete
            </button>
          </div>
        ))}

        {state.tasks.length > 0 && (
          <button onClick={() => dispatch({ type: "CLEAR_TASKS" })}>
            Clear All
          </button>
        )}
      </div>

    </div>
  );
}