import TaskList from "../../Components/TaskList";
import React from "react";
import "./Main.scss";

const Main = () => {
    return (
        <div className="Main">
            <div className="sidebar-container">
                <h1>TO DO</h1>
            </div>
            <TaskList/>
        </div>
    );
};

export default Main;