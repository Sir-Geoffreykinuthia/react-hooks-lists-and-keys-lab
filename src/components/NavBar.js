import React from "react";
// defining a functional component "Navbar"
function NavBar() {
  // defining an array of links 
  // the array to be included the navigation bar
  const links = ["home", "about", "projects"];

  // rendering the navigation bar a a list of tags
  // with each link as a separate item
  return (
    <nav>
      {/* using map to iterate over each element  */}
      {/* using index of each array as its unique key, and set the href attribute to the link text */}
      {links.map((link, index) => (
        <a key={index} href={`#${link}`}>
          {link}
        </a>
      ))}
    </nav>
  );
}


// exporting the Navbar component as the default export of the module
export default NavBar;
