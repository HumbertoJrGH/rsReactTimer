import { Play } from "phosphor-react";
import {
    CountdownButton,
    CountdownContainer,
    DurationInput,
    FormContainer,
    HomeContainer,
    TaskInput,
    TimeMarkup
} from "./styles";

export default function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput id="task" type="text" placeholder="Dê um nome para sua tarefa" />
                    <label htmlFor="duration">durante</label>
                    <DurationInput id="duration" type="number" placeholder="00" />
                    <label htmlFor="duration">minutos</label>
                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <TimeMarkup>:</TimeMarkup>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <CountdownButton disabled type="submit">
                    <Play size={24} />
                    Começar
                </CountdownButton>
            </form>
        </HomeContainer>
    )
}