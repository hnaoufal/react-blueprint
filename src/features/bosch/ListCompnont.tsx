
import React from 'react';

export const ListComponent = (props: any) => {
  return (
    <div>
      <ul>
        {props.list.map((a: any) => <li>{a}</li>)}
      </ul>
      <button></button>
      {props.children}
    </div>
  )
};