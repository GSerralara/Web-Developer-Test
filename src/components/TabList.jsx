import React, { useEffect, useRef, useState } from 'react';

function TabList({selectedTab, onChange, children}) {

    const containerRef = useRef(null);
    const [containerWidth,setContainerWidth] = useState(0);

    useEffect(()=>{
        setContainerWidth(containerRef.current.getBoundingClientRect().width)
    },[containerRef]);

    const sliderWidth = containerWidth / children.lenght;

    const tabList = children.map((child) => {
        const handleCLick = (e) =>{
            onChange(e, child.props.value);
        };
        return React.cloneElement(child, {
            key: child.props.value,
            active: child.props.value === selectedTab,
            onClick: handleCLick
        });
    });
    return (
        <div id="TabListHead" ref={containerRef}>
            <div id="TabHolder">
                {tabList}
            </div>
            <div id="TabSlider" width={sliderWidth} index={selectedTab}></div>
        </div>
    );
    
}
export default TabList;