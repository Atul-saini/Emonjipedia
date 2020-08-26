import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
import Footer from "./Footer";
function createentry(term) {
  return (
    <Entry
      key={term.id}
      emoji={term.emoji}
      name={term.name}
      meaning={term.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createentry)}</dl>
      <Footer />
    </div>
  );
}

export default App;
