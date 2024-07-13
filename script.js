// script.js
document.addEventListener('DOMContentLoaded', function() {
    const addIdeaForm = document.getElementById('add-idea-form');
    const ideaText = document.getElementById('idea-text');
    const ideaDate = document.getElementById('idea-date');
    const ideasList = document.getElementById('ideas');

    addIdeaForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const idea = {
            text: ideaText.value,
            date: ideaDate.value
        };

        let ideas = JSON.parse(localStorage.getItem('ideas')) || [];
        ideas.push(idea);
        localStorage.setItem('ideas', JSON.stringify(ideas));

        displayIdeas();
        addIdeaForm.reset();
    });

    function displayIdeas() {
        let ideas = JSON.parse(localStorage.getItem('ideas')) || [];
        ideasList.innerHTML = '';

        ideas.forEach((idea, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${idea.date}</strong>: ${idea.text}`;
            ideasList.appendChild(li);
        });
    }

    displayIdeas();
});
