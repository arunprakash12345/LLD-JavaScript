const tabs = document.querySelector(".tabs");

tabs.addEventListener("click", (e) => {
    const currentTab = e.target.closest(".tab");
    if (!currentTab) return;
    const tabNumber = parseInt(e.target.closest(".tab").dataset.label);

    const tabsArr = document.querySelectorAll(".tab");
    tabsArr.forEach((tab) => {
        const index = parseInt(tab.dataset.label);
        if (index == tabNumber) {
            tab.classList.add("active-tab");
        }
        else
            tab.classList.remove("active-tab");
    })
    const contentContainer = document.querySelectorAll(".tab-conten");
    contentContainer.forEach((container) => {
        const index = parseInt(container.dataset.label);
        if (index == tabNumber) {
            container.classList.add("active");
        }
        else
            container.classList.remove("active");
    })

})