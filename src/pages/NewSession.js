import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

export default function NewSession() {
  return (
    <div>
      <Header />
      <section className="session__container">
        <form className="session__form">
          <label className="session__form-label">Location</label>
          <input
            className="session__form-input"
            type="text"
            placeholder="Attic, Garage, Eletrical Room..."
          ></input>
          <label className="session__form-label">Job</label>
          <input
            className="session__form-input"
            type="text"
            placeholder="Pulling cable, changing chainsaw chain..."
          ></input>
          <label className="session__form-label">High Risk Job?</label>
          <section className="session__form-radio">
            <div className="session__form-radio-yes">
              <label className="session__form-label" for="yes">
                Yes
              </label>
              <input
                className="session__form-radio-input"
                type="radio"
                value="yes"
                id="yes"
                name="highrisk"
                required
              ></input>
            </div>
            <div className="session__form-radio-no">
              <label className="session__form-label" for="no">
                No
              </label>
              <input
                className="session__form-radio-input"
                type="radio"
                value="no"
                id="no"
                name="highrisk"
              ></input>
            </div>
          </section>
          <button className="session__form-button">Start New Session</button>
        </form>
      </section>
      <Link to="/checkin">Checkin</Link>
    </div>
  );
}
