import "./home_page.css";
import { leaderBoard } from "./data/leaderBoard";
import { categories } from "./data/categories";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <main className="main quiz-main">
      {/* <!-- categories section --> */}
      <section className="section  categories-sec">
        <h1>Categories</h1>
        {/* <!-- grid --> */}
        <div className="categories-grid">
          {/* <!-- card start --> */}
          {categories.map(({ categoryName, image }, index) => {
            return (
              <Link
                to={`/quizzes/${categoryName}`}
                key={index}
                className="card category-card"
              >
                <img src={image} alt={categoryName} />
              </Link>
            );
          })}
        </div>
      </section>

      {/* <!-- leaderboard section --> */}
      <section className="section flex-col leaderboard-sec">
        <h1 className="section-heading">Leaderboard</h1>
        <div className="leader-list">
          {leaderBoard.map(
            ({ user_handle, user_name, user_pic, points }, index) => {
              return (
                <div
                  key={index}
                  className="container leader-sec flex-align-center"
                >
                  <div className="leader-rank">#{index}</div>
                  <div className="leader-img">
                    <img alt="leader avatar" src={user_pic} />
                  </div>
                  <div className="flex-col leader-name">
                    <p>
                      <strong>{user_handle}</strong>
                    </p>
                    <p>{user_name}</p>
                  </div>
                  <p className="body-l leader-points primary">{points}pts</p>
                </div>
              );
            }
          )}
        </div>
      </section>
    </main>
  );
};
