import Check from "./Check";
import Remove from "./Remove";
import TextHolder from "./TextHolder";

const ToDoItem = ({ item }) => { 
    return (
        <div className = {"to-do-list__item"}>
            <Check />
            <TextHolder item={item}/>
            <Remove />
        </div>
    );
};

export default ToDoItem;