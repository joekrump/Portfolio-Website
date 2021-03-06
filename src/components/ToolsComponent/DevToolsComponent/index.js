import React from 'react';
import PropTypes from 'prop-types';

const DevToolsComponent = ({ tools, devToolsState, expandDevToolsComponent, closeDevToolsComponent }) => { //eslint-disable-line
  return (
    <div className={devToolsState.classState}>
      {devToolsState.componentExpand ?
        <div className="devToolsInfo">
          <div className="componentBanner">
            <div>
              <p>Development Tools</p>
            </div>
          </div>
          <div className="devTools">
            <span>
              <p>{tools[3].developmentTools[0]}</p>
              <p>{tools[3].developmentTools[1]}</p>
              <p>{tools[3].developmentTools[2]}</p>
              <p>{tools[3].developmentTools[3]}</p>
              <p>{tools[3].developmentTools[4]}</p>
            </span>
          </div>
          <div className="buttonWrapper">
            <button onClick={() => closeDevToolsComponent()} className={devToolsState.buttonClass}>{devToolsState.buttonName}</button>
          </div>
        </div>
        :
        <button onClick={() => expandDevToolsComponent()} className={devToolsState.buttonClass}>{devToolsState.buttonName}</button>
      }
    </div>
  );
};

DevToolsComponent.propTypes = {
  expandDevToolsComponent: PropTypes.func.isRequired,
  closeDevToolsComponent: PropTypes.func.isRequired,
};

export default DevToolsComponent;
