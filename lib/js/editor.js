// get buttons
const runBtn = document.querySelector('.editor-run');
const resetBtn = document.querySelector('.editor-reset')

//setup ace lib
let codeEditor = ace.edit("editorCode");

let editorLib = {
    init() {

        codeEditor.setTheme("ace/theme/github_dark");

        codeEditor.session.setMode("ace/mode/javascript");

        codeEditor.setOptions({
            fontFamily: '',
            fontSize: '12pt',
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true
        });
    }
}

editorLib.init();