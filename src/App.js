import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <h2 className="generator-header">Password Generator</h2>
          <div className="generate-password">
            <h3>Password</h3>
            <button className="copy_btn">
              <i class="fa-solid fa-clipboard-list"></i>
            </button>
          </div>

          <div className="form-group">
            <label htmlFor="password-strength">Password Strength</label>
            <input
              type="number"
              name="password-strength"
              id="password-strength"
              max="20"
              min="10"
            />
          </div>
          <div className="form-group">
            <label htmlFor="uppercase-letters">Include UpperCase Letters</label>
            <input
              type="checkbox"
              name="uppercase-letters"
              id="uppercase-letters"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lowercase-letters">Include Lowercase Letters</label>
            <input
              type="checkbox"
              name="lowercase-letters"
              id="lowercase-letters"
            />
          </div>
          <div className="form-group">
            <label htmlFor="include-numbers">Include Numbers</label>
            <input
              type="checkbox"
              name="include-numbers"
              id="include-numbers"
            />
          </div>
          <div className="form-group">
            <label htmlFor="include-symbols">Include symbols</label>
            <input
              type="checkbox"
              name="include-symbols"
              id="include-symbols"
            />
          </div>
          <button className="generator__btn">Generate Button </button>
        </div>
      </div>
    </div>
  );
}

export default App;
