// Skills Data
const skills = {
    'Circuit Design': ['Analog Circuit Design', 'PCB Design & Layout', 'Digital Circuit Design', 'Schematic Capture', 'Signal Integrity Analysis'],
    'Programming': ['C/C++', 'SCPI', 'Python', 'VHDL/Verilog', 'MATLAB', 'Embedded C', 'Assembly'],
    'Microcontrollers': ['ARM Cortex', 'AVR', 'PIC', 'ESP32', 'Arduino', 'Raspberry Pi'],
    'Tools & Software': ['LabVIEW', 'TestStand', 'Altium Designer', 'VS code', 'Eagle', 'KiCad', 'LTSpice', 'Cadence', 'OrCAD', 'Vivado', 'Quartus'],
    'Testing & Analysis': ['Oscilloscope', 'Logic Analyzer', 'Spectrum Analyzer', 'Multimeter', 'Signal Generators'],
    'Communication': ['UART', 'SPI', 'I2C', 'CAN', 'Ethernet', 'WiFi', 'Bluetooth', 'RF Design'],
    'Power Electronics': ['SMPS Design', 'Battery Management', 'DC-DC Converters', 'AC-DC Converters', 'Motor Drivers'],
    'Embedded Systems': ['RTOS', 'Linux Embedded', 'Bootloader Dev', 'Device Drivers', 'IoT Systems']
};

// Projects Data
const projects = [
    {
        title: 'Smart IoT Energy Monitor',
        desc: 'Developed a real-time energy monitoring system using ESP32 with cloud integration',
        tech: ['ESP32', 'MQTT', 'PCB Design', 'Power Monitoring IC']
    },
    {
        title: 'BLDC Motor Controller',
        desc: 'Designed and implemented a high-efficiency brushless DC motor controller',
        tech: ['STM32', 'Power MOSFETs', 'FOC Algorithm', 'PCB Layout']
    },
    {
        title: 'RF Communication Module',
        desc: 'Created a long-range RF transceiver module for industrial applications',
        tech: ['LoRa', 'Antenna Design', 'RF Testing', 'FCC Compliance']
    },
	{
        title: 'Digital Clock',
        desc: 'Created a Complete Digital Clock from Scratch with logic gates for campus project.',
        tech: ['Logic Gates', 'ICs', 'Multisim', 'KiCad']
    }
];

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Navigation buttons
    const navBtns = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');

    navBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all buttons and sections
            navBtns.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked button and target section
            this.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
        });
    });

    // Load skills
    loadSkills();
    
    // Load projects
    loadProjects();
    
    // Handle profile image
    handleProfileImage();
});

// Load Skills
function loadSkills() {
    const premiumSkills = new Set([
        'PCB Design & Layout',
        'Python',
		'C/C++',
		'SCPI',
		'LabVIEW',
		'TestStand',
        'ARM Cortex',
		'Analog Circuit Design',
		'AVR',
        'Altium Designer',
        'RTOS'
    ]);

    const skillsContainer = document.getElementById('skillsContainer');
    
    for (const [category, items] of Object.entries(skills)) {
        const skillDiv = document.createElement('div');
        skillDiv.className = 'skill-category';
        
        const header = document.createElement('h3');
        header.innerHTML = `
            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
            ${category}
        `;
        
        const tagsDiv = document.createElement('div');
        tagsDiv.className = 'skill-tags';
        
        items.forEach(skill => {
            const tag = document.createElement('span');
            tag.className = 'skill-tag';
            tag.textContent = skill;

            if (premiumSkills.has(skill)) {
                tag.classList.add('premium-skill'); // add highlight
            }

            tagsDiv.appendChild(tag);
        });
        
        skillDiv.appendChild(header);
        skillDiv.appendChild(tagsDiv);
        skillsContainer.appendChild(skillDiv);
    }
}


// Load Projects
function loadProjects() {
    const projectsContainer = document.getElementById('projectsContainer');
    
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-item';
        
        const title = document.createElement('h3');
        title.className = 'project-title';
        title.textContent = project.title;
        
        const desc = document.createElement('p');
        desc.className = 'project-desc';
        desc.textContent = project.desc;
        
        const techDiv = document.createElement('div');
        techDiv.className = 'project-tech';
        
        project.tech.forEach(tech => {
            const techTag = document.createElement('span');
            techTag.className = 'tech-tag';
            techTag.textContent = tech;
            techDiv.appendChild(techTag);
        });
        
        projectDiv.appendChild(title);
        projectDiv.appendChild(desc);
        projectDiv.appendChild(techDiv);
        projectsContainer.appendChild(projectDiv);
    });
}

// Handle Profile Image
function handleProfileImage() {
    const profileImg = document.getElementById('profileImage');
    const placeholder = document.getElementById('imagePlaceholder');
    
    // Check if image loads successfully
    profileImg.addEventListener('load', function() {
        placeholder.style.display = 'none';
        profileImg.style.display = 'block';
    });
    
    // If image fails to load, show placeholder
    profileImg.addEventListener('error', function() {
        profileImg.style.display = 'none';
        placeholder.style.display = 'block';
    });
}