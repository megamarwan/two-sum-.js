//fisher-yates shuffle algorithm

const arr = [1, 2, 3, 4, 5, 'a', 'f', 'k']

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1))

        array[i] = array[rand];
        array[rand] = array[i];

    }
}

