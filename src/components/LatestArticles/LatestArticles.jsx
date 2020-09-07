import React from "react"
import "./LatestArticles.css";

const LatestArticles = () =>(
    <div className="flex-container-art">
        <div className="card">
            <img src={process.env.PUBLIC_URL + '/images/image-currency.jpg'} alt="cargando" />
            <div className="card-content">
                <span>By Claire Robinson</span>
                <article> 
                    <h1>
                        Receive money in any currency with no fees
                    </h1>
                    <p>
                        The world is getting smaller and we’re becoming more mobile.So why should you be
                        forced to only receive money in a single …
                    </p>
                </article>
            </div>
        </div>
        <div className="card">
            <img src={process.env.PUBLIC_URL + '/images/image-restaurant.jpg'} alt="cargando" />
            <div className="card-content">
                <span>By Wilson Hutton</span>
                <article>
                    <h1>
                        Treat yourself without worrying about money
                    </h1>
                    <p>
                        Our simple budgeting feature allows you to separate out your spending and set
                        realistic limits each month.That means you …
                    </p>
                </article>
        </div>
            </div>
                    <div className="card">
            <img src={process.env.PUBLIC_URL + '/images/image-plane.jpg'} alt="cargando" />
            <div className="card-content">
                <span>By Wilson Hutton</span>
                <article>
                    <h1>
                        Take your Easybank card wherever you go
                    </h1>
                    <p>
                        We want you to enjoy your travels.This is why we don’t charge any fees on purchases
                        while you’re abroad.We’ll even show you …
                    </p>
                </article>
            </div>
        </div>
        <div className="card">
            <img src={process.env.PUBLIC_URL + '/images/image-confetti.jpg'} alt="cargando" />
            <div className="card-content">
                <span>By Claire Robinson</span>
                <article>
                    <h1>
                        Our invite - only Beta accounts are now live!
                    </h1>
                    <p>
                        After a lot of hard work by the whole team, we’re excited to launch our closed beta.
                        It’s easy to request an invite through the site ...
                    </p>
                </article>
            </div>
        </div>
    </div>
)

export default LatestArticles















