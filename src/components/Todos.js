import {useState} from 'react';

function TodoItem ({todo, onToggle}) {
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
}

function TodoList ({todos, onToggle}) {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem todo={todo} onToggle={onToggle}/>
            ))}
        </ul>
    );
}
function Todos({todos, onCreate, onToggle}) {
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

export default Todos;