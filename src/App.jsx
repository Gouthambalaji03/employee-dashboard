import './App.css'
import EmployeeForm from './components/EmployeeForm'
import EmployeeTable from './components/EmployeeTable'
function App() {

  return (
      <div className="app-container">
        <EmployeeForm/>
        <EmployeeTable/>
      </div>
  )
}

export default App
