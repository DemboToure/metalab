var x = 640 ;
var y = 640 ;

function setup() {
    x = windowWidth/2+95
    y = windowHeight-120
    can = createCanvas(x, y) ;
    can.parent('canva') ;
}
function windowResized() {
    x = windowWidth/2+95
    y = windowHeight-120
    resizeCanvas(x, y);
}

function draw() {
   
    /*
    if (mouseIsPressed) {
        fill(0) ;
    } else {
        fill(255) ;
    }
    ellipse(mouseX , mouseY, 80, 80) ;
    */
    
    draw_xy(x,y) ;
    draw_sin() ;
}

function draw_line(){
    if (mouseIsPressed) {
        point(mouseX, mouseY) ;
    }
}
function draw_sin(){
    var a = 0.0;
    var inc = TWO_PI / 25.0;
    for (var i = 0; i < 25; i++) {
    //line(i * 4, 50, i * 4, 50 + sin(a) * 40.0);
    point(i*4, 50+sin(a)*40.0 ) ;
        a = a + inc;
    }
}

function draw_xy(x,y){
    stroke('#000000');
    line(x/2, 0, x/2, y) ;
    line(0, y/2, x, y/2) ;

    stroke('#ff0000') ;
    for (let  i= 0;  i<= x; i+=20) {
        line(i, y/2-5, i, y/2+5) ;
    }
    for (let  i= 0;  i<= y; i+=20) {
        line(x/2-5, i, x/2+5, i) ;
    }
}
