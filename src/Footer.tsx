import { useEffect, useState } from "react";

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      const docHeight = document.body.scrollHeight;
      // Show footer when scrolled near bottom (last ~200px)
      if (scrollPos >= docHeight - 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className={`footer ${visible ? "footer-visible" : ""}`}>
      <p>© {new Date().getFullYear()} Kalyan Srinivas Mantha</p>
      <a href="mailto:kalyanmantha1410@gmail.com">kalyanmantha1410@gmail.com</a>
    </footer>
  );
}
