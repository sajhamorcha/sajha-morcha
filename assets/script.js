/* =========================
   MOBILE MENU
========================= */
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  menuToggle.classList.toggle("active", open);
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  document.body.classList.toggle("menu-open", open);
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

/* =========================
   VIDEO SWITCHER
========================= */
const mainVideo = document.getElementById("mainVideo");
const mainVideoSource = document.getElementById("mainVideoSource");
const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach(card => {
  card.addEventListener("click", () => {
    const file = card.dataset.video;
    if (!file) return;

    mainVideoSource.src = file;
    mainVideo.load();

    mainVideo.play().catch(() => {});

    videoCards.forEach(item => item.classList.remove("active"));
    card.classList.add("active");
  });
});

/* =====================================================
   CAMPAIGN VIDEO SECTION 02
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const campaignVideo02 =
        document.getElementById(
            "campaignVideo02"
        );


    const campaignVideoSource02 =
        document.getElementById(
            "campaignVideoSource02"
        );


    const campaignVideoCards02 =
        document.querySelectorAll(
            ".campaign-video-card-02"
        );


    campaignVideoCards02.forEach(
        function (card) {

            card.addEventListener(
                "click",
                function () {

                    const file =
                        card.dataset.video;


                    if (!file) {
                        return;
                    }


                    /* Change video */

                    campaignVideoSource02.src =
                        file;


                    /* Reload */

                    campaignVideo02.load();


                    /* Play */

                    campaignVideo02
                        .play()
                        .catch(function () {
                            // Browser autoplay restriction
                        });


                    /* Remove active */

                    campaignVideoCards02.forEach(
                        function (item) {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );


                    /* Add active */

                    card.classList.add(
                        "active"
                    );

                }
            );

        }
    );

});

/* =========================
   CHATBOT
========================= */
const chatbot = document.getElementById("chatbot");
const chatToggle = document.getElementById("chatToggle");
const chatClose = document.getElementById("chatClose");
const chatMessages = document.getElementById("chatMessages");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");

chatToggle.addEventListener("click", () => {
  chatbot.classList.toggle("open");

  if (chatbot.classList.contains("open")) {
    setTimeout(() => chatInput.focus(), 100);
  }
});

chatClose.addEventListener("click", () => {
  chatbot.classList.remove("open");
});

function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = "message " + type;
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

const knowledge = [
  {
    keys:["साझा मोर्चा क्या","साझा मोर्चा कौन","sajha morcha","what is sajha"],
    answer:"साझा मोर्चा एक राजनीतिक प्लेटफार्म है, कोई राजनीतिक पार्टी नहीं है। वेबसाइट के अनुसार इसका उद्देश्य युवाओं को संगठित करना, चुनाव लड़ने में सहायता करना और साझा प्रयासों से सिस्टम में बदलाव लाना है।"
  },
  {
    keys:["विजन","vision","उद्देश्य","लक्ष्य"],
    answer:"साझा मोर्चा का प्रमुख विचार जन से जुड़ाव, समाज से संवाद, युवाओं की भागीदारी और साझा प्रयासों के माध्यम से बदलाव से संबंधित है।"
  },
  {
    keys:["उम्मीदवार","candidate","आवेदन","apply","आयु","age"],
    answer:"वेबसाइट पर दी गई जानकारी के अनुसार 21 से 35 वर्ष के युवा साथी साझा उम्मीदवार आवेदन प्रक्रिया में हिस्सा ले सकते हैं। आवेदन के लिए वेबसाइट के 'साझा उम्मीदवार आवेदन' पेज पर जाएँ।"
  },
  {
    keys:["सदस्य","member","join","जुड़ें"],
    answer:"आप अपने क्षेत्र में साझा मोर्चा के अभियान से जुड़कर स्थानीय मुद्दों पर काम करने के विकल्प देख सकते हैं।"
  },
  {
    keys:["स्वयंसेवक","volunteer"],
    answer:"वेबसाइट पर स्वयंसेवक के रूप में जन-संवाद, चौपाल और जागरूकता कार्यक्रमों में समय और कौशल देने का विकल्प बताया गया है।"
  },
  {
    keys:["घोषणापत्र","manifesto","गाँव","गांव"],
    answer:"गाँव के घोषणा पत्र में स्कूल, बालिका शिक्षा, ड्रॉपआउट, स्वास्थ्य, पानी, पशुधन, आवास, स्टार्टअप ट्रेनिंग और प्रवासियों/भामाशाहों की भागीदारी जैसे विषय शामिल हैं।"
  },
  {
    keys:["नगर","नागरिक","citizen"],
    answer:"नागरिक मैनिफेस्टो में स्कूल, सड़क, पानी, मेडिकल चेकअप, मिलावट मुक्ति, सार्वजनिक परिवहन, स्टार्टअप ट्रेनिंग, प्रदूषण और महिला सुरक्षा जैसे विषय शामिल हैं।"
  },
  {
    keys:["गतिविधि","activities","काम"],
    answer:"वेबसाइट पर जन-संवाद, चौपाल, जागरूकता अभियान और सामाजिक कार्यक्रमों को गतिविधियों के रूप में प्रस्तुत किया गया है।"
  }
];

