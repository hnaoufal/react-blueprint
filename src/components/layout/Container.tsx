import React from "react";
import NavBar from "./NavBar";


export const Container = (props: any) => {
  return <div><NavBar/>{props.children}</div>
}