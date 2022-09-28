import { Play } from "phosphor-react";
import { CountdownButton, CountdownContainer, FormContainer, HomeContainer, TimeMarkup } from "./styles";

export default function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <input id="task" type="text" />
                    <label htmlFor="duration">durante</label>
                    <input id="duration" type="number" />
                    <label htmlFor="duration">minutos</label>
                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <TimeMarkup>:</TimeMarkup>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <CountdownButton type="submit">
                    <Play size={24} />
                    Começar
                </CountdownButton>
            </form>
        </HomeContainer>
    )
}