import { useState } from "react";
import "./Modal.css";
const Modal = () => {
    const tasksList = ["Lavar ropa", "Tender cama", "Programar"];
    const [tasks, setTasks] = useState(tasksList);
    const [inputValue, setInputValue] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const addTask = () => {
        if(inputValue.trim()) {
            setTasks([...tasks, inputValue]);
            setInputValue("");
        }
    }
    return(
        <div className="tasks-container">
            {tasks.map((elem, index) => {
                return <div>
                    <p>{elem}</p>
                </div>
            })}
            <button id="button-add-tarea" onClick={handleOpen}>Agregar Tarea</button>
            {openModal && (
                 <div className="modal">
                 <label id="modal-title" htmlFor="">Ingresa la tarea a agregar</label>
                 <input 
                 value={inputValue}
                 type="text" 
                 id="tarea"
                 onChange={(e) => setInputValue(e.target.value)}
                 placeholder="añada la tarea"
                 />
                 <button className="button_tasks" onClick={addTask}>Guardar</button>
                 <button className="button_tasks" onClick={handleClose}>Cancelar</button>
                </div>
            )}   
        </div>
    )
}
export default Modal;