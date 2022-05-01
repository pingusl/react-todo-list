import logo from "../img/logo.png";
const Header = () => {
  return (
    <header className="header">
      <span>
        <img src={logo} className="image" alt="logo-chrono" />
      </span>

      <span> React Todo List</span>
    </header>
  );
};
export default Header;
