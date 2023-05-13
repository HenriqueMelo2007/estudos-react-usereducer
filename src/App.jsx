import { useReducer } from 'react'

export function App() {

  const initialCount = {
    count: 0,
  }

  const reducer = (state, action) => {
    if (action.type == 'Incrementar') {
      return { count: state.count + 1}
    } else if (action.type == 'Decrementar') {
      return { count: state.count - 1}
    } else {
      return state
    }
  }

  const [state, action] = useReducer(reducer, initialCount)

  return (
    <div>
      <h1>Este é um contador feito utilizando o hook useReducer do React. Projeto feito para estudo</h1>
      <h2>valor do contador: {state.count}</h2>
      <button onClick={ () => action( {type: 'Incrementar'} )}>'Incrementar'</button>
      <button onClick={ () => action( {type: 'Decrementar'} ) }>'Decrementar'</button>
    </div>
  )
}