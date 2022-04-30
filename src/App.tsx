import './App.css';
import React from 'react';
import './i18n/config';
import { WithTranslation, withTranslation} from 'react-i18next';

//import TabbedPane from './components/TabbedPane';
import InputNumber from './components/InputNumber';
import InputField from './components/InputField';
import Tab from './components/Tab'
interface AppState {
  active: String;
}

class App extends React.Component<WithTranslation,AppState>{
  constructor(props:WithTranslation) {
    super(props);
    this.state = { active:'' };
    this.changeToCatalan = this.changeToCatalan.bind(this);
    this.changeToEnglish = this.changeToEnglish.bind(this);
    this.changeToPortuguese = this.changeToPortuguese.bind(this);
    this.changeToSpanish = this.changeToSpanish.bind(this);
  }
  changeToCatalan(){
  
    this.props.i18n.changeLanguage('ca');
  }
  changeToSpanish(){
    this.props.i18n?.changeLanguage('es');
  }
  changeToPortuguese(){
    this.props.i18n?.changeLanguage('pt');
  }
  changeToEnglish(){
    this.props.i18n?.changeLanguage('en');
  }
  render(){
    //const { t } = useTranslation();
    return (
      <div id="EventForm">
        <InputField name={this.props.t('content:event.name')}/>
        <div>
            <Tab label="EN" changeLanguage={this.changeToEnglish}></Tab>
            <Tab label="CAT" changeLanguage={this.changeToCatalan}></Tab>
            <Tab label="ES" changeLanguage={this.changeToSpanish}></Tab>
            <Tab label="PT" changeLanguage={this.changeToPortuguese}></Tab>
        </div>
        <InputNumber name={this.props.t('content:event.capacity')}/>
        <button type='button' id="CreateButton">{this.props.t('content:button')}</button>
      </div>
    );
  }
  
}

export default withTranslation()(App);
