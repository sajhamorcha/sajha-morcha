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

const state = {
  lastTopic: null,
  history: []
};

const canonicalIntents = [
  {
    id: 'GREETING',
    topic: 'greeting',
    patterns: ['hi', 'hello', 'hey', 'namaste', 'नमस्ते', 'नमस्कार', 'राम राम', 'हेलो', 'namaskar', 'salam'],
    answer: 'नमस्ते 🙏\nमैं साझा मोर्चा के बारे में जानकारी देने के लिए यहाँ हूँ।\nआप साझा मोर्चा, DOST Plus, DNT, साझा उम्मीदवार, लालजी राईका जी, पंचायत/निकाय घोषणा पत्र या उम्मीदवार फॉर्म से जुड़ा कोई भी सवाल पूछ सकते हैं।'
  },
  {
    id: 'SAJHA_MORCHA_GENERAL',
    topic: 'sajha_morcha',
    patterns: ['साझा मोर्चा क्या है', 'साझा मोर्चा क्या होता है', 'sajha morcha kya hai', 'sajha morcha kya h', 'sajha morcha kya hota h', 'ये साझा मोर्चा क्या है', 'ये संगठन क्या है', 'इसका काम क्या है', 'sm kya h', 'sajha morcha kya'],
    answer: 'साझा मोर्चा एक राजनीतिक प्लेटफार्म है, राजनीतिक पार्टी नहीं है।'
  },
  {
    id: 'SAJHA_MORCHA_PURPOSE',
    topic: 'sajha_morcha',
    patterns: ['साझा मोर्चा का उद्देश्य', 'इसका उद्देश्य', 'मकसद', 'main purpose', 'objective', 'purpose', 'साझा मोर्चा क्यों बनाया', 'उद्देश्य क्या है', 'इसका मकसद क्या है', 'साझा मोर्चा क्यों है'],
    answer: 'साझा मोर्चा का उद्देश्य युवाओं को संगठित करना, उन्हें चुनाव लड़ने में सहायता करना और साझा प्रयासों से सिस्टम में बदलाव लाना है।'
  },
  {
    id: 'SAJHA_MORCHA_FOUNDERS',
    topic: 'sajha_morcha',
    patterns: ['साझा मोर्चा किसने बनाया', 'किसके द्वारा बनाया गया', 'who created', 'who made it', 'ये किसने बनाया', 'साझा मोर्चा किसने बनायी', 'kisne banaya', 'ye kisne banaya'],
    answer: 'दिए गए विवरण के अनुसार राष्ट्रीय पशुपालक संघ और DNT संघर्ष समिति द्वारा साझा मोर्चा का गठन किया गया।'
  },
  {
    id: 'SAJHA_MORCHA_PARTY_OR_PLATFORM',
    topic: 'sajha_morcha',
    patterns: ['क्या ये पार्टी है', 'party hai kya', 'political party', 'ye party hai', 'क्या साझा मोर्चा political party है', 'ये आंदोलन है या पार्टी', 'party or platform', 'पार्टी और मोर्चे में फर्क', 'क्या ये कोई पार्टी है'],
    answer: 'नहीं। साझा मोर्चा एक राजनीतिक प्लेटफार्म है, राजनीतिक पार्टी नहीं है।'
  },
  {
    id: 'DOST_PLUS_GENERAL',
    topic: 'dost_plus',
    patterns: ['dost plus kya hai', 'dost plus क्या है', 'dost plus ka matlab', 'dost plus ka full form', 'dost plus', 'what is dost plus'],
    answer: 'DNT, वंचित OBC, वंचित SC, वंचित ST और Plus यानी General समाजों को मिलाकर DOST Plus कहा गया है।'
  },
  {
    id: 'DOST_PLUS_MEMBERS',
    topic: 'dost_plus',
    patterns: ['dost plus mein kaun kaun aata h', 'dost plus mein kaun kaun ata h', 'dost plus mein kaun hai', 'dost me d o s t kya h', 'dost me d kya hai', 'dost me o kya hai', 'dost me s kya hai', 'dost me s kya hota h', 'dost me s kya hota hai', 'DOST में S क्या है', 'dost me t kya hai', 'plus ka matlab kya hai', 'dost plus me kon kon aata h', 'dost plus me kon kon ata h', 'dost plus me kaun kaun h', 'dost plus me kaun kaun aata hai', 'konsen samaj d ost me h', 'dost plus me kon kon h', 'dost में s kya hai', 'dost में s kya hota hai', 'dost में d kya hai', 'dost में o kya hai', 'dost में t kya hai'],
    answer: 'DOST Plus में DNT, वंचित OBC, वंचित SC, वंचित ST और General समाज शामिल हैं। D का अर्थ DNT, O का अर्थ वंचित OBC, S का अर्थ वंचित SC, T का अर्थ वंचित ST और Plus का अर्थ General समाज है।'
  },
  {
    id: 'DNT_GENERAL',
    topic: 'dnt_sangharsh_samiti',
    patterns: ['dnt kya hai', 'dnt क्या है', 'dnt ka matlab', 'dnt ki baat', 'dnt samaj'],
    answer: 'DNT एक सामाजिक-राजनीतिक पहचान के रूप में DNT समुदायों से जुड़ी व्याप्तता को दर्शाता है, और DNT संघर्ष समिति DNT के 52 समाजों के अधिकारों को लेकर आंदोलनरत रही है।'
  },
  {
    id: 'DNT_MOVEMENT',
    topic: 'dnt_sangharsh_samiti',
    patterns: ['dnt struggle committee', 'dnt sangharsh samiti kya hai', 'dnt samiti kya hai', 'dnt ka andolan', 'dnt movement', 'dnt mahapadav', 'dnt me kitne log aaye', 'dnt movement kyon hua'],
    answer: 'DNT संघर्ष समिति DNT के 52 समाजों के अधिकारों को लेकर आंदोलनरत संगठन है। दिए गए डेटा के अनुसार यह पिछले दो वर्षों से आंदोलन कर रही है और 1 जुलाई को जयपुर में DNT महापड़ाव हुआ, जिसमें करीब एक लाख से अधिक लोग शामिल हुए।'
  },
  {
    id: 'RPS_GENERAL',
    topic: 'national_pashupalak_sangh',
    patterns: ['राष्ट्रीय पशुपालक संघ क्या है', 'rps kya h', 'rashtriya pashupalak sangh kya hai', 'पशुपालक संघ क्या करता है', 'pashupalak sangh kya hai'],
    answer: 'दिए गए विवरण के अनुसार यह पशुपालकों की समस्याओं के समाधान और नीति निर्माण के लिए दबाव बनाने वाला संगठन है।'
  },
  {
    id: 'RPS_WORK',
    topic: 'national_pashupalak_sangh',
    patterns: ['राष्ट्रीय पशुपालक संघ का उद्देश्य', 'पशुपालक संघ किसके लिए काम करता है', 'kya kaam karta hai', 'रोजगार के लिए क्या किया', 'डेयरी के लिए क्या काम', 'ऊंट बचाओ आंदोलन', 'migrant sheep herders', 'भेड़पालकों की समस्याएं'],
    answer: 'राष्ट्रीय पशुपालक संघ का उद्देश्य पशुपालन के क्षेत्र में अधिक रोजगार अवसर उपलब्ध कराना और डेयरी उद्योग के विकास को बढ़ावा देना है। यह पशुपालकों की समस्याओं, नीति निर्माण, रोजगार अवसर और डेयरी उद्योग से जुड़े मुद्दों पर काम करता है।'
  },
  {
    id: 'LAL_JI_RAIKA_GENERAL',
    topic: 'lal_ji_raika',
    patterns: ['लालजी राईका कौन हैं', 'लाल जी राईका सर कौन हैं', 'lalji raika kaun hain', 'lal ji raika sir kon h', 'lal ji raika who', 'लालजी राईका जी कौन हैं'],
    answer: 'उपलब्ध सार्वजनिक रिपोर्टों में लालजी राईका को राष्ट्रीय पशुपालक संघ और DNT संघर्ष समिति से जुड़े नेतृत्वकारी व्यक्ति के रूप में बताया गया है।'
  },
  {
    id: 'LAL_JI_RAIKA_CURRENT',
    topic: 'lal_ji_raika',
    patterns: ['उनका संगठन कौन सा है', 'लालजी राईका किस संगठन से जुड़े हैं', 'किस संगठन के अध्यक्ष हैं', 'उनका संगठन', 'किसके अध्यक्ष हैं', 'their organization', 'latest statement', 'current statement', 'अभी क्या कर रहे हैं'],
    answer: 'उपलब्ध रिपोर्टों में उन्हें राष्ट्रीय पशुपालक संघ का अध्यक्ष और DNT संघर्ष समिति का अध्यक्ष बताया गया है। DNT, विमुक्त, घुमंतू और अर्ध-घुमंतू समुदायों से जुड़े अधिकारों और मांगों के आंदोलनों से उनका संबंध भी बताया गया है।'
  },
  {
    id: 'VILLAGE_MANIFESTO',
    topic: 'panchayat_manifesto',
    patterns: ['गांव का manifesto क्या है', 'village manifesto kya hai', 'पंचायत manifesto क्या है', 'गांव के लिए क्या योजना है', 'पंचायत चुनाव का village manifesto', 'गांव के manifesto में क्या है', 'panchayat manifesto'],
    answer: 'गाँव के विकास के लिए शिक्षा, स्वास्थ्य, पानी, रोजगार और सामाजिक विकास पर केंद्रित घोषणा पत्र। इसमें स्कूलों में सुधार, बालिका शिक्षा, स्वास्थ्य, पानी, पशुधन, रोजगार और बुनियादी सुविधाओं पर जोर दिया जाता है।'
  },
  {
    id: 'CITIZEN_FIRST',
    topic: 'citizen_first',
    patterns: ['citizen first kya hai', 'Citizen First क्या है', 'नगर निकाय manifesto क्या है', 'नगर निकाय में क्या है', 'नगर निकाय क्या है', 'शहर के लिए क्या योजना है', 'नागरिक घोषणा पत्र क्या है', 'city manifesto', 'citizen first', 'नगर निकाय में क्या योजना है', 'शहर का manifesto क्या है'],
    answer: 'Citizen First नगर निकाय के लिए नागरिक-केंद्रित घोषणा पत्र है। इसमें स्कूल, सड़क, पानी, स्वास्थ्य, सार्वजनिक परिवहन, प्रदूषण, महिला सुरक्षा और मूलभूत सुविधाओं पर जोर दिया जाता है।'
  },
  {
    id: 'SHARED_CANDIDATE_GENERAL',
    topic: 'shared_candidate',
    patterns: ['साझा उम्मीदवार क्या है', 'साझा candidate क्या है', 'shared candidate kya hai', 'candidate kya hota hai', 'उम्मीदवार कौन होता है', 'साझा उम्मीदवार कौन है', 'साझा उम्मीदवार कौन होता है', 'who can become a candidate', 'candidate kaun ho sakta hai', 'साझा उम्मीदवार कौन बन सकता है'],
    answer: 'साझा उम्मीदवार वह उम्मीदवार है जिसे साझा मोर्चा के बैनर तले निर्दलीय उम्मीदवार के रूप में चुनाव लड़ाया जाएगा।'
  },
  {
    id: 'SHARED_CANDIDATE_ELIGIBILITY',
    topic: 'shared_candidate',
    patterns: ['साझा उम्मीदवार कौन बन सकता है', 'candidate kaun ban sakta hai', 'उम्मीदवार बनने के लिए क्या चाहिए', 'साझा उम्मीदवार बनने के लिए क्या चाहिए', 'candidate bnne ke liye kya chahiye', 'requirements kya hai', 'eligibility kya hai', 'criteria kya hai', 'योग्यता क्या चाहिए', 'eligible hoon kya', 'मैं build candidate?', 'candidate ka eligibility'],
    answer: 'साझा उम्मीदवार बनने के लिए योग्य व्यक्ति Graduate होना चाहिए, आयु 21 से 35 वर्ष के बीच होनी चाहिए, सामाजिक कार्य और आंदोलन में भाग लेने का अनुभव होना चाहिए तथा अपने दम पर कम से कम 500 वोट लाने की क्षमता होनी चाहिए।'
  },
  {
    id: 'SHARED_CANDIDATE_AGE',
    topic: 'shared_candidate',
    patterns: ['candidate age', 'उम्र कितनी चाहिए', 'age limit', 'minimum age', 'maximum age', 'आयु कितनी है', 'उम्र कितनी होनी चाहिए', '21 साल का हूँ', '35 का हूँ', '36 का हूँ', '20 साल का हूँ', 'age kitni honi chahiye', 'umar kitni honi chahiye', 'मेरी उम्र 25 है', 'meri umar 25 hai', '25 saal hai', '25 year age'],
    answer: 'साझा उम्मीदवार की आयु 21 से 35 वर्ष होनी चाहिए। 25 वर्ष की आयु इस सीमा में आती है; इसके साथ Graduate होना, सामाजिक कार्य/आंदोलन का अनुभव और कम से कम 500 वोट की क्षमता भी आवश्यक है।'
  },
  {
    id: 'SHARED_CANDIDATE_EDUCATION',
    topic: 'shared_candidate',
    patterns: ['graduate hona jaruri hai', 'degree chaiye', 'education required', 'graduate required', 'कितनी पढ़ाई चाहिए', 'qualification kya hai', 'graduate hu', '12th pass chalega', 'degree kya chahiye', 'graduation required'],
    answer: 'हाँ, Graduate होना आवश्यक है।'
  },
  {
    id: 'SHARED_CANDIDATE_EXPERIENCE',
    topic: 'shared_candidate',
    patterns: ['social work experience', 'आंदोलन का अनुभव', 'movement experience', 'क्या social work जरूरी है', 'क्या आंदोलन में experience चाहिए', 'socail work jaruri', 'social worker candidate'],
    answer: 'हाँ, सामाजिक कार्य और आंदोलन में भाग लेने का अनुभव अपेक्षित है।'
  },
  {
    id: 'SHARED_CANDIDATE_500_VOTES',
    topic: 'shared_candidate',
    patterns: ['500 vote why', '500 वोट क्यों चाहिए', '500 vote ki condition', '500 vote wali condition', '500 vote ka matlab', '500 vote guarantee', '500 vote ke liye kya', '500 vote required', '500 vote kitne ki capability'],
    answer: 'निर्धारित मानदंड के अनुसार उम्मीदवार में अपने दम पर कम से कम 500 वोट लाने की क्षमता अपेक्षित है।'
  },
  {
    id: 'SHARED_CANDIDATE_HOW_TO_APPLY',
    topic: 'shared_candidate',
    patterns: ['उम्मीदवार कैसे बनूं', 'मैं candidate कैसे बनूं', 'shared candidate kaise bane', 'candidate kaise banu', 'mujhe candidate banna hai', 'candidate banne ke liye kya karna padega', 'candidate banne ka process', 'candidate bnne ki process kya hai', 'उम्मीदवार बनना है', 'मैं कैसे बन सकता हूँ', 'apply kaise karu', 'how can i become a candidate', 'मैं सकारात्मक रूप से कैसे apply कर सकता हूँ', 'mujhe candidate banna h', 'candidate bnne ke liye kya chahiye', 'candidate banne ke liye kya chahiye', 'candidate banna hai', 'candidate bnna hai', 'candidate bnne ke liye kya chahiye', 'candidate bnne ke liye kya chahiye?', 'candidate banne ke liye kya chahiye?', 'मैं साझा उम्मीदवार कैसे बन सकता हूँ', 'sajha ummidwar kaise bane', 'candidate bana hai', 'graduate hu apply kar sakta hu', 'graduate hoon apply kar sakta hoon'],
    answer: 'साझा उम्मीदवार बनने के लिए आपको निर्धारित योग्यताएं पूरी करनी होंगी। उम्मीदवार Graduate होना चाहिए, आयु 21 से 35 वर्ष के बीच होनी चाहिए, सामाजिक कार्य और आंदोलन में भाग लेने का अनुभव होना चाहिए तथा अपने दम पर कम से कम 500 वोट लाने की क्षमता होनी चाहिए। इसके बाद वेबसाइट पर उपलब्ध साझा उम्मीदवार का फॉर्म भरकर अपनी फोटो और हस्ताक्षर के साथ अपलोड करना होगा। अंतिम चयन एक चयन समिति द्वारा किया जाएगा।'
  },
  {
    id: 'SHARED_CANDIDATE_FORM',
    topic: 'shared_candidate',
    patterns: ['form kaha milega', 'where is the application form', 'form kaise bhare', 'फॉर्म कैसे भरें', 'candidate form kaha hai', 'साझा उम्मीदवार का form', 'application kaha hai', 'apply kaha karna hai', 'form submit kaise karen', 'photo lagani hai', 'signature karna hai', 'फॉर्म भरने के बाद क्या होगा', 'form bhar diya to kya', 'form kaise bharna hai', 'फॉर्म कैसे भरना है', 'forms kaha milega', 'application form kaha milega'],
    answer: 'वेबसाइट पर उपलब्ध साझा उम्मीदवार फॉर्म भरें। फॉर्म में मांगी गई जानकारी भरें, फोटो लगाएं, हस्ताक्षर करें और submit करें। फॉर्म भरने के बाद आवेदन चयन समिति के पास जाएगा और समिति आपका चयन करेगी।'
  },
  {
    id: 'SHARED_CANDIDATE_SELECTION',
    topic: 'shared_candidate',
    patterns: ['selection kaun karega', 'candidate ka selection kaun karega', 'form bharne se candidate ban jaoge', 'form bharne se ho jayega', 'what happens after form', 'selection committee', 'final selection', 'committee check krega', 'candidate application kaun dekhega'],
    answer: 'नहीं। फॉर्म भरना आवेदन प्रक्रिया का हिस्सा है। अंतिम चयन चयन समिति द्वारा किया जाएगा।'
  },
  {
    id: 'SHARED_CANDIDATE_SUPPORT',
    topic: 'shared_candidate',
    patterns: ['candidate ko kya support milega', 'campaign kaun karega', 'social media promotion', 'workers aaenge', 'leaders campaign karenge', 'दूसरे candidate support करेंगे', 'manifesto kaun banega', 'local manifesto milega', 'support kya milega', 'candidate ko kya fayda', 'मोर्चा क्या support देगा', 'campaign support kaise milega', 'social media par promotion'],
    answer: 'साझा मोर्चा सोशल मीडिया प्रचार, प्रचार अभियान में नेताओं और कार्यकर्ताओं की भागीदारी, समर्थकों से वोट की अपील और लोकल मैनिफेस्टो तैयार करने जैसी सहायता करेगा।'
  },
  {
    id: 'SHARED_CANDIDATE_ELECTION_SYMBOL',
    topic: 'shared_candidate',
    patterns: ['चुनाव चिन्ह कौन देगा', 'symbol kaun dega', 'election symbol', 'symbol milga', 'मोर्चा symbol देगा', 'party ticket milega', 'political party ticket', 'independent election'],
    answer: 'चुनाव आयोग चुनाव प्रक्रिया के अनुसार चुनाव चिन्ह आवंटित करेगा। दिए गए मॉडल के अनुसार साझा उम्मीदवार निर्दलीय उम्मीदवार के रूप में चुनाव लड़ेगा।'
  },
  {
    id: 'SKEPTICAL_UNVERIFIED',
    topic: 'general',
    patterns: ['ye sab sirf election ke liye hai', 'क्या ये सच में होगा', 'guarantee hai', 'money milega', 'naukri milegi', 'salary milegi', 'government me pad milega', 'ticket milega', 'campaign ka pura kharcha kaun lega', 'money dega kya', 'promise hai kya'],
    answer: 'उपलब्ध जानकारी में इसकी पुष्टि नहीं दी गई है।'
  },
  {
    id: 'UNKNOWN_QUERY',
    topic: 'general',
    patterns: [],
    answer: 'आप साझा मोर्चा, साझा उम्मीदवार, DOST Plus, DNT, लालजी राईका जी, पंचायत/निकाय घोषणा पत्र या फॉर्म में से किस बारे में जानना चाहते हैं?'
  }
];

