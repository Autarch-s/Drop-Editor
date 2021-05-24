import React from 'react';
import Select, { createFilter } from 'react-select'
import { FixedSizeList as List } from "react-window";

const ReactSelect = ({setChosenItem, classPrefix="ReactSelect", options, defaultValue, value, className, portalTarget}) => {
    return (
        <Select 
                //defaultValue={defaultValue}
                onChange={setChosenItem} 
                setChosenItem={setChosenItem}
                classNamePrefix={classPrefix} 
                className={className} 
                options={options} 
                placeholder="Wybierz..."
                components={{ MenuList }}
                menuPortalTarget={portalTarget}
                //value={value}
                required
                filterOption={createFilter({ignoreAccents: false})}
             />
    );
};

export default ReactSelect;

class MenuList extends React.Component {
    render() {
      const { options, children, maxHeight, getValue } = this.props;
      const height = 35;
      const [value] = getValue();
      const initialOffset = options.indexOf(value) * height;
  
      return (
        <List
          height={maxHeight}
          itemCount={children.length}
          itemSize={height}
          initialScrollOffset={initialOffset}
        >
          {({ index, style }) => <div style={style}>{children[index]}</div>}
        </List>
      );
    }
  }
