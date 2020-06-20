const BACKGROUND_COLOR = '#000000';
const LINE_COLOR = 'yellow';
const LINE_WIDTH = 8;

var currentX = 0;
var currentY = 0;
var previousX = 0;
var previousY = 0;

const canvas = document.getElementById('canva');
const context = canvas.getContext('2d');

function prepareCanvas(){

    context.fillStyle = BACKGROUND_COLOR;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    context.strokeStyle = LINE_COLOR;
    context.lineWidth = LINE_WIDTH;

    context.lineCap = 'round';

    var isPainting = false;

    document.addEventListener('mousemove', function(event){
        if(isPainting){
            previousX = currentX;
            previousY = currentY;
            currentX = event.clientX - canvas.offsetLeft;
            currentY = event.clientY - canvas.offsetTop;

            draw();
        }
    });

    document.addEventListener('mousedown',function(event){
        currentX = event.clientX - canvas.offsetLeft;
        currentY = event.clientY - canvas.offsetTop;
        isPainting = true;
    })

    document.addEventListener('mouseup', function(event){
        isPainting = false;
    });

    canvas.addEventListener('mouseleave', function(event){
        isPainting = false;
    })

    canvas.addEventListener('touchstart',function(event){
        currentX = event.touches[0].clientX - canvas.offsetLeft;
        currentY = event.touches[0].clientY - canvas.offsetTop;
        isPainting = true;
    })

    canvas.addEventListener('touchend',function(event){
        isPainting = false;
    })

    canvas.addEventListener('touchcancel',function(event){
        isPainting = false;
    })

    canvas.addEventListener('touchmove',function(event){
        previousX = currentX;
        currentX = event.touches[0].clientX - canvas.offsetLeft;

        previousY = currentY;
        currentY = event.touches[0].clientY - canvas.offsetTop;

        draw();
    })


}

function draw() {
    context.beginPath();
    context.moveTo(previousX, previousY);
    context.lineTo(currentX, currentY);
    context.stroke();
}

function clearCanvas(){
    currentX = 0;
    currentY =0;
    prieviousX = 0;
    prieviousY = 0;

    context.fillRect(0,0, canvas.clientWidth, canvas.clientHeight)
}