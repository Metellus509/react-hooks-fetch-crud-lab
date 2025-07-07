import { useEffect } from "react";
import { useState } from "react";
import QuestionItem from "./QuestionItem";


function QuestionList() {
  const [qitem, setQitem] = useState([])
  useEffect(()=>{
      fetch('http://localhost:4000/questions')
      .then(r=>r.json())
      .then(data=>setQitem(data))
  },[])

  function deleteAction(id){
    console.log(id)
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })

    setQitem((item)=>item.filter((question)=>question.id != id))
    console.log(qitem)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {qitem.map((question) => (
      <QuestionItem key={question.id} question={question} handleDelete={deleteAction} />
      ))}
      </ul>
    </section> 

  );
}

export default QuestionList;