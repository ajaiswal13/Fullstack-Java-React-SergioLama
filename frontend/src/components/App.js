import './App.css';
import logo from '../logo.svg';
import Header from './Header';
import Body from './Body';
const App = () => {
return(
   <div>
    <Header title="Frontend authenticated with Spring JWT" logoSrc={logo}> </Header>
       <div className="container-fluid">
           <div className="row">
               <div className="col">
                        <Body/>
               </div>
           </div>
       </div>
   </div>
)
}

export default App;