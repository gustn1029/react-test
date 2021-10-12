

function Header() {
    return (
      <div className="App">
        <header id="header">
            <div className="inner">
                <h1 className="logo"><a href="/">로고</a></h1>
                <nav className="nav">
                    <ul>
                        <li>
                            <a href="/sub/one">1</a>
                        </li>
                        <li>
                            <a href="/sub/two">2</a>
                        </li>
                        <li>
                            <a href="/sub/three">3</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
      </div>
    );
  }
  
  export default Header;