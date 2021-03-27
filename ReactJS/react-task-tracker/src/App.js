import {useState} from 'react'; 
import Header from './components/Header'
import Tasks from './components/Tasks' 
import AddTask from './components/AddTask' 

var App = () => {
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
  ])    

  // Add Task 
  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000) + 1
    const newTask = { id,...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task Item 
  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id))

  // Toggle Reminder
  const toggleReminder = (id) => setTasks(tasks.map((task)=>task.id === id ? {
    ...task, reminder: !task.reminder
  }: task))  
  
  // Can add any javascript code here including some constants or variables  
  // const name = 'Utkarsh Singh';

  return (
    <div className="container">
      <Header title='Task Tracker' onAdd={()=> setShowAddTask(!showAddTask)}
      showAdd={showAddTask}/>

      {showAddTask && <AddTask onAdd={addTask}/>}
      {
        tasks.length>0 ? (<Tasks 
          tasks={tasks} 
          onDelete={deleteTask}
          onToggle={toggleReminder}
          onAdd={addTask}
          />) : 
        ('No tasks to show')
      }

      {/* <h1>Hello from React</h1> */}
      {/* <h2>Hello {name}</h2> */}
    </div>
    // Cannot put anything beyond this div 
  );
}

export default App;
