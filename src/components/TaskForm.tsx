import * as React from 'react';

//CSS
import styles from "./TaskForm.module.css"

import {ITask} from '../interfaces/Task'

export interface ITaskFormProps {
    btnText: string;
}

export default function TaskForm ({btnText}: ITaskFormProps) {

    const [id, setId] = React.useState<number>(0)
    const [title, setTitle] = React.useState<string>("")
    const [difficulty, setDifficulty] = React.useState<number>(0)

    const addTaskHandler = () => {
        
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
                <input type="text" name="title" placeholder="Task Title" onChange={handleChange.set}/>
            </div>
            <div className={styles.input_container}>
                <label htmlFor="difficulty">Difficulty</label>
                <input type="text" name="difficulty" placeholder="Task Difficulty" onChange={handleChange.set}/>
            </div>
            <input type="submit" value={btnText}/>
        
        </form>
    );
}
