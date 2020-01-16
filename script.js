var matrix = [];
var side = 20;
var grassArr = [];
var grassEaterArr = [];
var gishatichArr = [];
var amenakerArr = [];
var shunArr = [];
var dzagArr = [];
function setup() {
    for (let i = 0; i < 50; i++) {
        matrix[i] = [];
        for (let j = 0; j < 50; j++) {
            matrix[i][j] = random([0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 2, 2, 2, 2, 3, 3, 4, 5]);
        }
    }
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y, 1)
                grassArr.push(grass)
            }
            else if (matrix[y][x] == 2) {
                let gr = new GrassEater(x, y, 2)
                grassEaterArr.push(gr)
            }
            else if (matrix[y][x] == 3) {
                let gsh = new Gishatich(x, y, 3)
                gishatichArr.push(gsh)
            }
            else if (matrix[y][x] == 4) {
                let amn = new Amenaker(x, y, 4)
                amenakerArr.push(amn)
            }
            else if (matrix[y][x] == 5) {
                let shun = new Shun(x, y, 5)
                shunArr.push(shun)
            }
            else if (matrix[y][x] == 6) {
                let dzag = new Dzag(x, y, 6)
                dzagArr.push(dzag)
            }
            
        }
    }
}
console.log(grassArr);
console.log(grassEaterArr);
console.log(gishatichArr);
console.log(amenakerArr);
console.log(shunArr);
console.log(dzagArr);



function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("black");
            }
            else if (matrix[y][x] == 5) {
                fill("orangered");
            }
            else if (matrix[y][x] == 6) {
                fill("orange");
            }
            rect(x * side, y * side, side, side);

        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();

    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].move();
        grassEaterArr[i].eat();
        grassEaterArr[i].mul();
        grassEaterArr[i].die();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].move();
        gishatichArr[i].eat();
        gishatichArr[i].mul();
        gishatichArr[i].die();
    }
    for (var i in amenakerArr) {
        amenakerArr[i].move();
        amenakerArr[i].eat();
        amenakerArr[i].mul();
        amenakerArr[i].die();
    }
    for (var i in shunArr) {
        shunArr[i].move();
        shunArr[i].eat();
        shunArr[i].dzagTal();
    }
}


