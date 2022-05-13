import React, {useState} from 'react'

const Display = (props) => {
    const [todo, settodo] = useState("");
    const [addtodo, setaddtodo] = useState([]);

    const todoDelete = (e) => {
        const deletetodo = addtodo.filter((addtodo,i) => {
            return i !== e;
        });
        setaddtodo(deletetodo);
    };

    const checkComplete = (index) => {
        const checkedTodos = addtodo.map((todo, i ) => {
            if (index === i) {
                todo.complete = !todo.complete;
        }
        return todo;
    });
    setaddtodo(checkedTodos);
    }

    const todoSubmit = (e) => {
        e.preventDefault();
        const todocomplete = {
            name: todo,
            complete: false
        };
        setaddtodo([...addtodo, todocomplete]);
        settodo("");
    };
    return (
    <div>
        <form className="section" onSubmit={(e) =>{todoSubmit(e)}}>
            <input onChange={(e) =>{settodo(e.target.value);}} type="text" value={todo}/>
            <button className="button">Add</button>
        </form>
        {
        addtodo.map((todo, i) =>{
            const todoscss = [];
            if(todo.complete){
                todoscss.push("line");
            }
        return (
            <div class="block" key={i}>
                <p className={todoscss.join("")}>{todo.name}</p>
                <input onChange = {(e) => {checkComplete(i);}} checked={todo.complete} type="checkbox"/>
                <button className="deletebtn" onClick={(e) => {todoDelete(i)}}>Delete</button>
            </div>
            )})
        }
    </div>
    );
}

export default Display