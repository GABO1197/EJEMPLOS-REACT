import logo from './logo.svg';
import './App.css';
  


const Title =({course,part1,exercises1})=>{
  // const {course}=props
  return (
    <>
        <h1>{course} </h1>
        <p> {part1}</p>
        <p> {exercises1}</p>
    </>     
  )
}
// const Text =({part1})=>{

//   return <h1>{part1} </h1>
// }
// const  Textexercises1=({exercises1})=>{
 
//   return <h1>{exercises1} </h1>
// }
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>
        <Title course={course}></Title>
      </h1>
      <p>
       <Title part1={part1}></Title>
        <Title exercises1={exercises1}></Title>
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App

