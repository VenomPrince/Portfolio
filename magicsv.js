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
// Projects Data
const projects = [
    {
        title: 'Automated RIAA Amplifier Test System (Bachelor’s Thesis)',
        desc: 'Designed an automated test environment for RIAA amplifiers using SCPI-controlled instruments, LabVIEW, and TestStand. The system performs repeatable measurements, logs results, and validates amplifier performance without manual intervention.',
        tech: [
            'LabVIEW',
            'TestStand',
            'SCPI',
            'Oscilloscope & Power Supply Control',
            'Automated Measurement',
            'Electronics Testing'
        ]
    },
    {
        title: 'ESP32-Based Washing Machine Monitoring System',
        desc: 'Developed an embedded system to detect washing machine operating states using vibration sensing. Implemented a dual-MCU architecture where an ATmega328PB handles sensor logic and an Arduino MKR WiFi 1010 provides web interface and notifications.',
        tech: [
            'ESP32 / Arduino MKR WiFi 1010',
            'ATmega328PB',
            'Vibration Sensors',
            'UART Communication',
            'Embedded C / Arduino',
            'IoT Monitoring'
        ]
    },
    {
        title: 'EV Charger & Solar Installation Projects',
        desc: 'Participated in real-world electrical installations including EV chargers, solar panel systems, and three-phase wiring. Performed cable routing, protection devices installation, and safety-compliant commissioning under Finnish electrical standards.',
        tech: [
            'EV Chargers',
            'Solar Panel Systems',
            '3-Phase Power',
            'Electrical Safety (SFS 6002)',
            'AC Wiring',
            'Field Installation'
        ]
    },
    {
        title: 'Embedded Systems & Hardware Prototyping Labs',
        desc: 'Completed multiple embedded systems and electronics laboratory projects involving microcontrollers, PCB design, signal measurement, and fault analysis. Focused on practical debugging and measurement-driven validation.',
        tech: [
            'ESP32',
            'STM32 / AVR',
            'PCB Design (KiCad)',
            'Oscilloscope & Logic Analyzer',
            'EMC & Signal Integrity',
            'Hardware Debugging'
        ]
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