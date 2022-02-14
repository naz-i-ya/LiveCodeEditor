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


const f1 = () => {
    //function to make the text bold using DOM method
    left.style.fontWeight = "bold";
}

const f2 = () => {
    //function to make the text italic using DOM method
    left.style.fontStyle = "italic";
}

const f3 = () => {
    //function to make the text alignment left using DOM method
    left.style.textAlign = "left";
}

const f4 = () => {
    //function to make the text alignment center using DOM method
    left.style.textAlign = "center";
}

const f5 = () => {
    //function to make the text alignment right using DOM method
    left.style.textAlign = "right";
}

const f6 = ()  => {
    //function to make the text in Uppercase using DOM method
    left.style.textTransform = "uppercase";
}

const f7 = () => {
    //function to make the text in Lowercase using DOM method
    left.style.textTransform = "lowercase";
}

const f8 = () => {
    //function to make the text capitalize using DOM method
    left.style.textTransform = "capitalize";
}

const f9 = () => {
    //function to make the text back to normal by removing all the methods applied 
    //using DOM method
    left.style.fontWeight = "normal";
    left.style.textAlign = "left";
    left.style.fontStyle = "normal";
    left.style.textTransform = "capitalize";
    left.value = " ";
}


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
document.getElementById('live').onclick = function () {
    if (this.checked) {
        editor.addEventListener('keyup', () => {
            const html = editor.textContent;
            iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
        })
    }
}