function getBotAnswer(question) {
  const q = question.toLowerCase().trim();

  if (!q) return "कृपया अपना सवाल लिखें।";

  if (
    q.includes("नमस्ते") ||
    q.includes("नमस्कार") ||
    q.includes("hello") ||
    q === "hi"
  ) {
    return "नमस्कार! 🙏 आप साझा मोर्चा के बारे में क्या जानना चाहते हैं?";
  }

  if (q.includes("धन्यवाद") || q.includes("thanks")) {
    return "आपका स्वागत है! 🙏";
  }

  for (const item of knowledge) {
    if (item.keys.some(key => q.includes(key.toLowerCase()))) {
      return item.answer;
    }
  }

  return "मुझे इस सवाल का सटीक उत्तर वेबसाइट में उपलब्ध जानकारी से नहीं मिला। आप विज़न, घोषणापत्र, गतिविधियों, सदस्यता या साझा उम्मीदवार के बारे में पूछ सकते हैं।";
}

function askQuestion(question) {
  addMessage(question, "user");

  setTimeout(() => {
    addMessage(getBotAnswer(question), "bot");
  }, 300);
}

chatForm.addEventListener("submit", event => {
  event.preventDefault();

  const question = chatInput.value.trim();
  if (!question) return;

  askQuestion(question);
  chatInput.value = "";
});

document.querySelectorAll(".quick button").forEach(button => {
  button.addEventListener("click", () => {
    askQuestion(button.dataset.question);
  });
});

/* =========================
   SCROLL REVEAL
========================= */
const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {threshold:.12}
);

revealItems.forEach(item => observer.observe(item));

/* =========================
   HERO VIDEO FALLBACK
========================= */
const heroVideo = document.querySelector(".hero-video");

heroVideo.addEventListener("error", () => {
  heroVideo.style.display = "none";
});


/* =========================================================
   ABOUT PHOTO CAROUSEL
   ========================================================= */

const photoTrack = document.getElementById("photoTrack");
const carouselPrev = document.getElementById("carouselPrev");
const carouselNext = document.getElementById("carouselNext");
const carouselDots = document.getElementById("carouselDots");

const carouselPhotos =
    document.querySelectorAll(".carousel-photo");

let currentPhoto = 0;


/* Create dots */

carouselPhotos.forEach((photo, index) => {

    const dot = document.createElement("button");

    dot.className = "carousel-dot";

    dot.setAttribute(
        "aria-label",
        "फोटो " + (index + 1)
    );

    dot.addEventListener("click", () => {
        currentPhoto = index;
        updateCarousel();
    });

    carouselDots.appendChild(dot);

});


const dots =
    document.querySelectorAll(".carousel-dot");


/* Update carousel */