const topicMap = {
  GREETING: 'greeting',
  SAJHA_MORCHA_GENERAL: 'sajha_morcha',
  SAJHA_MORCHA_PURPOSE: 'sajha_morcha',
  SAJHA_MORCHA_FOUNDERS: 'sajha_morcha',
  SAJHA_MORCHA_PARTY_OR_PLATFORM: 'sajha_morcha',
  DOST_PLUS_GENERAL: 'dost_plus',
  DOST_PLUS_MEMBERS: 'dost_plus',
  DNT_GENERAL: 'dnt_sangharsh_samiti',
  DNT_MOVEMENT: 'dnt_sangharsh_samiti',
  RPS_GENERAL: 'national_pashupalak_sangh',
  RPS_WORK: 'national_pashupalak_sangh',
  LAL_JI_RAIKA_GENERAL: 'lal_ji_raika',
  LAL_JI_RAIKA_CURRENT: 'lal_ji_raika',
  VILLAGE_MANIFESTO: 'panchayat_manifesto',
  CITIZEN_FIRST: 'citizen_first',
  SHARED_CANDIDATE_GENERAL: 'shared_candidate',
  SHARED_CANDIDATE_ELIGIBILITY: 'shared_candidate',
  SHARED_CANDIDATE_AGE: 'shared_candidate',
  SHARED_CANDIDATE_EDUCATION: 'shared_candidate',
  SHARED_CANDIDATE_EXPERIENCE: 'shared_candidate',
  SHARED_CANDIDATE_500_VOTES: 'shared_candidate',
  SHARED_CANDIDATE_HOW_TO_APPLY: 'shared_candidate',
  SHARED_CANDIDATE_FORM: 'shared_candidate',
  SHARED_CANDIDATE_SELECTION: 'shared_candidate',
  SHARED_CANDIDATE_SUPPORT: 'shared_candidate',
  SHARED_CANDIDATE_ELECTION_SYMBOL: 'shared_candidate',
  SKEPTICAL_UNVERIFIED: 'general'
};

