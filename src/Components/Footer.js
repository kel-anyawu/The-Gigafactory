import React from 'react';
import weblogo from "../images/gigafactory.png"

function Footer() {
    return (
        <div>
          <footer className="footer text-faded text-center py-5">
              <div><img src={weblogo} alt="eblogo" /></div>
            <div className="container"><p className="m-0 small">Copyright &copy; The Gigafactory 2021</p></div>
        </footer>  
        </div>
    )
}

export default Footer
