function run() {
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
document.querySelector('.editor > #js-code').addEventListener("keyup", run);

/*const left = document.querySelector('.left');
const right = document.querySelector('.right');
const bar = document.querySelector('bar');
const editor = document.querySelector('editor');

const drag = (e) => {
    e.preventDefault();
    document.selection ? document.selection.empty() :
    window.getSelection().removeAllRanges();

    left.getElementsByClassName.width = (e.pageX - bar.offsetWidth / 3)
    + "px";
    editor.resize();
}*/