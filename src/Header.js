
function Header() {
    return (
        <header id="header">
        <img src="./amazonlogo.png" alt="" className="logo"/>
        <div id="account-info">
            <a href="#">Delivering to Your Location</a>
            <a href="#">Update Location</a>
        </div>
        <div id="search-bar">
            <input type="text" id="search-input" placeholder="Search for products..."/>
            <span onClick={search}>🔍</span>
        </div>

        <ul id="nav-menu">
            <li><a href="#">Hello Sign In</a></li>
            <li><a href="#">Accounts & Lists</a></li>
        </ul>
        
        <a href="#" id="cart">
            <div id="cart-icon">🛒</div>
            <div>Your Cart</div>
        </a>

        <div id="account-info">
            <a href="#">Returns</a>
            <a href="#">& Orders</a>
        </div>
    </header>
    )
}

function search(){
    let searchdata = document.getElementById("search-input").value;
    let rawdt = searchdata.replace(/ /g, '+');
    let dt = "https://www.amazon.in/s?k="+rawdt+"&crid=DNXGB7MV8JS2&sprefix="+rawdt+"%2Caps%2C259&ref=nb_sb_noss";
    window.location.href=dt;
}

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById('search-input').addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
          if (this.value !== "") {
            search();
          }
          event.preventDefault();
        }
      });
});
export default Header;