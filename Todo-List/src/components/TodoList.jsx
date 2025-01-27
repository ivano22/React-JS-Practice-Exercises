
import { useState, useEffect } from 'react';
import { Trash2, CheckCircle, Circle } from 'lucide-react';

function TodoList() {
  // State to store the list of tasks and initialize state from localStorage if available, otherwise empty array
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
    
 // Save tasks to localStorage whenever they change
 useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

     // State to store the current task being typed
    const [newTask, setNewTask] = useState(" ");

    //save tasks in local storage.
    // Load tasks from local storage 
    
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

    // Function to add a new task
    const addTask = (e) => {
        e.preventDefault();
        if (newTask.trim()) {
          setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
          setNewTask('');
        }
      };
    
    // Function to toggle the completion status of a task
      const toggleComplete = (taskId) => {
        setTasks(tasks.map(task =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
      };
    
    //  // Function to remove a task
      const removeTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
      };
    
    
    return (
        <div className="max-w-md mx-auto mt-14 p-6">
            <h1 className="text-2xl  text-center font-bold mb-10">My Todo List</h1>
         
            {/* Form to add tasks */}
            <form onSubmit={addTask} className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task..."
                    className="flex-1 p-2 border rounded"
                />
                {/* Add button */}
                <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded  cursor-pointer hover:bg-blue-600"
                >
                    Add
                </button>
            </form>

              {/* Added tasks  */}
            <div className="space-y-2">
                {tasks.map(task => (
                    <div
                        key={task.id}
                        className="flex items-center justify-between p-3 bg-white border rounded shadow-sm"
                    >
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => toggleComplete(task.id)}
                                className="text-gray-500 hover:text-green-500"
                            >
                                {task.completed ?
                                    // Components from lucide React
                                    <CheckCircle className="w-5 h-5" /> :
                                    <Circle className="w-5 h-5" />
                                }
                            </button>
                            {/* Strike through feature on completed tasks */}
                            <span className={task.completed ? 'line-through text-gray-500' : ''}>
                                {task.text}
                            </span>
                        </div>
                        {/* Button to remove tasks. */}
                        <button
                            onClick={() => removeTask(task.id)}
                            className="text-red-500 hover:text-red-600"
                        >
                            {/* Trash icon component from lucide react components. */}
                            <Trash2 className="w-5 h-5" />
                        </button>
                    </div>
                ))}
                 <p className="text-2x1 text-gray-500 text-center mt-10">
            Total Tasks: {tasks.length} | 
            Completed: {tasks.filter(task => task.completed).length}
          </p>
        
            </div>
        </div>

    );
}



export default TodoList;