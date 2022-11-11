import { Link } from "react-router-dom";

function FooterTasks() {
  return (
    <>
     <div className="footer">
        <div className="d-flex">
          <Link to={"/inbox"}  className="chrome-reader-mode">
            <img src="question_answe.png" alt=""></img>
          </Link>
          <div className="question-answer">
            <div className="ellipse ellipse-1"></div>
            <Link to={"/tasks"} className="ellipse ellipse-2 ellipse-tasks">
              <img src="chrome_reader_mode.png" alt=""></img>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterTasks;
