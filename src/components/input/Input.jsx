import  React, {useState}from "react"
import Delete from "../../assets/reject.png"

export default function  Input(){
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");
  const [check,setchek] = useState(false);

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter" && task.trim()===""){
      alert("please write something");
      event.preventDefault();
    }else if (event.key ==="Enter" && todo.includes(task)){
      alert("text  already exists ")
      event.preventDefault();
    }
    else if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  };

  const addTask = () => {
    setTodo((prev) => [...prev, task]);
    localStorage.setItem("todo",JSON.stringify(todo))
    setTask("");
  };

  const remove =(todo) =>{
    if(!check)
    return alert ('oops something wrong...' )
    setTodo(prev => prev.filter((res) => res !== todo))
  }

  return (
    <>
    <form action="" className="input-form">
      <input
        type="checkbox"
        id="checkbox-input"
        className="custom-checkbox"

      />
      <label htmlFor="checkbox-input" />
      <input
        type="text"
        placeholder="write something..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={handleEnterKeyPress}
        className="text"
      />
    </form>
    <div className={todo.length > 6 ? "scrollable-container" : "result"}>
    {todo.map((item, index) => (
        <div key={index} className="result-div">
          <div className="check-res">
          <input
            type="checkbox"
            id={`checkbox-input-${index}`}
            className="custom-checkbox"
            checked={check}
            onChange={()=>setchek(!check)}
          />
          <label htmlFor={`checkbox-input-${index}`}></label>
          <p className={check?"line": "nonne"}>{item}</p>
          </div>
        <img src={Delete} alt=""  onClick={()=> remove(item)}/>  
        </div>
      ))}
    </div>
       <div className="main-information">
        <p className="items"><span className="number">{todo.length}</span> items left</p>
        <div className="hover-div">
          <p className="all">All</p>
          <p className="active">Active</p>
          <p className="complete">Completed</p>
          <p className="clear">Clear Completed</p>
        </div>
      </div>
    </>

  );
}
