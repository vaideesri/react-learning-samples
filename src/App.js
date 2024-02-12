import logo from './logo.svg';
import './App.css';
import Variables from './components/variables';
import Operators from './components/Operators';
import Logicaland from './components/Logicaland';
import Logicalor from './components/Logicalor';
import Car from './components/Car';
import Classcar from './components/Classcar';
import Expense from './components/Expense';
import Students from './components/Students';
import Ifcondition from './components/Ifcondition';
import Switchcase from './components/Switchcase';
import Whileloop from './components/Whileloop';
import Forloop from './components/Forloop';
import Sumofseries from './components/Sumofseries';
import Loopcontrol from './components/Loopcontrol';
import Forinloop from './components/Forinloop';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { MyForm } from './components/Onchangeevent';
import Dialogbox from './components/Dialogbox';
import Usestate2 from './components/Usestate2';
import { Timer } from './components/Useeffecthook';
import { Counter } from './components/Newuseeffect';
import Swapping from './Swapping';
import Numberobj from './components/Numberobj';
import Usestatehook from './components/Usestatehook';
import Card from './components/Card';
import Stringobj from './components/Stringobj';
import Arrayobj from './components/Arrayobj';
import UppercaseConverter from './components/UppercaseConverter';
import NumberComparison from './components/NumberComparison';
import AuthForm from './components/sample';
import Datatables from './components/Datatables';
import Datatable1 from './components/Datatable2';
// import Casechanger from './components/casechanger';


function App() {
  return (
    <div>
      <Datatable1/>
      {/* <Datatables/> */}
      {/* <AuthForm/> */}
      {/* <Casechanger/> */}
      {/* <NumberComparison/>
      <UppercaseConverter/>
      <Arrayobj/> */}
      {/* <Stringobj/> */}
      {/* <Usestatehook/>
      <Numberobj/>
      <Swapping/>
      <Counter/>
      <Timer/>
      <Usestate2/>

      <Dialogbox/>
      <Ifcondition/>
      <Sumofseries/> */}
      {/* <Forinloop/>
      <Loopcontrol/>
      
      <Switchcase/>
      
      <Forloop/>
      <Whileloop/>
      
      
      <Students/>
      <Expense/>
      <Logicaland/>
      <Classcar/>
      <Car model="mustang"/>
      <Logicalor name="vaidee"/>
      
      <Operators/>
      <Variables/> */}
      {/* <MyForm/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={  <Variables/> }></Route>
        <Route path="/operator" element={<Operators/>}></Route>
        <Route path="/logicalor" element={<Logicalor name="vaidee"/>}></Route>
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
