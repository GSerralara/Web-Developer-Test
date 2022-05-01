import './../assets/TabbedPane.css'
import React from 'react';
import InputField from './InputField';
import InputText from './InputText';
import Tab from './Tab'
export interface PaneProps{
    title: string;
    subtitle: string;
    description: string;
    languageSwitch(lang:string): void;
}
interface PaneState {
    title: React.RefObject<InputField>;
    subtitle: React.RefObject<InputField>;
    description: React.RefObject<InputText>;
    active:string;
}
class TabbedPane extends React.Component<PaneProps,PaneState> {
    constructor(props:PaneProps) {
        super(props);
        this.state = { title: React.createRef(),
            subtitle: React.createRef(),
            description:React.createRef(),
            active:'en' };
        this.changeToCatalan = this.changeToCatalan.bind(this);
        this.changeToEnglish = this.changeToEnglish.bind(this);
        this.changeToPortuguese = this.changeToPortuguese.bind(this);
        this.changeToSpanish = this.changeToSpanish.bind(this);
    }
    changeToCatalan(){
        this.setState({active:'ca'})
        this.props.languageSwitch('ca');
    }
    changeToSpanish(){
        this.setState({active:'es'});
        this.props.languageSwitch('es');
    }
    changeToPortuguese(){
        this.setState({active:'pt'});
        this.props.languageSwitch('pt');
    }
    changeToEnglish(){
        this.setState({active:'en'});
        this.props.languageSwitch('en');
    }
    render(){
        return (
            <div id="TabbedPane">
                <ul id="TabWrapper">
                    <li id={this.state.active=== 'en'?"TabInstaneActive" :"TabInstance"}>
                        <Tab label="EN" changeLanguage={this.changeToEnglish}/>
                    </li>
                    <li id={this.state.active=== 'ca'?"TabInstaneActive" :"TabInstance"}>
                        <Tab label="CAT" changeLanguage={this.changeToCatalan}/>
                    </li>
                    <li id={this.state.active=== 'es'?"TabInstaneActive" :"TabInstance"}>
                        <Tab label="ES" changeLanguage={this.changeToSpanish}/>
                    </li>
                    <li id={this.state.active=== 'pt'?"TabInstaneActive" :"TabInstance"}>
                        <Tab label="PT" changeLanguage={this.changeToPortuguese}/>
                    </li>
                </ul>
                <div id="ContentPane">
                    <InputField name={this.props.title}
                    ref={this.state.title}/>
                    <InputField name={this.props.subtitle}
                    ref={this.state.subtitle}/>
                    <InputText name={this.props.description}
                    ref={this.state.description}/>
                </div>
                
            </div>
        );
    }
    
    
}
export default TabbedPane;
