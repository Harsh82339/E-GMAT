import "./ProgressBar.css";

const ProgressBar = ({ targetScore, maxScore, currentScore, VorQ }) => {

    const diff = targetScore - currentScore 
    const targetPercent = Math.round((targetScore / maxScore) * 100)
    const currentPercent = Math.round((currentScore / maxScore) * 100)

  return (
    <div className="progressbar">
      <div className="progressbar__pointer-container" style={{left: targetPercent + "%"}}>
        <div className="progressbar__pointer-content">{VorQ}{targetScore}</div>
        <div className="progressbar__pointer progressbar__pointer--target"></div>
      </div>
      <div className="progressbar__pointer-container" style={{left: currentPercent + "%"}}>
        <div className='progressbar__pointer-content'>{VorQ}{currentScore}</div>
        <div className="progressbar__pointer progressbar__pointer--current"></div>
      </div>
      <div className="progressbar__line progressbar__line--target" style={{width: targetPercent + '%'}}>{diff < 0 ? '-' : '+'}{diff}</div>
      <div className="progressbar__line progressbar__line--current" style={{width: currentPercent + '%'}}></div>
    </div>
  );
};

export default ProgressBar;
