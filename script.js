import problems from './problems.js'

let gmCanvasInitialized = false;
let currentProblemIndex = 0;
let currentSelection = null;
let highlightedSpans = [];
let stepCompletion = {
  C: false,
  U: false,
  B: false,
  E: false,
  S: false
};
let gmCanvas = null;
let polypadInstance = null;
let desmosInstance = null;
let gmInstance = null;

let score = {
  totalProblems: problems.length,
  currentIndex: 0, // Track current problem index
  completed: Array(problems.length).fill(false),
  correct: 0
};

let touchStartX = 0;
let touchStartY = 0;
let touchCurrentX = 0;
let touchCurrentY = 0;
let touchElement = null;
let touchGhost = null;
let touchOffsetX = 0;
let touchOffsetY = 0;
let draggedElement = null;

const problemText = document.getElementById('problem-text');
const workArea = document.getElementById('work-area');
const selectedText = document.getElementById('selected-text');
const solutionArea = document.getElementById('solution-area');
const circleBtn = document.getElementById('circle-btn');
const underlineBtn = document.getElementById('underline-btn');
const boxBtn = document.getElementById('box-btn');
const eliminateBtn = document.getElementById('eliminate-btn');
const solveBtn = document.getElementById('solve-btn');
const checkAnswerBtn = document.getElementById('check-answer');
const resetBtn = document.getElementById('reset-btn');
const newProblemBtn = document.getElementById('new-problem-btn');
const algebraArea = document.getElementById('algebra-area');
const canvas = document.querySelector('#gm-canvas-container');
const gmBtn = document.querySelector('.gm-btn');
const desmosBtn = document.querySelector('.desmos-btn');
const polypadBtn = document.getElementById('polypad-btn');
const polypad = document.getElementById('polypad');
const desmos = document.getElementById('calculator');
const formulaBtn = document.getElementById('formula-btn');


loadProgress();

loadProblem(currentProblemIndex);
displayScore();

circleBtn.addEventListener('click', () => toggleFormatting('C'));
underlineBtn.addEventListener('click', () => toggleFormatting('U'));
boxBtn.addEventListener('click', () => toggleFormatting('B'));
eliminateBtn.addEventListener('click', () => toggleFormatting('E'));
solveBtn.addEventListener('click', () => toggleFormatting('S'));

checkAnswerBtn.addEventListener('click', checkAnswer);
resetBtn.addEventListener('click', resetProblem);
newProblemBtn.addEventListener('click', nextProblem);
polypadBtn.addEventListener('click', togglePolypad);
desmosBtn.addEventListener('click', toggleDesmos);
gmBtn.addEventListener('click', toggleGm);
formulaBtn.addEventListener('click', toggleFormulaDisplay);

document.addEventListener('mouseup', handleSelection);
document.addEventListener('touchend', handleSelection);
window.addEventListener('beforeunload', saveProgress);

function resetState() {
  currentSelection = null;
  highlightedSpans = [];
  stepCompletion = {
    C: false,
    U: false,
    B: false,
    E: false,
    S: false
  };
  
  // Clear any existing problem text and recreate it
  const problemTextElement = document.getElementById('problem-text');
  if (problemTextElement) {
    problemTextElement.innerHTML = problems[currentProblemIndex].text;
  } else {
    const problemContainer = document.querySelector('.problem-container');
    problemContainer.innerHTML = `<div id="problem-text">${problems[currentProblemIndex].text}</div>`;
  }
  
  // Reset the solution input
  const solutionInput = document.getElementById('solution');
  if (solutionInput) {
    solutionInput.value = "";
    solutionInput.className = "";
  }
  
  if (solutionArea) {
    solutionArea.classList.remove('active');
  }
  
  if (selectedText) {
    selectedText.textContent = "Your work will appear here...";
  }
  
  updateButtonStates();
}

function handleSelection(e) {
  const selection = window.getSelection();
  const selectionText = selection.toString().trim();
  
  if (selectionText === "") {
    currentSelection = null;
    return;
  }
  
  currentSelection = {
    text: selectionText,
    range: selection.getRangeAt(0).cloneRange()
  };
}

