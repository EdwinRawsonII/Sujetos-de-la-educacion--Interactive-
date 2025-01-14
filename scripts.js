// Mostrar y ocultar contenido adicional
function showMoreInfo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        if (section.classList.contains('hidden')) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    }
}

// Agregar interacción al menú de navegación
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Ajustar la posición para compensar el header
                behavior: 'smooth'
            });
        }
    });
});

// Muñeco interactivo para ambientes seguros
function initInteractiveDoll() {
    const dollContainer = document.getElementById('interactive-doll');
    if (!dollContainer) return;

    const stages = [
        { stage: 'Primera infancia', description: 'Ambientes seguros para la primera infancia incluyen calor humano, estabilidad emocional y rutinas predecibles.' },
        { stage: 'Infancia media', description: 'Se priorizan espacios de exploración con límites claros y afecto consistente.' },
        { stage: 'Adolescencia', description: 'Ambientes seguros promueven autonomía con apoyo, límites flexibles y comunicación abierta.' }
    ];

    stages.forEach((stage, index) => {
        const button = document.createElement('button');
        button.textContent = stage.stage;
        button.onclick = () => alert(stage.description);
        dollContainer.appendChild(button);
    });
}

// Inicializar el muñeco interactivo al cargar la página
document.addEventListener('DOMContentLoaded', initInteractiveDoll);

// Cuerpo interactivo
const stages = [
    {
        image: "/Images/etapa-preescolar.png",
        description: "ETAPA PREESCOLAR: Protegido y protector, estimulante al descubrimiento y a la exploración."
    },
    {
        image: "/Images/etapa-escolar.png",
        description: "ETAPA ESCOLAR: Protector, estimulante, educativo, y fomentando la responsabilidad y la autonomía."
    },
    {
        image: "/Images/etapa-adolescente.png",
        description: "ETAPA ADOLECENTE: Protección indirecta, intelectualmente desafiante, y profundamente educativo."
    }
];

let currentStage = 0;
const bodyImage = document.getElementById("body-image");
const stageDescription = document.getElementById("stage-description");
const nextStageButton = document.getElementById("next-stage");

nextStageButton.addEventListener("click", () => {
    currentStage = (currentStage + 1) % stages.length;
    bodyImage.src = stages[currentStage].image;
    stageDescription.textContent = stages[currentStage].description;
});

// Puzzle interactivo
const puzzlePieces = document.querySelectorAll(".puzzle-piece");
const dropZones = document.querySelectorAll(".drop-zone");
const puzzleFeedback = document.getElementById("puzzle-feedback");

puzzlePieces.forEach(piece => {
    piece.addEventListener("dragstart", event => {
        event.dataTransfer.setData("text", event.target.id);
    });
});

dropZones.forEach(zone => {
    zone.addEventListener("dragover", event => {
        event.preventDefault();
    });

    zone.addEventListener("drop", event => {
        event.preventDefault();
        const pieceId = event.dataTransfer.getData("text");
        const draggedPiece = document.getElementById(pieceId);

        if (zone.dataset.correct === draggedPiece.textContent) {
            zone.textContent = draggedPiece.textContent;
            zone.classList.add("correct");
            draggedPiece.remove();
            puzzleFeedback.textContent = "¡Correcto!";
            puzzleFeedback.style.color = "green";
        } else {
            puzzleFeedback.textContent = "Intenta de nuevo.";
            puzzleFeedback.style.color = "red";
        }
    });
});
