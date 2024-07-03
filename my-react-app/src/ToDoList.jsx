import React, { useState } from "react";

function ToDoList() {

    const [tasks, setTasks] = useState(
        []);

    const [newTask, setNewTask] = useState("");

    const [selectedTime, setSelectedTime] = useState("");


    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {

        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");

        }

    }

    function deleteTask(index) {

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]];

            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]];

            setTasks(updatedTasks);
        }
    }

    function handleTimeChange(event) {
        setSelectedTime(event.target.value);
    }



    return (
        <div className="to-do-list">

            <h1>
                To-Do List
            </h1>

            <div className="">
                <input
                    type="text"
                    placeholder="Enter A task..."
                    value={newTask}
                    onChange={handleInputChange}

                />

                <select value={selectedTime} onChange={handleTimeChange}>

                    <option value="">Select Time</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="09:00">09:30 AM</option>
                    <option value="09:00">10:00 AM</option>
                    <option value="09:00">10:30 AM</option>
                    <option value="09:00">11:00 AM</option>
                    <option value="09:00">11:30 AM</option>
                    <option value="09:00">12:00 PM</option>
                    <option value="09:00">12:30 PM</option>
                    <option value="09:00">13:00 PM</option>
                    <option value="09:00">13:30 PM</option>
                    <option value="09:00">14:00 PM</option>
                    <option value="09:00">14:30 PM</option>
                    <option value="09:00">15:00 PM</option>
                    <option value="09:00">15:30 PM</option>
                    <option value="09:00">16:00 PM</option>

                </select>

                <button
                    className="add-button"
                    onClick={addTask}
                >
                    Add
                </button>


            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>

                        <span className="text">{task}</span>

                        {selectedTime && <p>{selectedTime}</p>}

                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}>

                            Delete

                        </button>

                        <button
                            className="move-button"
                            onClick={() => moveTaskUp(index)}>

                            👆

                        </button>

                        <button
                            className="move-button"
                            onClick={() => moveTaskDown(index)}>

                            👇

                        </button>


                    </li>
                )}
            </ol>

        </div>
    );
}

export default ToDoList