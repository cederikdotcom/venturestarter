document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the generator page
    const ventureForm = document.getElementById('venture-form');
    if (ventureForm) {
        initializeGenerator();
    }
    
    // Initialize current year in footer
    document.querySelectorAll('footer .container p').forEach(footerText => {
        footerText.innerHTML = footerText.innerHTML.replace('2025', new Date().getFullYear());
    });
});

function initializeGenerator() {
    const ventureForm = document.getElementById('venture-form');
    const exampleSelect = document.getElementById('example-select');
    const resultSection = document.getElementById('result');
    const promptOutput = document.getElementById('prompt-output');
    const copyButton = document.getElementById('copy-prompt');
    
    // Load saved form data from localStorage if available
    loadFormData();
    
    // Save form data to localStorage on input
    ventureForm.addEventListener('input', saveFormData);
    
    // Handle example selection
    exampleSelect.addEventListener('change', function() {
        if (this.value) {
            loadExample(this.value);
        }
    });
    
    // Handle form submission
    ventureForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Generate the prompt
        const prompt = generatePrompt();
        
        // Display the result
        promptOutput.textContent = prompt;
        resultSection.classList.remove('hidden');
        
        // Scroll to result
        resultSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Handle copy button
    copyButton.addEventListener('click', function() {
        copyToClipboard(promptOutput.textContent);
        
        // Change button text temporarily to indicate success
        const originalText = this.textContent;
        this.textContent = 'Copied!';
        this.classList.add('copied');
        
        setTimeout(() => {
            this.textContent = originalText;
            this.classList.remove('copied');
        }, 2000);
    });
    
    // Handle form reset
    ventureForm.addEventListener('reset', function() {
        // Clear localStorage
        localStorage.removeItem('ventureStarterFormData');
        
        // Reset result section
        resultSection.classList.add('hidden');
        
        // Reset example selector
        exampleSelect.value = '';
    });
}

function generatePrompt() {
    const ventureName = document.getElementById('venture-name').value;
    const ventureDescription = document.getElementById('venture-description').value;
    const targetAudience = document.getElementById('target-audience').value;
    const businessModel = document.getElementById('business-model').value;
    const keyFeatures = document.getElementById('key-features').value;
    const technicalRequirements = document.getElementById('technical-requirements').value;
    
    // Format key features as bullet points
    const formattedKeyFeatures = keyFeatures
        .split('\n')
        .map(feature => feature.trim())
        .filter(feature => feature.length > 0)
        .map(feature => `- ${feature}`)
        .join('\n');
    
    // Format technical requirements as bullet points if provided
    let formattedTechnicalRequirements = '';
    if (technicalRequirements.trim()) {
        formattedTechnicalRequirements = 'Technical requirements:\n' + 
            technicalRequirements
                .split('\n')
                .map(req => req.trim())
                .filter(req => req.length > 0)
                .map(req => `- ${req}`)
                .join('\n');
    }
    
    // Get current date in YYYY-MM-DD format
    const currentDate = new Date().toISOString().split('T')[0];
    
    // Construct the prompt
    let prompt = `I'm launching a new venture called ${ventureName} and need you to generate all the standard GitHub documentation based on this description:

${ventureDescription}

The target audience is ${targetAudience}.

The business model is ${businessModel}.

Key features include:
${formattedKeyFeatures}
`;

    // Add technical requirements if provided
    if (formattedTechnicalRequirements) {
        prompt += `\n${formattedTechnicalRequirements}\n`;
    }

    prompt += `
Based on this description, please create the following files as separate artifacts:

1. README.md - Technical instructions for developers
2. docs/salespitch.md - Sales-focused document pitching to potential customers
3. docs/overview.md - Marketing-focused high-level overview (homepage content)
4. docs/architecture.md - Technical explanation of how the product is constructed
5. docs/progress/traction-update-${currentDate}.md - Initial traction update
6. docs/index.html - Landing page for GitHub Pages
7. docs/styles/style.css - Styles for the landing page

For each document, follow these guidelines:

- README.md: Include setup instructions, dependencies, deployment info, and contribution guidelines
- salespitch.md: Focus on benefits, pain points solved, and call to action
- overview.md: Highlight key features, value proposition, and differentiators
- architecture.md: Explain technical stack, components, data flow, and integration points
- traction-update: Document current progress, metrics, and next steps
- index.html: Create a modern, responsive landing page that can be served via GitHub Pages
- style.css: Provide clean, modern styling that works well on all devices

Please create these as separate artifacts that I can easily copy into my GitHub repository structure.`;

    return prompt;
}

function saveFormData() {
    const formData = {
        ventureName: document.getElementById('venture-name').value,
        ventureDescription: document.getElementById('venture-description').value,
        targetAudience: document.getElementById('target-audience').value,
        businessModel: document.getElementById('business-model').value,
        keyFeatures: document.getElementById('key-features').value,
        technicalRequirements: document.getElementById('technical-requirements').value
    };
    
    localStorage.setItem('ventureStarterFormData', JSON.stringify(formData));
}