function updateCarousel() {

    const mobile =
        window.innerWidth <= 800;

    const visiblePhotos =
        mobile ? 1 : 2;

    const maxIndex =
        Math.max(
            0,
            carouselPhotos.length - visiblePhotos
        );

    if (currentPhoto > maxIndex) {
        currentPhoto = maxIndex;
    }

    if (currentPhoto < 0) {
        currentPhoto = 0;
    }

    const photoWidth =
        carouselPhotos[0].getBoundingClientRect().width;

    const gap =
        mobile ? 0 : 14;

    const move =
        currentPhoto * (photoWidth + gap);

    photoTrack.style.transform =
        `translateX(-${move}px)`;


    /* Active dot */

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    if (dots[currentPhoto]) {
        dots[currentPhoto].classList.add("active");
    }


    /* Button states */

    carouselPrev.disabled =
        currentPhoto === 0;

    carouselNext.disabled =
        currentPhoto >= maxIndex;

}


/* Previous */

carouselPrev.addEventListener("click", () => {

    currentPhoto--;

    updateCarousel();

});


/* Next */

carouselNext.addEventListener("click", () => {

    currentPhoto++;

    updateCarousel();

});


/* Resize */

window.addEventListener("resize", () => {

    updateCarousel();

});


/* Initial */

updateCarousel();


/* =========================================================
   ACTIVITIES CAROUSEL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const activityCards =
        document.querySelectorAll(".activity-card");


    activityCards.forEach((card) => {

        const track =
            card.querySelector(".activity-track");

        const prevButton =
            card.querySelector(".activity-prev");

        const nextButton =
            card.querySelector(".activity-next");

        const dotsContainer =
            card.querySelector(".activity-dots");

        const slides =
            card.querySelectorAll(".activity-image");


        if (
            !track ||
            !prevButton ||
            !nextButton ||
            !dotsContainer ||
            slides.length === 0
        ) {
            return;
        }


        let currentIndex = 0;


        /* =========================================
           CREATE DOTS
        ========================================= */

        slides.forEach((slide, index) => {

            const dot =
                document.createElement("button");

            dot.type = "button";

            dot.className =
                "activity-dot";

            dot.setAttribute(
                "aria-label",
                `गतिविधि फोटो ${index + 1}`
            );


            if (index === 0) {
                dot.classList.add("active");
            }


            dot.addEventListener(
                "click",
                () => {

                    currentIndex = index;

                    updateCarousel();

                }
            );


            dotsContainer.appendChild(dot);

        });


        const dots =
            dotsContainer.querySelectorAll(
                ".activity-dot"
            );


        /* =========================================
           UPDATE CAROUSEL
        ========================================= */

        function updateCarousel() {

            /*
             * Each image takes 100% of the visible
             * carousel width.
             */

            track.style.transform =
                `translateX(-${currentIndex * 100}%)`;


            dots.forEach(
                (dot, index) => {

                    dot.classList.toggle(
                        "active",
                        index === currentIndex
                    );

                }
            );


            /*
             * Disable previous button
             * on first image.
             */

            prevButton.disabled =
                currentIndex === 0;


            /*
             * Disable next button
             * on last image.
             */

            nextButton.disabled =
                currentIndex ===
                slides.length - 1;

        }


        /* =========================================
           NEXT
        ========================================= */

        nextButton.addEventListener(
            "click",
            () => {

                if (
                    currentIndex <
                    slides.length - 1
                ) {

                    currentIndex++;

                    updateCarousel();

                }

            }
        );


        /* =========================================
           PREVIOUS
        ========================================= */

        prevButton.addEventListener(
            "click",
            () => {

                if (
                    currentIndex > 0
                ) {

                    currentIndex--;

                    updateCarousel();

                }

            }
        );




       /* =========================================
           video 2 script
        ========================================= */


const mainVideo02 =
    document.getElementById("mainVideo02");

const mainVideoSource02 =
    document.getElementById("mainVideoSource02");

const videoCards02 =
    document.querySelectorAll(".video-card-02");