function applyFormatting(range, step) {
  const span = document.createElement('span');
  
  switch (step) {
    case 'C':
      span.className = 'circled';
      break;
    case 'U':
      span.className = 'underlined';
      break;
    case 'B':
      span.className = 'boxed';
      break;
    case 'E':
      span.className = 'eliminated';
      break;
  }
  
  const clonedRange = range.cloneRange();
  span.appendChild(clonedRange.extractContents());
  clonedRange.insertNode(span);
  
  highlightedSpans.push({
    element: span,
    text: span.textContent,
    type: step
  });
  
  // Save after any change
  saveProgress();
}

async function toggleFormatting(step) {
  
  if (!currentSelection && step !== 'S') {
    showCustomAlert("Please select text first, then click a button to format it.");
    return;
  }
  
  if (step === 'S') {
    if (stepCompletion.C && stepCompletion.U && stepCompletion.B) {
      stepCompletion.S = true;
      saveProgress();
      solutionArea.classList.add('active');
    } else {
      showCustomAlert("Please complete the C, U, and B steps first.");
    }
    return;
  }
  
  // Special handling for Eliminate step
  if (step === 'E') {
    if (!stepCompletion.C || !stepCompletion.U || !stepCompletion.B) {
      await showCustomAlert("Please complete the C, U, and B steps first before eliminating.");
      return;
    }
    
    const currentProblem = problems[currentProblemIndex];
    const isEliminatable = currentProblem.eliminateItems.some(
      item => currentSelection.text.includes(item) || item.includes(currentSelection.text)
    );
    
    if (!isEliminatable) {
      await showCustomAlert("This part shouldn't be eliminated according to the problem's instructions.");
      return;
    }
    
    applyFormatting(currentSelection.range, step);
    updateWorkArea();
    updateStepCompletion();
    saveProgress();
    window.getSelection().removeAllRanges();
    currentSelection = null;
    return;
  }
  
  // Existing logic for other steps
  const existingFormatIndex = highlightedSpans.findIndex(
    span => span.text === currentSelection.text && span.type === step
  );
  
  if (existingFormatIndex !== -1) {
    const spanToRemove = highlightedSpans[existingFormatIndex].element;
    const textNode = document.createTextNode(spanToRemove.textContent);
    spanToRemove.parentNode.replaceChild(textNode, spanToRemove);
    highlightedSpans.splice(existingFormatIndex, 1);
  } else {
    applyFormatting(currentSelection.range, step);
  }
  
  updateWorkArea();
  updateStepCompletion();
  saveProgress();
  window.getSelection().removeAllRanges();
  currentSelection = null;
}

function updateWorkArea() {
  selectedText.innerHTML = "";
  
  const typeLabels = {
    'C': 'Numbers: ',
    'U': 'Question: ',
    'B': 'Key Words: ',
    'E': 'Eliminated: '
  };
  
  const grouped = {};
  highlightedSpans.forEach(span => {
    if (!grouped[span.type]) grouped[span.type] = [];
    grouped[span.type].push(span.text);
  });
  
  // Show non-eliminated items first
  ['C', 'U', 'B'].forEach(type => {
    if (grouped[type] && grouped[type].length > 0) {
      const itemDiv = document.createElement('div');
      itemDiv.innerHTML = `<strong>${typeLabels[type]}</strong> ${grouped[type].join(', ')}`;
      selectedText.appendChild(itemDiv);
    }
  });
  
  // Then show eliminated items if any
  if (grouped['E'] && grouped['E'].length > 0) {
    const eliminatedDiv = document.createElement('div');
    eliminatedDiv.className = 'eliminated-section';
    
    const currentProblem = problems[currentProblemIndex];
    const allEliminated = currentProblem.eliminateItems ?
      currentProblem.eliminateItems.every(item =>
        grouped['E'].some(e => e.includes(item) || item.includes(e))) : false;
    
    eliminatedDiv.innerHTML = `
      <strong>${typeLabels['E']}</strong> 
      <span class="eliminated-text ${allEliminated ? 'all-eliminated' : ''}">
        ${grouped['E'].join(', ')}
      </span>
      ${allEliminated ? '✓' : ''}
    `;
    selectedText.appendChild(eliminatedDiv);
  }
  
  if (selectedText.children.length === 0) {
    selectedText.textContent = "Your work will appear here...";
  }
}

