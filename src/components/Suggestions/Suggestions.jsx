import React from "react"
import "./suggestions.css"

const Suggestions = () =>(
    <div className="flex-container-sug">
        <div id="texto-principal">
        <h2>
             Why choose Easybank?
        </h2>
        <p>
                We leverage Open Banking to turn your bank account into your financial hub.<br/> Control your finances like never before.
        </p>
        </div>
        <div className="flex-container-secondary">
            <div className="flex-item-sug">
                <img src={process.env.PUBLIC_URL + '/images/icon-online.svg'} alt="" />
                <h1>Online Banking</h1>
                <p>
                    Our modern web and mobile applications allow you to keep track of your finances
                    wherever you are in the world.
            </p>
            </div>
            <div className="flex-item-sug">
                <img src={process.env.PUBLIC_URL + '/images/icon-budgeting.svg'} alt="" />
                <h1> Simple Budgeting</h1>
                <p>
                    See exactly where your money goes each month.Receive notifications when you’re
                    close to hitting your limits.
            </p>
            </div>
            <div className="flex-item-sug">
                <img src={process.env.PUBLIC_URL + '/images/icon-onboarding.svg'} alt="" />
                <h1>Fast Onboarding</h1>
                <p>
                    We don’t do branches.Open your account in minutes online and start taking control
                    of your finances right away.
                 </p>
            </div>
            <div className="flex-item-sug">
                <img src={process.env.PUBLIC_URL + '/images/icon-api.svg'} alt="" />
                <h1>Open API</h1>
                <p>
                    Manage your savings, investments, pension, and much more from one account.Tracking
                    your money has never been easier.
            </p>
            </div>
        </div>
    </div>
)

export default Suggestions