function normalizeText(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/\bkon\b/g, 'kaun')
    .replace(/\bkese\b/g, 'kaise')
    .replace(/\bkyu\b/g, 'kyun')
    .replace(/\bkyon\b/g, 'kyun')
    .replace(/\bchaiye\b/g, 'chahiye')
    .replace(/\bbnna\b/g, 'banna')
    .replace(/\bbnne\b/g, 'banne')
    .replace(/\bkya h\b/g, 'kya hai')
    .replace(/\bhota h\b/g, 'hota hai')
    .replace(/[\u200d\s]+/g, ' ')
    .replace(/[^\u0900-\u097f a-z0-9]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function hasAnyPattern(question, patterns) {
  const normalizedQuestion = normalizeText(question);
  return patterns.some(pattern => normalizedQuestion.includes(normalizeText(pattern)));
}

function isGreeting(question) {
  return hasAnyPattern(question, ['hi', 'hello', 'hey', 'namaste', 'नमस्ते', 'राम राम', 'हेलो', 'नमस्कार', 'namaskar']);
}

function inferTopicFromHistory(question) {
  const q = normalizeText(question);
  const recent = state.history.slice(-10).map(entry => normalizeText(entry)).join(' ');
  const combined = [q, recent].join(' ');

  if (hasAnyPattern(combined, ['साझा मोर्चा', 'sajha morcha', 'morcha'])) return 'sajha_morcha';
  if (hasAnyPattern(combined, ['साझा उम्मीदवार', 'candidate', 'ummidwar', 'upmidwar', 'shared candidate', 'apply', 'form'])) return 'shared_candidate';
  if (hasAnyPattern(combined, ['dost plus', 'dost'])) return 'dost_plus';
  if (hasAnyPattern(combined, ['dnt', 'महापड़ाव', 'संघर्ष समिति'])) return 'dnt_sangharsh_samiti';
  if (hasAnyPattern(combined, ['राष्ट्रीय पशुपालक संघ', 'pashupalak', 'rps'])) return 'national_pashupalak_sangh';
  if (hasAnyPattern(combined, ['लालजी राईका', 'lal ji raika', 'raika'])) return 'lal_ji_raika';
  if (hasAnyPattern(combined, ['नगर निकाय में क्या है', 'नगर निकाय', 'नगर निगम', 'शहर', 'city'])) return 'citizen_first';
  if (hasAnyPattern(combined, ['manifesto', 'गाँव', 'गांव', 'पंचायत'])) return 'panchayat_manifesto';
  return null;
}

function getShortContextualAnswer(question) {
  const q = normalizeText(question);
  const activeTopic = state.lastTopic || inferTopicFromHistory(question);
  if (!activeTopic) return null;

  if (activeTopic === 'shared_candidate') {
    if (hasAnyPattern(q, ['उम्र', 'age', 'umar', 'umr'])) return 'साझा उम्मीदवार की आयु 21 से 35 वर्ष होनी चाहिए।';
    if (hasAnyPattern(q, ['योग्यता', 'qualification', 'degree', 'graduate', 'eligibility'])) return 'साझा उम्मीदवार बनने के लिए Graduate होना, आयु 21–35 वर्ष, सामाजिक कार्य/आंदोलन का अनुभव और कम से कम 500 वोट की क्षमता अपेक्षित है।';
    if (hasAnyPattern(q, ['फॉर्म', 'form', 'application', 'आवेदन'])) return 'वेबसाइट पर उपलब्ध साझा उम्मीदवार फॉर्म भरें, फोटो और हस्ताक्षर के साथ submit करें।';
    if (hasAnyPattern(q, ['कैसे', 'kaise', 'kese', 'how', 'process'])) return 'साझा उम्मीदवार बनने के लिए योग्यताएं पूरी करें, फॉर्म भरें, फोटो और हस्ताक्षर लगाएं, फिर चयन समिति द्वारा आवेदन का चयन होगा।';
    if (hasAnyPattern(q, ['500', 'vote', 'vot'])) return 'निर्धारित मानदंड के अनुसार उम्मीदवार में अपने दम पर कम से कम 500 वोट लाने की क्षमता अपेक्षित है।';
    if (hasAnyPattern(q, ['कौन', 'kaun', 'who'])) return 'साझा उम्मीदवार वह उम्मीदवार है जिसे साझा मोर्चा के बैनर तले निर्दलीय उम्मीदवार के रूप में चुनाव लड़ाया जाएगा।';
  }

  if (activeTopic === 'sajha_morcha') {
    if (hasAnyPattern(q, ['उद्देश्य', 'objective', 'mukshya uddeshya', 'purpose', 'मकसद'])) return 'साझा मोर्चा का उद्देश्य युवाओं को संगठित करना, उन्हें चुनाव लड़ने में सहायता करना और साझा प्रयासों से सिस्टम में बदलाव लाना है।';
    if (hasAnyPattern(q, ['किसने', 'kisne', 'who'])) return 'दिए गए विवरण के अनुसार राष्ट्रीय पशुपालक संघ और DNT संघर्ष समिति द्वारा साझा मोर्चा का गठन किया गया।';
    if (hasAnyPattern(q, ['पार्टी', 'party'])) return 'नहीं। साझा मोर्चा एक राजनीतिक प्लेटफार्म है, राजनीतिक पार्टी नहीं है।';
    if (hasAnyPattern(q, ['क्या है', 'kya h', 'kya hai'])) return 'साझा मोर्चा एक राजनीतिक प्लेटफार्म है, राजनीतिक पार्टी नहीं है।';
  }

  if (activeTopic === 'dost_plus') {
    if (hasAnyPattern(q, ['कौन', 'kon', 'who', 'kaun'])) return 'DOST Plus में DNT, वंचित OBC, वंचित SC, वंचित ST और General समाज शामिल हैं।';
    if (hasAnyPattern(q, ['s', 'd', 'o', 't'])) return 'DOST Plus में DNT, वंचित OBC, वंचित SC, वंचित ST और General समाज शामिल हैं। D का अर्थ DNT, O का अर्थ वंचित OBC, S का अर्थ वंचित SC, T का अर्थ वंचित ST और Plus का अर्थ General समाज है।';
  }

  if (activeTopic === 'lal_ji_raika') {
    if (hasAnyPattern(q, ['संगठन', 'organization', 'samajh'])) return 'उपलब्ध रिपोर्टों में उन्हें राष्ट्रीय पशुपालक संघ का अध्यक्ष और DNT संघर्ष समिति का अध्यक्ष बताया गया है।';
    if (hasAnyPattern(q, ['कौन', 'kaun', 'who'])) return 'उपलब्ध सार्वजनिक रिपोर्टों में लालजी राईका को राष्ट्रीय पशुपालक संघ और DNT संघर्ष समिति से जुड़े नेतृत्वकारी व्यक्ति के रूप में बताया गया है।';
  }

  if (activeTopic === 'panchayat_manifesto') {
    if (hasAnyPattern(q, ['क्या है', 'kya h', 'manifesto', 'योजना'])) return 'गाँव के विकास के लिए शिक्षा, स्वास्थ्य, पानी, रोजगार और सामाजिक विकास पर केंद्रित घोषणा पत्र।';
  }

  if (activeTopic === 'citizen_first') {
    if (hasAnyPattern(q, ['क्या है', 'kya h', 'manifesto', 'योजना'])) return 'Citizen First नगर निकाय के लिए नागरिक-केंद्रित घोषणा पत्र है।';
  }

  return null;
}

function findBestIntent(question) {
  const q = normalizeText(question);
  if (!q) return null;

  let best = null;
  for (const intent of canonicalIntents) {
    if (!intent.patterns || !intent.patterns.length) continue;

    let score = 0;
    for (const pattern of intent.patterns) {
      const normalizedPattern = normalizeText(pattern);
      if (!normalizedPattern) continue;
      if (q.includes(normalizedPattern)) {
        score += normalizedPattern.length;
      }
    }

    if (score > 0 && (!best || score > best.score)) {
      best = { intent, score };
    }
  }

  return best ? best.intent : null;
}

function getBotAnswer(question) {
  const raw = String(question || '').trim();
  const q = normalizeText(raw);

  if (!q) return 'कृपया अपना सवाल लिखें।';

  if (isGreeting(q)) {
    state.lastTopic = 'greeting';
    return 'नमस्ते 🙏\nमैं साझा मोर्चा के बारे में जानकारी देने के लिए यहाँ हूँ।\nआप साझा मोर्चा, DOST Plus, DNT, साझा उम्मीदवार, लालजी राईका जी, पंचायत/निकाय घोषणा पत्र या उम्मीदवार फॉर्म से जुड़ा कोई भी सवाल पूछ सकते हैं।';
  }

  if (hasAnyPattern(q, ['धन्यवाद', 'thanks', 'thank you', 'shukriya'])) {
    return 'आपका स्वागत है! 🙏';
  }

  const candidateSignals = ['candidate', 'shared candidate', 'sajha ummidwar', 'saajha ummidwar', 'ummidwar', 'umidwar', 'apply kar', 'apply', 'form bhar', 'form kaise', 'graduate hu', 'graduate hoon', '500 vote', '500 vote wali condition', '500 vote wali baat', 'candidate bnne', 'candidate banna', 'candidate banne', 'candidate banu', 'mujhe candidate'];
  const currentTopic = state.lastTopic || inferTopicFromHistory(raw);

  if (hasAnyPattern(q, candidateSignals) || (currentTopic === 'shared_candidate' && (hasAnyPattern(q, ['उम्र', 'age', 'umar', 'form', 'कैसे', 'kaise', 'apply', 'graduate', '500', 'vote'])))) {
    state.lastTopic = 'shared_candidate';
    const direct = getShortContextualAnswer(raw) || 'साझा उम्मीदवार बनने के लिए आपको निर्धारित योग्यताएं पूरी करनी होंगी। उम्मीदवार Graduate होना चाहिए, आयु 21 से 35 वर्ष के बीच होनी चाहिए, सामाजिक कार्य और आंदोलन में भाग लेने का अनुभव होना चाहिए तथा अपने दम पर कम से कम 500 वोट लाने की क्षमता होनी चाहिए। इसके बाद वेबसाइट पर उपलब्ध साझा उम्मीदवार का फॉर्म भरकर अपनी फोटो और हस्ताक्षर के साथ अपलोड करना होगा। अंतिम चयन एक चयन समिति द्वारा किया जाएगा।';
    return direct;
  }

  const explicitIntent = findBestIntent(q);
  if (explicitIntent) {
    state.lastTopic = topicMap[explicitIntent.id] || explicitIntent.topic || null;
    return explicitIntent.answer;
  }

  if (currentTopic) {
    const lastTopicAnswer = getShortContextualAnswer(q);
    if (lastTopicAnswer) {
      state.lastTopic = currentTopic;
      return lastTopicAnswer;
    }
  }

  return 'मैं साझा मोर्चा, साझा उम्मीदवार, DOST Plus, DNT, लालजी राईका जी और संबंधित चुनावी/सामाजिक विषयों की जानकारी दे सकता हूँ। आप अपना सवाल पूछ सकते हैं।';
}

function askQuestion(question) {
  const trimmed = String(question || '').trim();
  if (!trimmed) return;

  state.history.push(trimmed);
  if (state.history.length > 10) {
    state.history = state.history.slice(-10);
  }

  addMessage(trimmed, "user");

  setTimeout(() => {
    addMessage(getBotAnswer(trimmed), "bot");
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
