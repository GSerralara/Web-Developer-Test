import './App.css';
import React from 'react';
import './i18n/config';
import { WithTranslation, withTranslation} from 'react-i18next';
import TabbedPane from './components/TabbedPane';
import InputNumber from './components/InputNumber';
import InputField from './components/InputField';

interface AppState {
  capacity: React.RefObject<InputNumber>;
  eventName: React.RefObject<InputField>;
  formData: React.RefObject<TabbedPane>;
  language: string;
}

class App extends React.Component<WithTranslation,AppState>{
  
  constructor(props:WithTranslation) {
    super(props);
    this.state = { capacity:React.createRef(), 
      eventName: React.createRef(),
      formData: React.createRef(),
      language:'en'};
    this.createPayload = this.createPayload.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
  }
  changeLanguage(lang:string){
    switch(lang) { 
      case 'en': { 
        this.props.i18n.changeLanguage('en'); 
        this.setState({language:'en'});
        break; 
      } 
      case 'es': { 
        this.props.i18n.changeLanguage('es');
        this.setState({language:'es'});
        break; 
      }
      case 'ca':{
        this.props.i18n.changeLanguage('ca');
        this.setState({language:'ca'});
        break;
      } 
      case 'pt':{
        this.props.i18n.changeLanguage('pt');
        this.setState({language:'pt'});
        break;
      }
   } 
  }
  createPayload(){
    let eventName = this.state.eventName.current?.state.valueInput;
    let capacity = this.state.capacity.current?.state.valueInput;
    var payload = {eventName: eventName,
    title: {
      en: '', 
      es: '',
      ca: '',
      pt: '',
    },
    subtitle: {
      en: '', 
      es: '',
      ca: '',
      pt: '',
    },
    description: {
      en: '', 
      es: '',
      ca: '',
      pt: '',
    },
    capacity: Number(capacity)}
    let description = this.state.formData.current?.state.description.current?.state.valueInput;
    let title = this.state.formData.current?.state.title.current?.state.valueInput;
    let subtitle = this.state.formData.current?.state.subtitle.current?.state.valueInput;
    let lang = this.state.language;
    switch(lang) { 
      case 'en': { 
        payload.title.en = title+'';
        payload.subtitle.en = subtitle+'';
        payload.description.en = description+'';
        console.log(JSON.stringify(payload));
        break; 
      } 
      case 'es': { 
        payload.title.es = title+'';
        payload.subtitle.es = subtitle+'';
        payload.description.es = description+'';
        console.log(JSON.stringify(payload));
        break; 
      }
      case 'ca':{
        payload.title.ca = title+'';
        payload.subtitle.ca = subtitle+'';
        payload.description.ca = description+'';
        console.log(JSON.stringify(payload));
        break;
      } 
      case 'pt':{
        payload.title.pt = title+'';
        payload.subtitle.pt = subtitle+'';
        payload.description.pt = description+'';
        console.log(JSON.stringify(payload));
        break;
      }
   } 
  }
  render(){
    return (
      <div id="EventForm">
        <InputField name={this.props.t('content:event.name')} ref={this.state.eventName}/>
        <TabbedPane title={this.props.t('content:form.Title')}
        subtitle={this.props.t('content:form.Subtitle')}
        description={this.props.t('content:form.Description')}
        languageSwitch={this.changeLanguage} 
        ref={this.state.formData}/>
        <InputNumber name={this.props.t('content:event.capacity')} ref={this.state.capacity}/>
        <button type='button' id="CreateButton" onClick={this.createPayload}>{this.props.t('content:button')}</button>
      </div>
    );
  }
  
}

export default withTranslation()(App);
