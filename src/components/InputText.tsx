import React from 'react';
export interface ITProps {
    name: string;
    valueInput?: String;
}
interface ITState {
    valueInput: String;
}
class InputText extends React.Component<ITProps,ITState>{
    
    constructor(props:ITProps) {
        super(props);
        this.state = { valueInput: props.valueInput || '' };
    }
    public handleOnChange(event: any) : void {
        let newValue = event.target.value;
        this.setState({valueInput: newValue});
    }
    render(){
        return (
            <div id="InputTextWrapper">
                <label id="InputTextLabel">{this.props.name}</label>
                <input type="text" id="InputTextField" onChange={ e => this.handleOnChange(e) }/>
            </div>
        );
    }
    
}
  
export default InputText;