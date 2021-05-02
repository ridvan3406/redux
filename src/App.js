
import './App.css';
import {createStore} from 'redux'

function reducer(state,action){

  console.log("parameter action=>",action)

  if(action.type==='changeTheState'){
    return action.payload.newState
  }

  return "StateXYZ";
}

const myStore =createStore(reducer)
console.log("(old)myStore.getState=>" ,myStore.getState())

myStore.subscribe(()=>{
  alert("store updated")
  console.log("store updated. new satte=>",myStore.getState())
})

const action ={type:'changeTheState',payload:{newState:'My new state'}}


myStore.dispatch(action);
console.log("(new)myStore.getState=>" ,myStore.getState())



function App() {
  return (
    <div className="App">
      APP COMP
    </div>
  );
}

export default App;
