import Notification from "./Notification";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="z-50 fixed inset-0 w-full h-screen pointer-events-none">
      <Notification />
      <Navbar />
    </header>
  );
}

export default Header;
