import { ListOfTasks } from "../constants";
import ToDoItem from "./ToDoItem"

const ToDoList = () => {
    const El = <div>Data</div>
    const list = [
        {
            id: 1,
            title: "First task",
            hidden: false,
        },
        {
            id: 2,
            title: "Second task",
            hidden: true,
        },
        {
            id: 3,
            title: "Third task",
            hidden: false,
        },
    ]
    return(
        <div className = "to-do-list--wrapper">
            {El}
            <div className = "to-do-list__items__wrapper">
                {list.map((item) => (
                    !item.hidden ? <ToDoItem key = {item.id} item = {item}/> : null
                ))}
           
            </div>
        </div>
    )
    };

export default ToDoList;