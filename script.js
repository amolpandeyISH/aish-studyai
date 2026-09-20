const STORAGE_KEY = 'studyai-v1';
const LEARNING_TOPICS = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    explanation: 'AI is the field of making machines perform tasks that usually require human intelligence such as reasoning, language understanding, and decision making.',
    concepts: ['Machine reasoning', 'Pattern recognition', 'Decision systems'],
    examples: ['Smart assistants', 'Spam filters', 'Recommendation systems'],
    revision: ['AI learns from data and rules', 'It is broader than ML', 'It powers many modern apps'],
    questions: ['What is AI?', 'How is AI different from simple automation?', 'Name one real-life AI use case.']
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    explanation: 'Machine Learning focuses on systems that learn patterns from data instead of being programmed with every rule explicitly.',
    concepts: ['Training data', 'Features', 'Model prediction'],
    examples: ['Email spam detection', 'Forecasting sales', 'Face recognition'],
    revision: ['Models improve with more data', 'Algorithms find patterns', 'Validation prevents overfitting'],
    questions: ['What is a model?', 'Why is data important in ML?', 'What is overfitting?']
  },
  {
    id: 'genai',
    title: 'Generative AI',
    explanation: 'Generative AI creates content such as text, images, audio, or code by learning patterns from large datasets.',
    concepts: ['Generative models', 'Tokens', 'Prompting'],
    examples: ['Chatbots', 'Image generation', 'Code assistants'],
    revision: ['Prompt quality matters', 'Models generate probabilities not certainty', 'Human review is valuable'],
    questions: ['What makes generative AI different from predictive AI?', 'How does prompting help?', 'What is one limitation of generative AI?']
  },
  {
    id: 'vision',
    title: 'Computer Vision',
    explanation: 'Computer vision allows computers to interpret visual information such as images and video.',
    concepts: ['Image segmentation', 'Feature extraction', 'Object detection'],
    examples: ['Self-driving cars', 'Face unlock', 'Medical imaging'],
    revision: ['Vision models analyze pixels', 'Data labeling improves accuracy', 'Vision is an input to decision systems'],
    questions: ['What is object detection?', 'Why is computer vision useful in medicine?', 'What does image segmentation do?']
  },
  {
    id: 'nlp',
    title: 'NLP',
    explanation: 'Natural Language Processing helps machines understand, generate, and interact using human languages.',
    concepts: ['Tokenization', 'Sentiment', 'Embeddings'],
    examples: ['Translation apps', 'Voice assistants', 'Text summarizers'],
    revision: ['Language is ambiguous and context-heavy', 'Models need lots of examples', 'NLP can support search and writing tools'],
    questions: ['What is tokenization?', 'How is NLP used in search?', 'Why is context important in language models?']
  },
  {
    id: 'daily',
    title: 'AI in Daily Life',
    explanation: 'AI is increasingly used in daily tools like smart home devices, email, navigation, and personalized education.',
    concepts: ['Personalization', 'Automation', 'Context-aware recommendations'],
    examples: ['Smart calendars', 'Map navigation', 'Content suggestions'],
    revision: ['AI often works behind the scenes', 'Personalization saves time', 'It should be used responsibly'],
    questions: ['Where do you see AI in your daily routine?', 'How can AI improve learning?', 'What are the privacy concerns?']
  },
  {
    id: 'ethics',
    title: 'AI Safety & Ethics',
    explanation: 'AI safety and ethics ensure that systems are fair, transparent, accountable, and respectful of human well-being.',
    concepts: ['Bias', 'Fairness', 'Transparency'],
    examples: ['Bias checks in hiring tools', 'Content moderation', 'Explainable recommendations'],
    revision: ['AI can reflect human bias', 'Responsible design matters', 'Humans remain accountable'],
    questions: ['Why is bias a concern in AI?', 'What does transparency mean?', 'How can we build safer AI systems?']
  }
];

