import './ScoreDisplay.css'
import ProgressBar from '../ProgressBar'

const ScoreDisplay = ({title, score, maxScore, targetScore, currentScore, message, VorQ}) => {
    return (
        <section className="score-display">
        <h1>{title}</h1>
        <div className="score-display__total-score">{score}</div>
        <ProgressBar
          maxScore={maxScore}
          targetScore={targetScore}
          currentScore={currentScore}
          VorQ={VorQ}
        />
        <div className='score-display__message'>{message}</div>
        </section>
    )
}

export default ScoreDisplay