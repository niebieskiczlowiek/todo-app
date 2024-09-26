import {useContext, useState} from 'react';
import IconButton from '../IconButton';
import type { TaskType } from '../../types/Task';
import "./Task.scss";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import {TasksContext} from "../../contexts/TasksContext";

interface TaskProps {
    task: TaskType,
}

const Task = (props: TaskProps) => {
    const {task} = props;
    const {id: taskId, title, finished} = task;

    const { editTask, updateTaskStatus, removeTask } = useContext(TasksContext);

    const [editInputActive, setEditInputActive] = useState<boolean>(false);
    const [editInputValue, setEditInputValue] = useState<string>(title);

    const handleSubmit = () => {
        const editedTask: TaskType = {
            id: task.id,
            title: editInputValue,
            finished: task.finished,
        }
        editTask(editedTask);
        setEditInputActive(false);
    };
    const toggleEditInput = () => setEditInputActive(!editInputActive);

    return (
        <div className={`task ${finished && 'finished'}`}>
            <input type={"checkbox"} checked={finished} onChange={() => updateTaskStatus(task)} />
            { editInputActive
                ? (
                    <div>
                        <input
                            value={editInputValue}
                            onChange={(e) => setEditInputValue(e.target.value)}
                        />
                        <button
                            onClick={() => {
                                setEditInputActive(false);
                                setEditInputValue(title);
                            }}>
                            Cancel
                        </button>
                        <button
                            onClick={() => handleSubmit()}
                        >
                            Edit
                        </button>
                    </div>
                )
                : <div className="title">{title}</div>
            }

            <div className="button-container">
                <IconButton
                    onClick={() => toggleEditInput()}
                    icon={MdEdit}
                />
                <IconButton
                    onClick={() => removeTask(taskId)}
                    icon={FaTrash}
                />
            </div>
        </div>
    );
}

export default Task;