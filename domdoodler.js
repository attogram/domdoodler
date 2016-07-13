var isDrawing = true;
var activeColor = 'black';
function changeColor(newColor)
{
    activeColor = newColor;
    document.doodle.colorStatus.value = activeColor;
}
function doodleMouseover(obj)
{
    if (isDrawing) {
        obj.style.backgroundColor = activeColor;
    }
}
function doodleClick(obj)
{
    toggleDrawing();
    doodleMouseover(obj);
}
function toggleDrawing()
{
    if (isDrawing) {
        isDrawing = false;
        document.doodle.drawingStatus.value = 'OFF';
        return;
    }
    isDrawing = true;
    document.doodle.drawingStatus.value = 'ON';
}
