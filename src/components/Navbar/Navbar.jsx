import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="name">
          <span>Peninah Isaranwa</span>
        </div>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="/"></img>
          </a>
          <a href="#">
            <img src="/instagram.png" alt="/"></img>
          </a>
          <a href="#">
            <img src="/youtube.png" alt="/"></img>
          </a>
          <a href="#">
            <img src="/dribble.png" alt="/"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