function loadFormData() {
    const savedData = localStorage.getItem('ventureStarterFormData');
    
    if (savedData) {
        const formData = JSON.parse(savedData);
        
        document.getElementById('venture-name').value = formData.ventureName || '';
        document.getElementById('venture-description').value = formData.ventureDescription || '';
        document.getElementById('target-audience').value = formData.targetAudience || '';
        document.getElementById('business-model').value = formData.businessModel || '';
        document.getElementById('key-features').value = formData.keyFeatures || '';
        document.getElementById('technical-requirements').value = formData.technicalRequirements || '';
    }
}

function loadExample(exampleType) {
    let exampleData = {};
    
    switch(exampleType) {
        case 'saas':
            exampleData = {
                ventureName: 'TaskFlow',
                ventureDescription: 'TaskFlow is a team productivity SaaS platform that helps remote teams organize, prioritize, and track work. It combines task management, time tracking, and team communication in a single interface, eliminating the need for multiple tools.',
                targetAudience: 'Remote tech teams, digital agencies, and distributed companies with 5-500 employees',
                businessModel: 'Freemium with tiered subscription plans (Free, Pro $12/user/month, Enterprise $25/user/month)',
                keyFeatures: 'Kanban and list views for task management\nAutomated task prioritization using AI\nTime tracking with project allocation\nTeam chat and video meetings\nWorkload balancing and capacity planning\nComprehensive reporting and analytics',
                technicalRequirements: 'React frontend with TypeScript\nNode.js backend with Express\nMongoDB for data storage\nWebSocket for real-time updates\nDocker containers for deployment\nResponsive web design for all devices'
            };
            break;
            
        case 'mobile':
            exampleData = {
                ventureName: 'FitQuest',
                ventureDescription: 'FitQuest is a mobile fitness app that turns workouts into interactive adventures. Users complete real-world exercises to progress through story-driven quests, collect rewards, and compete with friends. The app uses gamification to make fitness fun and engaging for people who struggle with workout motivation.',
                targetAudience: 'Casual exercisers aged 25-45 who find traditional fitness apps boring',
                businessModel: 'Free download with in-app purchases for premium quests and optional monthly subscription ($9.99) for advanced features',
                keyFeatures: 'Story-driven workout adventures\nReal-time exercise tracking and form correction\nSocial challenges and friend competitions\nAdaptive difficulty based on fitness level\nVirtual rewards and achievement system\nAudio coaching during workouts\nBeautiful, responsive UI design',
                technicalRequirements: 'React Native for cross-platform support\nFirebase for backend and user authentication\nMotion detection using device sensors\nGPS integration for outdoor activities\nBluetooth connectivity for fitness wearables\nProgressive web app support'
            };
            break;
            
        case 'marketplace':
            exampleData = {
                ventureName: 'CraftConnect',
                ventureDescription: 'CraftConnect is an online marketplace that connects independent artisans and craftspeople directly with consumers. The platform handles discovery, transactions, and logistics, allowing creators to focus on their craft while reaching a global audience. Each seller has a customizable storefront with their brand story and production process.',
                targetAudience: 'Independent artisans/craftspeople and consumers who value handmade, unique items with authentic stories',
                businessModel: '10% commission on sales, plus optional premium seller tools subscription at $25/month',
                keyFeatures: 'Verified artisan profiles with storytelling elements\nSecure payment processing with artisan protection\nIntegrated shipping and logistics management\nCustomer reviews and trust metrics\nDiscover feed with personalized recommendations\nDirect messaging between buyers and creators\nModern, responsive storefront design',
                technicalRequirements: 'Next.js frontend for SEO optimization\nPython/Django backend API\nPostgreSQL database\nAWS infrastructure with CDN for global reach\nStripe Connect for payment processing\nShipment API integrations\nResponsive design system'
            };
            break;
    }
    
    // Populate the form with example data
    document.getElementById('venture-name').value = exampleData.ventureName || '';
    document.getElementById('venture-description').value = exampleData.ventureDescription || '';
    document.getElementById('target-audience').value = exampleData.targetAudience || '';
    document.getElementById('business-model').value = exampleData.businessModel || '';
    document.getElementById('key-features').value = exampleData.keyFeatures || '';
    document.getElementById('technical-requirements').value = exampleData.technicalRequirements || '';
    
    // Generate and display the prompt immediately
    const prompt = generatePrompt();
    const promptOutput = document.getElementById('prompt-output');
    const resultSection = document.getElementById('result');
    
    promptOutput.textContent = prompt;
    resultSection.classList.remove('hidden');
    resultSection.scrollIntoView({ behavior: 'smooth' });
    
    // Save to localStorage
    saveFormData();
}

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
            .catch(err => {
                console.error('Could not copy text: ', err);
                fallbackCopyToClipboard(text);
            });
    } else {
        fallbackCopyToClipboard(text);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    
    // Make the textarea out of viewport
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (!successful) {
            console.error('Fallback: Copying text failed');
        }
    } catch (err) {
        console.error('Fallback: Unable to copy', err);
    }
    
    document.body.removeChild(textArea);
}
