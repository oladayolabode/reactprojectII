const navlinks = [
  { id: 0, label: "Home", link: "/home" },
  { id: 1, label: "Pricing", link: "/pricing" },
  { id: 2, label: "About", link: "/about" },
  { id: 3, label: "Contact Us", link: "/contact-us" },
];

function App() {
  return (
    <>
      <header className="border">
        <div className="mx-auto container flex items-center justify-between h-10">
          <div className="logo">LeverageIT</div>
          <nav>
            <ul className="flex items-center justify-center gap-x-8">
              {navlinks.map(({ id, label, link }) => (
                <li key={id}>
                  <a href={link}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="cta_btn">
            <button type="button">Get Started</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
