import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import { render } from '@testing-library/react';

const App =() =>{

      console.log('render')

const [searchfield,setsearchfield] = useState('');
const [monsters,setmonsters]=useState([]);
const [filteredstring ,setfilteredstring]=useState(monsters);
const [titlefield,settitlefield] = useState('');



  console.log(searchfield);

useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
          .then((Response)=> Response.json())
          .then((users) => setmonsters(users));
  },[]);

  useEffect(()=>{

    const newfilteredstring = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchfield);
    })
    setfilteredstring(newfilteredstring)

  },[monsters,searchfield]);


  const onsearchchange=(event)=>{
    const searchfieldstring = event.target.value.toLocaleLowerCase();
    setsearchfield(searchfieldstring)
  }

  const ontitlechange=(event)=>{
    const titlefieldstring = event.target.value.toLocaleLowerCase();
    settitlefield(titlefieldstring)
  }
  
  return(
    
    <div className="App">
      <h1 className='app-title'>{titlefield}</h1>

    <SearchBox classname='monsters-search-box'
    onChangeHandler={onsearchchange}
    placeholder='search monsters'/>
    <br/>

<SearchBox classname='title-search-box'
    onChangeHandler={ontitlechange}
    placeholder='set title'/>

    <CardList monsters={filteredstring} />
    </div>

  );
}

// class App extends Component {
  
//     constructor() {
//       super();
//       // console.log('constructor');
//         this.state={
//           monsters:[],
//           searchfield:'',
          
//         };
//     }
//     componentDidMount(){
//       // console.log('componentdidmount');
//       fetch('https://jsonplaceholder.typicode.com/users')
//       .then((Response)=> Response.json())
//       .then((users) => 
//       this.setState(
//         ()=>{
//           return{monsters:users};
//         },
//         () =>{
//           console.log(this.state);
//         }
//       )
//       );
//     }

//     onsearchchange=(event)=>{
//       // console.log(event.target.value);
//       const searchfield = event.target.value.toLocaleLowerCase();
      

//       this.setState(()=>{
//         return { searchfield};
//       })
//     }

//     render(){

//       const {monsters,searchfield}=this.state;
//       const { onsearchchange} = this;

//     const filteredstring = monsters.filter((monster)=>{
//       return monster.name.toLocaleLowerCase().includes(searchfield);
//     });
      
//     console.log('render')
//     return (
    
//       <div 
//       className="App">
//         <h1 className='app-title'>Monsters rolodex </h1>
//       <SearchBox 
//       classname='monsters-search-box'
//       onChangeHandler={onsearchchange}
//       placeholder='sear monsters'
//       />
//       <CardList monsters={filteredstring} />
//       </div>
//     );

//     }
  
// }

export default App;
