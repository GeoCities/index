const DOWNLOAD_TEMPLATE_STRING = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximu
m-scale=1.0, user-scalable=no">
    <title><!--ENS_NAME_TITLE_PLACEHOLDER--> - GeoCities Profile</title>
    <link rel="icon" id="favicon-downloaded" href="<!--FAVICON_SRC_PLACEHOLDER--
>" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&f
amily=Georgia&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; }
        :root {
            /* THEME_CSS_VARIABLES_PLACEHOLDER */
            /* Example:
            --primary-color: #ffffff;
            --background-color: #000000;
            --border-color: #ffffff;
            --font-main: sans-serif;
            */
        }

        body {
            font-family: var(--font-main);
            background: var(--background-color);
            color: var(--primary-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px 0 80px; /* Increased bottom padding for footer */
            transition: background 0.3s ease, color 0.3s ease; /* Kept for effec
t transitions if any are JS-driven post-load */
            position: relative;
            width: 100%;
            overflow-x: hidden;
        }

        /* Simplified Nav Bar for Downloaded Page */
        .nav-bar-downloaded {
            position: relative;
            height: 80px;
            background: var(--background-color);
            display: flex;
            align-items: center;
            justify-content: center; /* Center the logo */
            padding: 0 20px;
            z-index: 1;
            width: 90%; /* var(--container-width) equivalent */
            max-width: 1200px; /* var(--max-width) equivalent */
            box-sizing: border-box;
            margin-bottom: 20px;
            border: none;
        }

        .nav-logo-img-downloaded { /* Class for the img tag itself if needed, or
 style #nav-logo-img-downloaded */
            width: 80px;
            height: 80px;
            object-fit: contain;
            object-position: center;
            display: block;
            margin: 0;
            border: 1px solid var(--border-color);
        }

        /* Profile Container for Downloaded Page */
        .profile-container-downloaded {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 90%; /* var(--container-width) equivalent */
            max-width: 420px; /* Fixed max-width for profile content area */
            flex-grow: 1;
            margin: 0 auto;
            padding-bottom: 20px; /* Space for footer */
        }

        .loading-spinner-downloaded {
            display: none; /* Initially hidden, shown by JS */
            width: 40px;
            height: 40px;
            border: 3px solid var(--border-color); /* Uses theme border color */
            border-radius: 50%;
            border-top-color: transparent;
            animation: spin-downloaded 1s linear infinite;
            margin: 20px auto;
        }

        .error-message-downloaded {
            display: none; /* Initially hidden */
            color: var(--primary-color); /* Or a specific error color */
            background-color: rgba(255,0,0,0.1); /* Subtle error background */
            border: 1px solid red;
            padding: 10px;
            margin: 10px auto;
            width: 100%;
            text-align: center;
        }

        .profile-header-image-downloaded {
            width: 100%;
            height: 0;
            padding-bottom: 33.33%; /* 3:1 ratio */
            border: 1px solid var(--border-color);
            box-sizing: border-box;
            overflow: hidden;
            position: relative;
            margin-bottom: 0; /* Records attach directly below */
            display: none; /* Hidden by default, shown by JS if header exists */
        }

        .profile-header-image-downloaded img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            position: absolute;
            top: 0;
            left: 0;
            display: block;
        }

        .profile-records-downloaded {
            width: 100%;
            border: 1px solid var(--border-color);
            box-sizing: border-box;
            background-color: var(--background-color);
        }

        .profile-record { /* Re-using class from main site for consistency */
            padding: 15px;
            border-bottom: 1px solid var(--border-color);
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .profile-record:last-child {
            border-bottom: none;
        }

        .record-label {
            font-weight: bold;
            min-width: 100px;
            padding-right: 10px;
        }

        .record-value {
            flex: 1;
            word-break: break-word;
        }

        .profile-record a { /* Styling for links within records */
            color: inherit; /* Inherits --primary-color */
            text-decoration: underline;
            transition: opacity 0.3s ease;
        }

        .profile-record a:hover {
            opacity: 0.8;
        }

        /* Responsive adjustments for profile records */
        @media (max-width: 480px) {
            .profile-record {
                padding: 12px;
            }
            .record-label {
                min-width: 80px;
                font-size: 0.9em;
            }
            .record-value {
                font-size: 0.9em;
            }
        }

        /* Footer for Downloaded Page */
        .footer-downloaded {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 38px;
            background: var(--background-color);
            border-top: 1px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            transition: all 0.3s ease;
        }

        .footer-downloaded a {
            color: inherit;
            text-decoration: none;
            font-size: 0.9em;
            transition: opacity 0.3s ease;
        }

        .footer-downloaded a:hover {
            opacity: 0.8;
        }

        /* Keyframes for loading spinner (if not already part of effect keyframe
s) */
        @keyframes spin-downloaded {
            to { transform: rotate(360deg); }
        }

        /* EFFECT_KEYFRAMES_PLACEHOLDER */
        /* Example:
        @keyframes matrixFall { ... }
        */

    </style>
</head>
<body>
    <nav class="nav-bar-downloaded">
        <img id="nav-logo-img-downloaded" src="<!--AVATAR_SRC_PLACEHOLDER-->" al
t="Avatar" class="nav-logo-img-downloaded">
    </nav>

    <div class="profile-container-downloaded">
        <div id="loading-spinner-downloaded" class="loading-spinner-downloaded">
</div>
        <div id="error-message-downloaded" class="error-message-downloaded"></di
v>

        <div class="profile-header-image-downloaded">
            <!-- Header image img tag will be inserted here by JS if data.header
 exists -->
        </div>
        <div class="profile-records-downloaded">
            <!-- Profile records will be inserted here by JS -->
        </div>
    </div>

    <footer class="footer-downloaded">
        <a href="https://geocities.eth.link" target="_blank" rel="noopener noref
errer">GeoCities</a>
    </footer>

    <script>
        // EMBEDDED_JS_LOGIC_PLACEHOLDER
    </script>
</body>
</html>
`;

// Constants
const API_BASE_URL = 'https://api.web3.bio';
const DEFAULT_AVATAR = 'https://raw.githubusercontent.com/GeoCities/Ads/main/Ads/Nyan%20Cat%20-%20GeoCities.gif';

// Get DOM elements
const bgColorPicker = document.getElementById('bg-color');
const textColorPicker = document.getElementById('text-color');
const borderColorPicker = document.getElementById('border-color');
const effectSelect = document.getElementById('effect-select');
const themeToggle = document.getElementById('theme-toggle');

// Utility functions
function showLoading() {
    document.querySelector('.loading-spinner').style.display = 'block';
}

function hideLoading() {
    document.querySelector('.loading-spinner').style.display = 'none';
}

function showError(message) {
    const errorElement = document.querySelector('.error-message');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError() {
    document.querySelector('.error-message').style.display = 'none';
}

function createDefaultAvatar(letter) {
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');
    
    const computedStyle = getComputedStyle(document.documentElement);
    const bgColor = computedStyle.getPropertyValue('--background-color').trim() || '#000000';
    const textColor = computedStyle.getPropertyValue('--primary-color').trim() || '#ffffff';
    const borderColor = computedStyle.getPropertyValue('--border-color').trim() || '#ffffff';
    
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 1;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = textColor;
    ctx.font = 'bold 100px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(letter ? letter.toUpperCase() : '?', canvas.width / 2, canvas.height / 2);
    
    return canvas.toDataURL('image/png');
}

function setAvatar(avatarUrl) {
    const navLogo = document.getElementById('nav-logo-img');
    const favicon = document.getElementById('favicon');
    
    const url = avatarUrl || DEFAULT_AVATAR;
    navLogo.src = url;
    favicon.href = url;
}

// Initialize GeoCities avatar
async function initializeGeoCitiesAvatar() {
    try {
        setAvatar(DEFAULT_AVATAR);
        
        const response = await fetch(`${API_BASE_URL}/profile/ens/geocities.eth`);
        if (response.ok) {
            const data = await response.json();
            if (data.avatar) {
                setAvatar(data.avatar);
            }
        }
    } catch (error) {
        console.error('Error fetching GeoCities avatar:', error);
    }
}

// Theme toggle functionality
function toggleTheme() {
    const isLight = document.body.dataset.theme === 'light';
    
    // Update theme
    document.body.dataset.theme = isLight ? '' : 'light';
    themeToggle.textContent = isLight ? 'Light' : 'Dark';
    
    // Reset all effects
    removeAllEffects();
    
    // Reset color pickers and CSS variables to default theme colors
    if (isLight) {
        // Switching to dark mode
        const darkDefaults = {
            background: '#000000',
            text: '#ffffff',
            border: '#ffffff'
        };
        
        // Reset CSS variables
        document.documentElement.style.setProperty('--background-color', darkDefaults.background);
        document.documentElement.style.setProperty('--primary-color', darkDefaults.text);
        document.documentElement.style.setProperty('--border-color', darkDefaults.border);
        
        // Reset color pickers
        if (bgColorPicker) bgColorPicker.value = darkDefaults.background;
        if (textColorPicker) textColorPicker.value = darkDefaults.text;
        if (borderColorPicker) borderColorPicker.value = darkDefaults.border;
    } else {
        // Switching to light mode
        const lightDefaults = {
            background: '#ffffff',
            text: '#000000',
            border: '#000000'
        };
        
        // Reset CSS variables
        document.documentElement.style.setProperty('--background-color', lightDefaults.background);
        document.documentElement.style.setProperty('--primary-color', lightDefaults.text);
        document.documentElement.style.setProperty('--border-color', lightDefaults.border);
        
        // Reset color pickers
        if (bgColorPicker) bgColorPicker.value = lightDefaults.background;
        if (textColorPicker) textColorPicker.value = lightDefaults.text;
        if (borderColorPicker) borderColorPicker.value = lightDefaults.border;
    }
    
    // Reset effect select
    if (effectSelect) {
        effectSelect.value = 'none';
    }
}

// Style-related functions
function applyCustomStyles(event) {
    // Only apply custom styles if the change was triggered by user interaction
    if (!event || !event.isTrusted) return;

    const bgColorPicker = document.getElementById('bg-color');
    const textColorPicker = document.getElementById('text-color');
    const borderColorPicker = document.getElementById('border-color');

    if (!bgColorPicker || !textColorPicker || !borderColorPicker) return;

    // Update only the specific CSS variable that changed
    const target = event?.target;
    if (target) {
        switch(target.id) {
            case 'bg-color':
                document.documentElement.style.setProperty('--background-color', bgColorPicker.value);
                break;
            case 'text-color':
                document.documentElement.style.setProperty('--primary-color', textColorPicker.value);
                break;
            case 'border-color':
                document.documentElement.style.setProperty('--border-color', borderColorPicker.value);
                break;
        }
    }
}

function handleEffectChange() {
    removeAllEffects();
    
    switch(effectSelect.value) {
        case 'glow':
            applyGlowEffect();
            break;
        case 'snow':
            addSnowEffect();
            break;
        case 'stars':
            applyStarsEffect();
            break;
        case 'rainbow':
            applyRainbowEffect();
            break;
        case 'matrix':
            applyMatrixEffect();
            break;
        case 'fireflies':
            applyFirefliesEffect();
            break;
        case 'confetti':
            applyConfettiEffect();
            break;
        case 'neon':
            applyNeonEffect();
            break;
        case 'vaporware':
            applyVaporwareEffect();
            break;
    }
}

function removeAllEffects() {
    removeSnowEffect();
    removeGlowEffect();
    removeStarsEffect();
    removeRainbowEffect();
    removeMatrixEffect();
    removeFirefliesEffect();
    removeConfettiEffect();
    removeNeonEffect();
    removeVaporwareEffect();
}

function applyGlowEffect() {
    const borderedElements = document.querySelectorAll(
        '.nav-logo, .search-input, .search-button, #theme-toggle, ' +
        '.profile-records, .profile-record, .profile-header-image, .footer, ' +
        '.color-button, .effect-select'
    );
    
    borderedElements.forEach(el => {
        // Create a much stronger, static glow effect with multiple layers
        const color = borderColorPicker.value;
        el.style.boxShadow = `0 0 5px ${color},
                             0 0 10px ${color},
                             0 0 20px ${color},
                             0 0 30px ${color},
                             0 0 40px ${color}`;
        el.style.transition = 'box-shadow 0.3s ease';
    });
}

function removeGlowEffect() {
    const elements = document.querySelectorAll(
        '.nav-logo, .search-input, .search-button, #theme-toggle, ' +
        '.profile-records, .profile-record, .profile-header-image, .footer, ' +
        '.color-button, .effect-select'
    );
    elements.forEach(el => {
        el.style.boxShadow = 'none';
        el.style.animation = 'none';
    });
}

function addSnowEffect() {
    // Only add if it doesn't exist yet
    if (!document.getElementById('snow-container')) {
        const snowContainer = document.createElement('div');
        snowContainer.id = 'snow-container';
        snowContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
            z-index: 50;
            overflow: hidden;
        `;
        
        // Add the snow animations style
        const snowStyle = document.createElement('style');
        snowStyle.textContent = `
            @keyframes snowFall {
                0% {
                    transform: translateY(-100vh) rotate(0deg);
                }
                100% {
                    transform: translateY(100vh) rotate(360deg);
                }
            }
            
            @keyframes snowSway {
                0% {
                    transform: translateX(-15px);
                }
                100% {
                    transform: translateX(15px);
                }
            }
            
            .snowflake {
                position: absolute;
                background: white;
                border-radius: 50%;
                pointer-events: none;
                transform-origin: top;
            }
        `;
        document.head.appendChild(snowStyle);
        
        // Create more snowflakes with varied properties
        for (let i = 0; i < 150; i++) {
            const snowflake = document.createElement('div');
            const size = Math.random() * 4 + 1; // Smaller size range for more realism
            const startingLeft = Math.random() * 100;
            const animDuration = Math.random() * 8 + 12; // Slower fall
            const animDelay = Math.random() * 15; // More varied delays
            const blur = Math.random() * 2 + 0.5; // Add blur for depth
            const opacity = Math.random() * 0.4 + 0.1; // Lower opacity for subtlety
            
            snowflake.className = 'snowflake';
            snowflake.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                top: -${size}px;
                left: ${startingLeft}%;
                opacity: ${opacity};
                filter: blur(${blur}px);
                animation: snowFall ${animDuration}s linear infinite,
                         snowSway ${animDuration * 0.5}s ease-in-out infinite alternate;
                animation-delay: -${animDelay}s;
            `;
            
            snowContainer.appendChild(snowflake);
        }
        
        document.body.appendChild(snowContainer);
    }
}

function removeSnowEffect() {
    const snowContainer = document.getElementById('snow-container');
    if (snowContainer) {
        snowContainer.remove();
    }
}

function applyStarsEffect() {
    const starsContainer = document.createElement('div');
    starsContainer.id = 'stars-container';
    starsContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: 50;
        overflow: hidden;
    `;
    
    const starColors = ['#ffffff', '#ffff00', '#00ffff', '#ff00ff'];
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 2 + 1;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const animDuration = Math.random() * 3 + 2;
        const animDelay = Math.random() * 2;
        const color = starColors[Math.floor(Math.random() * starColors.length)];
        
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            left: ${left}%;
            top: ${top}%;
            opacity: ${Math.random() * 0.8 + 0.2};
            pointer-events: none;
            animation: starTwinkle ${animDuration}s ease-in-out infinite;
            animation-delay: -${animDelay}s;
        `;
        
        starsContainer.appendChild(star);
    }
    
    document.body.appendChild(starsContainer);
}

function removeStarsEffect() {
    const starsContainer = document.getElementById('stars-container');
    if (starsContainer) {
        starsContainer.remove();
    }
}

function applyRainbowEffect() {
    const elements = document.querySelectorAll('.nav-logo, .search-input, .search-button, #theme-toggle, .profile-records, .profile-record, .profile-header-image, .footer, .color-button, .effect-select');
    elements.forEach(el => {
        el.style.animation = 'rainbowBorder 3s linear infinite';
    });
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes rainbowBorder {
            0% { border-color: #ff0000; }
            16.666% { border-color: #ff8000; }
            33.333% { border-color: #ffff00; }
            50% { border-color: #00ff00; }
            66.666% { border-color: #0000ff; }
            83.333% { border-color: #8000ff; }
            100% { border-color: #ff0000; }
        }
    `;
    document.head.appendChild(styleSheet);
}

function removeRainbowEffect() {
    const elements = document.querySelectorAll('.nav-logo, .search-input, .search-button, #theme-toggle, .profile-records, .profile-record, .profile-header-image, .footer, .color-button, .effect-select');
    elements.forEach(el => {
        el.style.animation = '';
    });
}

function applyMatrixEffect() {
    const matrixContainer = document.createElement('div');
    matrixContainer.id = 'matrix-container';
    matrixContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: 40;
        overflow: hidden;
        opacity: 0.15;
    `;
    
    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
    const columns = Math.floor(window.innerWidth / 30);
    
    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        const duration = Math.random() * 4 + 7.92;
        column.style.cssText = `
            position: absolute;
            top: -100px;
            left: ${i * 30}px;
            color: #00ff00;
            font-family: monospace;
            font-size: 18px;
            line-height: 18px;
            animation: matrixFall ${duration}s linear infinite;
            animation-delay: -${Math.random() * 8}s;
            text-shadow: 0 0 8px #00ff00, 0 0 15px #00ff00, 0 0 20px #00ff00;
        `;
        
        let text = '';
        const length = 35;
        for (let j = 0; j < length; j++) {
            const char = characters[Math.floor(Math.random() * characters.length)];
            if (j < 2 && Math.random() > 0.5) {
                text += `<span style="color: #ffffff; text-shadow: 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff;">${char}</span><br>`;
            } else {
                text += `${char}<br>`;
            }
        }
        column.innerHTML = text;
        matrixContainer.appendChild(column);
    }
    
    const matrixStyle = document.createElement('style');
    matrixStyle.textContent = `
        @keyframes matrixFall {
            0% {
                transform: translateY(-100%);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(matrixStyle);
    
    document.body.appendChild(matrixContainer);
}

function removeMatrixEffect() {
    const matrixContainer = document.getElementById('matrix-container');
    if (matrixContainer) {
        matrixContainer.remove();
    }
}

function applyFirefliesEffect() {
    const firefliesContainer = document.createElement('div');
    firefliesContainer.id = 'fireflies-container';
    firefliesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: 40;
        overflow: hidden;
    `;
    
    for (let i = 0; i < 30; i++) {
        const firefly = document.createElement('div');
        const size = Math.random() * 4 + 2;
        firefly.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: #ffff00;
            border-radius: 50%;
            box-shadow: 0 0 ${size * 2}px #ffff00;
            animation: fireflyFloat ${Math.random() * 4 + 3}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.6 + 0.4};
        `;
        firefliesContainer.appendChild(firefly);
    }
    
    const fireflyStyle = document.createElement('style');
    fireflyStyle.textContent = `
        @keyframes fireflyFloat {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
            50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
            75% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
        }
    `;
    document.head.appendChild(fireflyStyle);
    document.body.appendChild(firefliesContainer);
}

function removeFirefliesEffect() {
    const container = document.getElementById('fireflies-container');
    if (container) {
        container.remove();
    }
}

function applyConfettiEffect() {
    const confettiContainer = document.createElement('div');
    confettiContainer.id = 'confetti-container';
    confettiContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: 40;
        overflow: hidden;
    `;
    
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            left: ${Math.random() * 100}%;
            top: -${size}px;
            animation: confettiFall ${Math.random() * 3 + 2}s linear infinite;
            animation-delay: -${Math.random() * 5}s;
            transform: rotate(${Math.random() * 360}deg);
        `;
        confettiContainer.appendChild(confetti);
    }
    
    const confettiStyle = document.createElement('style');
    confettiStyle.textContent = `
        @keyframes confettiFall {
            0% { transform: translateY(0) rotate(0deg); }
            100% { transform: translateY(100vh) rotate(360deg); }
        }
    `;
    document.head.appendChild(confettiStyle);
    document.body.appendChild(confettiContainer);
}

function removeConfettiEffect() {
    const container = document.getElementById('confetti-container');
    if (container) {
        container.remove();
    }
}

function applyNeonEffect() {
    const elements = document.querySelectorAll('.nav-logo, .search-input, .search-button, #theme-toggle, .profile-records, .profile-record, .profile-header-image, .footer, .color-button, .effect-select');
    elements.forEach(el => {
        el.style.textShadow = `0 0 5px ${borderColorPicker.value}, 0 0 10px ${borderColorPicker.value}`;
        el.style.boxShadow = `0 0 5px ${borderColorPicker.value}, 0 0 10px ${borderColorPicker.value}`;
        el.style.animation = 'neonPulse 1.5s ease-in-out infinite';
    });
    
    const neonStyle = document.createElement('style');
    neonStyle.textContent = `
        @keyframes neonPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
        }
    `;
    document.head.appendChild(neonStyle);
}

function removeNeonEffect() {
    const elements = document.querySelectorAll('.nav-logo, .search-input, .search-button, #theme-toggle, .profile-records, .profile-record, .profile-header-image, .footer, .color-button, .effect-select');
    elements.forEach(el => {
        el.style.textShadow = '';
        el.style.boxShadow = '';
        el.style.animation = '';
    });
}

function applyVaporwareEffect() {
    document.body.style.background = 'linear-gradient(45deg, #ff00ff, #00ffff)';
    document.body.style.backgroundSize = '100% 100%';
    
    const navBar = document.querySelector('.nav-bar');
    if (navBar) {
        navBar.style.backgroundColor = 'transparent';
        navBar.style.borderColor = '#ffffff';
    }
}

function removeVaporwareEffect() {
    document.body.style.background = '';
    document.body.style.backgroundSize = '';
    
    const navBar = document.querySelector('.nav-bar');
    if (navBar) {
        navBar.style.backgroundColor = '';
        navBar.style.borderColor = '';
    }
}

// Add the download functionality
async function generateDownload() {
    try {
        // Get current profile data
        const profileNameElement = document.querySelector('.profile-record .record-value');
        if (!profileNameElement) {
            throw new Error('No profile data found to download');
        }

        const ensName = profileNameElement.textContent;
        const avatarUrl = document.getElementById('nav-logo-img').src;
        
        // Get current styling
        const currentStyles = {
            backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--background-color').trim(),
            textColor: getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim(),
            borderColor: getComputedStyle(document.documentElement).getPropertyValue('--border-color').trim(),
            currentEffect: effectSelect ? effectSelect.value : 'none'
        };

        // Get profile records and header
        const profileRecords = document.querySelector('.profile-records').innerHTML;
        const headerImage = document.querySelector('.profile-header-image');
        const headerHTML = headerImage && headerImage.style.display !== 'none' ? headerImage.outerHTML : '';

        // Generate effect styles
        let effectStyles = '';
        if (currentStyles.currentEffect !== 'none') {
            effectStyles = generateEffectStyles(currentStyles.currentEffect);
        }

        // Add effect initialization code
        const effectInitCode = {
            matrix: `
                function initializeMatrixEffect() {
                    const container = document.createElement('div');
                    container.className = 'matrix-effect';
                    document.body.appendChild(container);

                    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
                    const columns = Math.floor(window.innerWidth / 30);

                    for (let i = 0; i < columns; i++) {
                        const column = document.createElement('div');
                        column.className = 'matrix-column';
                        const duration = Math.random() * 4 + 7.92;
                        column.style.left = i * 30 + 'px';
                        column.style.animation = \`matrixFall \${duration}s linear infinite\`;
                        column.style.animationDelay = -Math.random() * 8 + 's';

                        let text = '';
                        const length = 35;
                        for (let j = 0; j < length; j++) {
                            const char = characters[Math.floor(Math.random() * characters.length)];
                            if (j < 2 && Math.random() > 0.5) {
                                text += \`<span style="color: #ffffff; text-shadow: 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff;">\${char}</span><br>\`;
                            } else {
                                text += \`\${char}<br>\`;
                            }
                        }
                        column.innerHTML = text;
                        container.appendChild(column);
                    }
                }
                document.addEventListener('DOMContentLoaded', initializeMatrixEffect);
            `,
            snow: `
                function initializeSnowEffect() {
                    const container = document.createElement('div');
                    container.className = 'snow-container';
                    document.body.appendChild(container);

                    for (let i = 0; i < 50; i++) {
                        const snow = document.createElement('div');
                        snow.className = 'snowflake';
                        const size = Math.random() * 8 + 2;
                        snow.style.width = size + 'px';
                        snow.style.height = size + 'px';
                        snow.style.left = Math.random() * 100 + '%';
                        snow.style.opacity = Math.random() * 0.6 + 0.4;
                        snow.style.animation = \`snowFall \${Math.random() * 3 + 2}s linear infinite\`;
                        snow.style.animationDelay = -Math.random() * 5 + 's';
                        container.appendChild(snow);
                    }
                }
                document.addEventListener('DOMContentLoaded', initializeSnowEffect);
            `,
            stars: `
                function initializeStarsEffect() {
                    const container = document.createElement('div');
                    container.className = 'stars-container';
                    document.body.appendChild(container);

                    const starColors = ['#ffffff', '#ffff00', '#00ffff', '#ff00ff'];
                    for (let i = 0; i < 100; i++) {
                        const star = document.createElement('div');
                        star.className = 'star';
                        const size = Math.random() * 2 + 1;
                        star.style.width = size + 'px';
                        star.style.height = size + 'px';
                        star.style.left = Math.random() * 100 + '%';
                        star.style.top = Math.random() * 100 + '%';
                        star.style.background = starColors[Math.floor(Math.random() * starColors.length)];
                        star.style.animation = \`starTwinkle \${Math.random() * 3 + 2}s ease-in-out infinite\`;
                        star.style.animationDelay = -Math.random() * 2 + 's';
                        container.appendChild(star);
                    }
                }
                document.addEventListener('DOMContentLoaded', initializeStarsEffect);
            `,
            fireflies: `
                function initializeFirefliesEffect() {
                    const container = document.createElement('div');
                    container.className = 'fireflies-container';
                    document.body.appendChild(container);

                    for (let i = 0; i < 30; i++) {
                        const firefly = document.createElement('div');
                        firefly.className = 'firefly';
                        const size = Math.random() * 4 + 2;
                        firefly.style.width = size + 'px';
                        firefly.style.height = size + 'px';
                        firefly.style.left = Math.random() * 100 + '%';
                        firefly.style.top = Math.random() * 100 + '%';
                        firefly.style.setProperty('--size', size * 2 + 'px');
                        firefly.style.setProperty('--x1', (Math.random() * 100 - 50) + 'px');
                        firefly.style.setProperty('--y1', (Math.random() * 100 - 50) + 'px');
                        firefly.style.setProperty('--x2', (Math.random() * 100 - 50) + 'px');
                        firefly.style.setProperty('--y2', (Math.random() * 100 - 50) + 'px');
                        firefly.style.setProperty('--x3', (Math.random() * 100 - 50) + 'px');
                        firefly.style.setProperty('--y3', (Math.random() * 100 - 50) + 'px');
                        firefly.style.animation = \`fireflyFloat \${Math.random() * 4 + 3}s ease-in-out infinite\`;
                        container.appendChild(firefly);
                    }
                }
                document.addEventListener('DOMContentLoaded', initializeFirefliesEffect);
            `,
            confetti: `
                function initializeConfettiEffect() {
                    const container = document.createElement('div');
                    container.className = 'confetti-container';
                    document.body.appendChild(container);

                    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
                    for (let i = 0; i < 100; i++) {
                        const confetti = document.createElement('div');
                        confetti.className = 'confetti';
                        const size = Math.random() * 10 + 5;
                        confetti.style.width = size + 'px';
                        confetti.style.height = size + 'px';
                        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                        confetti.style.left = Math.random() * 100 + '%';
                        confetti.style.animation = \`confettiFall \${Math.random() * 3 + 2}s linear infinite\`;
                        confetti.style.animationDelay = -Math.random() * 5 + 's';
                        confetti.style.transform = \`rotate(\${Math.random() * 360}deg)\`;
                        container.appendChild(confetti);
                    }
                }
                document.addEventListener('DOMContentLoaded', initializeConfettiEffect);
            `
        };

        // Add the effect initialization code to the HTML template
        const effectInit = currentStyles.currentEffect !== 'none' && effectInitCode[currentStyles.currentEffect] 
            ? effectInitCode[currentStyles.currentEffect] 
            : '';

        // Update the script section in the HTML template
        const scriptSection = `
        <script>
            ${effectInit}
        </script>
        `;

        // Create HTML content
        const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>${ensName}</title>
    <link rel="icon" href="${avatarUrl}" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Georgia&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; }
        :root {
            --primary-color: ${currentStyles.textColor};
            --background-color: ${currentStyles.backgroundColor};
            --border-color: ${currentStyles.borderColor};
            --font-main: sans-serif;
        }

        body {
            font-family: var(--font-main);
            background: var(--background-color);
            color: var(--primary-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px 0 80px;
            transition: background 0.3s ease, color 0.3s ease;
            position: relative;
            width: 100%;
            overflow-x: hidden;
        }

        .nav-bar {
            width: 90%;
            max-width: 1200px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding: 0 20px;
            box-sizing: border-box;
            margin: 20px auto;
        }

        .nav-logo {
            width: 80px;
            height: 80px;
            border: 1px solid var(--border-color);
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: var(--primary-color);
            cursor: pointer;
        }

        .nav-logo img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .profile-container {
            width: 420px;
            max-width: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 40px auto;
        }

        .profile-header-image {
            width: 100%;
            height: 0;
            padding-bottom: 33.33%;
            border: 1px solid var(--border-color);
            box-sizing: border-box;
            overflow: hidden;
            position: relative;
            margin-bottom: 0;
            display: block;
        }

        .profile-header-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            position: absolute;
            top: 0;
            left: 0;
        }

        .profile-records {
            width: 100%;
            border: 1px solid var(--border-color);
            box-sizing: border-box;
            background-color: var(--background-color);
        }

        .profile-record {
            padding: 15px;
            border-bottom: 1px solid var(--border-color);
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .profile-record:last-child {
            border-bottom: none;
        }

        .record-label {
            font-weight: bold;
            min-width: 100px;
            padding-right: 10px;
        }

        .record-value {
            flex: 1;
            word-break: break-word;
        }

        .record-value a {
            color: inherit;
            text-decoration: underline;
        }

        .footer {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 38px;
            background: var(--background-color);
            border-top: 1px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .footer a {
            color: inherit;
            text-decoration: none;
            font-size: 0.9em;
        }

        @media (max-width: 768px) {
            .profile-container {
                width: 95%;
            }
        }

        ${effectStyles}
    </style>
</head>
<body>
    <nav class="nav-bar">
        <a href="#" class="nav-logo" onclick="window.location.reload()">
            <img src="${avatarUrl}" alt="${ensName}">
        </a>
    </nav>

    <div class="profile-container">
        ${headerHTML}
        <div class="profile-records">
            ${profileRecords}
        </div>
    </div>

    <footer class="footer">
        <a href="https://geocities.eth.link" target="_blank" rel="noopener noreferrer">GeoCities</a>
    </footer>

    ${scriptSection}
</body>
</html>`;

        // Create download link
        const downloadLink = document.createElement('a');
        downloadLink.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(html));
        downloadLink.setAttribute('download', `${ensName.replace(/\s+/g, '-').toLowerCase()}.html`);
        
        // Trigger download
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        
    } catch (error) {
        console.error('Error generating download:', error);
        const errorToast = document.createElement('div');
        errorToast.textContent = 'Error downloading website. Please try again.';
        errorToast.style.cssText = `
            position: fixed;
            bottom: 50px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(255, 0, 0, 0.7);
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            z-index: 2000;
        `;
        document.body.appendChild(errorToast);
        setTimeout(() => {
            errorToast.style.opacity = '0';
            errorToast.style.transition = 'opacity 0.5s ease';
            setTimeout(() => document.body.removeChild(errorToast), 500);
        }, 3000);
    }
}

// Helper function to generate effect styles
function generateEffectStyles(effectName) {
    switch(effectName) {
        case 'matrix':
            return `
                @keyframes matrixFall {
                    0% {
                        transform: translateY(-100%);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(100%);
                        opacity: 0;
                    }
                }

                .matrix-effect {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    pointer-events: none;
                    z-index: 40;
                    overflow: hidden;
                    opacity: 0.15;
                }

                .matrix-column {
                    position: absolute;
                    top: -100px;
                    color: #00ff00;
                    font-family: monospace;
                    font-size: 18px;
                    line-height: 18px;
                    white-space: nowrap;
                    text-shadow: 0 0 8px #00ff00, 0 0 15px #00ff00, 0 0 20px #00ff00;
                    animation: matrixFall linear infinite;
                }
            `;
        case 'glow':
            return `
                @keyframes glowPulse {
                    0%, 100% { box-shadow: 0 0 5px var(--border-color), 0 0 10px var(--border-color); }
                    50% { box-shadow: 0 0 10px var(--border-color), 0 0 20px var(--border-color); }
                }
                .nav-logo, .profile-records, .profile-record, .profile-header-image, .footer {
                    box-shadow: 0 0 5px var(--border-color), 0 0 10px var(--border-color);
                    animation: glowPulse 2s infinite;
                }
            `;
        case 'snow':
            return `
                @keyframes snowFall {
                    0% {
                        transform: translateY(-100%) rotate(0deg);
                    }
                    100% {
                        transform: translateY(100vh) rotate(360deg);
                    }
                }
                .snow-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 1000;
                }
                .snowflake {
                    position: absolute;
                    background: var(--primary-color);
                    border-radius: 50%;
                    pointer-events: none;
                    animation: snowFall linear infinite;
                }
            `;
        case 'stars':
            return `
                @keyframes starTwinkle {
                    0%, 100% { opacity: 0.2; }
                    50% { opacity: 1; }
                }
                .stars-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    pointer-events: none;
                    z-index: 50;
                    overflow: hidden;
                }
                .star {
                    position: absolute;
                    background: #ffffff;
                    border-radius: 50%;
                    pointer-events: none;
                    animation: starTwinkle ease-in-out infinite;
                }
            `;
        case 'rainbow':
            return `
                @keyframes rainbowBorder {
                    0% { border-color: #ff0000; }
                    16.666% { border-color: #ff8000; }
                    33.333% { border-color: #ffff00; }
                    50% { border-color: #00ff00; }
                    66.666% { border-color: #0000ff; }
                    83.333% { border-color: #8000ff; }
                    100% { border-color: #ff0000; }
                }
                .nav-logo, .profile-records, .profile-record, .profile-header-image, .footer {
                    animation: rainbowBorder 3s linear infinite;
                }
            `;
        case 'fireflies':
            return `
                @keyframes fireflyFloat {
                    0%, 100% { transform: translate(0, 0); }
                    25% { transform: translate(var(--x1), var(--y1)); }
                    50% { transform: translate(var(--x2), var(--y2)); }
                    75% { transform: translate(var(--x3), var(--y3)); }
                }
                .fireflies-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    pointer-events: none;
                    z-index: 40;
                    overflow: hidden;
                }
                .firefly {
                    position: absolute;
                    background: #ffff00;
                    border-radius: 50%;
                    box-shadow: 0 0 var(--size) #ffff00;
                    pointer-events: none;
                    animation: fireflyFloat ease-in-out infinite;
                }
            `;
        case 'confetti':
            return `
                @keyframes confettiFall {
                    0% { transform: translateY(-100vh) rotate(0deg); }
                    100% { transform: translateY(100vh) rotate(360deg); }
                }
                .confetti-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    pointer-events: none;
                    z-index: 40;
                    overflow: hidden;
                }
                .confetti {
                    position: absolute;
                    pointer-events: none;
                    animation: confettiFall linear infinite;
                }
            `;
        case 'neon':
            return `
                @keyframes neonPulse {
                    0%, 100% { opacity: 1; text-shadow: 0 0 5px var(--border-color), 0 0 10px var(--border-color); }
                    50% { opacity: 0.8; text-shadow: 0 0 10px var(--border-color), 0 0 20px var(--border-color); }
                }
                .nav-logo, .profile-records, .profile-record, .profile-header-image, .footer {
                    text-shadow: 0 0 5px var(--border-color), 0 0 10px var(--border-color);
                    box-shadow: 0 0 5px var(--border-color), 0 0 10px var(--border-color);
                    animation: neonPulse 1.5s ease-in-out infinite;
                }
            `;
        case 'vaporware':
            return `
                body {
                    background: linear-gradient(45deg, #ff00ff, #00ffff);
                    background-size: 100% 100%;
                }
                .nav-bar {
                    background: transparent;
                    border-color: #ffffff;
                }
            `;
        default:
            return '';
    }
}

// Profile-related functions
async function fetchProfile(query) {
    try {
        showLoading();
        hideError();
        
        // Remove any existing register button container
        const existingRegisterContainer = document.querySelector('.register-container');
        if (existingRegisterContainer) {
            existingRegisterContainer.remove();
        }
        
        // Format the query
        query = query.trim().toLowerCase();
        if (!query) {
            throw new Error('Please enter a name to search.');
        }
        if (/\s/.test(query)) {
            throw new Error('Name cannot contain spaces.');
        }

        const ensName = (query.endsWith('.eth') || query.endsWith('.base.eth')) ? query : `${query}.eth`;
        
        // Determine the correct API endpoint
        let url = `${API_BASE_URL}/profile/ens/${ensName}`;
        if (ensName.endsWith('.base.eth')) {
            url = `${API_BASE_URL}/profile/basenames/${ensName}`;
        }

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                displayProfile(data, ensName);
            } else if (response.status === 404) {
                displayUnregisteredProfile(ensName);
            } else {
                let errorText = `Error: ${response.statusText}`;
                try {
                    const errorData = await response.json();
                    errorText = errorData?.message || errorData?.error || `Error ${response.status}: ${response.statusText}`;
                    if (errorText.toLowerCase().includes("invalid name")) {
                        errorText = `Invalid name format: ${ensName}`;
                    } else if (response.status >= 500) {
                        errorText = "Server error. Please try again later.";
                    }
                } catch (e) {}
                throw new Error(errorText);
            }
        } catch (error) {
            if (error.message.includes('Profile not found')) {
                displayUnregisteredProfile(ensName);
            } else {
                throw error;
            }
        }
    } catch (error) {
        showError(error.message);
        document.getElementById('profile-page').style.display = 'none';
    } finally {
        hideLoading();
    }
}

function displayProfile(data, ensName) {
    const profilePage = document.getElementById('profile-page');
    const container = document.querySelector('.container');
    const profileRecords = document.querySelector('.profile-records');
    const headerImage = document.querySelector('.profile-header-image');
    
    // Hide homepage content and show profile page
    if (container) container.style.display = 'none';
    if (profilePage) profilePage.style.display = 'flex';
    
    // Clear existing records
    if (profileRecords) profileRecords.innerHTML = '';
    
    // Update avatar
    if (data.avatar) {
        setAvatar(data.avatar);
    } else {
        const firstLetter = ensName.charAt(0);
        const defaultAvatar = createDefaultAvatar(firstLetter);
        setAvatar(defaultAvatar);
    }
    
    // Update header image if exists
    if (headerImage) {
        if (data.header) {
            headerImage.style.display = 'block';
            headerImage.innerHTML = `<img src="${data.header}" alt="${ensName} header">`;
        } else {
            headerImage.style.display = 'none';
            headerImage.innerHTML = '';
        }
    }

    // Add records in specific order
    // 1. Identity (ENS/Basename)
    const isBase = ensName.endsWith('.base.eth');
    addProfileRecord(isBase ? 'Basename' : 'ENS', ensName);

    // 2. Display Name (if different from ENS)
    if (data.displayName && data.displayName !== ensName) {
        addProfileRecord('Name', data.displayName);
    }

    // 3. Followers/Following
    if (data.social) {
        const followers = data.social.follower !== undefined ? data.social.follower : 0;
        const following = data.social.following !== undefined ? data.social.following : 0;
        addProfileRecord('Followers', followers);
        addProfileRecord('Following', following);
    } else {
        addProfileRecord('Followers', 0);
        addProfileRecord('Following', 0);
    }

    // 4. Location
    if (data.location) {
        addProfileRecord('Location', data.location);
    }

    // 5. Status
    if (data.status) {
        addProfileRecord('Status', data.status);
    }

    // 6. Bio (Description)
    if (data.description) {
        addProfileRecord('Bio', data.description);
    }

    // 7. Email
    if (data.email) {
        addProfileRecord('Email', data.email);
    }

    // 8. Website
    if (data.links?.website?.handle) {
        const url = data.links.website.link || normalizeUrl(data.links.website.handle);
        addProfileRecord('Website', data.links.website.handle, true, url);
    }

    // 9. Social Links (alphabetically sorted)
    const socialLinks = [];
    if (data.links) {
        Object.entries(data.links).forEach(([platform, linkData]) => {
            if (platform !== 'website' && linkData.handle) {
                let label = '';
                let url = '';

                // Determine label and URL based on platform
                switch (platform) {
                    case 'twitter':
                        label = 'Twitter';
                        url = `https://x.com/${linkData.handle}`;
                        break;
                    case 'github':
                        label = 'GitHub';
                        url = `https://github.com/${linkData.handle}`;
                        break;
                    case 'discord':
                        label = 'Discord';
                        url = `https://discord.com/users/${linkData.handle}`;
                        break;
                    case 'telegram':
                        label = 'Telegram';
                        url = `https://t.me/${linkData.handle}`;
                        break;
                    case 'farcaster':
                        label = 'Farcaster';
                        url = normalizeUrl(linkData.handle);
                        break;
                    default:
                        label = platform.charAt(0).toUpperCase() + platform.slice(1);
                        url = linkData.link || normalizeUrl(linkData.handle);
                }

                socialLinks.push({ label, handle: linkData.handle, url });
            }
        });
    }

    // Sort and add social links
    socialLinks.sort((a, b) => a.label.localeCompare(b.label));
    socialLinks.forEach(link => {
        addProfileRecord(link.label, link.handle, true, link.url);
    });

    // 10. Created Date (always last)
    if (data.createdAt) {
        let formattedDate = data.createdAt;
        try {
            const date = new Date(data.createdAt);
            if (!isNaN(date.getTime())) {
                formattedDate = date.toLocaleDateString('en-US', {
                    month: '2-digit',
                    day: '2-digit',
                    year: 'numeric'
                });
            }
        } catch (err) {}
        addProfileRecord('Created', formattedDate);
    }

    // Show download button
    const downloadContainer = document.querySelector('.download-website-container');
    if (downloadContainer) downloadContainer.style.display = 'block';
}

// Helper function to normalize URLs
function normalizeUrl(url) {
    if (!url) return '';
    url = url.trim();
    if (!/^https?:\/\//i.test(url)) {
        return 'https://' + url;
    }
    return url;
}

function displayUnregisteredProfile(ensName) {
    const profilePage = document.getElementById('profile-page');
    const container = document.querySelector('.container');
    const profileRecords = document.querySelector('.profile-records');
    const headerImage = document.querySelector('.profile-header-image');
    
    // Hide homepage content and show profile page
    if (container) container.style.display = 'none';
    if (profilePage) profilePage.style.display = 'flex';
    
    // Clear existing records
    if (profileRecords) profileRecords.innerHTML = '';
    
    // Create default avatar from first letter
    const firstLetter = ensName.charAt(0);
    const defaultAvatar = createDefaultAvatar(firstLetter);
    setAvatar(defaultAvatar);
    
    // Hide header image
    if (headerImage) {
        headerImage.style.display = 'none';
        headerImage.innerHTML = '';
    }
    
    // Add ENS name record
    addProfileRecord('Name', ensName);
    
    // Add unregistered message
    addProfileRecord('Status', 'Unregistered');
    
    // Create register button container if it doesn't exist
    let registerContainer = document.querySelector('.register-container');
    if (!registerContainer) {
        registerContainer = document.createElement('div');
        registerContainer.className = 'register-container';
        profilePage.appendChild(registerContainer);
    }
    
    // Add register button
    const registerButton = document.createElement('a');
    registerButton.className = 'register-button';
    registerButton.href = `https://app.ens.domains/${ensName}`;
    registerButton.target = '_blank';
    registerButton.rel = 'noopener noreferrer';
    registerButton.textContent = 'Register this name';
    registerContainer.innerHTML = '';
    registerContainer.appendChild(registerButton);
    
    // Hide download button
    const downloadContainer = document.querySelector('.download-website-container');
    if (downloadContainer) downloadContainer.style.display = 'none';
}

function addProfileRecord(label, value, isLink = false, href = '') {
    const profileRecords = document.querySelector('.profile-records');
    if (!profileRecords) return;
    
    const record = document.createElement('div');
    record.className = 'profile-record';
    
    const labelElement = document.createElement('div');
    labelElement.className = 'record-label';
    labelElement.textContent = label;
    
    const valueElement = document.createElement('div');
    valueElement.className = 'record-value';
    
    if (isLink) {
        const link = document.createElement('a');
        link.href = href || (value.startsWith('http') ? value : `https://${value}`);
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = value;
        valueElement.appendChild(link);
    } else {
        valueElement.textContent = value;
    }
    
    record.appendChild(labelElement);
    record.appendChild(valueElement);
    profileRecords.appendChild(record);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize GeoCities avatar
    initializeGeoCitiesAvatar();
    
    // Setup nav logo click handler
    setupNavLogoClickHandler();
    
    // Add search event listeners
    const searchInputs = document.querySelectorAll('.search-input');
    const searchButtons = document.querySelectorAll('.search-button');
    
    searchButtons.forEach(button => {
        button.addEventListener('click', () => {
            const input = button.previousElementSibling;
            if (input && input.value.trim()) {
                fetchProfile(input.value.trim());
            }
        });
    });
    
    searchInputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && input.value.trim()) {
                fetchProfile(input.value.trim());
            }
        });
    });
    
    // Theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Style customization
    if (bgColorPicker) {
        bgColorPicker.addEventListener('change', (e) => {
            if (e.isTrusted) applyCustomStyles(e);
        });
    }
    if (textColorPicker) {
        textColorPicker.addEventListener('change', (e) => {
            if (e.isTrusted) applyCustomStyles(e);
        });
    }
    if (borderColorPicker) {
        borderColorPicker.addEventListener('change', (e) => {
            if (e.isTrusted) applyCustomStyles(e);
        });
    }
    if (effectSelect) {
        effectSelect.addEventListener('change', handleEffectChange);
    }
    
    // Download button
    const downloadButton = document.querySelector('.download-website-button');
    if (downloadButton) {
        downloadButton.addEventListener('click', generateDownload);
    }
    
    // Initialize color pickers with default theme colors
    initializeColorPickers();
});

