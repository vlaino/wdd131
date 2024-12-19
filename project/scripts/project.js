document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            projectName: "Before",
            imageUrl: "../project/images/before1-project.jpg",
            width: "893px",
            height: "784px",
            projectDescription: "We specialise in waterproofing inverted walkable roofs with thermal insulation, as well as surfaces covered with tiles or tiles of your choice, guaranteeing not only excellent protection, but also suitable and long-lasting aesthetics."
        },
        {
            projectName: "After",
            imageUrl: "../project/images/after1-project.jpg",
            width: "765px",
            height: "601px",
            projectDescription: "Roof Waterproofing project."
        },
        {
            projectName: "Before",
            imageUrl: "../project/images/before2-project.jpg",
            width: "893px",
            height: "784px",
            projectDescription: "We have extensive experience in the sector and a team of highly qualified experts, committed to offering a comprehensive service that includes everything from the conception of the design to the completion of the renovation project."
        },
        {
            projectName: "After",
            imageUrl: "../project/images/after2-project.jpg",
            width: "893px",
            height: "784px",
            projectDescription: "Bathroom Renovation project."
        }
        
    ];

    const container = document.querySelector('.container-project-box');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        const projectTitle = document.createElement('h2');
        projectTitle.textContent = project.projectName;
        projectCard.appendChild(projectTitle);

        const projectImage = document.createElement('img');
        projectImage.src = project.imageUrl;
        projectImage.width = project.width;
        projectImage.height = project.height;
        projectImage.alt = `${project.projectName} Image`;
        projectCard.appendChild(projectImage);

        const projectInfo = document.createElement('div');
        projectInfo.className = 'project-info';

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.projectDescription;
        projectInfo.appendChild(projectDescription);
        
        projectCard.appendChild(projectInfo);
        container.appendChild(projectCard);
    });
});