const chatbotResponses = [
  {
    keywords: ["hi", "hello", "hey", "hai", "hy", "helo", "hola", "hlo", "hoi"],
    answer: "Hi there! 👋 How can I assist you today?",
  },
  {
    keywords: ["what is your name", "who are you", "your name", "name"],
    answer:
      "Hi there! 👋 I'm Daxo, your smart shopping assistant from DaxoMart. How can I help you today?",
  },

  {
    keywords: ["return", "can i return", "product return", "refund"],
    answer:
      "Yes, you can return products within 7 days. Keep the package safe 📦.",
  },
  {
    keywords: [
      "delivery",
      "shipping",
      "when will i get",
      "delivery time",
      "ship",
      "shipment",
      "shipping",
    ],
    answer: "We deliver within 3–5 working days 🚚.",
  },
  {
    keywords: ["payment", "pay", "card", "cash on delivery", "cod"],
    answer: "We support UPI, Cards, and Cash on Delivery 💳.",
  },
  {
    keywords: ["contact", "help", "support", "phone", "email"],
    answer: "You can reach us at support@daxomart.com or call 📞 +91-48747474.",
  },

  {
    keywords: ["track", "order status", "tracking", "where is my order"],
    answer: "Visit 'My Orders' and click 'Track Order' 📦.",
  },
  {
    keywords: ["cancel", "cancel order", "order cancel"],
    answer:
      "If the order is not shipped yet, you can cancel it. Just contact support 🛑.",
  },
  {
    keywords: ["thank you", "thanks", "appreciate", "grateful"],
    answer: "You're welcome! 😊 If you have more questions, just ask.",
  },
  {
    keywords: ["help", "assist", "support", "question"],
    answer: "I'm here to help! What do you need assistance with?",
  },
  {
    keywords: ["love", "like", "favorite"],
    answer: "Thank you! ❤️ We love our customers too!",
  },
  {
    keywords: ["bye", "goodbye", "see you", "later"],
    answer: "Goodbye! 👋 Have a great day!",
  },
  {
    keywords: ["i love you", "love you", "i like you", "like you"],
    answer:
      "I appreciate your love! ❤️ I'm here to help you with anything you need.",
  },
  {
    keywords: ["daxomart", "daxo", "daxomart.com", "daxo.com"],
    answer: "DaxoMart is your one-stop online shopping destination! 🛒",
  },
  {
    keywords: ["siyad", "founder", "ceo", "owner"],
    answer:
      "Siyad is the founder and CEO of DaxoMart. He is passionate about making online shopping easy and fun!",
  },
  {
    keywords: [
      "how are u",
      "how are you",
      "how are you doing",
      "how are you doing",
      "how r u"
    ],
    answer: "I'm doing great, thanks for asking! 😊",
  },
  {
    keywords: ["good", "great", "awesome", "fantastic"],
    answer: "I'm glad to hear that! 😊 How can I assist you today?",
  },
  {
    keywords: ["bad", "not good", "sad", "angry"],
    answer: "I'm sorry to hear that. 😔 How can I help you feel better?",
  },
  {
    keywords: ["joke", "funny", "humor"],
    answer:
      "Why did the scarecrow win an award? Because he was outstanding in his field! 😂",
  },
  {
    keywords: ["weather", "today's weather", "forecast"],
    answer:
      "I can't check the weather, but I hope it's sunny and perfect for shopping! ☀️",
  },
  {
    keywords: ["news", "latest news", "current events"],
    answer:
      "I can't provide news updates, but I can help you find the latest products! 📰",
  },
  {
    keywords: ["sports", "latest sports", "sports news"],
    answer:
      "I can't provide sports updates, but I can help you find sports gear! ⚽",
  },
  {
    keywords: ["movies", "latest movies", "movie recommendations"],
    answer:
      "I can't provide movie updates, but I can help you find movie merchandise! 🎬",
  },
  {
    keywords: ["music", "latest music", "music recommendations"],
    answer:
      "I can't provide music updates, but I can help you find music-related products! 🎶",
  },
  {
    keywords: ["food", "latest food", "food recommendations"],
    answer:
      "I can't provide food updates, but I can help you find kitchen gadgets! 🍽️",
  },
  {
    keywords: ["travel", "latest travel", "travel recommendations"],
    answer:
      "I can't provide travel updates, but I can help you find travel accessories! ✈️",
  },
  {
    keywords: ["health", "latest health", "health tips"],
    answer:
      "I can't provide health updates, but I can help you find health products! 🏥",
  },
  {
    keywords: ["fitness", "latest fitness", "fitness tips"],
    answer:
      "I can't provide fitness updates, but I can help you find fitness gear! 🏋️",
  },
  {
    keywords: ["hate", "dislike", "not like"],
    answer: "I'm sorry to hear that. 😔 How can I help you feel better?",
  }
];

export default chatbotResponses;
