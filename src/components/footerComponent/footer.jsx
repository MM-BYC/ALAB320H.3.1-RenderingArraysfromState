import React from "react";

function Footer({ year }) {
  return (
    <footer className="rights">
      <div>
        <p className="copyright">&copy; {year} All Rights Reserved.</p>
      </div>

      <div>
        <p className="powered">powered by BYC</p>
      </div>
    </footer>
  );
}

export default Footer;