// Navigation
function setupNavLogoClickHandler() {
    const navLogo = document.querySelector('.nav-logo');
    if (!navLogo) return;
    
    // Remove any existing click handlers
    const newNavLogo = navLogo.cloneNode(true);
    navLogo.parentNode.replaceChild(newNavLogo, navLogo);
    
    // Add the click handler
    newNavLogo.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.reload(); // Refresh the page
    });
}

function generateDownloadableHTML(profile, ensName) {
    // Get current theme and neighborhood
    const isLight = document.body.dataset.theme === 'light';
    
    // Get current theme colors
    const backgroundColor = getComputedStyle(document.body).getPropertyValue('--background-color');
    const textColor = getComputedStyle(document.body).getPropertyValue('--primary-color');
    const borderColor = getComputedStyle(document.body).getPropertyValue('--border-color');
    
    // Get avatar URL
    const avatarUrl = document.getElementById('nav-logo-img').src;
    
    // Get header image if it exists
    const headerHTML = profile.header ? 
        `<div class="profile-header-image"><img src="${profile.header}" alt="${ensName} header"></div>` : 
        '';
    
    // Generate records HTML using the same rules as the main site
    let recordsHTML = '';
    
    // Add ENS record first
    const isBase = ensName.endsWith('.base.eth');
    const displayLabel = isBase ? 'Base Name' : 'ENS';
    recordsHTML += generateRecordHTML(displayLabel, ensName);
    
    // Add display name if different from ENS
    if (profile.displayName && profile.displayName !== ensName) {
        recordsHTML += generateRecordHTML('Name', profile.displayName);
    }
    
    // Add followers/following
    recordsHTML += generateRecordHTML('Followers', profile.social?.follower !== undefined ? profile.social.follower : 0);
    recordsHTML += generateRecordHTML('Following', profile.social?.following !== undefined ? profile.social.following : 0);
    
    // Add other standard fields
    if (profile.location) recordsHTML += generateRecordHTML('Location', profile.location);
    if (profile.status) recordsHTML += generateRecordHTML('Status', profile.status);
    if (profile.description) recordsHTML += generateRecordHTML('Bio', profile.description);
    
    // Add website if exists
    if (profile.links?.website?.handle) {
        const websiteUrl = profile.links.website.link || normalizeUrl(profile.links.website.handle);
        recordsHTML += generateRecordHTML('Website', profile.links.website.handle, true, websiteUrl);
    }
    
    // Add email if exists
    if (profile.email) recordsHTML += generateRecordHTML('Email', profile.email);
    
    // Process all other links
    if (profile.links) {
        Object.entries(profile.links).forEach(([platform, data]) => {
            if (platform !== 'website' && data.handle) {
                const label = data.sources?.[0]?.charAt(0).toUpperCase() + data.sources?.[0]?.slice(1) || 
                            platform.charAt(0).toUpperCase() + platform.slice(1);
                recordsHTML += generateRecordHTML(label, data.handle, true, data.link || normalizeUrl(data.handle));
            }
        });
    }
    
    // Add created date if exists
    if (profile.createdAt) {
        let formattedDate = profile.createdAt;
        try {
            const date = new Date(profile.createdAt);
            if (!isNaN(date.getTime())) {
                formattedDate = date.toLocaleDateString('en-US', {
                    month: '2-digit',
                    day: '2-digit',
                    year: 'numeric'
                });
            }
        } catch (err) {}
        recordsHTML += generateRecordHTML('Created', formattedDate);
    }
    
    // Use the template string constant
    let templateHTML = DOWNLOAD_TEMPLATE_STRING
        .replace('<!--ENS_NAME_TITLE_PLACEHOLDER-->', ensName)
        .replace('<!--FAVICON_SRC_PLACEHOLDER-->', avatarUrl)
        .replace('<!--AVATAR_SRC_PLACEHOLDER-->', avatarUrl)
        .replace('<!--HEADER_IMAGE_PLACEHOLDER-->', headerHTML)
        .replace('<!--PROFILE_RECORDS_PLACEHOLDER-->', recordsHTML)
        .replace('/* THEME_CSS_VARIABLES_PLACEHOLDER */', `
            :root {
                --primary-color: ${textColor};
                --background-color: ${backgroundColor};
                --border-color: ${borderColor};
                --font-main: sans-serif;
            }
        `);
    
    return templateHTML;
}

