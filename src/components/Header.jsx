import React from "react";

function Header() {
    return (<div className="header">
        <nav class="navbar navbr navbar-expand-lg">
  <a class="nav-logo" href="/">Incubyte</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/"><span className="nav-text">About Us</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/"><span className="nav-text">Our Expertise</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/"><span className="nav-text">Success Stories</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/"><span className="nav-text">Contact Us</span></a>
      </li>
    </ul>
  </div>
</nav>
    </div>);
}

export default Header;