const QUIZ_BANK = {
  Science: {
    Easy: [
      { question: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Venus', 'Jupiter'], answer: 'Mars' },
      { question: 'What gas do plants absorb from the air?', options: ['Oxygen', 'Carbon dioxide', 'Helium', 'Hydrogen'], answer: 'Carbon dioxide' },
      { question: 'Which part of the plant makes food?', options: ['Root', 'Leaf', 'Stem', 'Flower'], answer: 'Leaf' },
      { question: 'What force keeps us on the ground?', options: ['Magnetism', 'Gravity', 'Friction', 'Lift'], answer: 'Gravity' },
      { question: 'Which organ pumps blood?', options: ['Lungs', 'Brain', 'Heart', 'Liver'], answer: 'Heart' }
    ],
    Medium: [
      { question: 'What is the chemical symbol for gold?', options: ['Ag', 'Au', 'Go', 'Gd'], answer: 'Au' },
      { question: 'Which process converts liquid water into vapor?', options: ['Condensation', 'Evaporation', 'Freezing', 'Melting'], answer: 'Evaporation' },
      { question: 'Which blood cells help fight infection?', options: ['Red blood cells', 'Platelets', 'White blood cells', 'Plasma'], answer: 'White blood cells' },
      { question: 'What is the boiling point of water at sea level?', options: ['90°C', '100°C', '110°C', '120°C'], answer: '100°C' },
      { question: 'Which organ filters blood in the body?', options: ['Kidney', 'Stomach', 'Lung', 'Small intestine'], answer: 'Kidney' }
    ],
    Hard: [
      { question: 'Which law states every action has an equal and opposite reaction?', options: ['Newton’s first law', 'Newton’s second law', 'Newton’s third law', 'Law of gravitation'], answer: 'Newton’s third law' },
      { question: 'What is the pH of a neutral solution?', options: ['1', '5', '7', '10'], answer: '7' },
      { question: 'Which vitamin is produced by sunlight on the skin?', options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin K'], answer: 'Vitamin D' },
      { question: 'Which gas is most abundant in Earth’s atmosphere?', options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Argon'], answer: 'Nitrogen' },
      { question: 'Which type of rock is formed by heat and pressure?', options: ['Igneous', 'Sedimentary', 'Metamorphic', 'Volcanic'], answer: 'Metamorphic' }
    ]
  },
  Maths: {
    Easy: [
      { question: 'What is 7 × 8?', options: ['54', '56', '64', '72'], answer: '56' },
      { question: 'What is 25% of 80?', options: ['15', '20', '25', '30'], answer: '20' },
      { question: 'Simplify 12/4', options: ['2', '3', '4', '6'], answer: '3' },
      { question: 'Which is the smallest prime number?', options: ['0', '1', '2', '3'], answer: '2' },
      { question: 'What is 9 + 6?', options: ['12', '13', '14', '15'], answer: '15' }
    ],
    Medium: [
      { question: 'What is the square root of 144?', options: ['10', '11', '12', '13'], answer: '12' },
      { question: 'Solve: 3x = 18', options: ['4', '5', '6', '7'], answer: '6' },
      { question: 'What is the perimeter of a square with side 5?', options: ['10', '15', '20', '25'], answer: '20' },
      { question: 'Find the median of 4, 7, 5, 9, 8', options: ['4', '5', '7', '8'], answer: '7' },
      { question: 'What is 15% of 200?', options: ['20', '25', '30', '35'], answer: '30' }
    ],
    Hard: [
      { question: 'What is the value of 2^6?', options: ['12', '32', '48', '64'], answer: '64' },
      { question: 'Simplify: (3 + 2)^2 - 5', options: ['15', '20', '25', '30'], answer: '20' },
      { question: 'What is the area of a triangle with base 10 and height 8?', options: ['20', '40', '80', '160'], answer: '40' },
      { question: 'Solve: x² = 49', options: ['6', '7', '-7 or 7', '9'], answer: '-7 or 7' },
      { question: 'If a = 3 and b = 4, what is a² + b²?', options: ['12', '24', '25', '49'], answer: '25' }
    ]
  },
  'Computer/AI': {
    Easy: [
      { question: 'What does CPU stand for?', options: ['Central Processing Unit', 'Computer Power Utility', 'Central Program Unit', 'Control Processing Utility'], answer: 'Central Processing Unit' },
      { question: 'Which language is used to style a webpage?', options: ['HTML', 'CSS', 'JavaScript', 'Python'], answer: 'CSS' },
      { question: 'What does AI stand for?', options: ['Advanced Interface', 'Artificial Intelligence', 'Automatic Input', 'Audio Intelligence'], answer: 'Artificial Intelligence' },
      { question: 'Which of these is a programming language?', options: ['Monitor', 'Keyboard', 'Python', 'Router'], answer: 'Python' },
      { question: 'What is a loop in programming?', options: ['A repeated action', 'A file name', 'A math symbol', 'A program menu'], answer: 'A repeated action' }
    ],
    Medium: [
      { question: 'What is the purpose of a variable in programming?', options: ['To store data', 'To print text', 'To delete a file', 'To build a browser'], answer: 'To store data' },
      { question: 'What does HTML describe?', options: ['Content structure', 'Page styling', 'Database logic', 'Security'], answer: 'Content structure' },
      { question: 'Which algorithm is commonly used in machine learning?', options: ['Greedy sort', 'Gradient descent', 'Binary search', 'Queue sort'], answer: 'Gradient descent' },
      { question: 'What is an array?', options: ['A list of values', 'A file format', 'A network cable', 'A browser tab'], answer: 'A list of values' },
      { question: 'What is a model in AI?', options: ['A pattern learned from data', 'A printer driver', 'A computer case', 'An operating system'], answer: 'A pattern learned from data' }
    ],
    Hard: [
      { question: 'Which data structure uses FIFO order?', options: ['Stack', 'Queue', 'Tree', 'Graph'], answer: 'Queue' },
      { question: 'What is overfitting in ML?', options: ['Model learns noise instead of patterns', 'Model becomes too small', 'Model is too fast', 'Model lacks data'], answer: 'Model learns noise instead of patterns' },
      { question: 'Which metric is often used to evaluate binary classification?', options: ['Median', 'Accuracy', 'Range', 'Variance'], answer: 'Accuracy' },
      { question: 'What is the role of a neural network?', options: ['To mimic learning in brains', 'To encrypt files', 'To create websites', 'To reduce colors'], answer: 'To mimic learning in brains' },
      { question: 'Which of these is a common activation function?', options: ['SIGMA', 'ReLU', 'LOGO', 'HTML'], answer: 'ReLU' }
    ]
  }
};

const GAME_DEFS = [
  {
    id: 'quiz-battle',
    title: 'Quiz Battle',
    description: 'Answer rapid-fire questions to beat your score.',
    instructions: 'Choose the correct answer before time runs out.'
  },
  {
    id: 'number-challenge',
    title: 'Number Challenge',
    description: 'Reach the target number with quick arithmetic choices.',
    instructions: 'Match the target by selecting the right number action.'
  },
  {
    id: 'memory-match',
    title: 'Memory Match',
    description: 'Flip cards and match pairs before all cards are used.',
    instructions: 'Find all matching pairs to boost your score.'
  },
  {
    id: 'reaction-challenge',
    title: 'Reaction Challenge',
    description: 'Test how fast you can react to a visual signal.',
    instructions: 'Wait for the signal, then click as fast as possible.'
  },
  {
    id: 'guess-the-ai',
    title: 'Guess the AI',
    description: 'Identify the AI concept from a clue.',
    instructions: 'Read the clue and choose the correct AI concept.'
  }
];

const defaultState = () => ({
  profile: {
    name: 'Student',
    className: '',
    roll: '',
    school: '',
    totalPoints: 0,
    achievements: ['Starter']
  },
  tasks: [],
  notes: [],
  goals: [],
  focusSessions: [],
  quizAttempts: [],
  gameScores: [],
  analytics: {
    focusMinutesToday: 0,
    completedTasks: 0,
    gamesPlayed: 0,
    studyDays: []
  },
  settings: {
    theme: 'light',
    notifications: true,
    leaderboardRegistered: false
  }
});

let state = null;
let focusTimer = {
  active: false,
  intervalId: null,
  mode: 'pomodoro',
  durationSeconds: 25 * 60,
  remainingSeconds: 25 * 60,
  startedAt: null,
  previousRemaining: 25 * 60
};

let quizState = {
  active: false,
  questions: [],
  currentIndex: 0,
  selectedAnswers: [],
  timer: 60,
  intervalId: null,
  startTime: null
};

let currentGame = null;

function generateId(prefix = 'id') {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

function getState() {
  if (!state) {
    const saved = localStorage.getItem(STORAGE_KEY);
    state = saved ? JSON.parse(saved) : defaultState();
  }
  return state;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function updateProfilePoints(amount) {
  const next = Number(state.profile.totalPoints || 0) + Number(amount || 0);
  state.profile.totalPoints = Math.max(0, next);
  state.profile.achievements = computeAchievements();
}

function computeAchievements() {
  const points = Number(state.profile.totalPoints || 0);
  const tasks = state.tasks.length;
  const badges = ['Starter'];

  if (points >= 50) badges.push('Focused Learner');
  if (points >= 150) badges.push('Study Streak');
  if (tasks >= 5) badges.push('Planner Pro');
  if (state.quizAttempts.length >= 2) badges.push('Quiz Explorer');
  if (state.focusSessions.length >= 1) badges.push('Deep Focus');

  return badges;
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove('hidden');
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => toast.classList.add('hidden'), 2200);
}

function applyTheme() {
  const theme = state.settings.theme || 'light';
  document.body.classList.toggle('dark', theme === 'dark');
  const toggleLight = document.getElementById('toggle-light-mode');
  const toggleDark = document.getElementById('toggle-dark-mode');
  if (toggleLight) toggleLight.checked = theme === 'light';
  if (toggleDark) toggleDark.checked = theme === 'dark';
}

function navigateTo(viewName) {
  document.querySelectorAll('.view').forEach((view) => {
    view.classList.toggle('hidden', view.id !== `${viewName}-view`);
  });

  document.querySelectorAll('.nav-item').forEach((item) => {
    item.classList.toggle('active', item.dataset.nav === viewName);
  });

  const titles = {
    dashboard: 'Dashboard',
    learning: 'AI Learning Hub',
    planner: 'Smart Study Planner',
    focus: 'Focus Zone',
    quiz: 'AI Quiz Arena',
    games: 'AI Game Zone',
    notes: 'Smart Notes',
    goals: 'Goals',
    analytics: 'Analytics',
    profile: 'Profile',
    leaderboard: 'Global Leaderboard',
    settings: 'Settings'
  };

  document.getElementById('page-title').textContent = titles[viewName] || 'Dashboard';
}

function renderDashboard() {
  const totalTasks = state.tasks.length;
  const completedTasks = state.tasks.filter((task) => task.completed).length;
  const completionPct = totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const todayTasks = state.tasks.filter((task) => {
    if (!task.dueDate) return false;
    return task.dueDate === new Date().toISOString().slice(0, 10);
  }).length;

  const quizAttempts = state.quizAttempts.length ? state.quizAttempts : [];
  const quizAccuracy = quizAttempts.length
    ? Math.round((quizAttempts.reduce((sum, attempt) => sum + Number(attempt.accuracy || 0), 0) / quizAttempts.length))
    : 0;

  const focusMinutesToday = getTodayFocusMinutes();
  const streak = getCurrentStreak();

  document.getElementById('welcome-name').textContent = state.profile.name || 'Student';
  document.getElementById('today-task-count').textContent = `${todayTasks} tasks`;
  document.getElementById('points-pill').textContent = `${state.profile.totalPoints} pts`;

  const stats = [
    { label: 'Study completion', value: `${completionPct}%` },
    { label: 'Current streak', value: `${streak} days` },
    { label: 'Quiz accuracy', value: `${quizAccuracy}%` },
    { label: 'Total focus time', value: `${focusMinutesToday} min` },
    { label: 'Total points', value: `${state.profile.totalPoints}` },
    { label: 'Today tasks', value: `${todayTasks}` }
  ];

  const dashboardStats = document.getElementById('dashboard-stats');
  dashboardStats.innerHTML = stats.map((stat) => `
    <div class="stat-card card">
      <span>${stat.label}</span>
      <strong>${stat.value}</strong>
    </div>
  `).join('');
}

function renderLearning() {
  const categoriesWrap = document.getElementById('learning-categories');
  const contentWrap = document.getElementById('learning-content');

  categoriesWrap.innerHTML = LEARNING_TOPICS.map((topic, index) => `
    <button class="category-button ${index === 0 ? 'active' : ''}" data-topic="${topic.id}">${topic.title}</button>
  `).join('');

  const renderTopic = (topicId) => {
    const topic = LEARNING_TOPICS.find((entry) => entry.id === topicId) || LEARNING_TOPICS[0];
    contentWrap.innerHTML = `
      <h4>${topic.title}</h4>
      <p>${topic.explanation}</p>

      <div class="learning-section">
        <h5>Key concepts</h5>
        <ul>${topic.concepts.map((concept) => `<li>${concept}</li>`).join('')}</ul>
      </div>

      <div class="learning-section">
        <h5>Examples</h5>
        <ul>${topic.examples.map((example) => `<li>${example}</li>`).join('')}</ul>
      </div>

      <div class="learning-section">
        <h5>Quick revision</h5>
        <ul>${topic.revision.map((point) => `<li>${point}</li>`).join('')}</ul>
      </div>

      <div class="learning-section">
        <h5>Practice questions</h5>
        <ul>${topic.questions.map((question) => `<li>${question}</li>`).join('')}</ul>
      </div>
    `;
  };

  renderTopic(LEARNING_TOPICS[0].id);

  categoriesWrap.querySelectorAll('.category-button').forEach((button) => {
    button.addEventListener('click', () => {
      categoriesWrap.querySelectorAll('.category-button').forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      renderTopic(button.dataset.topic);
    });
  });
}

function getSafeDate(value) {
  if (!value) return '';
  return new Date(value).toISOString().slice(0, 10);
}

function renderPlanner() {
  const taskList = document.getElementById('task-list');
  const taskSearch = document.getElementById('task-search');
  const taskFilter = document.getElementById('task-filter');
  const plannerSummary = document.getElementById('planner-summary');

  const query = (taskSearch.value || '').trim().toLowerCase();
  const filter = taskFilter.value || 'all';

  let filteredTasks = [...state.tasks];
  if (query) {
    filteredTasks = filteredTasks.filter((task) => `${task.title} ${task.subject}`.toLowerCase().includes(query));
  }
  if (filter === 'active') {
    filteredTasks = filteredTasks.filter((task) => !task.completed);
  }
  if (filter === 'completed') {
    filteredTasks = filteredTasks.filter((task) => task.completed);
  }

  const total = state.tasks.length;
  const completed = state.tasks.filter((task) => task.completed).length;
  const percent = total ? Math.round((completed / total) * 100) : 0;

  plannerSummary.innerHTML = `
    <div class="summary-pill"><div><span>Completed</span><strong>${completed}/${total}</strong></div></div>
    <div class="summary-pill"><div><span>Completion</span><strong>${percent}%</strong></div></div>
  `;

  if (!filteredTasks.length) {
    taskList.innerHTML = '<div class="note-item"><div class="note-main"><div class="note-title">No tasks yet</div><div class="note-meta">Add a task to get started.</div></div></div>';
    return;
  }

  taskList.innerHTML = filteredTasks.map((task) => `
    <div class="task-item ${task.completed ? 'completed' : ''}">
      <div class="task-main">
        <div class="task-title">${task.title}</div>
        <div class="task-meta">${task.subject} · ${task.priority} · ${task.dueDate || 'No due date'}</div>
      </div>
      <div class="task-actions">
        <button class="${task.completed ? 'secondary-button' : 'primary-button'}" data-action="toggle-task" data-id="${task.id}">${task.completed ? 'Undo' : 'Done'}</button>
        <button class="ghost-button" data-action="edit-task" data-id="${task.id}">Edit</button>
        <button class="danger-button" data-action="delete-task" data-id="${task.id}">Delete</button>
      </div>
    </div>
  `).join('');

  taskList.querySelectorAll('[data-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.id;
      const action = button.dataset.action;
      if (action === 'toggle-task') toggleTask(id);
      if (action === 'edit-task') editTask(id);
      if (action === 'delete-task') deleteTask(id);
    });
  });
}

function toggleTask(taskId) {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task) return;
  task.completed = !task.completed;
  task.completedAt = task.completed ? new Date().toISOString() : null;
  saveState();
  renderAll();
}

