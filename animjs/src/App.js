import Flag from "./Flag";
import PreviousSteps from "./PreviousSteps";

export default function App() {
  return (
      <div className="App">
        <h1>Flag Code Challenge</h1>
        <h2>By Claude Gauthier</h2>
        <h2>
          E-Mail:{" "}
          <a href="mailto:claude_r_gauthier@hotmail.com">
            claude_r_gauthier@hotmail.com
          </a>
        </h2>
        <h2>
          LinkedIn:{" "}
          <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/gauthierclaude/"
          >
            https://www.linkedin.com/in/gauthierclaude/
          </a>
        </h2>
        <Flag />
        <PreviousSteps />
      </div>
  );
}