// Helper function to generate record HTML
function generateRecordHTML(label, value, isLink = false, href = '') {
    if (value === undefined || value === null || value === '') return '';
    
    const valueHTML = isLink ? 
        `<a href="${href}" target="_blank" rel="noopener noreferrer">${value}</a>` : 
        value;
    
    return `
        <div class="profile-record">
            <div class="record-label">${label}</div>
            <div class="record-value">${valueHTML}</div>
        </div>
    `;
}

// Helper function to normalize URLs
function normalizeUrl(url) {
    if (!url) return '';
    url = url.trim();
    if (!/^https?:\/\//i.test(url)) {
        return 'https://' + url;
    }
    return url;
}

// Helper function to get font family based on neighborhood
function getFontFamily(neighborhood) {
    if (neighborhood === 'area51') return "'Orbitron', sans-serif";
    if (neighborhood === 'athens') return "'Georgia', serif";
    return "sans-serif";
}

// Add PWA support functions
async function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('/sw.js');
        } catch (error) {
            console.error('Service worker registration failed:', error);
        }
    }
}

// Function to generate icons from avatar
async function generateIcons(avatarUrl) {
    const sizes = [192, 512];
    const icons = [];

    for (const size of sizes) {
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        // Create a circular mask
        ctx.beginPath();
        ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();

        // Load and draw the avatar
        const img = new Image();
        await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
            img.src = avatarUrl;
        });

        // Draw the image with proper scaling
        const scale = Math.max(size / img.width, size / img.height);
        const x = (size - img.width * scale) / 2;
        const y = (size - img.height * scale) / 2;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

        icons.push({
            src: canvas.toDataURL('image/png'),
            sizes: `${size}x${size}`,
            type: 'image/png',
            purpose: 'any maskable'
        });
    }

    return icons;
}

