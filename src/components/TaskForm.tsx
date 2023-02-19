import * as React from 'react';

//CSS
import styles from "./TaskForm.module.css"

import {ITask} from '../interfaces/Task'

export interface ITaskFormProps {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
    task?: ITask | null
    handleUpdate?({id, title, difficulty}: ITask): void
}

export default function TaskForm ({btnText, taskList, setTaskList, task, handleUpdate}: ITaskFormProps) {

    const [id, setId] = React.useState<number>(0)
    const [title, setTitle] = React.useState<string>("")
    const [difficulty, setDifficulty] = React.useState<number>(0)

    React.useEffect(() => {

        if (task) {
            setId(task!.id)
            setTitle(task!.title)
            setDifficulty(task!.difficulty)
        }

    }, [task])

    const addTaskHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(handleUpdate) {
            handleUpdate({id, title, difficulty})
        } else {
            const id = Math.floor(Math.random() * 99999)

            const newTask: ITask = {id, title, difficulty}
    
            setTaskList!([
                ...taskList,
                newTask
            ])
    
            setTitle("")
            setDifficulty(0)
        }


    }

    const handleChange: Record<string, any> = {
        set: (e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange[e.target.name](e.target.value)
        },

        title: (data: string) => {
            setTitle(data)
        },

        difficulty: (data: number) => {
            setDifficulty(data)
        }
    }

    return (
        <form className={styles.form} onSubmit={addTaskHandler}>
            <div className={styles.input_container}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Task
                    Title"
                    onChange={handleChange.set}
                    value={title}/>
            </div>
            <div className={styles.input_container}>
                <label htmlFor="difficulty">Difficulty</label>
                <input
                    type="text"
                    name="difficulty"
                    placeholder="Task Difficulty"
                    onChange={handleChange.set}
                    value={difficulty}
                />
            </div>
            <input type="submit" value={btnText}/>
        
        </form>
    );
}
