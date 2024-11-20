import React from "react"
import './TodoList.css'

export default function TodoList() {
    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <form>
                <input 
                type="text" 
                placeholder="Adicione uma tarefa"
                />
                <button type="submit">Add</button>
            </form>
            <div className="">

            </div>
        </div>
    )
}