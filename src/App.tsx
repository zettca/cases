import { Component, For, createEffect, createSignal } from "solid-js";
import {
  camelCase,
  pascalCase,
  capitalCase,
  dotCase,
  headerCase,
  pathCase,
  snakeCase,
} from "change-case";

import styles from "./App.module.css";

const Case = (props: { label: string; value: string }) => {
  return (
    <div>
      <h3>{props.label}</h3>
      <code>{props.value}</code>
    </div>
  );
};

const CASES = {
  pascalCase,
  camelCase,
  capitalCase,
  dotCase,
  headerCase,
  pathCase,
  snakeCase,
};

const defaultValue = "case me this";

const App: Component = () => {
  const [value, setValue] = createSignal(defaultValue);

  createEffect(() => {
    console.log(value());
  });

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <input
          autofocus
          type="text"
          class={styles.input}
          value={defaultValue}
          onInput={(event) => setValue(event.currentTarget.value)}
        />
      </header>
      <main class={styles.main}>
        <For each={Object.entries(CASES)}>
          {([label, fn]) => <Case label={label} value={fn(value())} />}
        </For>
      </main>
    </div>
  );
};

export default App;
