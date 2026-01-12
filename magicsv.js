// Skills Data (Real & Verified)
const skills = {
    'Electronics & Circuit Design': [
        'Analog Circuit Analysis',
        'Digital Logic Circuits',
        'Discrete Component Design',
        'Schematic Capture',
        'Basic PCB Design (KiCad)',
        'NTC & Sensor Circuits'
    ],

    'Programming & Scripting': [
        'C',
        'Embedded C',
        'Arduino Framework',
        'Python (Basic)',
        'SCPI Commands',
        'MATLAB (Basic)'
    ],

    'Microcontrollers & Platforms': [
        'AVR (ATmega328PB)',
        'ESP32',
        'Arduino MKR WiFi 1010',
        'Raspberry Pi 3',
        'Bare-Metal Microcontroller Basics'
    ],

    'Tools & Development Software': [
        'LabVIEW',
        'NI TestStand',
        'KiCad',
        'LTspice',
        'VS Code',
        'WinSCP',
        'Git (Basic)'
    ],

    'Testing & Measurement': [
        'Oscilloscope',
        'Logic Analyzer',
        'Multimeter',
        'Signal Generator',
        'Automated Test Systems',
        'Measurement Documentation'
    ],

    'Communication & Interfaces': [
        'UART',
        'SPI',
        'I2C',
        'USB (Basic)',
        'WiFi (ESP32 / Arduino)',
        'SSH / SCP'
    ],

    'Power & Installations': [
        'AC Wiring (Supervised)',
        '3-Phase Systems (Basic)',
        'EV Charger Installation Assistance',
        'Solar Panel System Assistance',
        'Electrical Safety (SFS 6002)'
    ],

    'Embedded & System Skills': [
        'Embedded Linux (Raspberry Pi)',
        'GPIO Control',
        'Sensor Integration',
        'Fan & Thermal Control',
        'System Debugging',
        'Lab-Based Development'
    ]
};


// Projects Data
const projects = [
    {
        title: 'Automated RIAA Amplifier Test System (Bachelor’s Thesis)',
        desc: 'Designed an automated test environment for RIAA amplifiers using SCPI-controlled instruments, LabVIEW, and TestStand.\n\nThe system performs repeatable measurements, logs results, and validates amplifier performance without manual intervention.',
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
    title: 'RetroPie Arcade System with Custom Thermal Control',
    desc: 'Built a complete RetroPie arcade system during an internship at Metropolia UAS using a Raspberry Pi 3. Implemented a discrete-component temperature control circuit (NTC + transistor) for automatic fan cooling and designed fully 3D-printed arcade controllers for multiplayer gameplay.',
    tech: [
        'Raspberry Pi 3',
        'RetroPie (Linux)',
        'WinSCP / SSH',
        '10k NTC Thermistor',
        'TIP41C Transistor',
        'Analog Temperature Control',
        'Cooling Fan Control',
        '3D Printing',
        'Arcade Controllers'
    ],
    githubLink: 'https://github.com/VenomPrince/Retropie-journey'
},

    {
        title: 'EV Charger & Solar Installation Projects',
        desc: 'Participated in real-world electrical installations including EV chargers, solar panel systems, and three-phase wiring. Performed cable routing, protection device installation, and safety-compliant commissioning under Finnish electrical standards.',
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
        desc: 'Completed multiple embedded systems and electronics laboratory projects involving microcontrollers, PCB design, signal measurement, and fault analysis, with a strong focus on practical debugging and validation.',
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
document.addEventListener('DOMContentLoaded', function () {
    const navBtns = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');

    navBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const targetSection = this.getAttribute('data-section');

            navBtns.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
        });
    });

    loadSkills();
    loadProjects();
    handleProfileImage();
});


// Load Skills
function loadSkills() {
    const premiumSkills = new Set([
    'LabVIEW',
        'NI TestStand',
        'SCPI Commands',
        'Embedded C',
        'AVR (ATmega328PB)',
        'ESP32',
        'Raspberry Pi 3',
        'Automated Test Systems',
        'Oscilloscope',
        'Embedded Linux (Raspberry Pi)',
        'Electrical Safety (SFS 6002)'
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
                tag.classList.add('premium-skill');
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

    profileImg.addEventListener('load', function () {
        placeholder.style.display = 'none';
        profileImg.style.display = 'block';
    });

    profileImg.addEventListener('error', function () {
        profileImg.style.display = 'none';
        placeholder.style.display = 'block';
    });
}
