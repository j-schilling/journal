import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import EntryForm from "./components/EntryForm";
import Input from "./components/Input";

function App() {
  return (
    <>
      <Header text="JOURNAL" />
      <EntryForm title="NEW ENTRY" />
    </>
  );
}

export default App;
