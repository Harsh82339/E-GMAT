import { useState } from "react";
import "./App.css";
import ScoreDisplay from "./components/ScoreDisplay";

const MAX_VERBAL_SCORE = 60;
const MAX_QUANT_SCORE = 60;
const MAX_TOTAL_SCORE = 800;

function App() {
  const [formValues, setFormValues] = useState({
    quantCurrent: 0,
    quantTarget: 0,
    verbalCurrent: 0,
    verbalTarget: 0,
  });

  const [totalCurrent, setTotalCurrent] = useState(0);
  const [totalTarget, setTotalTarget] = useState(0);

  const scoreDiff = totalCurrent - totalTarget;
  const quantDiff = formValues.quantCurrent - formValues.quantTarget;
  const verbalDiff = formValues.verbalCurrent - formValues.verbalTarget;

  const handleOnChange = (e) => {
    setFormValues((formValues) => ({
      ...formValues,
      [e.target.id]: e.target.value,
    }));
  };

  const validateFormFields = () => {
    const isQuantCurrentValid =
      formValues.quantCurrent <= MAX_QUANT_SCORE && formValues.quantCurrent >= 0;
    const isQuantTargetValid =
      formValues.quantTarget <= MAX_QUANT_SCORE && formValues.quantTarget >= 0;
    const isVerbalCurrentValid =
      formValues.verbalCurrent <= MAX_VERBAL_SCORE && formValues.verbalCurrent >= 0;
    const isVerbalTargetValid =
      formValues.verbalTarget <= MAX_VERBAL_SCORE && formValues.verbalTarget >= 0;
    return (
      isQuantCurrentValid &&
      isQuantTargetValid &&
      isVerbalCurrentValid &&
      isVerbalTargetValid
    );
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const isValid = validateFormFields();
    if (isValid) {
      setTotalCurrent(
        200 +
          (parseInt(formValues.verbalCurrent) +
            parseInt(formValues.quantCurrent))*5
      );
      setTotalTarget(
        200 +
          (parseInt(formValues.verbalTarget) +
            parseInt(formValues.quantTarget))* 5
      );
    }
  };

  return (
    <div className="App">
      <section className="form-container">
        <form className="form" onSubmit={handleOnSubmit}>
          <div className="form-field-container">
            <section className="form-section">
              <h3>Quant</h3>
              <label htmlFor="quantCurrent">Current</label>
              <input
                type="number"
                id="quantCurrent"
                value={formValues.quantCurrent}
                onChange={handleOnChange}
                min={0}
                max={MAX_QUANT_SCORE}
              />
              <label htmlFor="quantTarget">Target</label>
              <input
                type="number"
                id="quantTarget"
                value={formValues.quantTarget}
                onChange={handleOnChange}
                min={0}
                max={MAX_QUANT_SCORE}
              />
            </section>
            <section className="form-section">
              <h3>Verbal</h3>
              <label htmlFor="verbalCurrent">Current</label>
              <input
                type="number"
                id="verbalCurrent"
                value={formValues.verbalCurrent}
                onChange={handleOnChange}
                min={0}
                max={MAX_VERBAL_SCORE}
              />
              <label htmlFor="verbalTarget">Target</label>
              <input
                type="number"
                id="verbalTarget"
                value={formValues.verbalTarget}
                onChange={handleOnChange}
                min={0}
                max={MAX_VERBAL_SCORE}
              />
            </section>
          </div>
          <button className="save-btn">Submit and refresh</button>
        </form>
      </section>
      <div className="main-score-container">
        <ScoreDisplay
          title={"Total Score"}
          score={totalCurrent}
          maxScore={MAX_TOTAL_SCORE}
          targetScore={totalTarget}
          currentScore={totalCurrent}
          message={`Your estimted score per your performance in this mock test is ${totalCurrent} which is ${
            scoreDiff === 0 ? "equal to your" : scoreDiff < 0 ? scoreDiff * -1 + " points lower than your "
              : scoreDiff + " points greater than your"
          } target score ${scoreDiff !== 0 ? "of " + totalTarget : ""}`}
        />
      </div>
      <div className="individual-score-container">
        <ScoreDisplay
          title={"Quant Score"}
          score={"Q" + formValues.quantCurrent}
          maxScore={MAX_QUANT_SCORE}
          targetScore={formValues.quantTarget}
          currentScore={formValues.quantCurrent}
          VorQ={"Q"}
          message={`Your estimted total score per your performance in this mock test is Q${
            formValues.quantCurrent
          } which is ${
            quantDiff === 0
              ? "equal to your"
              : quantDiff < 0
              ? quantDiff * -1 + " points lower than your "
              : quantDiff + " points greater than your"
          } target score ${
            quantDiff !== 0 ? "of Q" + formValues.quantTarget : ""
          }`}
        />
        <ScoreDisplay
          title={"Verbal Score"}
          score={"V" + formValues.quantCurrent}
          maxScore={MAX_VERBAL_SCORE}
          targetScore={formValues.verbalTarget}
          currentScore={formValues.verbalCurrent}
          VorQ={"V"}
          message={`Your estimted total score per your performance in this mock test is V${
            formValues.verbalCurrent
          } which is ${
            verbalDiff === 0
              ? "equal to your"
              : verbalDiff < 0
              ? verbalDiff * -1 + " points lower than your "
              : verbalDiff + " points greater than your"
          } target score ${
            quantDiff !== 0 ? "of V" + formValues.verbalTarget : ""
          }`}
        />
      </div>
    </div>
  );
}

export default App;
