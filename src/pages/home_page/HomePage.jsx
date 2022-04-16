import "./home_page.css";
import { CategoryCard } from "../../components";
export const HomePage = () => {
  const leaderBoard = [
    {
      user_pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGtnn5CQr_nEzmp2EDlJAvgXaA4n1taH-sDQ&usqp=CAU",
      user_handle: "Avenger",
      user_name: "Bhavika Tibrewal",
      points: 300,
    },
    {
      user_pic:
        "https://img.freepik.com/free-vector/gamer-mascot-geek-boy-esports-logo-avatar-with-headphones-glasses-cartoon-character_8169-228.jpg",
      user_handle: "Marvel",
      user_name: "Tanay Pratap",
      points: 280,
    },
  ];
  return (
    <main class="main quiz-main">
      {/* <!-- categories section --> */}
      <section className="section  categories-sec">
        <h1>Categories</h1>
        {/* <!-- grid --> */}
        <div className="categories-grid">
          {/* <!-- card start --> */}
          {Array(3)
            .fill()
            .map((category) => {
              return <CategoryCard category={category}/>;
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
                <div className="container leader-sec flex-align-center">
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
