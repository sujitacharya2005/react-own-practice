import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Pease click a button");
  /*
  By default react component executed once you have to tell React if a Component should be executed again.

  let tabContent = "Please click a button";
  function handleSelect(selectedButton) {
    tabContent = selectedButton;
    console.log(tabContent);
  }*/

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  console.log("APP COMPONENT EXECUTING");
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("Components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {selectedTopic}
          {/* {tabContent} Not undating value because component is not loading*/}
        </section>
      </main>
    </div>
  );
}

export default App;
