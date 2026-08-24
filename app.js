/* -------------------------------------------------------------
   NCERT CHEMISTRY MASTERY PORTAL - JAVASCRIPT CONTROLLER
   State Management, Shuffling Quiz Engine, Certificate Generator,
   and Teacher Reporting Panels.
   ------------------------------------------------------------- */

// State Management
const state = {
  currentStudent: null,   // Active Student object: { name, achievements: { chapterId: { score, percent, level, date, attempts } } }
  activeChapter: null,    // Chapter object from CHEMISTRY_QUIZ_DATA
  activeQuiz: {
    questions: [],        // Prepared (shuffled) questions for the active attempt
    currentIndex: 0,      // Current question index
    selectedAnswers: [],  // User's selected option indices for the active question
    correctCount: 0       // Count of correct answers in this attempt
  },
  allStudents: []         // List of all students registered on this device
};

// Standard Option Text for Assertion-Reasoning Type Questions
const AR_STANDARD_OPTIONS = [
  "Assertion and Reason both are true statements and Reason is the correct explanation for Assertion.",
  "Assertion and Reason both are true statements but Reason is not the correct explanation for Assertion.",
  "Assertion is a true statement but Reason is a false statement.",
  "Assertion and Reason both are false statements.",
  "Assertion is a false statement but Reason is a true statement."
];

// App Initialization on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  loadDataFromStorage();
  checkSession();
  
  // Custom CSV import listener
  const importInput = document.getElementById("import-json-file");
  if (importInput) {
    importInput.addEventListener("change", importStudentDataJSON);
  }
});

// Load storage datasets
function loadDataFromStorage() {
  const saved = localStorage.getItem("chem_portal_students");
  if (saved) {
    try {
      state.allStudents = JSON.parse(saved);
    } catch (e) {
      console.error("Failed to parse student data", e);
      state.allStudents = [];
    }
  } else {
    state.allStudents = [];
  }
}

// Save storage datasets
function saveToStorage() {
  localStorage.setItem("chem_portal_students", JSON.stringify(state.allStudents));
}

// Check if a session was active
function checkSession() {
  const activeName = sessionStorage.getItem("chem_portal_active_student");
  if (activeName) {
    const student = state.allStudents.find(s => s.name.toLowerCase() === activeName.toLowerCase());
    if (student) {
      state.currentStudent = student;
      renderDashboard();
      switchScreen("screen-dashboard");
      return;
    }
  }
  // If no session, show auth screen
  switchScreen("screen-auth");
}

// Switch SPA screens
function switchScreen(screenId) {
  document.querySelectorAll(".screen-view").forEach(screen => {
    screen.classList.remove("active");
  });
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add("active");
    window.scrollTo(0, 0);
  }
  
  // Automatically render teacher table when switching to teacher dashboard
  if (screenId === "screen-teacher") {
    renderTeacherTable();
  }
}

// Handle Student Registration/Login
function handleRegister() {
  const input = document.getElementById("student-name-input");
  let name = input.value.trim();
  if (!name) return;

  // Capitalize first letter of each word
  name = name.split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");

  // Find if student already exists
  let student = state.allStudents.find(s => s.name.toLowerCase() === name.toLowerCase());

  if (!student) {
    // Register new student
    student = {
      name: name,
      achievements: {}
    };
    state.allStudents.push(student);
    saveToStorage();
  }

  state.currentStudent = student;
  sessionStorage.setItem("chem_portal_active_student", student.name);
  
  // Reset input and view
  input.value = "";
  renderDashboard();
  switchScreen("screen-dashboard");
}

// Log out active student
function logoutStudent() {
  state.currentStudent = null;
  sessionStorage.removeItem("chem_portal_active_student");
  switchScreen("screen-auth");
}

// Compute Mastery Level
function calculateMasteryLevel(percentage) {
  if (percentage >= 90) return { title: "Master", level: 3 };
  if (percentage >= 70) return { title: "Proficient", level: 2 };
  if (percentage >= 50) return { title: "Learner", level: 1 };
  return { title: "Beginner", level: 0 };
}

