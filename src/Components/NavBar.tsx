import logo from "../assets/images/logo.png";

//NavBar component to display the store logo
export default function NavBar() {
  return (
    <nav className="NavBar">
      <img src={logo} alt="Thrift Happens Logo" width="200" />
    </nav>
  );
}