function editTask(taskId) {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task) return;

  document.getElementById('task-title').value = task.title;
  document.getElementById('task-subject').value = task.subject;
  document.getElementById('task-priority').value = task.priority;
  document.getElementById('task-dueDate').value = task.dueDate || '';

  const form = document.getElementById('planner-form');
  form.dataset.editingId = taskId;
  form.querySelector('button[type="submit"]').textContent = 'Update task';
  navigateTo('planner');
}

function deleteTask(taskId) {
  const confirmed = window.confirm('Delete this task?');
  if (!confirmed) return;
  state.tasks = state.tasks.filter((task) => task.id !== taskId);
  saveState();
  renderAll();
}

function handleTaskSubmit(event) {
  event.preventDefault();
  const title = document.getElementById('task-title').value.trim();
  const subject = document.getElementById('task-subject').value.trim();
  const priority = document.getElementById('task-priority').value;
  const dueDate = document.getElementById('task-dueDate').value;

  if (!title || !subject) return;

  const form = event.currentTarget;
  const editingId = form.dataset.editingId;

  if (editingId) {
    const task = state.tasks.find((item) => item.id === editingId);
    if (task) {
      task.title = title;
      task.subject = subject;
      task.priority = priority;
      task.dueDate = dueDate;
    }
  } else {
    state.tasks.unshift({
      id: generateId('task'),
      title,
      subject,
      priority,
      dueDate,
      completed: false,
      createdAt: new Date().toISOString()
    });
  }

  form.reset();
  delete form.dataset.editingId;
  form.querySelector('button[type="submit"]').textContent = 'Add task';
  saveState();
  renderAll();
}

