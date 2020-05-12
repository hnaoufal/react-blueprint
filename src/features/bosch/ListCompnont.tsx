
import React from 'react';

export const ListComponent = (props: any) => {

  return (
    <ul>
      {props.list.map((a: any) => <li>{a}</li>)}
    </ul>
  )
};