function updateStepCompletion() {
  const currentProblem = problems[currentProblemIndex];
  
  const circledItems = highlightedSpans
    .filter(span => span.type === 'C')
    .map(span => span.text);
  
  stepCompletion.C = currentProblem.circleItems.every(item =>
    circledItems.includes(item));
  
  const underlinedItems = highlightedSpans
    .filter(span => span.type === 'U')
    .map(span => span.text);
  
  stepCompletion.U = currentProblem.underlineItems.some(item =>
    underlinedItems.some(u => u.includes(item) || item.includes(u)));
  
  const boxedItems = highlightedSpans
    .filter(span => span.type === 'B')
    .map(span => span.text);
  
  stepCompletion.B = currentProblem.boxItems.some(item =>
    boxedItems.includes(item));
  
  // Check if all eliminateItems have been eliminated
  const eliminatedItems = highlightedSpans
    .filter(span => span.type === 'E')
    .map(span => span.text);
  
  stepCompletion.E = currentProblem.eliminateItems ?
    currentProblem.eliminateItems.every(item =>
      eliminatedItems.some(e => e.includes(item) || item.includes(e))) : false;
  
  updateButtonStates();
}

function updateButtonStates() {
  circleBtn.classList.toggle('completed', stepCompletion.C);
  underlineBtn.classList.toggle('completed', stepCompletion.U);
  boxBtn.classList.toggle('completed', stepCompletion.B);
  eliminateBtn.classList.toggle('disabled', !(stepCompletion.C && stepCompletion.U && stepCompletion.B));
  solveBtn.classList.toggle('disabled', !(stepCompletion.C && stepCompletion.U && stepCompletion.B));
}

function createAlgebraicStatement() {
  if (!document.querySelector('link[href="https://graspablemath.com/shared/css/app.css"]')) {
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = 'https://graspablemath.com/shared/css/app.css';
    document.head.appendChild(cssLink);
  }
  loadGraspableMath();
}

function loadGraspableMath() {
  if (typeof gmath !== 'undefined') {
    initializeGraspableMath();
    return;
  }
  
  const script = document.createElement('script');
  script.src = 'https://graspablemath.com/shared/libs/gmath/gm-inject.js';
  
  script.onload = () => {
    loadGM(() => {
      initializeGraspableMath();
      document.getElementById('gm-loading-status').textContent = "Math editor ready!";
      if (document.getElementById('gm-done-btn')) {
        document.getElementById('gm-done-btn').style.display = 'block';
      }
    }, {
      version: 'latest',
      settings: { baseFontSize: 16 }
    });
  };
  
  script.onerror = () => {
    document.getElementById('gm-loading-status').textContent = "Failed to load math editor. Please refresh the page.";
  };
  
  document.head.appendChild(script);
}

function initializeGraspableMath() {
  
  window.gmCanvas = new gmath.Canvas(canvas, {
    use_toolbar: true,
    undo_btn: true,
    redo_btn: true,
    font_size_btns: true,
    formula_btn: false,
    help_btn: false,
    fullscreen_btn: false,
    transform_btn: true,
    keypad_btn: false,
    scrub_btn: false,
    draw_btn: true,
    erase_btn: true,
    arrange_btn: true,
    reset_btn: false,
    save_btn: false,
    load_btn: false,
    settings_btn: true,
    insert_btn: true,
    insert_menu_items: {
      derivation: true,
      function: true,
      textbox: true,
      table: true,
      ggb_geometry: true,
      ggb_graphing: true,
    },
    btn_size: 'md',
    vertical_scroll: true,
    baseFontSize: 16,
    enableTransformations: true
  });
  
  const derivation = window.gmCanvas.model.createElement('derivation', {
    eq: 'x = ',
    pos: { x: 'center', y: 'center' },
    h_align: 'center',
    fontSize: 16,
    show_bg: false,
    draggable: true,
    transformable: true
  });
  
  setTimeout(() => {
    window.gmCanvas.controller.set_font_size(16);
    window.gmCanvas.controller.redraw();
    window.gmCanvas.controller.focus();
    window.gmCanvas.controller.show_keypad();
    window.gmCanvas.controller.enable_editing();
    
    derivation.startEditing();
  }, 500);
}

