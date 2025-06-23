const ANSWER_SCORE_MAP = {
    0: [-1, -1, -1, -1,
        -1, -1, -1, -1,
        -1, -1, -1, -1,
        -1, -1, -1, -1,
    ],

    1: [
        1, 10, 10, 1,
        5, 5,  1,  5,
        0, 3,  0,  0,
        -10, -10, -10, -10
    ],
}

const SCORE_THRESHOLD = {
    0: 0,
    1: 20,
};

const PROMPTS_AND_IMAGES = {
    0: ["ყაველაშვილის დიპლომს", "url('imgs/yavelashvili.jpg')"],
    1: ["მტრედის ბუდეს", "url('imgs/kobaxidze.jpg')"],
};

const STAGE_COUNT = 2;

console.assert(STAGE_COUNT === 2);