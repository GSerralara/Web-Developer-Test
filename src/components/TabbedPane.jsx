import './../assets/TabbedPane.css'
import React from 'react';
import TabList from './TabList'
import Tab from './Tab'
class TabbedPane extends React.Component {
    constructor() {
        super();
        this.state = {
            language: this.props.language
          };
    }
    render(){
        return (
            <div id="TabbedPane" >
                <div id="container" >
                    <TabList>
                        <Tab label="Tab 1" value={0}></Tab>
                        <Tab label="Tab 2" value={1}></Tab>
                        <Tab label="Tab 3" value={2}></Tab>
                    </TabList>
                </div>
                
            </div>
        );
    }
    
    
}
export default TabbedPane;