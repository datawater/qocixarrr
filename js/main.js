"use strict";

let STAGE = 0;

const background_onclick = (() => {
    let ruaq_box = document.getElementById("ruaq-box");
    
    if (!ruaq_box.classList.contains("hidden"))
        ruaq_checkmark_click();
})

const ruaq_checkmark_click = (() => {
    let ruaq_box = document.getElementById("ruaq-box");

    if (ruaq_box.classList.contains("hidden")) {
        ruaq_box.classList.remove("hidden");
        ruaq_box.classList.add("anim-shown");
    } else {
        ruaq_box.classList.remove("anim-shown");
        ruaq_box.classList.add("hidden");        
    }
});

const ruaq_image_cell_click = ((x) => {
    const cell = document.getElementsByClassName("ruaqb-image-cell")[x - 1];
    
    if (cell.classList.contains("ruaqb-image-cell-selected")) {
        cell.classList.remove("ruaqb-image-cell-selected")
    } else {
        cell.classList.add("ruaqb-image-cell-selected")
    }
});

const ruaq_grade_selection = (() => {
    let score = 0;

    const cells = document.getElementsByClassName("ruaqb-image-cell");

    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];

        if (!cell.classList.contains("ruaqb-image-cell-selected"))
            continue;

        score += ANSWER_SCORE_MAP[STAGE][i];
    }
    
    return score;
});

const ruaq_finish = (() => {
    let checkmark = document.getElementById("ruaq-checkmark-box");
    checkmark.innerHTML = '<h1 class="tick">✓</h1>';

    let ruaq_box = document.getElementById("ruaq-box");
    ruaq_box.classList.remove("anim-shown");
    ruaq_box.classList.add("anim-hidden");

    setTimeout(() => (window.location.href = "https://google.com"), 1000);
});

const ruaq_setup_stage = (() => {
    const cells = document.getElementsByClassName("ruaqb-image-cell");
    let prompt = document.getElementById("ruaqb-question-prompt");

    for (let i = 0; i < cells.length; i++)
        cells[i].style.backgroundImage = PROMPTS_AND_IMAGES[STAGE][1];

    prompt.innerText = PROMPTS_AND_IMAGES[STAGE][0];

    if (STAGE == STAGE_COUNT - 1)
        document.getElementById("ruaqb-submit-button").innerText = "დადასტურება";
});

const ruaq_next_stage = (() => {
    if (STAGE == STAGE_COUNT - 1) {
        ruaq_finish();
        return;
    }

    const cells = document.getElementsByClassName("ruaqb-image-cell");

    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        
        if (cell.classList.contains("ruaqb-image-cell-selected"))
            cell.classList.remove("ruaqb-image-cell-selected");
    }

    STAGE += 1;
    ruaq_setup_stage();
});

const ruaq_fail = (() => {
    console.log("SHE QOCO");
    document.getElementsByTagName("body")[0].innerHTML = "<h1>შე ქოცო, არა ქოცთა ყოფას!</h1>";
    console.log("SHE QOCO");
});

const ruaqb_button_onclick = (() => {
    const grade = ruaq_grade_selection();
   
    if (grade < SCORE_THRESHOLD[STAGE]){
        ruaq_fail();

        return;
    }

    ruaq_next_stage();
});

document.onload = (() => {
    ruaq_setup_stage();
})();