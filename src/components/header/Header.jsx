import "./header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="header">
        <div className="headerWrapper">
          <img
          className="logo"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram original logo"
          />
          <button className="logout__btn">Logout</button>
          <div className="btn">
            <button className="login__btn">Login</button>
            <button className="signup__btn">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
