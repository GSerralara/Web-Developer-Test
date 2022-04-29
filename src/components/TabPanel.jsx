
function TabPanel({ children, value, selectedIndex}) {
    const hidden = value !== selectedIndex;
    return (
      <div hidden={hidden} active={!hidden}
      >{children}</div>
    );
  }
  
  export default TabPanel;