// autotime.js

const config = {
    name: "autotime",
    description: "Send pre-set time messages every hour automatically",
    usage: "",
    cooldown: 0,
    permissions: [2],
    credits: "MAIN TRANSFORMER"
};

// এখানে তোমার সব ঘন্টার মেসেজ আগে থেকে সেট করে রাখো
const timeMessages = {
    "01": "⏰ এখন বাজে 1 AM 🌙 সবাই ঘুমিয়ে যাও!",
    "02": "⏰ এখন বাজে 2 AM 🌙 শান্ত রাত চলছে...",
    "03": "⏰ এখন বাজে 3 AM 😴 গভীর ঘুমের সময়!",
    "04": "⏰ এখন বাজে 4 AM 🌅 ভোর আসছে...",
    "05": "⏰ এখন বাজে 5 AM 🌄 সূর্য ওঠার প্রস্তুতি!",
    "06": "⏰ এখন বাজে 6 AM 🌞 শুভ সকাল!",
    "07": "⏰ এখন বাজে 7 AM ☕ সকালের নাস্তা করতে ভুলো না!",
    "08": "⏰ এখন বাজে 8 AM 📚 কাজ/পড়াশোনা শুরু করো!",
    "09": "⏰ এখন বাজে 9 AM 💼 ব্যস্ত সকাল!",
    "10": "⏰ এখন বাজে 10 AM 🚀 শক্তি নিয়ে কাজ চালিয়ে যাও!",
    "11": "⏰ এখন বাজে 11 AM ⚡ দুপুর ঘনিয়ে আসছে!",
    "12": "⏰ এখন বাজে 12 PM ☀️ দুপুর!",
    "13": "⏰ এখন বাজে 1 PM 🍛 দুপুরের খাবারের সময়!",
    "14": "⏰ এখন বাজে 2 PM 😌 দুপুরের বিশ্রাম!",
    "15": "⏰ এখন বাজে 3 PM ☕ চায়ের বিরতি নাও!",
    "16": "⏰ এখন বাজে 4 PM 🌤️ বিকেল!",
    "17": "⏰ এখন বাজে 5 PM 🌇 সূর্য ডোবার সময়!",
    "18": "⏰ এখন বাজে 6 PM 🌆 সন্ধ্যা!",
    "19": "⏰ এখন বাজে 7 PM 🕌 মাগরিবের নামাজ ভুল না করো!",
    "20": "⏰ এখন বাজে 8 PM 🍽️ রাতের খাবার প্রস্তুত!",
    "21": "⏰ এখন বাজে 9 PM 📺 রিলাক্স করার সময়!",
    "22": "⏰ এখন বাজে 10 PM 🌙 ঘুমানোর প্রস্তুতি নাও!",
    "23": "⏰ এখন বাজে 11 PM 🌌 রাত গভীর হচ্ছে!",
    "00": "⏰ এখন বাজে 12 AM 🌑 মধ্যরাত!"
};

// প্রতি ঘন্টায় চেক করার ফাংশন
function startAutoTime(api, threadID) {
    setInterval(async () => {
        try {
            const now = new Date();
            const hour = now.getHours().toString().padStart(2, "0"); // 00-23 ফরম্যাটে ঘন্টা

            if (timeMessages[hour]) {
                await api.sendMessage(timeMessages[hour], threadID);
            }
        } catch (err) {
            console.error("AutoTime Error:", err);
        }
    }, 60 * 1000); // প্রতি মিনিটে চেক করবে, যাতে সঠিক ঘন্টায় পাঠায়
}

export async function onLoad({ api, threadID }) {
    console.log("✅ AutoTime started. প্রতি ঘন্টায় প্রি-সেট মেসেজ পাঠাবে।");
    startAutoTime(api, threadID);
}

export default {
    config,
    onLoad
};
