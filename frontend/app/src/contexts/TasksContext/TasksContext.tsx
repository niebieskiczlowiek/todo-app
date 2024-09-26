import { createContext } from "react";
import {TaskType} from "../../types/Task";
import {useQuery, useMutation} from "@tanstack/react-query";
import api from "../../api/api";
import queryClient from "../../queryClient";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const TasksContext = createContext<any>({});

export const TasksProvider = (props: any) => {
    const { children } = props;

    const { data: tasks,
            // error: tasksGetError,
            isLoading: tasksLoading
        } = useQuery({
        queryKey: ['tasks'],
        queryFn: () => api.getTasks(),
    });

    const {
        mutate: updateTaskStatus,
        // error: updateTaskStatusError,
        // isPending: updateTaskStatusLoading,
    } = useMutation({
        mutationFn: (task: TaskType) => api.updateTaskStatus(task),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
        onError: () => alert("error"),
    });

    const {
        mutate: removeTask
    } = useMutation({
        mutationFn: (id: string) => api.removeTask(id),
        onSuccess: async () => {
            toast.success("Successfully removed");
            await queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
        onError: () => toast.error("Error"),
    });

    const {
        mutate: createTask
    } = useMutation({
        mutationFn: (title: string) => api.createTask(title),
        onSuccess: async () => {
            toast.success("Created task");
            await queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
        onError: () => toast.error("Error"),
    })

    const {
        mutate: editTask
    } = useMutation({
        mutationFn: async (task: TaskType) => api.updateTask(task),
        onSuccess: async () => {
            toast.success("Edited task");
            await queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
        onError: () => toast.error("Error"),
    });

    return (
        <TasksContext.Provider
            value={{
                tasks,
                tasksLoading,
                updateTaskStatus,
                removeTask,
                createTask,
                editTask
            }}>
            {children}
        </TasksContext.Provider>
    );
};