// Update and Render Student Stats & Syllabus Dashboard
function renderDashboard() {
  if (!state.currentStudent) return;

  // Set Student Name
  document.getElementById("active-student-name").textContent = state.currentStudent.name;

  // Calculate statistics
  let masteredCount = 0;
  let totalAttempts = 0;
  
  CHEMISTRY_QUIZ_DATA.forEach(chapter => {
    const record = state.currentStudent.achievements[chapter.id];
    if (record) {
      totalAttempts += record.attempts || 0;
      if (record.percent >= 90) {
        masteredCount++;
      }
    }
  });

  // Calculate overall portal level
  let badgeTitle = "Beginner";
  let badgeClass = "badge-locked";
  if (masteredCount === 5) {
    badgeTitle = "Chemistry Master 🏆";
    badgeClass = "badge-mastered";
  } else if (masteredCount >= 3) {
    badgeTitle = "Proficient Scholar";
    badgeClass = "badge-progress";
  } else if (masteredCount >= 1) {
    badgeTitle = "Junior Learner";
    badgeClass = "badge-single";
  }

  // Bind stats values
  document.getElementById("stat-completed-chapters").textContent = `${masteredCount} / 5`;
  document.getElementById("stat-completion-bar").style.width = `${(masteredCount / 5) * 100}%`;
  document.getElementById("stat-total-attempts").textContent = totalAttempts;
  
  const overallBadge = document.getElementById("stat-overall-badge");
  overallBadge.textContent = badgeTitle;
  overallBadge.className = `status-badge-overall ${badgeClass}`;

  // Render chapters grid
  const listContainer = document.getElementById("chapters-list-container");
  listContainer.innerHTML = "";

  // Chapter-specific SVGs for icons
  const chapterIcons = {
    solutions: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chapter-svg"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
    electrochemistry: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chapter-svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    kinetics: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chapter-svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
    d_block: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chapter-svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg>`,
    coordination: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chapter-svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>`
  };

  CHEMISTRY_QUIZ_DATA.forEach((chapter, index) => {
    const record = state.currentStudent.achievements[chapter.id];
    let badgeText = "Not Started";
    let badgeType = "badge-locked";
    let scoreDisplay = "—";
    let isMastered = false;
    let scoreClass = "";

    if (record) {
      isMastered = record.percent >= 90;
      badgeText = isMastered ? "Mastered" : "In Progress";
      badgeType = isMastered ? "badge-mastered" : "badge-progress";
      scoreDisplay = `${record.score} / ${record.total}`;
      scoreClass = isMastered ? "passed" : "failed";
    }

    const card = document.createElement("div");
    card.className = "chapter-card";
    
    card.innerHTML = `
      <div class="chapter-main-info">
        <span class="chapter-num">Unit ${chapter.id === 'solutions' ? '2' : chapter.id === 'electrochemistry' ? '3' : chapter.id === 'kinetics' ? '4' : chapter.id === 'd_block' ? '8' : '9'}</span>
        <div class="chapter-title-row">
          ${chapterIcons[chapter.id] || ''}
          <h4>${chapter.title}</h4>
          <span class="badge ${badgeType}">${badgeText}</span>
        </div>
        <p class="chapter-desc">${chapter.description}</p>
      </div>

      <div class="chapter-meta">
        <div class="chapter-score-box">
          <span class="chapter-score-label">Best Score</span>
          <span class="chapter-score-value ${scoreClass}">${scoreDisplay}</span>
        </div>
        <div class="chapter-actions-buttons">
          ${isMastered 
            ? `<button class="btn btn-secondary btn-sm" onclick="viewCertificate('${chapter.id}')" style="margin-right: 0.5rem;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                Certificate
               </button>`
            : ''
          }
          <button class="btn ${isMastered ? 'btn-outline' : 'btn-primary'} btn-sm" onclick="startQuiz('${chapter.id}')">
            ${isMastered ? 'Retake Quiz' : 'Start Quiz'}
          </button>
        </div>
      </div>
    `;
    listContainer.appendChild(card);
  });
}

// Shuffle Utility Algorithm (Fisher-Yates)
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// Prepare Quiz Questions with Shuffled Options and Saved Meta
function prepareQuestionsForQuiz(chapter) {
  const rawQuestions = [...chapter.questions];
  shuffleArray(rawQuestions);

  return rawQuestions.map(q => {
    // If Assertion-Reason, options are standard and do not need shuffling
    if (q.type === "assertion-reason") {
      return {
        ...q,
        shuffledOptions: [...AR_STANDARD_OPTIONS],
        mappedCorrect: q.correct
      };
    }

    // Normal MCQ Option Shuffling
    // Store original index with options to determine new correct indices
    const optionsWithMeta = q.options.map((opt, idx) => {
      const isCorrect = q.type === "single" ? (idx === q.correct) : q.correct.includes(idx);
      return { text: opt, isCorrect: isCorrect };
    });

    shuffleArray(optionsWithMeta);

    const shuffledText = optionsWithMeta.map(o => o.text);
    
    let mappedCorrect;
    if (q.type === "single") {
      mappedCorrect = optionsWithMeta.findIndex(o => o.isCorrect);
    } else {
      mappedCorrect = [];
      optionsWithMeta.forEach((item, index) => {
        if (item.isCorrect) mappedCorrect.push(index);
      });
    }

    return {
      ...q,
      shuffledOptions: shuffledText,
      mappedCorrect: mappedCorrect
    };
  });
}

