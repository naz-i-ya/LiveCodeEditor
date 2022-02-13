/*function run() {
    let htmlCode = document.querySelector('.editor > #html-code').value;
    let cssCode = "<style>" + document.querySelector('.editor > #css-code').value +"</style>";
    let jsCode = document.querySelector('.editor > #js-code').value;
    let output = document.querySelector('.editor > #output');
    // console.log(htmlCode, cssCode, jsCode, output);
    output.contentDocument.body.innerHTML = htmlCode + cssCode;
    output.contentWindow.eval(jsCode);
    
}

document.querySelector('.editor > #html-code').addEventListener("keyup",run);
document.querySelector('.editor > #css-code').addEventListener("keyup", run);
document.querySelector('.editor > #js-code').addEventListener("keyup", run);*/

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const bar = document.querySelector('.bar');
const editor = document.querySelector('.editor');
const run = document.querySelector('.btn-run');
const iframe = document.querySelector('.iframe');
const darkMode = document.querySelector('.btn-dark');
const lightMode = document.querySelector('.btn-light');




const drag = (e) => {
    e.preventDefault();
    document.selection ? document.selection.empty() :
    window.getSelection().removeAllRanges();

    left.style.width = (e.pageX - bar.offsetWidth / 3)
    + "px";
    editor.resize();
}

bar.addEventListener('mousedown', () => {
    document.addEventListener('mousemove', drag);
});

bar.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', drag);
});

//Run Btn Event

run.addEventListener('click', () => {
    const html = editor.textContent;
    iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
});

//DarkMode

darkMode.addEventListener('click', () => {
    editor.style.background = '#363836';
    editor.style.color = '#ffff';


});

//Light

lightMode.addEventListener('click', () => {
    editor.style.background = ' #ffff';
    editor.style.color = '#363836 ';

});

//Live Code
document.getElementById('live').onclick = function() {
    if(this.checked){
         editor.addEventListener('keyup', () => {
        const html = editor.textContent;
        iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
         })
        }
}