function createScoreDisplay() {
  const scoreContainer = document.createElement('div');
  scoreContainer.id = 'score-container';
  scoreContainer.innerHTML = '<div id="score-display"></div>';
  document.body.insertBefore(scoreContainer, document.querySelector('.container'));
  return document.getElementById('score-display');
}

function saveProgress() {
  localStorage.setItem('mathProblemScore', JSON.stringify(score));
  
  const solutionInput = document.getElementById('solution');
  if (solutionInput && solutionInput.value) {
    localStorage.setItem(`solution_${currentProblemIndex}`, solutionInput.value);
  }
  
  const spansToSave = highlightedSpans.map(span => {
    return {
      text: span.text,
      type: span.type
    };
  });
  
  const formulaContainer = document.getElementById('formula-container');
  if (formulaContainer) {
    localStorage.setItem(`formulaShown_${currentProblemIndex}`, formulaContainer.style.display !== 'none');
  } else {
    localStorage.removeItem(`formulaShown_${currentProblemIndex}`);
  }
  
  
  localStorage.setItem(`highlights_${currentProblemIndex}`, JSON.stringify(spansToSave));
  localStorage.setItem(`stepCompletion_${currentProblemIndex}`, JSON.stringify(stepCompletion));
}

function loadProblem(index) {
  resetState();
  currentProblemIndex = index;
  
  // Make sure we have a valid problem index
  if (currentProblemIndex < 0) currentProblemIndex = 0;
  if (currentProblemIndex >= problems.length) currentProblemIndex = problems.length - 1;
  
  // Update the problem text
  problemText.textContent = problems[currentProblemIndex].text;
  selectedText.textContent = "Your work will appear here...";
  solutionArea.classList.remove('active');
  
  // Update score tracking
  score.currentIndex = currentProblemIndex;
  
  // Remove any existing formula container
  const formulaContainer = document.getElementById('formula-container');
  if (formulaContainer) {
    formulaContainer.remove();
  }
  
  // Check if formulas should be shown based on saved state
  const savedFormulaState = localStorage.getItem(`formulaShown_${currentProblemIndex}`);
  if (savedFormulaState === 'true' && problems[currentProblemIndex].formulas) {
    // Create formula container but don't modify anything else
    setTimeout(() => {
      createFormulaContainer();
    }, 100); // Short delay to ensure DOM is ready
    formulaBtn.classList.add('completed');
  } else {
    formulaBtn.classList.remove('completed');
  }
  
  const solutionInput = document.getElementById('solution');
  if (score.completed[currentProblemIndex]) {
    solutionInput.className = "completed";
    // Restore the previous answer if available
    const savedSolution = localStorage.getItem(`solution_${currentProblemIndex}`);
    if (savedSolution) {
      solutionInput.value = savedSolution;
    }
  } else {
    solutionInput.className = "";
    solutionInput.value = "";
  }
  
  const savedStepCompletion = localStorage.getItem(`stepCompletion_${currentProblemIndex}`);
  if (savedStepCompletion) {
    try {
      stepCompletion = JSON.parse(savedStepCompletion);
    } catch (error) {
      console.error("Error restoring step completion:", error);
      stepCompletion = {
        C: false,
        U: false,
        B: false,
        E: false,
        S: false
      };
    }
  }
  
  const savedHighlights = localStorage.getItem(`highlights_${currentProblemIndex}`);
  if (savedHighlights) {
    try {
      const parsedHighlights = JSON.parse(savedHighlights);
      if (Array.isArray(parsedHighlights) && parsedHighlights.length > 0) {
        // Using setTimeout to ensure DOM is ready
        setTimeout(() => {
          restoreHighlights(parsedHighlights);
        }, 50);
      }
    } catch (error) {
      console.error("Error restoring highlights:", error);
    }
  }
  
  // Update UI states
  updateButtonStates();
  
  if (stepCompletion.S) {
    solutionArea.classList.add('active');
  }
}

