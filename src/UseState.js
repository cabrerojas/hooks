import { useState } from 'react'

//Reglas de los hooks
//No se puede llamar en loops, ni condiciones, ni nada
//siempre en el nivel mas alto del componente
//Solo se llaman en 2 partes
//En componentes de react
//En Custom hooks
// Cuando creemos un custom hook debe comenzar con use*


// class App2 extends Component {
//     state = {
//         contador: 0
//     }

//     incrementar = () => {
//         this.setState({ contador: this.state.contador + 1 })
//     }

//     render() {
//         return (
//             <div>
//                 Contador: {this.state.contador}
//                 <button onClick={this.incrementar} >
//                     Incrementar
//                 </button>
//             </div>
//         )
//     }
// }

const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial)
    const incrementar = () => {
        setContador(contador + 1)
    }

    return [contador, incrementar]

}


const App = () => {

    const [contador, incrementar] = useContador(0)
    
    return (

        <div>
            Contador: {contador}
            <button onClick={ incrementar } >
                Incrementar
            </button>
        </div>

    )

}

export default App;
