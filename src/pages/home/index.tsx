import { useEffect, useState } from "react"
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

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { differenceInSeconds } from "date-fns";

const newCycleSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    duration: zod.number().min(5).max(60, 'O valor selecionado precisa ser de até 60 minutos')
})

type ICycleForm = zod.infer<typeof newCycleSchema>

interface Cycle {
    id: string
    task: string
    duration: number
    startDate: Date
}

export default function Home() {
    const [cycles, setCycles] = useState<Cycle[]>([])
    const [active, setActive] = useState<string | null>(null)
    const [past, setPast] = useState(0)

    const { register, handleSubmit, watch, reset } = useForm<ICycleForm>({
        resolver: zodResolver(newCycleSchema),
        defaultValues: {
            task: '',
            duration: 5
        }
    })

    function handleCreateCycle(data: ICycleForm) {
        const id = String(new Date().getTime())
        const newCycle: Cycle = {
            id: id,
            task: data.task,
            duration: data.duration,
            startDate: new Date
        }

        setCycles(prev => [...prev, newCycle])
        setActive(id)
        setPast(0)

        reset()
    }

    const activeCycle = cycles.find(cycle => cycle.id == active)

    const totalSec = activeCycle ? activeCycle.duration * 60 : 0
    const currentSec = activeCycle ? totalSec - past : 0

    const minutes = Math.floor(currentSec / 60)
    const seconds = currentSec % 60

    const minute = String(minutes).padStart(2, '0')
    const second = String(seconds).padStart(2, '0')

    const task = watch('task')

    useEffect(() => {
        if (activeCycle) {
            const interval = setInterval(() => {
                setPast(differenceInSeconds(new Date(), activeCycle.startDate))
            }, 1000)

            return () => { clearInterval(interval) }
        }

    }, [activeCycle])

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateCycle)} action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput
                        id="task"
                        list="taskDataList"
                        placeholder="Dê um nome para sua tarefa"
                        {...register('task')}
                    />
                    <datalist id="taskDataList">
                        <option value="projeto 1" />
                        <option value="projeto 2" />
                        <option value="projeto 3" />
                        <option value="projeto 4" />
                    </datalist>

                    <label htmlFor="duration">durante</label>
                    <DurationInput
                        id="duration"
                        type="number"
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                        {...register('duration', { valueAsNumber: true })}
                    />
                    <label htmlFor="duration">minutos</label>
                </FormContainer>

                <CountdownContainer>
                    <span>{minute[0]}</span>
                    <span>{minute[1]}</span>
                    <TimeMarkup>:</TimeMarkup>
                    <span>{second[0]}</span>
                    <span>{second[1]}</span>
                </CountdownContainer>

                <CountdownButton
                    disabled={!task}
                    type="submit"
                >
                    <Play size={24} />
                    Começar
                </CountdownButton>
            </form>
        </HomeContainer>
    )
}