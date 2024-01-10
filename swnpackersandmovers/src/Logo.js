// export function Header() {
//   return (
//     <header className="header">
//       {/* <img src="Logo.jpg" className="logo" alt="logo" /><p></p> */}
//       <p className="logo">Siwan Packers And Movers</p>
//     </header>
//   );
// }
export function Logo() {
  return (
    <div className="logo nav-bar">
      {/* <span role="img">🍿</span> */}
      <img src="Logo.jpg" />

      <h1>siwanLogistics</h1>
      <div className="nav-bar-list">
        <a href="#">Home</a>
        <a href="#">All Services</a>
        <a href="#">City Network</a>
        <a href="#">Our Gallery</a>
        <a href="#">Our Blog</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
}