// Start Quiz Session
function startQuiz(chapterId) {
  const chapter = CHEMISTRY_QUIZ_DATA.find(c => c.id === chapterId);
  if (!chapter) return;

  state.activeChapter = chapter;
  
  // Set up randomized active quiz state
  state.activeQuiz = {
    questions: prepareQuestionsForQuiz(chapter),
    currentIndex: 0,
    selectedAnswers: [],
    correctCount: 0
  };

  // Bind chapter tags
  document.getElementById("quiz-chapter-tag").textContent = `Unit ${chapter.id === 'solutions' ? '2' : chapter.id === 'electrochemistry' ? '3' : chapter.id === 'kinetics' ? '4' : chapter.id === 'd_block' ? '8' : '9'}`;
  document.getElementById("quiz-chapter-title").textContent = chapter.title;

  switchScreen("screen-quiz");
  loadQuestion();
}

// Load current question view
function loadQuestion() {
  const quiz = state.activeQuiz;
  const q = quiz.questions[quiz.currentIndex];

  // Update progress elements
  document.getElementById("quiz-progress-text").textContent = `Question ${quiz.currentIndex + 1} of ${quiz.questions.length}`;
  const pct = ((quiz.currentIndex + 1) / quiz.questions.length) * 100;
  document.getElementById("quiz-progress-bar").style.width = `${pct}%`;

  // Render question type badge
  const badge = document.getElementById("question-type-badge");
  badge.textContent = q.type === "single" ? "Single Correct MCQ" : q.type === "multiple" ? "Multi-Select MCQ" : "Assertion-Reasoning";
  badge.className = `type-badge ${q.type === 'single' ? 'badge-single' : q.type === 'multiple' ? 'badge-multiple' : 'badge-ar'}`;

  // Toggle assertion reasoning layout
  const normalText = document.getElementById("question-text-content");
  const arContainer = document.getElementById("assertion-reason-container");

  if (q.type === "assertion-reason") {
    normalText.classList.add("hidden");
    arContainer.classList.remove("hidden");
    document.getElementById("assertion-text").textContent = q.assertion;
    document.getElementById("reason-text").textContent = q.reason;
  } else {
    normalText.classList.remove("hidden");
    arContainer.classList.add("hidden");
    normalText.textContent = q.text;
  }

  // Clear selections & container
  quiz.selectedAnswers = [];
  const optionsList = document.getElementById("options-list");
  optionsList.innerHTML = "";

  // Render option items
  q.shuffledOptions.forEach((optText, index) => {
    const item = document.createElement("div");
    item.className = "option-item";
    if (q.type === "multiple") item.classList.add("multi-select");
    item.setAttribute("id", `option-${index}`);
    item.onclick = () => selectOption(index);

    item.innerHTML = `
      <div class="option-selector">
        <div class="option-selector-inner"></div>
      </div>
      <span class="option-text">${optText}</span>
    `;
    optionsList.appendChild(item);
  });

  // Reset action buttons and explanation box
  document.getElementById("explanation-container").classList.add("hidden");
  document.getElementById("btn-submit-answer").classList.remove("hidden");
  document.getElementById("btn-next-question").classList.add("hidden");
}

// Handle Option Selection Click
function selectOption(index) {
  // Prevent selection changes if answer is already submitted
  if (document.getElementById("btn-submit-answer").classList.contains("hidden")) return;

  const quiz = state.activeQuiz;
  const q = quiz.questions[quiz.currentIndex];

  if (q.type === "single" || q.type === "assertion-reason") {
    // Select only one
    quiz.selectedAnswers = [index];
    document.querySelectorAll(".option-item").forEach(item => item.classList.remove("selected"));
    document.getElementById(`option-${index}`).classList.add("selected");
  } else {
    // Multi-select: toggle option
    const pos = quiz.selectedAnswers.indexOf(index);
    if (pos > -1) {
      quiz.selectedAnswers.splice(pos, 1);
      document.getElementById(`option-${index}`).classList.remove("selected");
    } else {
      quiz.selectedAnswers.push(index);
      document.getElementById(`option-${index}`).classList.add("selected");
    }
  }
}

