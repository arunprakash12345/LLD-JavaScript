const questions = [
    {
        "question": "Is Gender-Specific Content Visible to Everyone?",
        "answer": "No, gender-specific content is only shown to users matching that gender. It won’t be visible to users of other genders or those who select 'Prefer Not to Say.' Once you select your gender during onboarding, it cannot be changed. Users who choose 'Prefer Not to Say' won’t see any gender-specific posts but can update their gender later in the settings page."
    },
    {
        "question": "Do Language and Interest-Based Posts Work Like Gender-Specific Posts?",
        "answer": "No, language and interest-based posts are shown to all users but are prioritized at the top of their feeds if they match their preferences. Gender-specific posts, however, are only visible to users of the matching gender."
    },
    {
        "question": "What’s the Deal with Burn Posts?",
        "answer": "Burn posts are time-sensitive and expire after a set period. They’re perfect for limited-time offers, sales, or short-term updates. Once the timer runs out, the post disappears automatically."
    },
    {
        "question": "How Can I Change the Location and See Posts There?",
        "answer": "Click on the location name on the feed page, right below the zoneup. Select any location to explore what’s"
    },
    {
        "question": "Will I Only See Posts from the Location I Select?",
        "answer": "No, the location you select acts as an anchor for your feed. Once posts from your selected location are done, you’ll see posts from nearby locations. You may even see posts from other locations at the top if they match your interests and language preferences"
    }
];

const accordianContianer = document.querySelector(".accordian-container");
questions.forEach((question, index) => {
    const questionElem = document.createElement("div");
    questionElem.setAttribute("class", "accordian");
    questionElem.setAttribute("data-id", index);
    questionElem.innerHTML = `
    <div class="card">
    <div class="faq-header">
        <h3>${question.question}</h3>
        <i class="fa-solid fa-chevron-up" data-number=${index}></i>
    </div>
    <p class="answer">
        ${question.answer}
    </p>
</div>
    `;
    accordianContianer.appendChild(questionElem);
});
toggleQuestions(0);

accordianContianer.addEventListener("click", (element) => {
    if (!element.target.classList.contains("fa-solid")) return;
    const value = parseInt(element.target.getAttribute("data-number"));
    toggleQuestions(value);
    console.log(value);
});

function toggleQuestions(index) {
    const cards = document.querySelectorAll(".fa-solid");
    for (let i = 0; i < cards.length; i++) {
        if (i === index) {
            cards[i].classList.remove("fa-chevron-down");
            cards[i].classList.add("fa-chevron-up");
            const ptag = cards[i].parentElement.nextElementSibling;
            ptag.style.display = 'block';
        }
        else {
            cards[i].classList.remove("fa-chevron-up");
            cards[i].classList.add("fa-chevron-down");
            const ptag = cards[i].parentElement.nextElementSibling;
            ptag.style.display = 'none';
        }
    }
}