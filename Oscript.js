document.addEventListener('DOMContentLoaded', function() {
    const addIdeaForm = document.getElementById('add-idea-form');
    const ideaText = document.getElementById('idea-text');
    const ideaDate = document.getElementById('idea-date');
    const ideaImage = document.getElementById('idea-image');
    const ideaAudio = document.getElementById('idea-audio');
    const ideasList = document.getElementById('ideas');

    addIdeaForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const idea = {
            text: ideaText.value,
            date: ideaDate.value,
            image: ideaImage.files[0], // Get the uploaded image file
            audio: ideaAudio.files[0]  // Get the uploaded audio file
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

            if (idea.image) {
                const img = document.createElement('img');
                img.src = URL.createObjectURL(idea.image);
                img.alt = 'Uploaded Image';
                img.style.maxWidth = '100px'; // Adjust image display size
                li.appendChild(img);
            }

            if (idea.audio) {
                const audio = document.createElement('audio');
                audio.controls = true;
                const source = document.createElement('source');
                source.src = URL.createObjectURL(idea.audio);
                source.type = idea.audio.type;
                audio.appendChild(source);
                li.appendChild(audio);
            }

            ideasList.appendChild(li);
        });
    }

    displayIdeas();
});

////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    const addIdeaForm = document.getElementById('add-idea-form');
    const ideaText = document.getElementById('idea-text');
    const ideaDate = document.getElementById('idea-date');
    const ideaImage = document.getElementById('idea-image');
    const ideaAudio = document.getElementById('idea-audio');
    const ideasList = document.getElementById('ideas');

    addIdeaForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const idea = {
            text: ideaText.value,
            date: ideaDate.value,
            image: ideaImage.files[0], // Get the uploaded image file
            audio: ideaAudio.files[0]  // Get the uploaded audio file
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
            
            if (idea.image) {
                const img = document.createElement('img');
                img.src = URL.createObjectURL(idea.image);
                img.alt = 'Uploaded Image';
                img.style.maxWidth = '100px'; // Adjust image display size
                li.appendChild(img);
            }
            
            if (idea.audio) {
                const audio = document.createElement('audio');
                audio.controls = true;
                const source = document.createElement('source');
                source.src = URL.createObjectURL(idea.audio);
                source.type = idea.audio.type;
                audio.appendChild(source);
                li.appendChild(audio);
            }

            ideasList.appendChild(li);
        });
    }

    displayIdeas();
});
