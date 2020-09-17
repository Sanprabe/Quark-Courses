
const qBank = [ 
    { 
      question: 
        "Pregunta de prueba ( respuesta correcta es la numero 1)", 
      answers: ["Uno", "Dos", "Tres", "Cuatro"], 
      correct: "Uno", 
      questionId: "099099"
    }, 
    { 
      question: 
        "Pregunta de prueba ( respuesta correcta es la numero 1)", 
      answers: ["Uno", "Dos", "Tres", "Cuatro"], 
      correct: "Uno", 
      questionId: "093909"
    }, 
    { 
      question: 
        "Pregunta de prueba ( respuesta correcta es la numero 1)", 
      answers: ["Uno", "Dos", "Tres", "Cuatro"], 
      correct: "Uno", 
      questionId: "009039"
    }, 
    { 
      question: 
        "Pregunta de prueba ( respuesta correcta es la numero 1)", 
      answers: ["Uno", "Dos", "Tres", "Cuatro"], 
      correct: "Uno", 
      questionId: "090089"
    }, 
    { 
      question: 
        "Pregunta de prueba ( respuesta correcta es la numero 1)", 
      answers: ["Uno", "Dos", "Tres", "Cuatro"], 
      correct: "Uno", 
      questionId: "01010101"
    }, 
    { 
      question: 
        "Pregunta de prueba ( respuesta correcta es la numero 1)", 
      answers: ["Uno", "Dos", "Tres", "Cuatro"], 
      correct: "Uno", 
      questionId: "092299"
    }, 
    { 
      question: 
        "Pregunta de prueba ( respuesta correcta es la numero 1)", 
      answers: ["Uno", "Dos", "Tres", "Cuatro"], 
      correct: "Uno", 
      questionId: "099099"
    }, 
    { 
      question: 
        "Pregunta de prueba ( respuesta correcta es la numero 1)", 
      answers: ["Uno", "Dos", "Tres", "Cuatro"], 
      correct: "Uno", 
      questionId: "222099"
    }, 
    { 
      question: 
        "Pregunta de prueba ( respuesta correcta es la numero 1)", 
      answers: ["Uno", "Dos", "Tres", "Cuatro"], 
      correct: "Uno", 
      questionId: "2222099"
    }, 
    { 
      question: 
        "Pregunta de prueba ( respuesta correcta es la numero 1)", 
      answers: ["Uno", "Dos", "Tres", "Cuatro"], 
      correct: "Uno", 
      questionId: "09922099"
    }, 
    { 
      question: 
        "Pregunta de prueba ( respuesta correcta es la numero 1)", 
      answers: ["Uno", "Dos", "Tres", "Cuatro"], 
      correct: "Uno", 
      questionId: "222292099"
    }, 
    { 
      question: 
        "Pregunta de prueba ( respuesta correcta es la numero 1)", 
      answers: ["Uno", "Dos", "Tres", "Cuatro"], 
      correct: "Uno", 
      questionId: "0998999099"
    }, 
    { 
      question: 
        "Pregunta de prueba ( respuesta correcta es la numero 1)", 
      answers: ["Uno", "Dos", "Tres", "Cuatro"], 
      correct: "Uno", 
      questionId: "099099"
    }, 
    { 
      question: 
        "Pregunta de prueba ( respuesta correcta es la numero 1)", 
      answers: ["Uno", "Dos", "Tres", "Cuatro"], 
      correct: "Uno", 
      questionId: "099099"
    }, 
    { 
      question: 
        "Pregunta de prueba ( respuesta correcta es la numero 1)", 
      answers: ["Uno", "Dos", "Tres", "Cuatro"], 
      correct: "Uno", 
      questionId: "099099"
    }, 
    { 
      question: 
        "Pregunta de prueba ( respuesta correcta es la numero 1)", 
      answers: ["Uno", "Dos", "Tres", "Cuatro"], 
      correct: "Uno", 
      questionId: "09459099"
    }, 
    { 
      question: 
        "Pregunta de prueba ( respuesta correcta es la numero 1)", 
      answers: ["Uno", "Dos", "Tres", "Cuatro"], 
      correct: "Uno", 
      questionId: "0912219099"
    }, 
    
  ]; 
    
  // n = 5 to export 5 question 
  export default (n = 5) => 
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n)); 
  