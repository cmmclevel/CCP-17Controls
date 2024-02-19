let currentQuestionIndex = 0;
const questions = [
    {
        question: "Which practice requires performing periodic and real-time scanning of the information system and files from external sources?",
        answers: [
            "SI.L1-3.14.5 - System and Information Integrity - System & File Scanning",
            "SC.L1-3.13.1 - System and Communications Protection - Boundary Protection",
            "MP.L1-3.8.3 - Media Protection - Media Disposal",
            "IA.L1-3.5.1 - Identification & Authentication - Identification"
        ],
        correctIndex: 0
    },
    {
        question: "Which practice is focused on maintaining logs of physical access to secure areas?",
        answers: [
            "PE.L1-3.10.4 - Physical Protection - Physical Access Logs",
            "SI.L1-3.14.5 - System and Information Integrity - System & File Scanning",
            "IA.L1-3.5.2 - Identification & Authentication - Authentication",
            "AC.L1-3.1.1 - Access Control - Authorized Access Control"
        ],
        correctIndex: 0
    },
    {
        question: "Which practice involves the control and management of physical access devices?",
        answers: [
            "PE.L1-3.10.5 - Physical Protection - Manage Physical Access",
            "MP.L1-3.8.3 - Media Protection - Media Disposal",
            "SI.L1-3.14.2 - System and Information Integrity - Malicious Code Protection",
            "IA.L1-3.5.1 - Identification & Authentication - Identification"
        ],
        correctIndex: 0
    },
    {
        question: "Which practice is about protecting organizational communications at key boundaries of information systems?",
        answers: [
            "SC.L1-3.13.1 - System and Communications Protection - Boundary Protection",
            "PE.L1-3.10.4 - Physical Protection - Physical Access Logs",
            "AC.L1-3.1.2 - Access Control - Transaction & Function Control",
            "IA.L1-3.5.2 - Identification & Authentication - Authentication"
        ],
        correctIndex: 0
    },
	{
        question: "Which practice aims to limit system access to authorized users and devices?",
        answers: [
            "AC.L1-3.1.4 - Access Control - Media Disposal",
            "AC.L1-3.1.3 - Access Control - Limit Physical Access",
            "AC.L1-3.1.6 - Access Control - Transaction & Function Control",
            "AC.L1-3.1.1 - Access Control - Authorized Access Control"
        ],
        correctIndex: 3
    },
    {
        question: "Which practice involves limiting the types of transactions and functions authorized users can execute?",
        answers: [
            "IA.L1-3.5.1 - Identification & Authentication - Identification",
            "IA.L1-3.5.2 - Identification & Authentication - Authentication",
            "AC.L1-3.1.1 - Access Control - Authorized Access Control",
            "AC.L1-3.1.2 - Access Control - Transaction & Function Control"
        ],
        correctIndex: 3
    },
    {
        question: "Which practice involves verifying and controlling connections to external information systems?",
        answers: [
            "SC.L1-3.13.7 - System and Communications Protection - Boundary Protection",
            "AC.L1-3.1.21 - Access Control - Public-Access System Separation",
            "AC.L1-3.1.20 - Access Control - External Connections",
            "SI.L1-3.14.6 - System and Information Integrity - Malicious Code Protection"
        ],
        correctIndex: 2
    },
	{
    question: "Which practice involves controlling the information posted on publicly accessible information systems?",
    answers: [
        "AC.L1-3.1.22 - Access Control - Control Public Information",
        "MP.L1-3.8.4 - Media Protection - Media Disposal",
        "PE.L1-3.10.1 - Physical Protection - Physical Access Logs",
        "SI.L1-3.14.7 - System and Information Integrity - Update Malicious Code Protection"
    ],
    correctIndex: 0
	},
	{
		question: "Which practice is concerned with identifying system users, processes, or devices?",
		answers: [
			"IA.L1-3.5.1 - Identification & Authentication - Identification",
			"CM.L1-3.4.1 - Configuration Management - Flaw Remediation",
			"SI.L1-3.14.5 - System and Information Integrity - System & File Scanning",
			"PE.L1-3.10.2 - Physical Protection - Escort Visitors"
		],
		correctIndex: 0
	},
	{
		question: "Which practice involves authenticating the identities of users, processes, or devices as a prerequisite to system access?",
		answers: [
			"IA.L1-3.5.2 - Identification & Authentication - Authentication",
			"MP.L1-3.8.3 - Media Protection - Media Disposal",
			"PE.L1-3.10.4 - Physical Protection - Limit Physical Access",
			"AC.L1-3.1.3 - Access Control - Manage Physical Access"
		],
		correctIndex: 0
	},
	{
		question: "Which practice involves sanitizing or destroying media containing Federal Contract Information before disposal?",
		answers: [
			"MP.L1-3.8.4 - Media Protection - Media Sanitization",
			"MP.L1-3.8.3 - Media Protection - Media Disposal",
			"PE.L1-3.10.1 - Physical Protection - Limit Physical Access",
			"AC.L1-3.1.4 - Access Control - Media Disposal"
		],
		correctIndex: 1
	},
	{
		question: "Which practice involves limiting physical access to organizational information systems and operating environments?",
		answers: [
			"PE.L1-3.10.1 - Physical Protection - Limit Physical Access",
			"CM.L1-3.4.1 - Configuration Management - Flaw Remediation",
			"AC.L1-3.1.3 - Access Control - Manage Physical Access",
			"IA.L1-3.5.1 - Identification & Authentication - Identification"
		],
		correctIndex: 0
	},
	{
		question: "Which practice entails escorting visitors and monitoring their activity within facilities?",
		answers: [
			"PE.L1-3.10.2 - Physical Protection - Escort Visitors",
			"PE.L1-3.10.3 - Physical Protection - Monitor Physical Access",
			"AC.L1-3.1.22 - Access Control - Control Public Information",
			"SI.L1-3.14.5 - System and Information Integrity - System & File Scanning"
		],
		correctIndex: 0
	},
	{
		question: "Which practice focuses on separating publicly accessible system components from internal networks?",
		answers: [
			"SC.L1-3.13.5 - System and Communications Protection - Public-Access System Separation",
			"AC.L1-3.1.22 - Access Control - Control Public Information",
			"PE.L1-3.10.4 - Physical Protection - Physical Access Logs",
			"SI.L1-3.14.6 - System and Information Integrity - Malicious Code Protection"
		],
		correctIndex: 0
	},
	{
		question: "Which practice is concerned with the timely remediation of system flaws and information?",
		answers: [
			"SI.L1-3.14.1 - System and Information Integrity - Flaw Remediation",
			"CM.L1-3.4.1 - Configuration Management - Flaw Remediation",
			"AC.L1-3.1.4 - Access Control - Media Disposal",
			"PE.L1-3.10.1 - Physical Protection - Limit Physical Access"
		],
		correctIndex: 0
	},
	{
		question: "Which practice provides protection from malicious code within organizational information systems?",
		answers: [
			"SI.L1-3.14.2 - System and Information Integrity - Malicious Code Protection",
			"AC.L1-3.1.20 - Access Control - External Connections",
			"PE.L1-3.10.5 - Physical Protection - Manage Physical Access",
			"MP.L1-3.8.3 - Media Protection - Media Disposal"
		],
		correctIndex: 0
	},
	{
		question: "Which practice involves updating protection mechanisms against malicious code when new releases are available?",
		answers: [
			"SI.L1-3.14.4 - System and Information Integrity - Update Malicious Code Protection",
			"AC.L1-3.1.20 - Access Control - External Connections",
			"PE.L1-3.10.5 - Physical Protection - Manage Physical Access",
			"MP.L1-3.8.3 - Media Protection - Media Disposal"
		],
		correctIndex: 0
	},
	{
		question: 
			"Which practice requires performing periodic and real-time scanning of the information system and files from external sources?\nTHIS IS THE LAST QUESTION - REFRESH PAGE TO RESART!!!",
					
		answers: [
			"SI.L1-3.14.5 - System and Information Integrity - System & File Scanning",
			"SC.L1-3.13.1 - System and Communications Protection - Boundary Protection",
			"MP.L1-3.8.4 - Media Protection - Media Sanitization",
			"IA.L1-3.5.1 - Identification & Authentication - Identification"
		],
		correctIndex: 0
	}
];

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.className = 'answer';
        button.onclick = () => checkAnswer(index === question.correctIndex);
        answersContainer.appendChild(button);
    });
    document.getElementById('nextQuestion').style.display = currentQuestionIndex < questions.length - 1 ? 'block' : 'none';
    document.getElementById('backQuestion').style.display = currentQuestionIndex > 0 ? 'block' : 'none';
}

