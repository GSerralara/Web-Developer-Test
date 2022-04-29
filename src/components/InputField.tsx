import React from 'react';
import './../assets/InputField.css'
export interface IFProps {
    name: string;
    valueInput?: String;
}
interface IFState {
    valueInput: String;
}
export default class InputField extends React.Component<IFProps, IFState>{
    constructor(props: IFProps) {
        super(props);
        this.state = { valueInput: props.valueInput || '' };
      }
    public handleOnChange(event: any) : void {
        let newValue = event.target.value;
        this.setState({valueInput: newValue});
    }
    render() {
        
        return (
            <div id="InputFieldWrapper">
                <label id="LabelInputField">{this.props.name}</label>
                <input type="text" id="InputField"
                onChange={ e => this.handleOnChange(e) }/>
            </div>
        ); 
           
    }
    
}