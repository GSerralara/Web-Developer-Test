import React from 'react';
export interface TabProps {
  label: string;
  changeLanguage(): void;
}
interface TabState {
}

class Tab extends React.Component<TabProps,TabState>{
    
  constructor(props:TabProps) {
      super(props);
      this.handleOnChange = this.handleOnChange.bind(this);
      
  }
  public handleOnChange() : void {
    this.props.changeLanguage();
    
  }
  render(){
      return (
        <button role="tab" id='Tab'
        onClick={ this.handleOnChange }
        >{this.props.label}</button>
      );
  }
  
}
export default Tab;