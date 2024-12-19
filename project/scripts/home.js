document.addEventListener('DOMContentLoaded', () => {

    const aboutBusiness = document.querySelector('.about-business');
    if (aboutBusiness) {
        const aboutBusinessContent = `
            <h2>We are...</h2>
            <p>
                We are a group of professionals with more than 10 years of experience in the construction industry. 
                We have decided to unite our skills and knowledge to begin this project with the aim of offering high-quality 
                construction services and meeting the needs of our clients.   
            </p> 
            <p>
               We are passionate about creating functional, safe 
                and aesthetically appealing spaces, and we are committed to providing a personalized and reliable service in 
                each project we work on.
            </p>     
            <p>
                Our extensive experience has allowed us to develop a collaborative and 
                customer-focused approach, where we listen carefully to your needs and offer you innovative and efficient 
                solutions. 
            </p>
            <p>    
                We are committed to excellence in every detail and strive to exceed expectations in every project 
                we undertake.
            </p>
        `;
        aboutBusiness.innerHTML = aboutBusinessContent;
    }

    const team = document.querySelector('.team');
    if (team) {
        const teamContent = `
            <h2>Team</h2>
            <p>
                Our team is a multidisciplinary team that is constantly working, but also constantly training and updating itself with 
                the aim of offering the client fully trained and experienced personnel when it comes to providing solutions. 
                  
            </p>
            <p>
                We have construction professionals, architects, bricklayers, electricians, plumbers, blacksmiths, painters, etc.
            </p>
            <p>    
                A whole team at the client's disposal through our company. 
            </p>
            <p>
                
            </p>
        `;
        team.innerHTML = teamContent;
    }
});