// Evaluate & Grade Current Question
function submitAnswer() {
  const quiz = state.activeQuiz;
  const q = quiz.questions[quiz.currentIndex];

  if (quiz.selectedAnswers.length === 0) {
    alert("Please select at least one option before submitting.");
    return;
  }

  // Grade answer
  let isCorrect = false;

  if (q.type === "single" || q.type === "assertion-reason") {
    isCorrect = (quiz.selectedAnswers[0] === q.mappedCorrect);
  } else {
    // Multi-select checks: selected answers match correct answers perfectly
    const correctAnswers = q.mappedCorrect;
    const selected = quiz.selectedAnswers;

    if (correctAnswers.length === selected.length) {
      isCorrect = correctAnswers.every(val => selected.includes(val));
    }
  }

  // Increment correct count if grade is positive
  if (isCorrect) {
    quiz.correctCount++;
  }

  // Highlight options in DOM
  const correctIndices = (q.type === "single" || q.type === "assertion-reason") ? [q.mappedCorrect] : q.mappedCorrect;
  
  q.shuffledOptions.forEach((_, index) => {
    const item = document.getElementById(`option-${index}`);
    item.classList.remove("selected");

    const isSelected = quiz.selectedAnswers.includes(index);
    const isAnsCorrect = correctIndices.includes(index);

    if (isAnsCorrect) {
      item.classList.add("graded-correct");
    } else if (isSelected && !isAnsCorrect) {
      item.classList.add("graded-incorrect");
    }
  });

  // Reveal Explanation
  document.getElementById("explanation-text-content").textContent = q.explanation || "No further details needed.";
  document.getElementById("explanation-container").classList.remove("hidden");

  // Show Next Question action, hide submit
  document.getElementById("btn-submit-answer").classList.add("hidden");
  
  const nextBtn = document.getElementById("btn-next-question");
  nextBtn.classList.remove("hidden");
  if (quiz.currentIndex === quiz.questions.length - 1) {
    nextBtn.textContent = "Finish Quiz & See Results";
  } else {
    nextBtn.innerHTML = `Next Question <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
  }
}

// Proceed to Next Question
function nextQuestion() {
  const quiz = state.activeQuiz;
  if (quiz.currentIndex < quiz.questions.length - 1) {
    quiz.currentIndex++;
    loadQuestion();
  } else {
    finishQuiz();
  }
}

// Complete Quiz Session and Calculate/Store Results
function finishQuiz() {
  const quiz = state.activeQuiz;
  const chapter = state.activeChapter;
  const totalQuestions = quiz.questions.length;
  const pct = Math.round((quiz.correctCount / totalQuestions) * 100);

  const prevRecord = state.currentStudent.achievements[chapter.id];
  const prevAttempts = prevRecord ? prevRecord.attempts : 0;
  const prevHighScore = prevRecord ? prevRecord.percent : 0;

  // Compile new attempt record
  const currentRecord = {
    score: Math.max(prevRecord ? prevRecord.score : 0, quiz.correctCount),
    percent: Math.max(prevHighScore, pct),
    total: totalQuestions,
    date: new Date().toLocaleDateString("en-GB"),
    attempts: prevAttempts + 1
  };

  // Force actual score overwrite if percentage is higher
  if (pct > prevHighScore) {
    currentRecord.score = quiz.correctCount;
    currentRecord.percent = pct;
    currentRecord.date = new Date().toLocaleDateString("en-GB");
  }

  // Update achievements object
  state.currentStudent.achievements[chapter.id] = currentRecord;
  saveToStorage();

  // Draw Result screen elements
  document.getElementById("results-summary-text").textContent = `You scored ${pct}% in ${chapter.title}.`;
  document.getElementById("results-score-ratio").textContent = `${quiz.correctCount} / ${totalQuestions}`;
  document.getElementById("results-percentage").textContent = `${pct}%`;
  
  const mastery = calculateMasteryLevel(pct);
  document.getElementById("results-mastery-title").textContent = mastery.title;

  const resultFrame = document.getElementById("results-icon-frame");
  const feedbackCard = document.getElementById("results-feedback-card");
  const actionBtn = document.getElementById("btn-results-action");
  const certBtn = document.getElementById("btn-results-cert");

  if (pct >= 90) {
    // MASTERY REACHED
    resultFrame.className = "results-icon-container results-icon-success";
    resultFrame.innerHTML = `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"></path><path d="M12 2a6 6 0 0 1 6 6v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"></path></svg>`;
    
    document.getElementById("results-headline").textContent = "Mastery Achieved!";
    feedbackCard.className = "glass-card feedback-warning-card success-banner";
    document.getElementById("results-feedback-message").innerHTML = `🎉 Outstanding! You have reached <strong>Mastery Level (Level 3)</strong> in this unit. Your official chemistry certificate has been issued.`;
    
    actionBtn.textContent = "Retake for Practice";
    certBtn.classList.remove("hidden");
  } else {
    // MASTERY NOT REACHED
    resultFrame.className = "results-icon-container results-icon-failure";
    resultFrame.innerHTML = `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

    document.getElementById("results-headline").textContent = "Practice Needed";
    feedbackCard.className = "glass-card feedback-warning-card";
    document.getElementById("results-feedback-message").innerHTML = `⚠️ Mastery requires a score of at least <strong>90%</strong>. You scored <strong>${pct}%</strong> on this attempt. You must retake this quiz and achieve mastery to unlock your certificate.`;

    actionBtn.textContent = "Retake Quiz Now";
    certBtn.classList.add("hidden");
  }

  renderDashboard();
  switchScreen("screen-results");
}

// Restart Active Chapter Quiz
function restartChapterQuiz() {
  if (state.activeChapter) {
    startQuiz(state.activeChapter.id);
  }
}

// Confirm mid-quiz exits
function confirmExitQuiz() {
  if (confirm("Are you sure you want to exit the quiz? All progress for this attempt will be lost.")) {
    renderDashboard();
    switchScreen("screen-dashboard");
  }
}

// View Certificate in Modal
function viewActiveCertificate() {
  if (state.activeChapter) {
    viewCertificate(state.activeChapter.id);
  }
}

// Render dynamic certificate elements
function viewCertificate(chapterId) {
  if (!state.currentStudent) return;
  const chapter = CHEMISTRY_QUIZ_DATA.find(c => c.id === chapterId);
  const record = state.currentStudent.achievements[chapterId];
  if (!chapter || !record || record.percent < 90) return;

  // Bind values to printable DOM area
  document.getElementById("cert-student-name").textContent = state.currentStudent.name;
  document.getElementById("cert-chapter-name").textContent = chapter.title;
  document.getElementById("cert-score-val").textContent = `${record.percent}%`;
  document.getElementById("cert-date-string").textContent = record.date || new Date().toLocaleDateString("en-GB");
  
  // Create static clean hashes for certificate ID
  const hash = Math.abs(state.currentStudent.name.hashCode() + chapterId.hashCode()).toString(16).toUpperCase();
  document.getElementById("cert-unique-id").textContent = `CREDENTIAL-ID: NCERT-${chapterId.substring(0,3).toUpperCase()}-${hash}`;

  // Toggle modal overlay visibility
  document.getElementById("certificate-modal").classList.remove("hidden");
}

// Simple String hashing for IDs
String.prototype.hashCode = function() {
  let hash = 0;
  for (let i = 0; i < this.length; i++) {
    hash = this.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
};

// Close Certificate view overlay
function closeCertificateModal(event) {
  document.getElementById("certificate-modal").classList.add("hidden");
}

// Route back to Dashboard from Portal menus
function goToPortalHome() {
  if (state.currentStudent) {
    renderDashboard();
    switchScreen("screen-dashboard");
  } else {
    switchScreen("screen-auth");
  }
}

/* -------------------------------------------------------------
   TEACHER PANEL CONTROLLERS
   Access tracking lists, render progress, search, and export logs.
   ------------------------------------------------------------- */

// Render Admin tracking table
function renderTeacherTable() {
  const searchVal = document.getElementById("teacher-search-input").value.toLowerCase();
  const tableBody = document.getElementById("teacher-table-body");
  tableBody.innerHTML = "";

  const filteredStudents = state.allStudents.filter(s => s.name.toLowerCase().includes(searchVal));

  if (filteredStudents.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--text-muted);">No student records found.</td></tr>`;
    return;
  }

  filteredStudents.forEach(student => {
    // Calculate overall progress fraction
    let masteredCount = 0;
    CHEMISTRY_QUIZ_DATA.forEach(ch => {
      const rec = student.achievements[ch.id];
      if (rec && rec.percent >= 90) masteredCount++;
    });

    const tr = document.createElement("tr");

    // Build row components
    let chaptersHTML = "";
    CHEMISTRY_QUIZ_DATA.forEach(ch => {
      const rec = student.achievements[ch.id];
      if (rec) {
        const isMaster = rec.percent >= 90;
        chaptersHTML += `<td>
          <span class="score-badge ${isMaster ? 'passed' : 'failed'}">
            ${rec.percent}% (${rec.attempts} att)
          </span>
        </td>`;
      } else {
        chaptersHTML += `<td><span class="score-badge none">Not Taken</span></td>`;
      }
    });

    tr.innerHTML = `
      <td class="student-name-cell">${student.name}</td>
      <td><strong>${masteredCount} / 5</strong> Mastered</td>
      ${chaptersHTML}
      <td>
        <button class="btn btn-danger btn-sm" style="padding: 0.25rem 0.6rem; font-size:0.75rem;" onclick="deleteStudentAdmin('${student.name}')">
          Delete
        </button>
      </td>
    `;
    tableBody.appendChild(tr);
  });
}