function renderNotes() {
  const noteList = document.getElementById('note-list');
  const query = document.getElementById('note-search').value.trim().toLowerCase();

  const filtered = state.notes.filter((note) => {
    if (!query) return true;
    return `${note.title} ${note.subject} ${note.content}`.toLowerCase().includes(query);
  });

  if (!filtered.length) {
    noteList.innerHTML = '<div class="note-item"><div class="note-main"><div class="note-title">No notes yet</div><div class="note-meta">Create a note to save your lesson summary.</div></div></div>';
    return;
  }

  noteList.innerHTML = filtered.map((note) => `
    <div class="note-item">
      <div class="note-main">
        <div class="note-title">${note.title}</div>
        <div class="note-meta">${note.subject}</div>
        <div class="note-content">${note.content || 'No content yet'}</div>
      </div>
      <div class="note-actions">
        <button data-note-action="edit-note" data-id="${note.id}">Edit</button>
        <button data-note-action="delete-note" data-id="${note.id}">Delete</button>
      </div>
    </div>
  `).join('');

  noteList.querySelectorAll('[data-note-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.id;
      const action = button.dataset.noteAction;
      if (action === 'edit-note') editNote(id);
      if (action === 'delete-note') deleteNote(id);
    });
  });
}

function editNote(noteId) {
  const note = state.notes.find((item) => item.id === noteId);
  if (!note) return;
  document.getElementById('note-title').value = note.title;
  document.getElementById('note-subject').value = note.subject;
  document.getElementById('note-content').value = note.content;
  const form = document.getElementById('note-form');
  form.dataset.editingId = noteId;
  form.querySelector('button[type="submit"]').textContent = 'Update note';
  navigateTo('notes');
}

function deleteNote(noteId) {
  const confirmed = window.confirm('Delete this note?');
  if (!confirmed) return;
  state.notes = state.notes.filter((note) => note.id !== noteId);
  saveState();
  renderAll();
}

function handleNoteSubmit(event) {
  event.preventDefault();
  const title = document.getElementById('note-title').value.trim();
  const subject = document.getElementById('note-subject').value.trim();
  const content = document.getElementById('note-content').value.trim();
  if (!title || !subject) return;

  const form = event.currentTarget;
  const editingId = form.dataset.editingId;

  if (editingId) {
    const note = state.notes.find((item) => item.id === editingId);
    if (note) {
      note.title = title;
      note.subject = subject;
      note.content = content;
      note.updatedAt = new Date().toISOString();
    }
  } else {
    state.notes.unshift({
      id: generateId('note'),
      title,
      subject,
      content,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
  }

  form.reset();
  delete form.dataset.editingId;
  form.querySelector('button[type="submit"]').textContent = 'Save note';
  saveState();
  renderAll();
}

function renderGoals() {
  const goalList = document.getElementById('goal-list');

  if (!state.goals.length) {
    goalList.innerHTML = '<div class="goal-item"><div class="goal-main"><div class="goal-title">No goals yet</div><div class="goal-meta">Set a daily or weekly goal to track progress.</div></div></div>';
    return;
  }

  goalList.innerHTML = state.goals.map((goal) => `
    <div class="goal-item ${goal.completed ? 'completed' : ''}">
      <div class="goal-main">
        <div class="goal-title">${goal.title}</div>
        <div class="goal-meta">${goal.type} • Target: ${goal.target}</div>
        <div class="progress-bar"><span style="width: ${goal.completed ? 100 : 0}%"></span></div>
      </div>
      <div class="goal-actions">
        <button class="${goal.completed ? 'secondary-button' : 'primary-button'}" data-goal-action="toggle-goal" data-id="${goal.id}">${goal.completed ? 'Completed' : 'Complete goal'}</button>
        <button class="danger-button" data-goal-action="delete-goal" data-id="${goal.id}">Delete</button>
      </div>
    </div>
  `).join('');

  goalList.querySelectorAll('[data-goal-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.id;
      const action = button.dataset.goalAction;
      if (action === 'toggle-goal') toggleGoal(id);
      if (action === 'delete-goal') deleteGoal(id);
    });
  });
}