// Function to generate dynamic manifest for downloaded profiles
async function generateProfileManifest(ensName, avatarUrl) {
    const icons = await generateIcons(avatarUrl);
    return {
        name: ensName,
        short_name: ensName,
        description: `${ensName} Web3 Profile`,
        start_url: '/',
        display: 'standalone',
        background_color: getComputedStyle(document.documentElement).getPropertyValue('--background-color').trim(),
        theme_color: getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim(),
        icons: icons
    };
}

// Update the generateDownload function to include PWA support
async function generateDownload() {
    try {
        // ... existing code until the HTML generation ...

        // Get profile data
        const profileNameElement = document.querySelector('.profile-record .record-value');
        if (!profileNameElement) {
            throw new Error('No profile data found to download');
        }

        const ensName = profileNameElement.textContent;
        const avatarUrl = document.getElementById('nav-logo-img').src;

        // Generate manifest for this profile
        const manifest = await generateProfileManifest(ensName, avatarUrl);

        // Create the service worker code for the downloaded profile
        const serviceWorkerCode = `
            const CACHE_NAME = '${ensName.toLowerCase()}-v1';
            const ASSETS_TO_CACHE = [
                './',
                './index.html',
                './manifest.json',
                '${avatarUrl}'
            ];

            self.addEventListener('install', (event) => {
                event.waitUntil(
                    caches.open(CACHE_NAME)
                        .then((cache) => cache.addAll(ASSETS_TO_CACHE))
                );
            });

            self.addEventListener('fetch', (event) => {
                event.respondWith(
                    caches.match(event.request)
                        .then((response) => {
                            return response || fetch(event.request);
                        })
                );
            });
        `;

        // Add PWA meta tags and manifest link to the HTML
        const pwaMetaTags = `
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="${manifest.theme_color}">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="${ensName}">
    <link rel="apple-touch-icon" href="${manifest.icons[1].src}">
`;

        // Add PWA initialization code
        const pwaInitCode = `
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js')
                .catch(error => console.error('Service worker registration failed:', error));
        });
    }
`;

        // Update the HTML template to include PWA support
        let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    ${pwaMetaTags}
    <title>${ensName}</title>
    <!-- ... rest of the existing head content ... -->
</head>
<body>
    <!-- ... existing body content ... -->
    <script>
        ${pwaInitCode}
        ${effectInit}
    </script>
</body>
</html>`;

        // Create a ZIP file containing all necessary files
        const zip = new JSZip();
        zip.file('index.html', html);
        zip.file('manifest.json', JSON.stringify(manifest, null, 2));
        zip.file('sw.js', serviceWorkerCode);

        // Generate the ZIP file
        const zipBlob = await zip.generateAsync({type: 'blob'});

        // Create download link for the ZIP file
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(zipBlob);
        downloadLink.download = `${ensName.replace(/\s+/g, '-').toLowerCase()}-pwa.zip`;
        
        // Trigger download
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        
    } catch (error) {
        console.error('Error generating download:', error);
        // ... existing error handling code ...
    }
}

// Initialize PWA support when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // ... existing DOMContentLoaded code ...
    
    // Register service worker for main site
    registerServiceWorker();
});
