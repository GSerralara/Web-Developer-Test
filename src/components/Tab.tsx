import React from 'react';
export interface TabProps {
  label: string;
  changeLanguage(): void;
}
interface TabState {
  active: String;
}

class Tab extends React.Component<TabProps,TabState>{
    
  constructor(props:TabProps) {
      super(props);
      this.state = { active:'' };
  }
  public handleOnChange(event: any) : void {
    this.props.changeLanguage();
    let newValue = event.target.value;
    if(String(newValue) !== 'Active') this.setState({active: 'Active'});
  }
  render(){
      return (
        <button role="tab" id="Tab"
        onClick={ e => this.handleOnChange(e) }
        ><span id={'TabLabel' + this.state.active}></span>{this.props.label}</button>
      );
  }
  
}
export default Tab;