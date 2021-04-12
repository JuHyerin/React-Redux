import React, {useState} from 'react';

const TodoItem = React.memo(function TodoItem ({todo, onToggle}) {
    console.log("TodoItem rendered", todo.id);


    const onClick = () => onToggle(todo.id);
    return (
        <li
            style={{textDecoration: todo.done ? 'line-through' : 'none'}}
            // onClick={onToggle(todo.id)}
            onClick={onClick}
        >
            {todo.text}
        </li>
    );
});

const TodoList = React.memo(function TodoList ({todos, onToggle}) {
    console.log("TodoList rendered");

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle}/>
            ))}
        </ul>
    );
});

function Todos({todos, onCreate, onToggle}) {
    console.log("Todos rendered");

    const [text, setText] = useState('');
    const onChange = e => setText(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        onCreate(text);
        setText('');
    }
    return (
        <>
            <div>
                <form onSubmit={onSubmit}>
                    <input
                        onChange={onChange}
                        placeholder="할 일을 입력하세요.."
                        value={text}
                    />
                    <button>등록</button>
                </form>
            </div>
            <TodoList todos={todos} onToggle={onToggle}/>
        </>
    );
}

export default React.memo(Todos);