import { Component, For, createSignal } from "solid-js";
import {
  camelCase,
  constantCase,
  capitalCase,
  dotCase,
  headerCase,
  paramCase,
  pascalCase,
  pathCase,
  sentenceCase,
  snakeCase,
} from "change-case";

import styles from "./App.module.css";

const Case = (props: { label: string; value: string }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(props.value);
    console.log("copied", props.value);
  };

  return (
    <div class={styles.case}>
      <strong>{props.label}</strong>
      <button onClick={handleCopy}>
        <code>{props.value}</code>
      </button>
    </div>
  );
};

const CASES = {
  camelCase,
  pascalCase,
  snakeCase,
  kebabCase: paramCase,
  capitalCase,
  constantCase,
  dotCase,
  headerCase,
  pathCase,
  sentenceCase,
};

const defaultValue = "case me this";

const App: Component = () => {
  const [value, setValue] = createSignal(defaultValue);

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <input
          type="text"
          class={styles.input}
          value={defaultValue}
          onInput={(event) => setValue(event.currentTarget.value)}
        />
      </header>
      <main class={styles.main}>
        <For each={Object.entries(CASES)}>
          {([label, fn]) => <Case label={fn(label)} value={fn(value())} />}
        </For>
      </main>
    </div>
  );
};

export default App;
