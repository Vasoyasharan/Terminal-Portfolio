// script.js
const terminalBody = document.getElementById('terminal-body');
let commandHistory = [];
let historyIndex = -1;

// Function to handle input
function handleInput(event) {
    if (event.key === 'Enter') {
        const inputLine = event.target.parentElement;
        const command = event.target.value.trim();

        // Prevent further input modifications and remove the input field
        event.target.remove();

        // Display command output
        handleCommand(command);

        // Add the command to history
        commandHistory.push(command);
        historyIndex = commandHistory.length;
    } else if (event.key === 'ArrowUp') {
        if (historyIndex > 0) {
            historyIndex--;
            event.target.value = commandHistory[historyIndex];
        }
    } else if (event.key === 'ArrowDown') {
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            event.target.value = commandHistory[historyIndex];
        } else {
            historyIndex = commandHistory.length;
            event.target.value = '';
        }
    }
}

// Function to handle commands
function handleCommand(command) {
    let output = '';

    switch (command) {
        case 'help':
        case 'h':
            output = `Available commands:\n1. about - Information about me\n2. education - Display my educational background\n3. clear/cls - Clear the terminal\n4. linkedin - Head to my LinkedIn profile\n5. github - Head to my GitHub profile\n6. insta - Head to my Instagram profile\n7. portfolio - Head to my GUI portfolio\n8. repo - Head to this project repository\n9. socials - Display social networks\n10. google - Head to Google search\n11. experience - Display my experience\n12. projects - Display my projects`;
            break;
        case 'about':
            output = `Hey, I am <span class="blue">Sharan Vasoya.</span> A Detail-oriented <span class="blue">Web Developer</span>  with expertise in <span class="blue">UI/UX design</span>. Skilled in utilizing frameworks like React and Angular to build scalable and interactive web applications. Committed to delivering seamless user experiences through clean and efficient code.\n\nI'm open for new opportunities and would love to chat and share my latest coding adventures.\nFeel free to reach out to me:\n\nGitHub: <a href="https://github.com/Vasoyasharan" target="_blank">https://github.com/Vasoyasharan</a>\nEmail: <a href="mailto:sharanvasoya.dev@gmail.com">sharanvasoya.dev@gmail.com</a>\nLinkedIn: <a href="https://linkedin.com/in/sharan-vasoya-b6a21824a" target="_blank">https://linkedin.com/in/sharan-vasoya-b6a21824a</a>\n\nThank you!`;
            break;
        case 'education':
            output = `Degree: BCA (pursuing)\nCollege: SDJ International College affiliated to VNSGU\n\nHSC: Dream International School\nSSC: Allen Surat`;
            break;
        case 'clear':
        case 'cls':
            terminalBody.innerHTML = '<div class="output">Welcome to Sharan Vasoya\'s terminal portfolio. Type \'help\' to see all available commands.</div>';
            addNewInputLine();
            return;
        case 'linkedin':
            window.open('https://www.linkedin.com/in/sharan-vasoya-b6a21824a', '_blank');
            output = 'Opening LinkedIn in a new tab...';
            break;
        case 'github':
            window.open('https://github.com/Vasoyasharan', '_blank');
            output = 'Opening GitHub in a new tab...';
            break;
        case 'insta':
            window.open('https://www.instagram.com/sharan_vasoya_07?igshid=ZDdkNTZiNTM%3D', '_blank');
            output = 'Opening Instagram in a new tab...';
            break;
        case 'portfolio':
            window.open('https://sharan.is-a.dev', '_blank');
            output = 'Opening GUI portfolio in a new tab...';
            break;
        case 'repo':
            window.open('https://github.com/Vasoyasharan/terminal-portfolio', '_blank');
            output = 'Opening project repository in a new tab...';
            break;
        case 'socials':
            output = `Email: <a href="mailto:sharanvasoya.dev@gmail.com">sharanvasoya.dev@gmail.com</a>\nGitHub: <a href="https://github.com/Vasoyasharan" target="_blank">https://github.com/Vasoyasharan</a>\nLinkedIn: <a href="https://linkedin.com/in/sharan-vasoya-b6a21824a" target="_blank">https://linkedin.com/in/sharan-vasoya-b6a21824a</a>\nInstagram: <a href="https://www.instagram.com/sharan_vasoya_07?igshid=ZDdkNTZiNTM%3D" target="_blank">https://www.instagram.com/sharan_vasoya_07?igshid=ZDdkNTZiNTM%3D</a>\nFacebook: <a href="https://www.facebook.com/people/Vasoya-Sharan/pfbid02pMPkpVicXgzdrK1WxEPsoeGg54HYBznhWP3srtmU7e7LXq1JPQS9XYQLBXSRaPMSl/" target="_blank">https://www.facebook.com/people/Vasoya-Sharan/pfbid02pMPkpVicXgzdrK1WxEPsoeGg54HYBznhWP3srtmU7e7LXq1JPQS9XYQLBXSRaPMSl/</a>`;
            break;
        case 'google':
            window.open('https://www.google.com/search?q=Sharan+Vasoya', '_blank');
            output = 'Opening Google search in a new tab...';
            break;
        case 'experience':
            output = `1) Bluesolf Info Tech:\n   Duration: 2 Months\n   Role: Intern Frontend Developer\n\n2) Depthin Solution:\n   Duration: 16 Months\n   Role: Intern Frontend Developer`;
            break;
        case 'projects':
            output = `
1) Dating Web: <a href="https://vasoyasharan.github.io/Dating-web/" target="_blank">https://vasoyasharan.github.io/Dating-web/</a>
2) Lord Krishna with CSS: <a href="https://vasoyasharan.github.io/Lord-Krishna/" target="_blank">https://vasoyasharan.github.io/Lord-Krishna/</a>
3) Avengers Logo: <a href="https://vasoyasharan.github.io/Avengers-Logo/" target="_blank">https://vasoyasharan.github.io/Avengers-Logo/</a>
4) Arc Reactor: <a href="https://vasoyasharan.github.io/Iron-Man-ARC-Reactor/" target="_blank">https://vasoyasharan.github.io/Iron-Man-ARC-Reactor/</a>
5) Dr. Strange Eye of Agamotto: <a href="https://vasoyasharan.github.io/Dr.-strange-eye-of-Agamotto/" target="_blank">https://vasoyasharan.github.io/Dr.-strange-eye-of-Agamotto/</a>
6) Pipe Game: <a href="https://vasoyasharan.github.io/Pipe-Game/" target="_blank">https://vasoyasharan.github.io/Pipe-Game/</a>
7) Tic Tac Toe: <a href="https://vasoyasharan.github.io/Tic-Tak-Toe/" target="_blank">https://vasoyasharan.github.io/Tic-Tak-Toe/</a>
8) To-Do List: <a href="https://vasoyasharan.github.io/2K24-goals-/" target="_blank">https://vasoyasharan.github.io/2K24-goals-/</a>
9) Apple Web Clone: <a href="https://vasoyasharan.github.io/Apple-Website/" target="_blank">https://vasoyasharan.github.io/Apple-Website/</a>
10) Make My Trip: <a href="https://vasoyasharan.github.io/MakeMyTrip/" target="_blank">https://vasoyasharan.github.io/MakeMyTrip/</a>
11) Stone Paper Scissors: <a href="https://vasoyasharan.github.io/JS-Stone-Paper-Scissors/" target="_blank">https://vasoyasharan.github.io/JS-Stone-Paper-Scissors/</a>
12) OmkarIND: <a href="https://vasoyasharan.github.io/OmkarIND/" target="_blank">https://vasoyasharan.github.io/OmkarIND/</a>
13) QR Code Generator: <a href="https://vasoyasharan.github.io/QR-Code-Generator/" target="_blank">https://vasoyasharan.github.io/QR-Code-Generator/</a>
14) Recipe Collection: <a href="https://vasoyasharan.github.io/RecipeCollection/" target="_blank">https://vasoyasharan.github.io/RecipeCollection/</a>
    `;
            break;
        default:
            output = `Command not found: ${command}`;
    }

    // Display the command and its output
    const outputDiv = document.createElement('div');
    outputDiv.className = 'output';
    outputDiv.innerHTML = `visitor@sharan.dev: -$ ${command}\n${output}`;
    terminalBody.appendChild(outputDiv);

    // Add a new input line after the output
    addNewInputLine();
}

// Function to add a new input line
function addNewInputLine() {
    // Remove any existing input lines to prevent duplication
    const existingInput = document.querySelector('.input-line input');
    if (existingInput) {
        existingInput.remove();
    }

    const newInputLine = document.createElement('div');
    newInputLine.className = 'input-line';
    newInputLine.innerHTML = `<span class="prompt">visitor@sharan.dev: -$</span><input type="text" class="input" autofocus>`;
    terminalBody.appendChild(newInputLine);

    // Scroll to the bottom of the terminal
    terminalBody.scrollTop = terminalBody.scrollHeight;

    // Focus on the new input field
    const newInput = newInputLine.querySelector('.input');
    newInput.focus();
    newInput.addEventListener('keydown', handleInput);
}

// Add event listener to the initial input field
const initialInput = document.querySelector('.input');
initialInput.addEventListener('keydown', handleInput);