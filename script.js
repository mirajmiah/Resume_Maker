function addEntry(containerId, type) {
    const container = document.getElementById(containerId);
    const newEntry = document.createElement('div');
    newEntry.className = 'entry';

    let template = '';
    switch(type) {
        case 'experience':
            template = `
                <label>Position</label>
                <input type="text" class="position" placeholder="Enter Position">
                
                <label>Organization</label>
                <input type="text" class="organization" placeholder="Enter Organization">
                
                <label>Description</label>
                <textarea class="description" placeholder="Enter description"></textarea>
            `;
            break;
        case 'project':
            template = `
                <label>Project Name</label>
                <input type="text" class="projectName" placeholder="Enter Project Name">
                
                <label>Technologies</label>
                <input type="text" class="technologies" placeholder="Enter Technologies">
                
                <label>Description</label>
                <textarea class="projectDescription" placeholder="Enter project description"></textarea>
            `;
            break;
        case 'education':
            template = `
                <label>Institution</label>
                <input type="text" class="institution" placeholder="Enter Institution">
                
                <label>Degree</label>
                <input type="text" class="degree" placeholder="Enter Degree">
                
                <label>Duration</label>
                <input type="text" class="duration" placeholder="Enter Duration">
            `;
            break;
    }

    newEntry.innerHTML = template;
    container.appendChild(newEntry);
}

function generateResume() {
    const fullName = document.getElementById('fullName').value || 'John Rai';
    const phone = document.getElementById('phone').value || '+91 XXXX XXXXXX';
    const email = document.getElementById('email').value || 'john@example.com';

    const preview = document.getElementById('resumePreview');
    preview.innerHTML = `
        <div class="header">
            <h1>${fullName}</h1>
        </div>
    `;
}

function printResume() {
    window.print();
}
