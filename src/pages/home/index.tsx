import { useState } from "react"
import { Play } from "phosphor-react"
import {
    CountdownButton,
    CountdownContainer,
    DurationInput,
    FormContainer,
    HomeContainer,
    TaskInput,
    TimeMarkup
} from "./styles"
import axios, { AxiosError, AxiosResponse } from 'axios'

export default function Home() {
    const [task, setTask] = useState('')

    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput
                        id="task"
                        list="taskDataList"
                        type="text"
                        placeholder="Dê um nome para sua tarefa"
                        onChange={e => setTask(e.target.value)}
                    />
                    <datalist id="taskDataList">
                        <option value="projeto 1" />
                        <option value="projeto 2" />
                        <option value="projeto 3" />
                        <option value="projeto 4" />
                    </datalist>

                    <label htmlFor="duration">durante</label>
                    <DurationInput id="duration" type="number" placeholder="00" step={5} min={5} max={60} />
                    <label htmlFor="duration">minutos</label>
                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <TimeMarkup>:</TimeMarkup>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <CountdownButton disabled={!task} type="submit">
                    <Play size={24} />
                    Começar
                </CountdownButton>
            </form>
        </HomeContainer>
    )
}