// Delete student record
function deleteStudentAdmin(name) {
  if (confirm(`Are you sure you want to delete all records for ${name}?`)) {
    state.allStudents = state.allStudents.filter(s => s.name.toLowerCase() !== name.toLowerCase());
    saveToStorage();
    
    // If the teacher deleted the active session student
    if (state.currentStudent && state.currentStudent.name.toLowerCase() === name.toLowerCase()) {
      state.currentStudent = null;
      sessionStorage.removeItem("chem_portal_active_student");
    }

    renderTeacherTable();
  }
}

// Export student analytics sheet (CSV)
function exportStudentDataCSV() {
  if (state.allStudents.length === 0) {
    alert("No student data available to export.");
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Student Name,Mastered Units Count,Total Attempts,Solutions (%),Electrochemistry (%),Chemical Kinetics (%),d and f Block (%),Coordination Compounds (%)\n";

  state.allStudents.forEach(s => {
    let mastered = 0;
    let attempts = 0;
    
    const chaptersPct = CHEMISTRY_QUIZ_DATA.map(ch => {
      const rec = s.achievements[ch.id];
      if (rec) {
        attempts += rec.attempts || 0;
        if (rec.percent >= 90) mastered++;
        return `${rec.percent}% (${rec.attempts} attempts)`;
      }
      return "0%";
    });

    const row = [
      `"${s.name}"`,
      mastered,
      attempts,
      ...chaptersPct.map(pct => `"${pct}"`)
    ].join(",");

    csvContent += row + "\n";
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Chemistry_Student_Mastery_Report_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Trigger input click for JSON imports
function triggerImportJSON() {
  document.getElementById("import-json-file").click();
}

// Import JSON student records
function importStudentDataJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (Array.isArray(imported)) {
        // Simple structure validation
        const isValid = imported.every(s => typeof s.name === 'string' && typeof s.achievements === 'object');
        
        if (isValid) {
          // Merge imported students
          imported.forEach(imp => {
            const idx = state.allStudents.findIndex(s => s.name.toLowerCase() === imp.name.toLowerCase());
            if (idx > -1) {
              // Merge achievements
              state.allStudents[idx].achievements = { ...state.allStudents[idx].achievements, ...imp.achievements };
            } else {
              state.allStudents.push(imp);
            }
          });

          saveToStorage();
          renderTeacherTable();
          alert("Student records imported successfully!");
        } else {
          alert("Invalid backup data format. Please verify the file.");
        }
      } else {
        alert("Backup file structure is invalid. Root must be a JSON array.");
      }
    } catch (err) {
      alert("Failed to read files. Please ensure you uploaded a valid JSON backup report.");
      console.error(err);
    }
  };
  reader.readAsText(file);
  // Reset file target value
  event.target.value = "";
}

// Reset entire portal storage logs
function resetAllPortalData() {
  if (confirm("⚠️ WARNING: This will permanently delete all student registrations, scores, and certificates. This action cannot be undone. Proceed?")) {
    localStorage.removeItem("chem_portal_students");
    sessionStorage.removeItem("chem_portal_active_student");
    state.allStudents = [];
    state.currentStudent = null;
    alert("System database reset complete.");
    location.reload();
  }
}