function loadProgress() {
  try {
    const savedScore = localStorage.getItem('mathProblemScore');
    if (savedScore) {
      const parsedScore = JSON.parse(savedScore);
      if (parsedScore && parsedScore.completed && Array.isArray(parsedScore.completed)) {
        if (parsedScore.completed.length !== problems.length) {
          parsedScore.completed = parsedScore.completed.slice(0, problems.length);
          while (parsedScore.completed.length < problems.length) {
            parsedScore.completed.push(false);
          }
        }
        score = {
          ...score,
          ...parsedScore,
          totalProblems: problems.length
        };
        if (score.currentIndex >= problems.length) {
          score.currentIndex = problems.length - 1;
        }
        currentProblemIndex = score.currentIndex || 0;
        
      }
    }
  } catch (error) {
    console.error("Error loading progress:", error);
    score = {
      totalProblems: problems.length,
      currentIndex: 0,
      completed: Array(problems.length).fill(false),
      correct: 0
    };
  }
}

function nextProblem() {
  saveProgress();
  currentProblemIndex = (currentProblemIndex + 1) % problems.length;
  score.currentIndex = currentProblemIndex;
  loadProblem(currentProblemIndex);
  displayScore();
}

function resetProblem() {
  
  if (score.completed[currentProblemIndex]) {
    score.completed[currentProblemIndex] = false;
    localStorage.removeItem(`solution_${currentProblemIndex}`);
    const solutionInput = document.getElementById('solution');
    const userAnswer = parseFloat(solutionInput.value);
    const correctAnswer = problems[currentProblemIndex].solution;
    const wasCorrect = Math.abs(userAnswer - correctAnswer) < 0.001;
    if (wasCorrect && score.correct > 0) {
      score.correct--;
    }
    
    saveProgress();
    loadProblem(currentProblemIndex);
    displayScore();
  } else {
    // If not previously completed, just reset the UI
    loadProblem(currentProblemIndex);
  }
  
  if (polypad) {
    polypad.clear();
  }
}

function checkAnswer() {
  const solutionInput = document.getElementById('solution');
  const userAnswer = parseFloat(solutionInput.value);
  const correctAnswer = problems[currentProblemIndex].solution;
  
  const isCorrect = Math.abs(userAnswer - correctAnswer) < 0.001;
  
  solutionInput.className = isCorrect ? "correct" : "incorrect";
  
  // If this is the first time checking this problem
  if (!score.completed[currentProblemIndex]) {
    score.completed[currentProblemIndex] = true;
    if (isCorrect) {
      score.correct++;
    }
    saveProgress();
    displayScore();
  }
  
  return isCorrect;
}

function displayScore() {
  const scoreDisplay = document.getElementById('score-display') || createScoreDisplay();
  const completedCount = score.completed.filter(Boolean).length;
  
  scoreDisplay.innerHTML = `
    <h3>Progress</h3>
    <p>Problem: ${currentProblemIndex + 1}/${score.totalProblems}</p>
    <p>Solved: ${score.correct}/${completedCount}</p>
    <div class="progress-bar">
      <div class="progress-fill" style="width: ${(completedCount / score.totalProblems) * 100}%"></div>
    </div>
  `;
}

