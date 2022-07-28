import React from 'react';

interface State {
    count: number;
}

interface Props{

}

export class Counter extends React.Component<Props,State>{
    constructor(props: Props){
        super(props);
        this.state = {
            count: 0,
        }
        this.increment = this.increment.bind(this);
    }

    increment(){
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    render(): React.ReactNode {
        return(
            <div style = {{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
            <button onClick={this.increment}>+</button>
            <p>{this.state.count}</p>
            <button onClick={this.decrement}>-</button>
            </div>
        ) 
    }
}
