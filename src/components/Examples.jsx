import { EXAMPLES } from "../data";
import Section from "./Section";
import TabButton from "./TabButton";
import { useState } from "react";
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
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

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}

      {/* {selectedTopic} */}
      {/* {tabContent} Not undating value because component is not loading*/}
    </Section>
  );
}
