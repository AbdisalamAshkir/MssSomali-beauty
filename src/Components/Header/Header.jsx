import styles from "./header.module.scss";


function Header() {
  return (
    <div>
      <header className ={styles.header} >
      
        <ul>
          <li>
            <a href='#'>MSSOMALI</a>
          </li>
          <li>
            <a href='#'>ALL COMPOTERTERS</a> 
          </li>
        </ul>
        </header>
      
    </div>
  )
}

export default Header;
