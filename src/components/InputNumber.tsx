import React from 'react'
import './../assets/InputNumber.css'
export interface INProps {
    name: string;
    valueInput?: Number;
}
interface INState {
    valueInput: Number;
}
class InputNumber extends React.Component<INProps, INState>{
    
    constructor(props:INProps) {
        super(props);
        this.state = { valueInput: 0 };
        this.handleOnChange = this.handleOnChange.bind(this)
    }
    
    decrement() {
        let value:Number = this.state.valueInput;
        if(value > 0) value = Number(value) - 1;
        this.setState({valueInput:value})
      }
    
    increment() {
        let value = this.state.valueInput;
        value = Number(value) + 1;;
        this.setState({valueInput:value})
    }
    public handleOnChange(event: any) : void {
        let newValue = event.target.value;
        this.setState({valueInput: newValue});
    }
    render(){
        return (
            <div id="InputWrapper">
                <label id="LabelInput">
                    {this.props.name}
                </label>
                <div id="InputOperationWrapper">
                    <button id="InputButtonDerement" onClick={() => this.decrement()}>
                        <span id="InputSymbol">−</span>
                    </button>
                    <input type="number" onChange={ e => this.handleOnChange(e) }
                    value = {this.state.valueInput+''}
                    id="Input"/>
                    <button id="InputButtonIncrement" onClick={() => this.increment()} >
                        <span id="InputSymbol">+</span>
                    </button>
                </div>
            </div>
        );
    }
    
}
  
export default InputNumber;