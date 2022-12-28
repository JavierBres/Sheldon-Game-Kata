
// const 0 = "tijeras";
// const 1 = "papel";
// const 2 = "roca";
// const elementos = [0, 1, 2];


function sheldonGame1(x, y) {
    if (x == 0) {
        if (y == 1) {
            return "Gana tijeras";
        } else {
            if (y == 2) {
                return "Gana tijeras";
            } else {
            if (y == 0) {
                return "Empate";
            }
        }
    }    
}

    if (x == 1) {
        if (y == 0) {
            return "Gana tijeras";
        } else {
            if (y == 2) {
                return "Gana tijeras";
            } else {
                if (y == 1) {
                    return ("Empate");
                }
            }
        }
    }

}

module.exports = sheldonGame1;