videoCards02.forEach(card => {

    card.addEventListener("click", () => {

        const file =
            card.dataset.video;

        if (!file) return;


        /* Stop current video */

        mainVideo02.pause();


        /* Change source */

        mainVideoSource02.src =
            file;


        /* Reload video */

        mainVideo02.load();


        /* Play selected video */

        mainVideo02.play().catch(() => {});


        /* Remove active */

        videoCards02.forEach(item => {

            item.classList.remove("active");

        });


        /* Set active */

        card.classList.add("active");

    });

});

        /* =========================================
           INITIAL STATE
        ========================================= */

        updateCarousel();

    });

});


/* =====================================================
   THIRD VIDEO SECTION
===================================================== */

const mainVideo03 =
    document.getElementById("mainVideo03");

const mainVideoSource03 =
    document.getElementById("mainVideoSource03");

const videoCards03 =
    document.querySelectorAll(".video-card-03");


if (
    mainVideo03 &&
    mainVideoSource03 &&
    videoCards03.length
) {

    videoCards03.forEach(card => {

        card.addEventListener("click", () => {

            const file =
                card.dataset.video;

            if (!file) return;


            /* Stop current video */

            mainVideo03.pause();


            /* Change video */

            mainVideoSource03.src =
                file;


            /* Reload */

            mainVideo03.load();


            /* Play selected video */

            mainVideo03.play().catch(() => {});


            /* Active card */

            videoCards03.forEach(item => {

                item.classList.remove("active");

            });


            card.classList.add("active");

        });

    });

}



 /* Youtube video  */


const campaignYoutubePlayer =
    document.getElementById("campaignYoutubePlayer");

const campaignVideoCards =
    document.querySelectorAll(".campaign-video-card");


campaignVideoCards.forEach(card => {

    card.addEventListener("click", function () {

        const videoId =
            this.dataset.video;

        if (!videoId) return;


        /* Change YouTube video */

        campaignYoutubePlayer.src =
            "https://www.youtube.com/embed/" +
            videoId +
            "?autoplay=1";


        /* Remove active */

        campaignVideoCards.forEach(item => {

            item.classList.remove("active");

        });


        /* Set active */

        this.classList.add("active");

    });

});




document.addEventListener("DOMContentLoaded", function () {

    const player =
        document.getElementById("campaignYoutubePlayer03");

    const cards =
        document.querySelectorAll(".campaign-video-card-03");


    /* Stop if this video section doesn't exist */

    if (!player || cards.length === 0) {
        return;
    }


    cards.forEach(function (card) {

        card.addEventListener("click", function () {

            const videoId =
                this.getAttribute("data-video");


            /* Make sure video ID exists */

            if (!videoId) {
                return;
            }


            /* Change YouTube video */

            player.src =
                "https://www.youtube.com/embed/" +
                videoId +
                "?autoplay=1";


            /* Remove active from all cards */

            cards.forEach(function (item) {

                item.classList.remove("active");

            });


            /* Add active to clicked card */

            this.classList.add("active");

        });

    });

});

/* =====================================================
   SAJHA MORCHA UNIQUE YOUTUBE SYSTEM
   Prefix: smv-
===================================================== */

