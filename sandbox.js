var isDrawing = false;
var activeColor = 'black';
var beat = 0;

function changeColor(newColor)
{
    activeColor = newColor;
    document.doodle.color_status.value = activeColor;
    showEvent('Change Color: ' + activeColor);
}

function m(obj)
{
    if (isDrawing) {
        obj.style.backgroundColor = activeColor;
        showEvent(
            'Mouseover: '
            + ' ' + obj.cellIndex + 'x?' // + obj
            + ' ' + obj.offsetTop + 'x' + obj.offsetLeft
            + ' ' + obj.offsetWidth + 'x' + obj.offsetHeight
        );
    }
}
function c(obj)
{
    toggleDrawing();
    m(obj);
}
function toggleDrawing()
{
    if(isDrawing) {
       isDrawing = false;
       document.doodle.drawing_status.value = 'Pen OFF';
       showEvent('Pen Turned OFF');
    } else {
       isDrawing = true;
       document.doodle.drawing_status.value = 'Pen ON';
       showEvent('Pen Turned ON, color: ' + activeColor);
    }
}
function saveAsHTML()
{
    canvas = document.getElementById('canvas');
    out = '<table cellpadding="0" cellspacing="0" border="0" width="100" height="100">';
    for( x = 0; x < canvas.rows.length; x++ ) {
        out += '<tr>';
        for( y = 0; y < canvas.rows[x].cells.length; y++ ) {
            clr = canvas.rows[x].cells[y].style.backgroundColor;
            if( clr == '' ) { clr = 'White'; }
            out = out + '<td style="background-color:' + clr + '" >&nbsp;</td>';
        }
        out = out + '</tr>';
      }
    out = out + '</table>';
    showEvent(out);
}
function showEvent(text)
{
    beat += 1;
    document.doodle.events.value = beat + ': ' + text + '\n' + document.doodle.events.value;
}
function clearEvents()
{
    document.doodle.events.value = '';
}
