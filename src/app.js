import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="footer">
        <div className="d-flex">
          <Link to="/tasks"  className="chrome-reader-mode">
            <img src="chrome_reader_mode_24px.png" alt=""></img>
          </Link>
          <div className="question-answer">
            <Link to="/inbox" className="ellipse ellipse-2">
              <img src="question_answer_24px.png" alt=""></img>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
