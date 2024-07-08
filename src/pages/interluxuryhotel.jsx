import React, { useEffect } from "react";
import "./interluxuryhotel.css";
export default function Interluxuryhotel() {
  return (
    <div className="inter mado">
      <nav>
        <img src="/inter/350.webp" alt="Inter Lexury Hotel" className="logo" />
        <div className="right">
          <div className="top">
            <div className="re">
              <img className="icon" src="/inter/phone-call.png" alt="phone" />
              <div>
                <div>
                  <p className="small">RESERVATION NUMBER</p>
                  <p>+251 115 180 444</p>
                </div>
              </div>
            </div>
            <div className="location">
              <img
                className="icon"
                src="/inter/maps-and-flags.png"
                alt="phone"
              />
              <div>
                <div>
                  <p className="small">LOCATION</p>
                  <p>VIEW ON MAP</p>
                </div>
              </div>
            </div>
            <div>
              <button>BOOK ONLINE</button>
            </div>
          </div>
          <hr />
          <div className="bottom">
            <p>HOME</p>
            <p> ROOMS & SUITES</p>
            <p> LUXURY APARTMENT</p>
            <p> WELLNESS</p>
            <p> RESTAURANT & BAR</p>
            <p> MORE</p>
            <p> CONTACT US</p>
          </div>
        </div>
      </nav>
      <div className="hero">
        <img
          src="/inter/interHero.webp"
          alt="mado addis"
          className="hero-img"
        />
        <div className="overlay"></div>
        <h2>ALIVE WITH YOUR STYLE OF LIVING AT OUR LUXURY HOTEL</h2>
      </div>

      <div className="foci">
        <h1>This is not the official site of InterLuxuryHotel!</h1>
        <p>
          We created this demo to showcase our AI Agent integration for
          enhancing customer service on hotel websites. This is not the official
          website of mado hotel, but a demonstration of how our agent can assist
          your guests with inquiries and bookings.
        </p>
      </div>
      <div className="fe">
        <div>
          <h3>Introduction</h3>
          <p className="intro">
            At Foci Lab, we understand the importance of providing exceptional
            customer service. That's why we've developed an AI agents
            specifically designed for hotels, helping you to offer a seamless
            and personalized experience for your guests.
          </p>
          <h3>Benefits:</h3>
          <ul>
            <li>
              <p className="header">Increased Booking Rates</p>
              <p>Achieve 90% faster response times with 24/7 availability.</p>
            </li>
            <li>
              <p className="header">Cost Savings</p>
              <p>
                Reduce operational costs by handling customer interactions
                automatically.
              </p>
            </li>
            <li>
              <p className="header">Data-Driven Personalization</p>
              <p>Collect and analyze guest data to offer tailored services.</p>
            </li>
            <li>
              <p className="header">Increased Booking Rates:</p>
              <p>
                Boost booking rates by up to 20% with instant, personalized
                responses.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h3>Features</h3>
          <ul>
            <li>
              <p className="header">24/7 Availability:</p>
              <p>
                Our chatbot is available round the clock, ensuring that your
                guests can get the help they need anytime, anywhere.
              </p>
            </li>
            <li>
              <p className="header">Instant Responses:</p>
              <p>
                No more waiting for email replies or call-backs. Our AI Agent
                provides instant answers to your guests' questions.
              </p>
            </li>
            <li>
              <p className="header">Booking Assistance:</p>
              <p>
                From room reservations to special requests, our chatbot guides
                your guests through the booking process, making it quick and
                easy.
              </p>
            </li>
            <li>
              <p className="header">Personalized Recommendations:</p>
              <p>
                By analyzing guest preferences, our chatbot can suggest
                activities, dining options, and local attractions tailored to
                their interests.
              </p>
            </li>
            <li>
              <p className="header">Seamless Integration:</p>
              <p>
                Our chatbot integrates effortlessly with your existing website
                and booking systems, providing a smooth experience for both you
                and your guests.
              </p>
            </li>
          </ul>
        </div>

        {(function (d, t) {
          var v = d.createElement(t),
            s = d.getElementsByTagName(t)[0];
          v.onload = function () {
            window.voiceflow.chat.load({
              verify: { projectID: "66456259c00a4f93f1e87683" },
              url: "https://general-runtime.voiceflow.com",
              versionID: "production",
            });
          };
          v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
          v.type = "text/javascript";
          s.parentNode.insertBefore(v, s);
        })(document, "script")}
      </div>
      <div className="offer">
        <div>
          <h2>What Next?</h2>
          <p>
            If you believe our AI Agent can enhance your hotel's website visitor
            experience and would like to discuss it further, please give us a
            call. We can arrange a meeting at your office or schedule a quick
            video call to discuss the details.
          </p>
        </div>
        <div className="links">
          <a href="https://focilab.com/" className="website">
            Visite Our Website
          </a>
          <a href="mailto:kirubel@focilab.com" className="email">
            kirubel@focilab.com
          </a>
          <a href="tel:+251960551172" className="phone">
            +251960551172
          </a>
        </div>
      </div>
    </div>
  );
}