(function () {

    "use strict";


    /*
     * Convert different YouTube formats
     * into a normal video ID.
     */
    function smvGetYoutubeId(value) {

        if (!value) {
            return null;
        }

        value = String(value).trim();


        /*
         * Already a YouTube ID
         *
         * Example:
         * JsSMJaa2vJQ
         */
        if (
            !value.includes("/") &&
            !value.includes("?") &&
            !value.includes("=")
        ) {
            return value;
        }


        try {

            const url = new URL(value);


            /*
             * youtu.be/VIDEO_ID
             */
            if (url.hostname === "youtu.be") {

                return url.pathname
                    .replace(/^\/+/, "")
                    .split("/")[0];

            }


            /*
             * youtube.com/watch?v=VIDEO_ID
             */
            const watchId =
                url.searchParams.get("v");

            if (watchId) {
                return watchId;
            }


            /*
             * youtube.com/embed/VIDEO_ID
             */
            const parts =
                url.pathname.split("/");

            const embedIndex =
                parts.indexOf("embed");

            if (
                embedIndex !== -1 &&
                parts[embedIndex + 1]
            ) {

                return parts[embedIndex + 1];

            }

        } catch (error) {

            console.warn(
                "Invalid YouTube URL:",
                value
            );

        }

        return null;
    }


    /*
     * =================================================
     * SETUP ALL SMV VIDEO CARDS
     * =================================================
     */

    function smvInitializeVideos() {

        const cards =
            document.querySelectorAll(".smv-card");


        if (!cards.length) {
            return;
        }


        cards.forEach(function (card) {

            card.addEventListener("click", function () {

                /*
                 * Which player belongs to this card?
                 */
                const playerId =
                    this.dataset.smpPlayer;


                /*
                 * Which video should play?
                 */
                const videoValue =
                    this.dataset.smpVideo;


                if (
                    !playerId ||
                    !videoValue
                ) {
                    return;
                }


                /*
                 * Find the correct player.
                 */
                const player =
                    document.getElementById(playerId);


                if (!player) {

                    console.warn(
                        "SMV player not found:",
                        playerId
                    );

                    return;
                }


                /*
                 * Convert URL/ID to YouTube ID.
                 */
                const videoId =
                    smvGetYoutubeId(videoValue);


                if (!videoId) {

                    console.warn(
                        "Invalid SMV YouTube video:",
                        videoValue
                    );

                    return;
                }


                /*
                 * Change ONLY this section's
                 * YouTube player.
                 */
                player.src =
                    "https://www.youtube.com/embed/" +
                    encodeURIComponent(videoId) +
                    "?autoplay=1&rel=0";


                /*
                 * Find the parent section.
                 */
                const section =
                    this.closest(".smv-section");


                if (section) {

                    /*
                     * Remove active from ONLY
                     * this section's cards.
                     */
                    section
                        .querySelectorAll(".smv-card")
                        .forEach(function (item) {

                            item.classList.remove("active");

                        });

                }


                /*
                 * Activate clicked card.
                 */
                this.classList.add("active");

            });

        });

    }


    /*
     * Wait until HTML is ready.
     */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            smvInitializeVideos
        );

    } else {

        smvInitializeVideos();

    }

})();

/* =====================================================
   SAJHA MORCHA
   VIDEO SECTION 02
===================================================== */

(function () {

    "use strict";


    const section =
        document.getElementById("smv02");


    if (!section) {
        return;
    }


    const player =
        document.getElementById("smv02MainPlayer");


    const cards =
        section.querySelectorAll(".smv02-card");


    if (!player || !cards.length) {
        return;
    }


    cards.forEach(function (card) {

        card.addEventListener("click", function () {

            const videoId =
                this.getAttribute("data-video");


            if (!videoId) {
                return;
            }


            /*
             * Change ONLY Section 02 player
             */

            player.src =
                "https://www.youtube.com/embed/" +
                encodeURIComponent(videoId) +
                "?autoplay=1&rel=0";


            /*
             * Remove active class
             * only from Section 02
             */

            cards.forEach(function (item) {

                item.classList.remove("active");

            });


            /*
             * Activate clicked card
             */

            this.classList.add("active");

        });

    });


})();

/* =====================================================
   SAJHA MORCHA
   VIDEO SECTION 03
===================================================== */

(function () {

    "use strict";


    const section =
        document.getElementById("smv03");


    if (!section) {
        return;
    }


    const player =
        document.getElementById("smv03MainPlayer");


    const cards =
        section.querySelectorAll(".smv03-card");


    if (!player || !cards.length) {
        return;
    }


    cards.forEach(function (card) {

        card.addEventListener("click", function () {

            const videoId =
                this.getAttribute("data-video");


            if (!videoId) {
                return;
            }


            /*
             * Change ONLY Section 03 player
             */

            player.src =
                "https://www.youtube.com/embed/" +
                encodeURIComponent(videoId) +
                "?autoplay=1&rel=0";


            /*
             * Remove active class
             * only from Section 03
             */

            cards.forEach(function (item) {

                item.classList.remove("active");

            });


            /*
             * Activate clicked card
             */

            this.classList.add("active");

        });

    });


})();