function checkAnswer(isCorrect) {
    resetFeedback(); // Clear any existing feedback first

    const feedbackImageId = isCorrect ? 'celebrationImage' : 'incorrectImage';
    const soundId = isCorrect ? 'correctSound' : 'incorrectSound';
    
    const audioElement = document.getElementById(soundId);
    audioElement.play();
    document.getElementById(feedbackImageId).style.display = 'block';
    
    // Schedule feedback reset after 7.3 seconds
    setTimeout(() => {
        audioElement.pause();
        audioElement.currentTime = 0; // Reset audio playback
        document.getElementById(feedbackImageId).style.display = 'none'; // Hide feedback image
    }, 7300);
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
    resetFeedback();
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
    resetFeedback();
}



function resetFeedback() {
    // Stop and reset both audio elements and hide feedback images
    ['correctSound', 'incorrectSound'].forEach(id => {
        const audio = document.getElementById(id);
        audio.pause();
        audio.currentTime = 0;
    });
    ['celebrationImage', 'incorrectImage'].forEach(id => {
        document.getElementById(id).style.display = 'none';
    });
}

function retakeQuiz() {
    // Example logic to reset the quiz and hide the "Retake" button
    shuffleArray(questions); // If you're shuffling questions for a new attempt
    currentQuestionIndex = 0; // Reset to the first question
    displayQuestion(); // Call to display the first question again
    document.getElementById('retakeButton').style.display = 'none'; // Hide the "Retake" button
}

function retakeQuiz() {
    window.location.reload(); // Refresh the page to restart the quiz
}



window.onload = displayQuestion;