function toggleGoal(goalId) {
  const goal = state.goals.find((item) => item.id === goalId);
  if (!goal) return;
  goal.completed = !goal.completed;
  if (goal.completed) {
    updateProfilePoints(15);
  }
  saveState();
  renderAll();
}

function deleteGoal(goalId) {
  const confirmed = window.confirm('Delete this goal?');
  if (!confirmed) return;
  state.goals = state.goals.filter((goal) => goal.id !== goalId);
  saveState();
  renderAll();
}

function handleGoalSubmit(event) {
  event.preventDefault();
  const title = document.getElementById('goal-title').value.trim();
  const type = document.getElementById('goal-type').value;
  const target = Number(document.getElementById('goal-target').value || 1);

  if (!title) return;

  state.goals.unshift({
    id: generateId('goal'),
    title,
    type,
    target,
    completed: false,
    createdAt: new Date().toISOString()
  });

  event.currentTarget.reset();
  saveState();
  renderAll();
}

function getTodayFocusMinutes() {
  const todayKey = new Date().toISOString().slice(0, 10);
  return state.focusSessions
    .filter((entry) => entry.dateKey === todayKey)
    .reduce((sum, entry) => sum + Number(entry.minutes || 0), 0);
}

function getCurrentStreak() {
  const dates = new Set(
    [
      ...state.focusSessions.map((entry) => entry.dateKey),
      ...state.quizAttempts.map((entry) => entry.dateKey),
      ...state.gameScores.map((entry) => entry.dateKey),
      ...state.tasks.filter((t) => t.completed && t.completedAt).map((t) => new Date(t.completedAt).toISOString().slice(0, 10))
    ].filter(Boolean)
  );

  const sorted = [...dates].sort().reverse();
  let streak = 0;
  let cursor = new Date();
  for (const date of sorted) {
    const dateValue = new Date(date + 'T00:00:00');
    if (dateValue.toISOString().slice(0, 10) === cursor.toISOString().slice(0, 10)) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    } else {
      break;
    }
  }
  return streak;
}

