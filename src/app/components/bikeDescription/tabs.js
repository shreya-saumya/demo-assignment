import React from 'react';

export default function Tabs({ currentTab, details }) {
  return (
    <div style={{color:'white'}}>
      {currentTab === 1 ? (
        <div >{details.description}</div>
      ) : (
        currentTab === 2 && <div>{details.specification}</div>
      )}
    </div>
  );
}