function createCustomAlertBox() {
  const alertBox = document.createElement('div');
  alertBox.id = 'custom-alert';
  alertBox.innerHTML = `
    <div class="alert-content">
      <p id="alert-message"></p>
      <button id="alert-ok">OK</button>
    </div>
  `;
  document.body.appendChild(alertBox);
  
  // Add styles for the custom alert that match the theme
  const style = document.createElement('style');
  style.textContent = `
    #custom-alert {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1000;
      align-items: center;
      justify-content: center;
      font-family: 'Nunito', sans-serif;
    }
    .alert-content {
      background: white;
      padding: 25px;
      border-radius: 12px;
      box-shadow: var(--card-shadow);
      max-width: 400px;
      width: 90%;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .alert-content::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, var(--circle-color), var(--underline-color), var(--box-color), var(--eliminate-color), var(--solve-color));
    }
    #alert-message {
      font-size: 1.1rem;
      color: var(--dark-text);
      margin-bottom: 20px;
      line-height: 1.6;
    }
    #alert-ok {
      padding: 10px 25px;
      background-color: var(--secondary);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-family: 'Nunito', sans-serif;
      font-weight: 600;
      font-size: 1rem;
      transition: var(--hover-transition);
      box-shadow: var(--button-shadow);
    }
    #alert-ok:hover {
      transform: translateY(-2px);
      background-color: #4ca6a4;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
    #alert-ok:active {
      transform: translateY(1px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  `;
  document.head.appendChild(style);
  
  return alertBox;
}
const alertBox = createCustomAlertBox();
const alertOk = document.getElementById('alert-ok');
const alertMessage = document.getElementById('alert-message');

function showCustomAlert(message) {
  alertMessage.textContent = message;
  alertBox.style.display = 'flex';
  
  return new Promise(resolve => {
    alertOk.onclick = () => {
      alertBox.style.display = 'none';
      resolve();
    };
  });
}

function restoreHighlights(savedHighlights) {
  const problemTextElement = document.getElementById('problem-text');
  
  // First, create a document fragment to build the formatted content
  const fragment = document.createDocumentFragment();
  let remainingText = problemTextElement.textContent;
  let currentPosition = 0;
  
  // Sort highlights by their position in the text to process them in order
  const sortedHighlights = [...savedHighlights].sort((a, b) => {
    const posA = remainingText.indexOf(a.text);
    const posB = remainingText.indexOf(b.text);
    return posA - posB;
  });
  
  // Process each highlight
  sortedHighlights.forEach(highlight => {
    const highlightPos = remainingText.indexOf(highlight.text, currentPosition);
    
    if (highlightPos >= 0) {
      // Add text before the highlight
      if (highlightPos > currentPosition) {
        fragment.appendChild(document.createTextNode(
          remainingText.substring(currentPosition, highlightPos)
        ));
      }
      
      // Create the highlighted span
      const span = document.createElement('span');
      switch (highlight.type) {
        case 'C':
          span.className = 'circled';
          break;
        case 'U':
          span.className = 'underlined';
          break;
        case 'B':
          span.className = 'boxed';
          break;
        case 'E':
          span.className = 'eliminated';
          break;
      }
      
      span.textContent = highlight.text;
      fragment.appendChild(span);
      
      // Track the highlighted span for future operations
      highlightedSpans.push({
        element: span,
        text: span.textContent,
        type: highlight.type
      });
      
      // Update current position
      currentPosition = highlightPos + highlight.text.length;
    }
  });
  
  // Add any remaining text
  if (currentPosition < remainingText.length) {
    fragment.appendChild(document.createTextNode(
      remainingText.substring(currentPosition)
    ));
  }
  
  // Replace the problem text content with our formatted version
  problemTextElement.innerHTML = '';
  problemTextElement.appendChild(fragment);
  
  // Update UI after restoring highlights
  updateWorkArea();
  updateStepCompletion();
  updateButtonStates();
}

function applyFormattingToRange(range, step) {
  const span = document.createElement('span');
  
  switch (step) {
    case 'C':
      span.className = 'circled';
      break;
    case 'U':
      span.className = 'underlined';
      break;
    case 'B':
      span.className = 'boxed';
      break;
    case 'E':
      span.className = 'eliminated';
      break;
  }
  
  span.appendChild(range.extractContents());
  range.insertNode(span);
  
  highlightedSpans.push({
    element: span,
    text: span.textContent,
    type: step
  });
}

