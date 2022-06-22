import React, { Component } from "react";
import profilepic from "../assets/Kevin_Kim.jpg"

export default function Home() {
        return (
            <div className="home">
                <div className="hero">
                    <div className="hero__data">
                        <h2 className="hero__data--title">Web Developer</h2>
                        <h1 className="hero__data--name">Kevin</h1>
                        <h1 className="hero__data--name">Kim</h1>
                        <div className="hero__meta">    
                        <h1 className="hero__meta--paragraph">I'm a web developer based in Burnaby, British Columbia and my passion is fitness and comedy.</h1>
                        <div className="hero__social">
                            <div className="hero__socal--icon">
                            </div>
                            <div className="hero__social--icon">
                            </div>
                            <div className="hero__social--icon">
                            </div>
                        </div>
                        </div>
                        <div className="hero__cta">
                            <button className="hero__cta--btn">About Me</button>
                            <button className="hero__cta--btn">Projects</button>
                        </div>
                    </div>
                    <div className="hero__picture"><img className="hero__picture--profile" src={profilepic} alt="picture of kevin" /></div>
                </div>
                <div className=""></div>
                <div className=""></div>
            </div>
        )
}