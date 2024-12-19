document.addEventListener('DOMContentLoaded', () => {

    const aboutMyself = document.querySelector('.about-myself');
    if (aboutMyself) {
        const aboutMyselfContent = `
            <h2>Transitioning to Software Development</h2>
            <p>
                With a solid background in managing complex digital operations and customer service systems, I am
                eager to transition into software development.
            </p> 
            <p>
                My experience at Bancolombia Panamá S.A. involved
                overseeing digital operations, resolving escalated client queries, and ensuring high-quality
                standards, all of which honed my problem-solving and technical skills.
            </p>     
            <p>
                At BAC International Bank, I managed Oracle's Siebel CRM and IBM AS/400 systems, providing solutions across multiple channels and
                maintaining organized information systems. 
            </p>
            <p>    
                These roles have equipped me with a keen attention to
                detail, operational management expertise, and a strong foundation in IT systems, positioning me well
                for a career in software development.
            </p>
        `;
        aboutMyself.innerHTML = aboutMyselfContent;
    }

    const education = document.querySelector('.education');
    if (education) {
        const educationContent = `
            <h2>Education</h2>
            <p>
                Currently pursuing a B.S. in Software Development at Brigham Young University - Idaho, I am gaining
                comprehensive skills in software engineering with a strong emphasis on web development. 
            </p>
            <p>
                My education
                has equipped me with proficiency in JavaScript, C#, GitHub, and MySQL, among other technologies
                essential for a career in software development. 
            </p>
            <p>    
                Additionally, I have earned certificates in computer
                programming and computer support, which further enhance my technical expertise. 
            </p>
            <p>
                I am also studying for a Bachelor in English at Universidad de Panamá, enriching my communication 
                skills and broadening my educational background.
            </p>
        `;
        education.innerHTML = educationContent;
    }
});