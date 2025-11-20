
// src/App.jsx
import './App.css';
import Greeting from './Greeting';
import UserCard from './UserCard';
import TaskList from './TaskList';// импортируем наш компонент
function App(){
    return (
        <div className="App">
            {/* используем компонент как HTML-тег */}
            <Greeting />
            <UserCard
                name="Иван Иванов"
                role="Администратор"
                avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVMhpKmVy_-iwfRLAiNiaDslMa-2oEz7KTw&s"
                isOnline={true}
            />
            <TaskList />
        </div>
    );
}
export default App;