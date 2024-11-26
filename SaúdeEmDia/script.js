const tips = [
    "Beba 2 litros de água por dia.",
    "Durma 8 horas por noite.",
    "Faça pausas durante o trabalho para alongar o corpo.",
    "Inclua frutas e vegetais frescos em suas refeições.",
    "Pratique 30 minutos de exercício por dia."
];

document.getElementById("generateTip").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    const tip = tips[randomIndex];
    document.getElementById("tip").textContent = tip;
});
