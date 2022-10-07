import { HistoryContainer, HistoryList } from "./styles";

export default function History() {
    return (
        <HistoryContainer>
            <h1>Meu Histórico</h1>
            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tarefa</td>
                            <td>20:00</td>
                            <td>Há 2 meses atrás</td>
                            <td>Concluído</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20:00</td>
                            <td>Há 2 meses atrás</td>
                            <td>Concluído</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20:00</td>
                            <td>Há 2 meses atrás</td>
                            <td>Concluído</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20:00</td>
                            <td>Há 2 meses atrás</td>
                            <td>Concluído</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20:00</td>
                            <td>Há 2 meses atrás</td>
                            <td>Concluído</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20:00</td>
                            <td>Há 2 meses atrás</td>
                            <td>Concluído</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20:00</td>
                            <td>Há 2 meses atrás</td>
                            <td>Concluído</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20:00</td>
                            <td>Há 2 meses atrás</td>
                            <td>Concluído</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20:00</td>
                            <td>Há 2 meses atrás</td>
                            <td>Concluído</td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}