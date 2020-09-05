import React from "react"
import "./Header.css"
const Header = () => (
   <div className="flex-container">
       <div className="flex-item-init text">
            <h1>  
            Next generation<br/> 
            digital banking
            </h1>
            <p>
                Take your financial life online. Your Easybank account<br/>  
                will be a one-stop-shop 
                for spending, saving, <br/>
                 budgeting, investing, and much more.
            </p>
            <button>Request Invite</button>
       </div>
       <div className="flex-item-init init">
            <img src={process.env.PUBLIC_URL + '/images/image-mockups.png'} alt="cargando" />
       </div>
   </div>
)

export default Header