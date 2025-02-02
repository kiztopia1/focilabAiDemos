import React, { useEffect, useState } from "react";
import "./Beecroftstyres.css";
export default function Metanow() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Default to mobile if width is less than 768px
  const [loading, setLoading] = useState(true); // State to track loading status

  // Function to update screen width state
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  // Function to delete all localStorage items starting with a specific prefix
  function deleteLocalStorageItemsWithPrefix(prefix) {
    // Iterate over all localStorage keys
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      // Check if the key starts with the specified prefix
      if (key && key.startsWith(prefix)) {
        localStorage.removeItem(key);
        i--; // Decrement index to account for the removal
      }
    }
  }
  // Add event listener on mount
  useEffect(() => {
    // Call the function with the prefix 'voiceflow-session'
    deleteLocalStorageItemsWithPrefix("voiceflow-session");
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
      {loading && (
        <>
          <h1>Loading, Please Wait...</h1>
          <p>
            This site is created to showcase our AI agents. Please be patient
            while we load the website.
          </p>
        </>
      )}{" "}
      {/* Show loading text until the image loads */}
      <img
        src={isMobile ? "metanow/mobile.png" : "metanow/main.png"}
        alt={isMobile ? "Metanow" : "Metanow"}
        onLoad={handleImageLoad} // Set loading to false when image is loaded
        style={{ display: loading ? "none" : "block" }} // Hide image while loading
      />
      {/* <script type="text/javascript">
  (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: '66acf88fcef88e7eb62a2b36' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        });
      }
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
  })(document, 'script');
</script> */}
      {(function (d, t) {
        var v = d.createElement(t),
          s = d.getElementsByTagName(t)[0];

        v.onload = function () {
          window.voiceflow.chat.load({
            verify: { projectID: "66c1e7ddf9dfe876a245a468" },
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
                var buttonImg = chatbotButton.querySelector("img");
                console.log("button ****", buttonImg);
                buttonImg.style.width = "100%!important";
                buttonImg.style.height = "100%!important";
                // chatbotButton.click();

                let pTag = document.createElement("p");

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
                pTag.innerHTML = "👋 Hey, How can I help you";
                pTag.style.color = "auto";
                pTag.style.fontFamily = "Arial, sans-serif";
                pTag.style.fontSize = ".9rem";

                // chatbotButton.style.animation = "bounce 3s infinite";
                chatbotButton.style.scale = "1.2";
                chatbotButton.style.background = "white";
              }
            }
          }, 100);
        };
        v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
        v.type = "text/javascript";
        s.parentNode.insertBefore(v, s);
      })(document, "script")}
    </div>
  );
}