function createFormulaContainer() {
  const currentProblem = problems[currentProblemIndex];
  
  if (!currentProblem.formulas || currentProblem.formulas.length === 0) {
    showCustomAlert("This problem doesn't have any associated formulas.");
    return;
  }
  
  // Check if a formula container already exists and if so, just make it visible
  const existingContainer = document.getElementById('formula-container');
  if (existingContainer) {
    existingContainer.style.display = 'block';
    formulaBtn.classList.add('completed');
    saveProgress();
    return;
  }
  
  // Create new container
  const container = document.createElement('div');
  container.id = 'formula-container';
  container.className = 'formula-display';
  
  // Add each formula with KaTeX rendering
  currentProblem.formulas.forEach(formula => {
    const formulaElement = document.createElement('div');
    formulaElement.className = 'formula-item';
    try {
      katex.render(formula, formulaElement, {
        throwOnError: false
      });
    } catch (e) {
      formulaElement.textContent = formula;
      console.error("KaTeX rendering error:", e);
    }
    container.appendChild(formulaElement);
  });
  
  // Insert after the work area or problem text without modifying existing content
  const workArea = document.getElementById('work-area');
  if (workArea) {
    workArea.parentNode.insertBefore(container, workArea.nextSibling);
  } else {
    problemText.parentNode.insertBefore(container, problemText.nextSibling);
  }
  
  formulaBtn.classList.add('completed');
  saveProgress();
}

function toggleFormulaDisplay() {
  let formulaContainer = document.getElementById('formula-container');
  
  if (!formulaContainer) {
    // Store the current state before creating formula container
    const problemTextHTML = document.getElementById('problem-text').innerHTML;
    const currentHighlightedSpans = JSON.parse(JSON.stringify(highlightedSpans));
    const currentStepCompletion = JSON.parse(JSON.stringify(stepCompletion));
    
    // Create the formula container
    createFormulaContainer();
    
    // Restore the previous state
    document.getElementById('problem-text').innerHTML = problemTextHTML;
    
    // Reconnect the DOM elements to the highlightedSpans array
    currentHighlightedSpans.forEach((span, index) => {
      // Find the corresponding DOM element
      const spanElements = document.querySelectorAll(`.${span.type === 'C' ? 'circled' : span.type === 'U' ? 'underlined' : span.type === 'B' ? 'boxed' : 'eliminated'}`);
      for (let i = 0; i < spanElements.length; i++) {
        if (spanElements[i].textContent === span.text) {
          highlightedSpans[index].element = spanElements[i];
          break;
        }
      }
    });
    
    // Re-apply step completion state
    stepCompletion = currentStepCompletion;
    updateButtonStates();
    
    if (stepCompletion.S) {
      solutionArea.classList.add('active');
    }
    
    return;
  }
  
  if (formulaContainer.style.display === 'none') {
    formulaContainer.style.display = 'block';
    formulaBtn.classList.add('completed');
  } else {
    formulaContainer.style.display = 'none';
    formulaBtn.classList.remove('completed');
  }
  
  saveProgress();
}

function togglePolypad() {
  const isCurrentlyVisible = polypad.classList.contains('visible');
  
  if (!isCurrentlyVisible) {
    closeAllTools();
  }
  
  polypad.classList.toggle('visible');
  polypadBtn.classList.toggle('active');

  if (polypad.classList.contains('visible') && !polypadInstance) {
    initPolypad();
  }
  
  updateLowerToolsState();
}

function toggleDesmos() {
  const isCurrentlyVisible = desmos.classList.contains('visible');
  
  if (!isCurrentlyVisible) {
    closeAllTools();
  }
  
  desmos.classList.toggle('visible');
  desmosBtn.classList.toggle('active');
  
  if (desmos.classList.contains('visible') && !desmosInstance) {
    initDesmos();
  }
  
  updateLowerToolsState();
}

function toggleGm() {
  const isCurrentlyVisible = canvas.classList.contains('expand');
  
  if (!isCurrentlyVisible) {
    closeAllTools();
  }
  
  canvas.classList.toggle('expand');
  gmBtn.classList.toggle('active');
  
  // if (canvas.classList.contains('expand') && !gmInstance) {
  //   initGm();
  // }
  
  updateLowerToolsState();
}

function toggleGoogleCalc() {
  const googleCalcEmbed = document.getElementById('google-calculator-embed');
  const googleCalcBtn = document.getElementById('google-calc-btn');
  const isCurrentlyVisible = googleCalcEmbed.classList.contains('visible');
  
  if (!isCurrentlyVisible) {
    closeAllTools();
  }
  
  googleCalcEmbed.classList.toggle('visible');
  googleCalcBtn.classList.toggle('active');
  
  updateLowerToolsState();
}

