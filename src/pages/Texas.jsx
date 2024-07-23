import React, { useState, useEffect } from "react";
import "./Texas.css";

export default function Texas() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Default to mobile if width is less than 768px
  const [loading, setLoading] = useState(true); // State to track loading status

  // Function to update screen width state
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  // Add event listener on mount
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to handle image load event
  const handleImageLoad = () => {
    setLoading(false); // Set loading to false once the image is loaded
  };

  return (
    <div className="texas">
      {loading && <h1>Loading...</h1>}{" "}
      {/* Show loading text until the image loads */}
      <img
        src={isMobile ? "texas/texas-mobile.png" : "texas/texas.png"}
        alt={isMobile ? "Texas Mobile" : "Texas"}
        onLoad={handleImageLoad} // Set loading to false when image is loaded
        style={{ display: loading ? "none" : "block" }} // Hide image while loading
      />
      {/* {(function (d, t) {
        var v = d.createElement(t),
          s = d.getElementsByTagName(t)[0];

        v.onload = function () {
          window.voiceflow.chat.load({
            verify: { projectID: "669f65fde12aeb83826a2069" },
            url: "https://general-runtime.voiceflow.com",
            versionID: "production",
          });

          var checkLoadingComplete = setInterval(function () {
            var chatbotButtonHost = document.querySelector("#voiceflow-chat");

            if (chatbotButtonHost && chatbotButtonHost.shadowRoot) {
              var chatbotButton = chatbotButtonHost.shadowRoot.querySelector(
                ".vfrc-launcher.c-bQoszf"
              );

              if (chatbotButton) {
                clearInterval(checkLoadingComplete);
                console.log("Chatbot loading is complete");

                fetch(
                  "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                )
                  .then((response) => response.text())
                  .then((css) => {
                    // Create a style element and append the fetched CSS
                    var style = document.createElement("style");
                    style.textContent = css;
                    chatbotButtonHost.shadowRoot.appendChild(style);
                  });

                pTag = document.createElement("p");
                pTag.classList.add("custom-p-tag");
                pTag.id = "voiceflow-text";
                chatbotButton.appendChild(pTag);
                // Universal style
                chatbotButton.style.position = "relative";
                pTag.style.position = "absolute";
                pTag.style.width = "max-content";
                pTag.style.right = "68px";
                pTag.style.fontFamily = "Arial, sans-serif";
                pTag.style.fontWeight = "bold";
                pTag.innerHTML = "👋 Hey. Get Your Free Workout Plan ";
                pTag.style.color = "auto";
                pTag.style.fontFamily = "Arial, sans-serif";
                pTag.style.fontSize = "10px";

                chatbotButton.style.animation = "bounce 3s infinite";
                chatbotButton.style.scale = "1";
                chatbotButton.style.background = "#ededed";
              }
            }
          }, 100);
        };
        v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
        v.type = "text/javascript";
        s.parentNode.insertBefore(v, s);
      })(document, "script")} */}
    </div>
  );
}
