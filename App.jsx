
import './App.css';
import UseCard from './components/UseCard'
import  MrunalThakur from './assets/Mrunal-Thakur.png'
import  Ss from './assets/Ss.jpg'
import Tb from './assets/Tb.png'

function App() {
 
  return (
    <div className='container'>
    <UseCard name="Mrunal" desc="desc1" image={ MrunalThakur}style={{"border-radius":"10px"}}/>
    <UseCard name="Shilpa" desc="desc2" image={Ss} style={{"border-radius":"10px"}}/>
    <UseCard name="Tamana"desc="desc3" image={Tb}style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
