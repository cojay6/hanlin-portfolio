const navLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      <a href="#" className="text-lg font-bold text-primary">HL</a>
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