function renderAnalytics() {
  const analyticsGrid = document.getElementById('analytics-grid');

  const subjectStats = {};
  state.tasks.forEach((task) => {
    const subject = task.subject || 'General';
    if (!subjectStats[subject]) subjectStats[subject] = { total: 0, done: 0 };
    subjectStats[subject].total += 1;
    if (task.completed) subjectStats[subject].done += 1;
  });

  const subjectBars = Object.entries(subjectStats).map(([subject, amt]) => {
    const percent = amt.total ? Math.round((amt.done / amt.total) * 100) : 0;
    return `
      <div class="bar-row">
        <span>${subject}</span>
        <div class="bar-track"><span style="width:${percent}%"></span></div>
        <strong>${percent}%</strong>
      </div>
    `;
  }).join('') || '<p>No subject data yet.</p>';

  const quizAccuracy = state.quizAttempts.length
    ? Math.round(state.quizAttempts.reduce((sum, attempt) => sum + Number(attempt.accuracy || 0), 0) / state.quizAttempts.length)
    : 0;

  const focusMinutes = getTodayFocusMinutes();
  const weeklyValues = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - index));
    const key = date.toISOString().slice(0, 10);
    const total = state.focusSessions.filter((session) => session.dateKey === key).reduce((sum, session) => sum + Number(session.minutes || 0), 0);
    return { day: date.toLocaleDateString('en-US', { weekday: 'short' }), value: total };
  });

  const maxWeeklyValue = Math.max(...weeklyValues.map((item) => item.value), 1);

  analyticsGrid.innerHTML = `
    <div class="mini-card card">
      <span>Tasks completed</span>
      <strong>${state.tasks.filter((task) => task.completed).length}</strong>
    </div>
    <div class="mini-card card">
      <span>Quiz accuracy</span>
      <strong>${quizAccuracy}%</strong>
    </div>
    <div class="mini-card card">
      <span>Focus time</span>
      <strong>${focusMinutes}m</strong>
    </div>
    <div class="mini-card card">
      <span>Games played</span>
      <strong>${state.gameScores.length}</strong>
    </div>
    <div class="mini-card card wide-panel">
      <span>Subject-wise progress</span>
      <div class="bar-stack">${subjectBars}</div>
    </div>
    <div class="mini-card card wide-panel">
      <span>Weekly performance</span>
      <div class="weekly-chart">
        ${weeklyValues.map((point) => `
          <div class="day-bar">
            <div class="bar-col" style="height:${Math.max(18, (point.value / maxWeeklyValue) * 100)}%"></div>
            <small>${point.day}</small>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="mini-card card wide-panel">
      <span>Study activity</span>
      <div class="activity-list">
        <div class="activity-item"><span>Focus sessions</span><strong>${state.focusSessions.length}</strong></div>
        <div class="activity-item"><span>Quiz attempts</span><strong>${state.quizAttempts.length}</strong></div>
        <div class="activity-item"><span>Goals set</span><strong>${state.goals.length}</strong></div>
        <div class="activity-item"><span>Notes saved</span><strong>${state.notes.length}</strong></div>
      </div>
    </div>
  `;
}

function renderProfile() {
  const profileName = document.getElementById('profile-name');
  const profileClass = document.getElementById('profile-class');
  const profileRoll = document.getElementById('profile-roll');
  const profileSchool = document.getElementById('profile-school');
  const profileTotalPoints = document.getElementById('profile-total-points');
  const achievementList = document.getElementById('achievement-list');

  profileName.value = state.profile.name || '';
  profileClass.value = state.profile.className || '';
  profileRoll.value = state.profile.roll || '';
  profileSchool.value = state.profile.school || '';
  profileTotalPoints.textContent = state.profile.totalPoints || 0;

  achievementList.innerHTML = (state.profile.achievements || []).map((badge) => `<span class="achievement">${badge}</span>`).join('');
}

function handleProfileSubmit(event) {
  event.preventDefault();
  state.profile.name = document.getElementById('profile-name').value.trim() || 'Student';
  state.profile.className = document.getElementById('profile-class').value.trim();
  state.profile.roll = document.getElementById('profile-roll').value.trim();
  state.profile.school = document.getElementById('profile-school').value.trim();
  state.profile.achievements = computeAchievements();
  saveState();
  renderAll();
  showToast('Profile updated');
}

function renderLeaderboard() {
  const table = document.getElementById('leaderboard-table');
  const status = document.getElementById('leaderboard-status');

  const localStudent = {
    name: state.profile.name || 'Student',
    points: state.profile.totalPoints || 0,
    identity: 'Local learner'
  };

  const base = [
    { name: 'Ava', points: 210, identity: 'Rank 1' },
    { name: 'Leo', points: 180, identity: 'Rank 2' },
    { name: 'Riya', points: 150, identity: 'Rank 3' }
  ];

  if (!state.settings.leaderboardRegistered) {
    status.textContent = 'Leaderboard participation is not active. Register to appear in the global rankings.';
    table.innerHTML = '';
    return;
  }

  const entryList = [...base, localStudent].sort((a, b) => b.points - a.points);
  status.textContent = 'You are registered and visible in the global leaderboard.';
  table.innerHTML = entryList.map((entry, index) => `
    <div class="leaderboard-row">
      <strong>#${index + 1}</strong>
      <span>${entry.name}</span>
      <span>${entry.identity}</span>
      <strong>${entry.points} pts</strong>
    </div>
  `).join('');
}

function registerForLeaderboard() {
  state.settings.leaderboardRegistered = true;
  saveState();
  renderLeaderboard();
  showToast('Leaderboard registration complete');
}

function unregisterFromLeaderboard() {
  const confirmed = window.confirm('Remove leaderboard registration?');
  if (!confirmed) return;
  state.settings.leaderboardRegistered = false;
  saveState();
  renderLeaderboard();
  showToast('Leaderboard registration removed');
}

function handleResetData() {
  const confirmed = window.confirm('This will permanently erase all local student data. Continue?');
  if (!confirmed) return;

  state = defaultState();
  localStorage.removeItem(STORAGE_KEY);
  saveState();
  if (focusTimer.intervalId) clearInterval(focusTimer.intervalId);
  focusTimer = {
    active: false,
    intervalId: null,
    mode: 'pomodoro',
    durationSeconds: 25 * 60,
    remainingSeconds: 25 * 60,
    startedAt: null,
    previousRemaining: 25 * 60
  };
  renderAll();
  showToast('All data has been reset');
}

function renderSettings() {
  const lightToggle = document.getElementById('toggle-light-mode');
  const darkToggle = document.getElementById('toggle-dark-mode');
  const notificationsToggle = document.getElementById('toggle-notifications');

  if (lightToggle) lightToggle.checked = state.settings.theme === 'light';
  if (darkToggle) darkToggle.checked = state.settings.theme === 'dark';
  if (notificationsToggle) notificationsToggle.checked = state.settings.notifications;
}

function setTheme(theme) {
  state.settings.theme = theme;
  applyTheme();
  saveState();
}

function handleThemeToggle() {
  const lightChecked = document.getElementById('toggle-light-mode').checked;
  const darkChecked = document.getElementById('toggle-dark-mode').checked;

  if (lightChecked) setTheme('light');
  else if (darkChecked) setTheme('dark');
  else setTheme('light');
}

function updateTimerDisplay() {
  const display = document.getElementById('timer-display');
  if (!display) return;
  const totalSeconds = focusTimer.remainingSeconds;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function recordFocusSession(seconds, completed) {
  const durationMinutes = Math.max(1, Math.round(seconds / 60));
  const dateKey = new Date().toISOString().slice(0, 10);
  state.focusSessions.push({
    id: generateId('focus'),
    minutes: durationMinutes,
    seconds,
    completed,
    dateKey,
    createdAt: new Date().toISOString()
  });
  state.analytics.focusMinutesToday = getTodayFocusMinutes();
  updateProfilePoints(Math.max(0, Math.round(durationMinutes * 2)));
  saveState();
}

function startFocusTimer() {
  if (focusTimer.active) {
    showToast('A focus timer is already running.');
    return;
  }

  const mode = document.querySelector('.mode-button.active')?.dataset.focusMode || 'pomodoro';
  const customMinutes = Number(document.getElementById('custom-minutes').value || 25);
  const totalSeconds = mode === 'custom' ? Math.max(1, customMinutes * 60) : 25 * 60;

  focusTimer.mode = mode;
  focusTimer.durationSeconds = totalSeconds;
  focusTimer.remainingSeconds = totalSeconds;
  focusTimer.startedAt = Date.now();
  focusTimer.active = true;
  focusTimer.previousRemaining = totalSeconds;
  updateTimerDisplay();

  focusTimer.intervalId = setInterval(() => {
    if (!focusTimer.active) return;
    focusTimer.remainingSeconds -= 1;
    updateTimerDisplay();

    if (focusTimer.remainingSeconds <= 0) {
      clearInterval(focusTimer.intervalId);
      focusTimer.intervalId = null;
      focusTimer.active = false;
      recordFocusSession(focusTimer.durationSeconds, true);
      showToast('Focus session complete!');
      updateTimerDisplay();
      renderAll();
    }
  }, 1000);
}

function stopFocusTimer() {
  if (!focusTimer.active) {
    showToast('No active focus timer.');
    return;
  }

  const elapsed = focusTimer.durationSeconds - focusTimer.remainingSeconds;
  clearInterval(focusTimer.intervalId);
  focusTimer.intervalId = null;
  focusTimer.active = false;
  recordFocusSession(Math.max(1, elapsed), false);
  showToast('Focus session saved.');
  renderAll();
  focusTimer.remainingSeconds = focusTimer.durationSeconds;
  updateTimerDisplay();
}

function pauseFocusTimer() {
  if (!focusTimer.active) return;
  clearInterval(focusTimer.intervalId);
  focusTimer.intervalId = null;
  focusTimer.active = false;
  showToast('Focus timer paused.');
}

function resetFocusTimer() {
  if (focusTimer.intervalId) clearInterval(focusTimer.intervalId);
  const elapsed = focusTimer.durationSeconds - focusTimer.remainingSeconds;
  if (focusTimer.active || elapsed > 0) {
    recordFocusSession(Math.max(1, elapsed), false);
  }
  focusTimer.active = false;
  focusTimer.intervalId = null;
  focusTimer.remainingSeconds = focusTimer.durationSeconds;
  updateTimerDisplay();
  renderAll();
  showToast('Focus timer reset.');
}

function handleFocusModeSelection(event) {
  const button = event.target.closest('[data-focus-mode]');
  if (!button) return;
  document.querySelectorAll('[data-focus-mode]').forEach((item) => item.classList.toggle('active', item === button));
  const mode = button.dataset.focusMode;
  const minutes = mode === 'custom' ? Number(document.getElementById('custom-minutes').value || 25) : 25;
  focusTimer.mode = mode;
  focusTimer.durationSeconds = minutes * 60;
  focusTimer.remainingSeconds = minutes * 60;
  updateTimerDisplay();
}

function handleFocusAction(event) {
  const action = event.target.dataset.focusAction;
  if (!action) return;
  if (action === 'start') startFocusTimer();
  if (action === 'pause') pauseFocusTimer();
  if (action === 'stop') stopFocusTimer();
  if (action === 'reset') resetFocusTimer();
}

function renderFocusSummary() {
  const summary = document.getElementById('focus-summary');
  const todayMinutes = getTodayFocusMinutes();
  const totalSessions = state.focusSessions.length;
  summary.innerHTML = `
    <div class="summary-pill"><div><span>Today</span><strong>${todayMinutes} min</strong></div></div>
    <div class="summary-pill"><div><span>Sessions</span><strong>${totalSessions}</strong></div></div>
    <div class="summary-pill"><div><span>Mode</span><strong>${focusTimer.mode}</strong></div></div>
  `;
}

function buildQuizQuestions(subject, difficulty) {
  const list = QUIZ_BANK[subject]?.[difficulty] || [];
  const selected = [...list].sort(() => Math.random() - 0.5).slice(0, 5);
  return selected;
}

function startQuiz() {
  const subject = document.getElementById('quiz-subject').value;
  const difficulty = document.getElementById('quiz-difficulty').value;
  const questions = buildQuizQuestions(subject, difficulty);

  quizState = {
    active: true,
    questions,
    currentIndex: 0,
    selectedAnswers: Array(questions.length).fill(null),
    timer: 60,
    intervalId: null,
    startTime: Date.now()
  };

  document.getElementById('quiz-setup').classList.add('hidden');
  document.getElementById('quiz-active').classList.remove('hidden');
  document.getElementById('quiz-result').classList.add('hidden');
  renderQuizQuestion();

  quizState.intervalId = setInterval(() => {
    if (!quizState.active) return;
    quizState.timer -= 1;
    const timerEl = document.getElementById('quiz-timer');
    timerEl.textContent = `${quizState.timer}s`;

    if (quizState.timer <= 0) {
      finishQuiz('time');
    }
  }, 1000);
}

function getCurrentQuizQuestion() {
  return quizState.questions[quizState.currentIndex];
}

function renderQuizQuestion() {
  const question = getCurrentQuizQuestion();
  if (!question) return;

  document.getElementById('quiz-meta').textContent = `Question ${quizState.currentIndex + 1} of ${quizState.questions.length}`;
  document.getElementById('quiz-timer').textContent = `${quizState.timer}s`;
  document.getElementById('quiz-question').textContent = question.question;

  const optionWrap = document.getElementById('quiz-options');
  optionWrap.innerHTML = '';

  question.options.forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'quiz-option';
    button.textContent = option;
    button.addEventListener('click', () => {
      quizState.selectedAnswers[quizState.currentIndex] = option;
      optionWrap.querySelectorAll('.quiz-option').forEach((item) => item.classList.remove('selected'));
      button.classList.add('selected');
      setTimeout(() => {
        if (quizState.currentIndex < quizState.questions.length - 1) {
          quizState.currentIndex += 1;
          renderQuizQuestion();
        } else {
          finishQuiz('complete');
        }
      }, 250);
    });
    optionWrap.appendChild(button);
  });
}

function finishQuiz(reason) {
  if (!quizState.active) return;
  quizState.active = false;
  clearInterval(quizState.intervalId);

  const total = quizState.questions.length;
  let correct = 0;
  let unanswered = 0;

  quizState.questions.forEach((question, index) => {
    const selection = quizState.selectedAnswers[index];
    if (selection === question.answer) correct += 1;
    if (selection == null) unanswered += 1;
  });

  const accuracy = Math.round((correct / total) * 100);
  const score = correct * 10 + Math.max(0, total - unanswered) * 2;
  const points = Math.max(0, Math.round(score / 2));

  state.quizAttempts.push({
    id: generateId('quiz'),
    subject: document.getElementById('quiz-subject').value,
    difficulty: document.getElementById('quiz-difficulty').value,
    correct,
    total,
    accuracy,
    points,
    dateKey: new Date().toISOString().slice(0, 10),
    createdAt: new Date().toISOString()
  });

  state.profile.totalPoints = Math.max(state.profile.totalPoints || 0, Number(state.profile.totalPoints || 0) + Number(points || 0));
  state.profile.achievements = computeAchievements();
  saveState();

  const resultWrap = document.getElementById('quiz-result');
  resultWrap.classList.remove('hidden');
  document.getElementById('quiz-active').classList.add('hidden');
  document.getElementById('quiz-setup').classList.add('hidden');

  resultWrap.innerHTML = `
    <h3>Quiz results</h3>
    <p>Subject: ${document.getElementById('quiz-subject').value}</p>
    <p>Difficulty: ${document.getElementById('quiz-difficulty').value}</p>
    <p>Accuracy: ${accuracy}%</p>
    <p>Correct: ${correct}/${total}</p>
    <p>Unanswered: ${unanswered}</p>
    <p>Points earned: ${points}</p>
    <button class="primary-button" id="retry-quiz-button">Try again</button>
  `;

  document.getElementById('retry-quiz-button').addEventListener('click', () => {
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-setup').classList.remove('hidden');
  });

  renderAll();
}

function abandonQuiz() {
  if (!quizState.active) return;
  const unanswered = quizState.questions.length - quizState.selectedAnswers.filter((ans) => ans !== null && ans !== undefined).length;
  const unansweredPenalty = unanswered * 10;
  finishQuiz('abandoned');
  updateProfilePoints(-Math.min(unansweredPenalty, state.profile.totalPoints));
  showToast('Quiz abandoned. Unanswered questions counted as incorrect.');
}

function renderGames() {
  const grid = document.getElementById('game-grid');
  const stage = document.getElementById('game-stage');

  grid.innerHTML = GAME_DEFS.map((game) => `
    <div class="game-card">
      <h4>${game.title}</h4>
      <p>${game.description}</p>
      <div class="badge">High score: ${getGameHighScore(game.id)}</div>
      <button class="primary-button" data-game-action="play" data-game-id="${game.id}">Play</button>
    </div>
  `).join('');

  grid.querySelectorAll('[data-game-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.gameId;
      startGame(id);
    });
  });

  stage.innerHTML = currentGame ? renderGameUI(currentGame) : '';
}

function getGameHighScore(gameId) {
  const entry = state.gameScores.find((score) => score.gameId === gameId);
  return entry ? entry.highScore : 0;
}

function startGame(gameId) {
  currentGame = {
    id: gameId,
    title: GAME_DEFS.find((game) => game.id === gameId)?.title || 'Game',
    state: 'start',
    score: 0,
    highScore: getGameHighScore(gameId),
    startedAt: Date.now()
  };
  document.getElementById('game-stage').classList.remove('hidden');
  renderGames();
}

function updateGameHighScore(gameId, score) {
  const previous = getGameHighScore(gameId);
  if (score > previous) {
    const entryIndex = state.gameScores.findIndex((item) => item.gameId === gameId);
    if (entryIndex >= 0) {
      state.gameScores[entryIndex].highScore = score;
      state.gameScores[entryIndex].dateKey = new Date().toISOString().slice(0, 10);
    } else {
      state.gameScores.push({
        id: generateId('game'),
        gameId,
        highScore: score,
        dateKey: new Date().toISOString().slice(0, 10),
        createdAt: new Date().toISOString()
      });
    }
    state.profile.totalPoints = Math.max(state.profile.totalPoints || 0, Number(state.profile.totalPoints || 0) + Number(Math.max(0, score - previous) || 0));
    state.profile.achievements = computeAchievements();
    saveState();
  }
}

function renderGameUI(game) {
  const def = GAME_DEFS.find((item) => item.id === game.id);
  if (!def) return '';

  if (game.state === 'start') {
    return `
      <h3>${def.title}</h3>
      <p>${def.instructions}</p>
      <div class="game-actions">
        <button class="primary-button" data-game-action="start-round" data-game-id="${game.id}">Start</button>
      </div>
    `;
  }

  if (game.state === 'playing') {
    return `
      <h3>${def.title}</h3>
      <p>Score: ${game.score}</p>
      <p>High score: ${game.highScore}</p>
      <div class="game-actions">
        <button class="primary-button" data-game-action="finish-round" data-game-id="${game.id}">Finish</button>
      </div>
    `;
  }

  return `
    <h3>${def.title}</h3>
    <p>Final score: ${game.score}</p>
    <p>High score: ${game.highScore}</p>
    <div class="game-actions">
      <button class="primary-button" data-game-action="play" data-game-id="${game.id}">Play again</button>
    </div>
  `;
}

function handleGameAction(event) {
  const action = event.target.dataset.gameAction;
  const gameId = event.target.dataset.gameId;
  if (!action || !gameId) return;

  if (action === 'play') {
    startGame(gameId);
    return;
  }

  if (action === 'start-round') {
    currentGame.state = 'playing';
    currentGame.score = 10;
    renderGames();
    return;
  }

  if (action === 'finish-round') {
    if (!currentGame) return;
    currentGame.state = 'result';
    updateGameHighScore(currentGame.id, currentGame.score);
    renderGames();
  }
}

function renderAll() {
  getState();
  applyTheme();
  renderDashboard();
  renderLearning();
  renderPlanner();
  renderFocusSummary();
  renderAnalytics();
  renderProfile();
  renderLeaderboard();
  renderSettings();
  renderNotes();
  renderGoals();
  renderGames();
  updateTimerDisplay();
  document.getElementById('profile-total-points').textContent = state.profile.totalPoints || 0;
}

function bindEvents() {
  document.querySelectorAll('.nav-item').forEach((button) => {
    button.addEventListener('click', () => navigateTo(button.dataset.nav));
  });

  document.querySelectorAll('[data-quick]').forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.dataset.quick;
      if (action === 'focus') navigateTo('focus');
      if (action === 'quiz') navigateTo('quiz');
      if (action === 'task') navigateTo('planner');
      if (action === 'note') navigateTo('notes');
      if (action === 'game') navigateTo('games');
      if (action === 'analytics') navigateTo('analytics');
    });
  });

  document.getElementById('planner-form').addEventListener('submit', handleTaskSubmit);
  document.getElementById('reset-task-form').addEventListener('click', () => {
    document.getElementById('planner-form').reset();
    delete document.getElementById('planner-form').dataset.editingId;
    document.getElementById('planner-form').querySelector('button[type="submit"]').textContent = 'Add task';
  });

  document.getElementById('task-search').addEventListener('input', renderPlanner);
  document.getElementById('task-filter').addEventListener('change', renderPlanner);

  document.getElementById('note-form').addEventListener('submit', handleNoteSubmit);
  document.getElementById('clear-note-form').addEventListener('click', () => {
    document.getElementById('note-form').reset();
    delete document.getElementById('note-form').dataset.editingId;
    document.getElementById('note-form').querySelector('button[type="submit"]').textContent = 'Save note';
  });
  document.getElementById('note-search').addEventListener('input', renderNotes);

  document.getElementById('goal-form').addEventListener('submit', handleGoalSubmit);

  document.getElementById('profile-form').addEventListener('submit', handleProfileSubmit);

  document.getElementById('register-leaderboard-button').addEventListener('click', registerForLeaderboard);
  document.getElementById('unregister-leaderboard-button').addEventListener('click', unregisterFromLeaderboard);

  document.getElementById('theme-toggle').addEventListener('click', () => {
    const nextTheme = state.settings.theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  });

  document.getElementById('toggle-light-mode').addEventListener('change', handleThemeToggle);
  document.getElementById('toggle-dark-mode').addEventListener('change', handleThemeToggle);
  document.getElementById('toggle-notifications').addEventListener('change', () => {
    state.settings.notifications = document.getElementById('toggle-notifications').checked;
    saveState();
  });

  document.getElementById('reset-data-button').addEventListener('click', handleResetData);
  document.getElementById('profile-settings-button').addEventListener('click', () => navigateTo('profile'));

  document.querySelectorAll('[data-focus-mode]').forEach((button) => button.addEventListener('click', handleFocusModeSelection));
  document.querySelectorAll('[data-focus-action]').forEach((button) => button.addEventListener('click', handleFocusAction));
  document.getElementById('start-quiz-button').addEventListener('click', startQuiz);
  document.getElementById('abandon-quiz-button').addEventListener('click', abandonQuiz);
  document.body.addEventListener('click', handleGameAction);

  document.getElementById('task-search').value = '';
  document.getElementById('note-search').value = '';
}

function initApp() {
  state = getState();
  if (!state.profile) state.profile = defaultState().profile;
  if (!state.settings) state.settings = defaultState().settings;
  if (!state.tasks) state.tasks = [];
  if (!state.notes) state.notes = [];
  if (!state.goals) state.goals = [];
  if (!state.focusSessions) state.focusSessions = [];
  if (!state.quizAttempts) state.quizAttempts = [];
  if (!state.gameScores) state.gameScores = [];

  state.profile.achievements = computeAchievements();
  bindEvents();
  applyTheme();
  renderAll();
  navigateTo('dashboard');
}

document.addEventListener('DOMContentLoaded', initApp);