document.addEventListener('DOMContentLoaded', function() {
  const googleCalcBtn = document.getElementById('google-calc-btn');
  const googleCalcEmbed = document.getElementById('google-calculator-embed');
  
  function toggleGoogleCalc() {
    const isCurrentlyVisible = googleCalcEmbed.classList.contains('visible');
    
    // If opening this tool, close others first
    if (!isCurrentlyVisible) {
      closeAllTools();
    }
    
    // Toggle visibility
    googleCalcEmbed.classList.toggle('visible');
    googleCalcBtn.classList.toggle('active');
    
    updateLowerToolsState();
  }
  
  if (googleCalcBtn && googleCalcEmbed) {
    // Toggle math solver canvas
    googleCalcBtn.addEventListener('click', toggleGoogleCalc);
    
    // Close when clicking outside the iframe
    googleCalcEmbed.addEventListener('click', function(e) {
      if (e.target === googleCalcEmbed) {
        toggleGoogleCalc();
      }
    });
  }
  
  // Function to close all tools
  function closeAllTools() {
    const toolElements = [
      document.getElementById('polypad'),
      document.getElementById('calculator'),
      document.getElementById('gm-canvas-container'),
      document.getElementById('google-calculator-embed')
    ];
    
    toolElements.forEach(element => {
      if (element) {
        element.classList.remove('visible');
        element.classList.remove('expand');
      }
    });
    
    const toolButtons = [
      document.getElementById('polypad-btn'),
      document.querySelector('.desmos-btn'),
      document.querySelector('.gm-btn'),
      document.getElementById('google-calc-btn')
    ];
    
    toolButtons.forEach(button => {
      if (button) button.classList.remove('active');
    });
  }
  
  // Function to update lower tools state
  function updateLowerToolsState() {
    const lowerTools = document.querySelector('.lower-tools');
    const anyToolOpen =
      (document.getElementById('polypad') && document.getElementById('polypad').classList.contains('visible')) ||
      (document.getElementById('calculator') && document.getElementById('calculator').classList.contains('visible')) ||
      (document.getElementById('gm-canvas-container') && document.getElementById('gm-canvas-container').classList.contains('expand')) ||
      (document.getElementById('google-calculator-embed') && document.getElementById('google-calculator-embed').classList.contains('visible'));
    
    if (anyToolOpen) {
      lowerTools.classList.add('collapsed');
    } else {
      lowerTools.classList.remove('collapsed');
    }
  }
});

function closeAllTools() {
  const toolElements = [polypad, desmos, document.getElementById('gm-canvas-container'), document.getElementById('google-calculator-embed')];
  toolElements.forEach(element => {
    if (element) element.classList.remove('visible');
  });
  
  const toolButtons = [polypadBtn, desmosBtn, gmBtn];
  toolButtons.forEach(button => {
    if (button) button.classList.remove('active');
  });
}

function updateLowerToolsState() {
  const lowerTools = document.querySelector('.lower-tools');
  const anyToolOpen =
    (polypad && polypad.classList.contains('visible')) ||
    (desmos && desmos.classList.contains('visible')) ||
    (document.getElementById('gm-canvas-container') &&
      document.getElementById('gm-canvas-container').classList.contains('expand'));
  
  if (anyToolOpen) {
    lowerTools.classList.add('collapsed');
  } else {
    lowerTools.classList.remove('collapsed');
  }
}

function initDesmos() {
  if (!desmosInstance) {
    desmosInstance = Desmos.GraphingCalculator(desmos);
  }
}

function initPolypad() {
  if (!polypadInstance) {
    polypadInstance = Polypad.create(polypad);
  }
}

function initGm() {
  if (!gmInstance) {
    createAlgebraicStatement();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  createAlgebraicStatement();
  const toggleBtn = document.getElementById('toggle-tools-btn');
  const lowerTools = document.querySelector('.lower-tools');
  
  toggleBtn.addEventListener('click', function() {
    lowerTools.classList.toggle('collapsed');
  });
})

setInterval(saveProgress, 10000);