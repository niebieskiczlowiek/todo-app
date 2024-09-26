import type {TaskType} from "../../types/Task";
import Task from "../Task";
import TaskInput from "../TaskInput";
import {IoIosAdd} from "react-icons/io";
import React, {useContext, useState} from "react";
import { TasksContext } from "../../contexts/TasksContext";
import "./TaskList.scss";

const TaskList = () => {
    const {
        tasks,
        tasksLoading,
        createTask
    } = useContext(TasksContext);

    const [taskInputActive, setTaskInputActive] = useState<boolean>(false);

    const handleTaskInputClose = (): void => setTaskInputActive(false);
    const handleTaskInputOpen = (): void => setTaskInputActive(true);

    if (tasksLoading) return ( <>Loading...</> )
    return (
        <div className="tasklist-container">
            {tasks.map((task: TaskType) => {
                return <Task key={task.id} task={task} />
            })}
            {taskInputActive
                ?
                <TaskInput
                    startingValue={undefined}
                    close={handleTaskInputClose}
                    submit={createTask}
                />
                :
                <button
                    className="addButton"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleTaskInputOpen();
                    }}
                >
                <IoIosAdd className="icon"/>
                </button>
            }
        </div>
    );
}

export default TaskList;