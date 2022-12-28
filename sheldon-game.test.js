const sheldonGame1 = require('./sheldon-game');



test("Jugador x tiene tijeras y jugador y tiene papel. Tijeras gana a papel.", () => {
    expect(sheldonGame1(0, 1)).toBe("Gana tijeras");
});

test("Jugador x tiene tijeras y jugador y tiene roca. Tijeras gana a roca.", () => {
    expect(sheldonGame1(0, 2)).toBe("Gana tijeras");
})

test("Jugador x tiene tijeras y jugador y tiene tijeras. Empatan.", () => {
    expect(sheldonGame1(0, 0)).toBe("Empate");
})

test("Jugador x tiene papel y jugador y tiene tijeras. Tijeras gana a papel", () => {
    expect(sheldonGame1(1, 0)).toBe("Gana tijeras");
})

