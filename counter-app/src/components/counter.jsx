import React, { Component } from 'react';


// exportando componentes para enviar ao index
// Fragmentando os elementos para exportar
// Pode-se também inserir atributos aos elementos
// state inclui todo tipo de dado que o componente precisa
// scripts javascripts podem ser inseridos entre chaves
// Expressões JSX são como scripts comuns, onde você pode retornar como objeto de uma função
// a diferença entre state e props é que state passa dados para o componente e states que são locais ou privados para o componente, interno pra esse componente em específico

class Counter extends Component {   


   // construtor para a função do botao
  //  constructor() {
  //      super();
  //      this.handleIncrement = this.handleIncrement.bind(this);
 //   }

    // método para ação ao clicar no botão
    // this pode referenciar diferentes objetos, dependedo do tipo de chamada
    // para resolver isso, ou criamos o construtor acima como bind method
    // ou convertemos a função abaixo como uma função de erro
    // solução mais simples do que criar constructior para cada ligação de evento


    // passando argumentos para o evento

    doHandleIncrement = () => {        
        this.handleIncrement({ id: 1 });
    };

    // botão de incrementar, resetar contadores excluir no render


    render() {             
        
        return (         
            <div>                             
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                 onClick= {() => this.props.onIncrement(this.props.counter)}
                 >
                    Incremente
                </button>
                <button 
                onClick={() => this.props.onDelete(this.props.counter.id)}
                 className='btn btn-danger btn-sm m2'
                >
                    Delete                   
                </button>
              
            </div>
        );
    }

    // incluindo todas as classes a ser apresentadas em baixo. Criado um método para chamar elas.
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? <h4>Zero</h4> : count;
    }

}
 
export default Counter;

/* Teste para trabalhar com condições 
JSX não usa If e else, como no angular. temos que recorrer ao velho javascript
 Criando outro método

 renderTag() {
    if (this.state.tags.length === 0) return <p>Não há tags!</p>
    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>

 }

render () {
    return (
        <div>
        {this.renderTags()}
        </div>
    );
}

*/






