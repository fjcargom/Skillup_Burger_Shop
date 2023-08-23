import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DropdownMenu() {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const navs = [
      {name:"Login", path:"/login"},
      {name:"Orders", path:"/myorders"},
      {name:"Logout", path:"/login"}
      
    ];
    setNavLinks(navs);
  }, []);

  return (
    <li>
          <div class="btn-group dropstart">
            <button
              type="button"
              class="btn btn-warning dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              Menu
            </button>
            <ul class="dropdown-menu dropdown-menu-lg-start">
              {navLinks.map((d, i) => (
                <li key={i}>
                  <Link to={d.path} className="dropdown-item">
                    
                      {d.name}
                    
                  </Link>
                </li>
              ))}
            </ul>
          </div>
    </li>
  );
}

export default DropdownMenu;