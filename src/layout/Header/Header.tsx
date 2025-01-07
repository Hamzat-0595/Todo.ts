import rocket from "src/assets/rocket.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <img className="rocket" src={rocket} />
        <div className="header__todo">
          <div className="header__to"> to</div>
          <div className="header__do">do</div>
        </div>
        <div className="header__name">
          <div className="header__by">by</div>
          <div className="header__unicode">unicode</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
