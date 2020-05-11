import React from "react";
import logo from "../../assets/logo.svg";
import { Counter } from "../../features/counter/Counter";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;

export const AppRoute = {
  component: App,
  url: '/',
}
