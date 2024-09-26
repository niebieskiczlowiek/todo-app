import React, { useRef, useState } from 'react';
import { useOutsideClick } from '../../utils/UseOutsideClick';
import "./TaskInput.scss";

interface TaskInputProps {
    startingValue: string | undefined,
    close: Function,
    submit: Function,
}

const TaskInput = (props: TaskInputProps) => {
    const { startingValue, close, submit } = props;

    const [inputValue, setInputValue] = useState<string | undefined>(startingValue);
    const taskInputRef = useRef(null);

    useOutsideClick(taskInputRef, () => {
        close();
    });

    return (
        <div ref={taskInputRef} className="taskInput">
            <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="buttons">
                <button
                    onClick={() => {
                        if ( inputValue === "" ) {
                            close();
                            return;
                        }
                        submit(inputValue);
                        close();
                    }}
                >
                    Confirm
                </button>
                <button onClick={() => close()}> Cancel </button>
            </div>
        </div>
    );
}

export default TaskInput;