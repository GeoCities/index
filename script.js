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

// At the start of the script section
const API_BASE_URL = 'https://api.web3.bio';
const DEFAULT_AVATAR = 'https://raw.githubusercontent.com/GeoCities/Ads/main/Ads
/Nyan%20Cat%20-%20GeoCities.gif';

// Define headerRenames and linkableRecords globally in script.js so they can be
 stringified
const headerRenames = {
    'email': 'Email',
    'description': 'Bio',
    'location': 'Location',
    'status': 'Status',
    'keywords': 'Tags',
    'com.discord': 'Discord',
    'com.twitter': 'Twitter',
    'com.github': 'GitHub',
    'org.telegram': 'Telegram'
};
const linkableRecords = ['Website', 'Twitter', 'GitHub', 'Discord', 'Telegram',
'Farcaster'];

// Style customization constants moved from <style>
const stylePanel = document.querySelector('.style-panel');
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
    // Create a canvas to generate a simple avatar with first letter using curre
nt theme colors
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');

    // Get current theme colors from CSS variables
    const computedStyle = getComputedStyle(document.documentElement);
    const bgColor = computedStyle.getPropertyValue('--background-color').trim()
|| '#000000';
    const textColor = computedStyle.getPropertyValue('--primary-color').trim() |
| '#ffffff';
    const borderColor = computedStyle.getPropertyValue('--border-color').trim()
|| '#ffffff';

    // Draw background using theme background color
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw border using theme border color
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 1;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // Draw letter using theme text color
    ctx.fillStyle = textColor;
    ctx.font = 'bold 100px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(letter ? letter.toUpperCase() : '?', canvas.width / 2, canvas.h
eight / 2);

    // Return data URL
    return canvas.toDataURL('image/png');
}

function setAvatar(avatarUrl) {
    const navLogo = document.getElementById('nav-logo-img');
    const favicon = document.getElementById('favicon');

    // Use raw GitHub URL instead of blob URL
    const url = avatarUrl || DEFAULT_AVATAR;
    navLogo.src = url;
    favicon.href = url;

    // Debug logging
    console.log('Setting avatar to:', url);
}

// Style customization functions
function initializeColorPickers() {
    const isLight = document.body.dataset.theme === 'light';

    // Set default colors based on current theme
    if (isLight) {
        bgColorPicker.value = '#ffffff';
        textColorPicker.value = '#000000';
        borderColorPicker.value = '#000000';
    } else {
        bgColorPicker.value = '#000000';
        textColorPicker.value = '#ffffff';
        borderColorPicker.value = '#ffffff';
    }

    // Apply initial colors
    applyCustomStyles();
}

function rgbToHex(rgb) {
    const rgbMatch = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)
$/);
    if (rgbMatch) {
        const r = parseInt(rgbMatch[1]);
        const g = parseInt(rgbMatch[2]);
        const b = parseInt(rgbMatch[3]);
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1
);
    }
    return '#000000';
}

function applyCustomStyles() {
    // Get the current effect
    const currentEffect = effectSelect.value;

    // Apply to body
    document.body.style.backgroundColor = bgColorPicker.value;
    document.body.style.color = textColorPicker.value;

    // Update CSS variables
    document.documentElement.style.setProperty('--primary-color', textColorPicke
r.value);
    document.documentElement.style.setProperty('--background-color', bgColorPick
er.value);
    document.documentElement.style.setProperty('--border-color', borderColorPick
er.value);

    // Keep vaporware effect if active
    const isVaporwareActive = currentEffect === 'vaporware';

    // Apply to all themed elements
    const themedElements = [
        '.profile-records',
        '.footer',
        '.search-container',
        '.search-input',
        '.search-button',
        '#theme-toggle',
        '.profile-record',
        '.profile-header-image',
        '.style-panel',
        '.color-button',
        '.effect-select',
        '.button-text'
    ];

    // Apply navbar styling separately to respect vaporware effect
    if (!isVaporwareActive) {
        const navBar = document.querySelector('.nav-bar');
        if (navBar) {
            navBar.style.backgroundColor = bgColorPicker.value;
            navBar.style.color = textColorPicker.value;
            navBar.style.borderColor = borderColorPicker.value;
        }
    }

    themedElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.style.backgroundColor = bgColorPicker.value;
            el.style.color = textColorPicker.value;
            el.style.borderColor = borderColorPicker.value;

            // Ensure all links within the element inherit the text color
            const links = el.querySelectorAll('a');
            links.forEach(link => {
                link.style.color = textColorPicker.value;
            });
        });
    });

    // Only regenerate default avatars on profile pages
    const profilePage = document.getElementById('profile-page');
    if (profilePage && profilePage.style.display === 'flex') {
        // Check if we're using a default avatar by looking at the src
        const navLogo = document.getElementById('nav-logo-img');
        if (navLogo && navLogo.src && navLogo.src.startsWith('data:image/png;bas
e64,')) {
            // This is a default avatar, regenerate it with the new colors
            // Get current name from profile records
            const nameElement = document.querySelector('.profile-record .record-
value');
            if (nameElement && nameElement.textContent) {
                const name = nameElement.textContent;
                const firstLetter = name.charAt(0);
                const newAvatar = createDefaultAvatar(firstLetter);
                setAvatar(newAvatar);
            }
        }
        // If it's not a default avatar (doesn't start with data:image), leave i
t alone
    }

    // Re-apply glow or neon effect to update with new border color
    if (currentEffect === 'glow') {
        applyGlowEffect();
    } else if (currentEffect === 'neon') {
        applyNeonEffect();
    }
}

function handleEffectChange() {
    // Remove ALL existing effects first
    removeSnowEffect();
    removeGlowEffect();
    removeStarsEffect();
    removeRainbowEffect();
    removeMatrixEffect();
    removeFirefliesEffect();
    removeConfettiEffect();
    removeNeonEffect();
    removeVaporwareEffect();

    // Apply selected effect
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

// Effect functions
function applyGlowEffect() {
    const borderedElements = document.querySelectorAll(
        '.nav-logo, .search-input, .search-button, #theme-toggle, ' +
        '.profile-records, .profile-record, .profile-header-image, .footer, ' +
        '.color-button, .effect-select' // Added style panel elements
    );
    borderedElements.forEach(el => {
        el.style.boxShadow = `0 0 5px ${borderColorPicker.value}, 0 0 10px ${bor
derColorPicker.value}`;
        el.style.animation = 'glowPulse 2s infinite';
    });
}

function removeGlowEffect() {
    const borderedElements = document.querySelectorAll(
        '.nav-logo, .search-input, .search-button, #theme-toggle, ' +
        '.profile-records, .profile-record, .profile-header-image, .footer, ' +
        '.color-button, .effect-select, .style-panel' // Added style panel eleme
nts
    );
    borderedElements.forEach(el => {
        el.style.boxShadow = 'none';
        el.style.animation = 'none';
    });
}

function removeSnowEffect() {
    const snowContainer = document.getElementById('snow-container');
    if (snowContainer) {
        snowContainer.remove();
    }
}

// Add these new effect functions
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

function applyRainbowEffect() {
    const elements = document.querySelectorAll('.nav-logo, .search-input, .searc
h-button, #theme-toggle, .profile-records, .profile-record, .profile-header-imag
e, .footer, .color-button, .effect-select');
    elements.forEach(el => {
        el.style.animation = 'rainbowBorder 3s linear infinite';
    });

    const styleSheet = document.createElement('style');
    styleSheet.id = 'rainbow-effect-keyframes-style'; // Assign ID
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

    // Japanese characters mixed with digits
    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789
';
    // Reduce number of columns for a lighter rain effect
    const columns = Math.floor(window.innerWidth / 30); // Increased spacing bet
ween columns

    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        // Vary the speed more between columns for a more natural rain effect
        const duration = Math.random() * 4 + 7.92; // More variation in speed
        column.style.cssText = `
            position: absolute;
            top: -100px;
            left: ${i * 30}px;
            color: #00ff00;
            font-family: monospace;
            font-size: 18px;
            line-height: 18px;
            animation: matrixFall ${duration}s linear infinite;
            animation-delay: -${Math.random() * 8}s; // Increased delay variatio
n
            text-shadow: 0 0 8px #00ff00, 0 0 15px #00ff00, 0 0 20px #00ff00;
        `;

        // Create a longer string of characters for each column
        let text = '';
        const length = 35;
        for (let j = 0; j < length; j++) {
            const char = characters[Math.floor(Math.random() * characters.length
)];
            // Only make the first 1-2 characters bright white with enhanced glo
w
            if (j < 2 && Math.random() > 0.5) {
                text += `<span style="color: #ffffff; text-shadow: 0 0 10px #fff
fff, 0 0 20px #ffffff, 0 0 30px #ffffff;">${char}</span><br>`;
            } else {
                text += `${char}<br>`;
            }
        }
        column.innerHTML = text;
        matrixContainer.appendChild(column);
    }

    // Add the matrix fall animation with smoother movement
    const matrixStyle = document.createElement('style');
    matrixStyle.id = 'matrix-effect-keyframes-style'; // Assign ID
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

// Add removal functions for new effects
function removeStarsEffect() {
    const starsContainer = document.getElementById('stars-container');
    if (starsContainer) {
        starsContainer.remove();
    }
}

function removeRainbowEffect() {
    const elements = document.querySelectorAll('.nav-logo, .search-input, .searc
h-button, #theme-toggle, .profile-records, .profile-record, .profile-header-imag
e, .footer, .color-button, .effect-select');
    elements.forEach(el => {
        el.style.animation = '';
    });
    const styleTag = document.getElementById('rainbow-effect-keyframes-style');
    if (styleTag) {
        styleTag.remove();
    }
}

function removeMatrixEffect() {
    const matrixContainer = document.getElementById('matrix-container');
    if (matrixContainer) {
        matrixContainer.remove();
    }
    const styleTag = document.getElementById('matrix-effect-keyframes-style');
    if (styleTag) {
        styleTag.remove();
    }
}

// Add new effect functions
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
            animation: fireflyFloat ${Math.random() * 4 + 3}s ease-in-out infini
te;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.6 + 0.4};
        `;
        firefliesContainer.appendChild(firefly);
    }

    const fireflyStyle = document.createElement('style');
    fireflyStyle.id = 'fireflies-effect-keyframes-style'; // Assign ID
    fireflyStyle.textContent = `
        @keyframes fireflyFloat {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(${Math.random() * 100 - 50}px, ${Math.ran
dom() * 100 - 50}px); }
            50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.ran
dom() * 100 - 50}px); }
            75% { transform: translate(${Math.random() * 100 - 50}px, ${Math.ran
dom() * 100 - 50}px); }
        }
    `;
    document.head.appendChild(fireflyStyle);
    document.body.appendChild(firefliesContainer);
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

    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00f
fff'];

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
    confettiStyle.id = 'confetti-effect-keyframes-style'; // Assign ID
    confettiStyle.textContent = `
        @keyframes confettiFall {
            0% { transform: translateY(0) rotate(0deg); }
            100% { transform: translateY(100vh) rotate(360deg); }
        }
    `;
    document.head.appendChild(confettiStyle);
    document.body.appendChild(confettiContainer);
}

function applyNeonEffect() {
    const elements = document.querySelectorAll('.nav-logo, .search-input, .searc
h-button, #theme-toggle, .profile-records, .profile-record, .profile-header-imag
e, .footer, .color-button, .effect-select');
    elements.forEach(el => {
        el.style.textShadow = `0 0 5px ${borderColorPicker.value}, 0 0 10px ${bo
rderColorPicker.value}`;
        el.style.boxShadow = `0 0 5px ${borderColorPicker.value}, 0 0 10px ${bor
derColorPicker.value}`;
        el.style.animation = 'neonPulse 1.5s ease-in-out infinite';
    });

    const neonStyle = document.createElement('style');
    neonStyle.id = 'neon-effect-keyframes-style'; // Assign ID
    neonStyle.textContent = `
        @keyframes neonPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
        }
    `;
    document.head.appendChild(neonStyle);
}

function applyVaporwareEffect() {
    // Apply static gradient to body
    document.body.style.background = 'linear-gradient(45deg, #ff00ff, #00ffff)';
    document.body.style.backgroundSize = '100% 100%';

    // Make nav bar transparent to show gradient underneath
    const navBar = document.querySelector('.nav-bar');
    if (navBar) {
        navBar.style.backgroundColor = 'transparent';
        navBar.style.borderColor = '#ffffff';
    }
}

function removeVaporwareEffect() {
    document.body.style.background = '';
    document.body.style.backgroundSize = '';

    // Restore nav bar
    const navBar = document.querySelector('.nav-bar');
    if (navBar) {
        navBar.style.backgroundColor = '';
        navBar.style.borderColor = '';
    }
}

// Add removal functions for new effects
function removeFirefliesEffect() {
    const container = document.getElementById('fireflies-container');
    if (container) container.remove();
    const styleTag = document.getElementById('fireflies-effect-keyframes-style')
;
    if (styleTag) {
        styleTag.remove();
    }
}

function removeConfettiEffect() {
    const container = document.getElementById('confetti-container');
    if (container) container.remove();
    const styleTag = document.getElementById('confetti-effect-keyframes-style');
    if (styleTag) {
        styleTag.remove();
    }
}

function removeNeonEffect() {
    const elements = document.querySelectorAll('.nav-logo, .search-input, .searc
h-button, #theme-toggle, .profile-records, .profile-record, .profile-header-imag
e, .footer, .color-button, .effect-select');
    elements.forEach(el => {
        el.style.textShadow = '';
        el.style.boxShadow = '';
        el.style.animation = '';
    });
    const styleTag = document.getElementById('neon-effect-keyframes-style');
    if (styleTag) {
        styleTag.remove();
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeGeoCitiesAvatar();

    // Add search event listeners
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            fetchProfile(query);
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                fetchProfile(query);
            }
        }
    });

    // Single, consolidated theme toggle handler
    themeToggle.addEventListener('click', () => {
        const isLight = document.body.dataset.theme === 'light';

        // Update theme
        document.body.dataset.theme = isLight ? '' : 'light';
        themeToggle.textContent = isLight ? 'Light' : 'Dark';

        // Reset color pickers to default theme colors
        if (isLight) {
            // Switching to dark mode
            bgColorPicker.value = '#000000';
            textColorPicker.value = '#ffffff';
            borderColorPicker.value = '#ffffff';
        } else {
            // Switching to light mode
            bgColorPicker.value = '#ffffff';
            textColorPicker.value = '#000000';
            borderColorPicker.value = '#000000';
        }

        // Reset effect select
        effectSelect.value = 'none';

        // Remove any active effects
        removeSnowEffect();
        removeGlowEffect();
        removeStarsEffect();
        removeRainbowEffect();
        removeMatrixEffect();
        removeFirefliesEffect();
        removeConfettiEffect();
        removeNeonEffect();
        removeVaporwareEffect();

        // Apply the new colors to all elements
        applyCustomStyles();

        // Update CSS variables
        document.documentElement.style.setProperty('--primary-color', textColorP
icker.value);
        document.documentElement.style.setProperty('--background-color', bgColor
Picker.value);
        document.documentElement.style.setProperty('--border-color', borderColor
Picker.value);
    });

    // Add style customization event listeners
    bgColorPicker.addEventListener('input', applyCustomStyles);
    textColorPicker.addEventListener('input', applyCustomStyles);
    borderColorPicker.addEventListener('input', applyCustomStyles);
    effectSelect.addEventListener('change', handleEffectChange);
});

// Add the fetchProfile function
async function fetchProfile(query) {
    try {
        showLoading();
        hideError();

        // Remove any existing register button container
        const existingRegisterContainer = document.querySelector('.register-cont
ainer');
        if (existingRegisterContainer) {
            existingRegisterContainer.remove();
        }

        // Remove any existing download button container
        const existingDownloadContainer = document.querySelector('.download-webs
ite-container');
        if (existingDownloadContainer) {
            existingDownloadContainer.remove();
        }

        // Format the query
        query = query.trim().toLowerCase();
        if (!query) {
            throw new Error('Please enter a name to search.');
        }
        if (/\s/.test(query)) {
            throw new Error('Name cannot contain spaces.');
        }

        const ensName = (query.endsWith('.eth') || query.endsWith('.base.eth'))
? query : `${query}.eth`;

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
                    errorText = errorData?.message || errorData?.error || `Error
 ${response.status}: ${response.statusText}`;
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

// Initialize the page with GeoCities avatar
async function initializeGeoCitiesAvatar() {
    try {
        // First set the default avatar in case the fetch fails
        setAvatar(DEFAULT_AVATAR);

        const response = await fetch(`${API_BASE_URL}/profile/ens/geocities.eth`
);
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

// Add these functions after fetchProfile
function displayProfile(data, ensName) {
    // Hide homepage elements
    document.querySelector('.container').style.display = 'none';
    document.querySelector('#homepage-geocities').style.display = 'none';

    // Show profile page
    const profilePage = document.getElementById('profile-page');
    profilePage.style.display = 'flex';

    // Move search container to profile page
    const searchContainer = document.querySelector('.search-container');
    searchContainer.style.margin = '10px auto 20px';
    profilePage.insertBefore(searchContainer, profilePage.firstChild);

    // Move style panel right after search container
    stylePanel.style.margin = '10px auto 20px';
    profilePage.insertBefore(stylePanel, document.querySelector('.profile-contai
ner'));

    // Set avatar
    if (data.avatar) {
        setAvatar(data.avatar);
    } else {
        // Use the first letter of ENS name for default avatar
        const firstLetter = ensName.charAt(0);
        const defaultAvatar = createDefaultAvatar(firstLetter);
        setAvatar(defaultAvatar);
    }

    // Set header image if available, otherwise hide it
    const headerContainer = document.querySelector('.profile-header-image');
    headerContainer.innerHTML = ''; // Clear previous content

    if (data.header) {
        const headerImg = document.createElement('img');
        headerImg.src = data.header;
        headerImg.alt = `${ensName} header`;
        headerContainer.appendChild(headerImg);
        headerContainer.style.display = 'block';
    } else {
        headerContainer.style.display = 'none';
    }

    // Clear existing records
    const recordsContainer = document.querySelector('.profile-records');
    recordsContainer.innerHTML = '';

    // Define header renames for better display
    const headerRenames = {
        'email': 'Email',
        'description': 'Bio',
        'location': 'Location',
        'status': 'Status',
        'keywords': 'Tags',
        'com.discord': 'Discord',
        'com.twitter': 'Twitter',
        'com.github': 'GitHub',
        'org.telegram': 'Telegram'
    };

    const linkableRecords = ['Website', 'Twitter', 'GitHub', 'Discord', 'Telegra
m', 'Farcaster'];

    // Create a map for ordered records
    let recordsMap = {
        'identity': null,
        'displayName': null,
        'followers': null,
        'following': null,
        'location': null,
        'status': null,
        'description': null,
        'website': null,
        'email': null,
        'createdAt': null
    };

    let otherRecords = [];

    // Populate the records map
    if (ensName) {
        const isBase = ensName.endsWith('.base.eth');
        const displayLabel = isBase ? 'Basename' : 'ENS';
        recordsMap['identity'] = { label: displayLabel, value: ensName };
    }
    if (data.displayName && data.displayName !== ensName) {
        recordsMap['displayName'] = { label: 'Name', value: data.displayName };
    }

    // Always show followers/following even if 0 or null
    recordsMap['followers'] = {
        label: 'Followers',
        value: data.social?.follower !== undefined ? data.social.follower : 0
    };

    recordsMap['following'] = {
        label: 'Following',
        value: data.social?.following !== undefined ? data.social.following : 0
    };

    if (data.location) {
        recordsMap['location'] = { label: 'Location', value: data.location };
    }
    if (data.status) {
        recordsMap['status'] = { label: 'Status', value: data.status };
    }
    if (data.description) {
        recordsMap['description'] = { label: 'Bio', value: data.description };
    }
    if (data.links?.website?.handle) {
        recordsMap['website'] = {
            label: 'Website',
            value: data.links.website.handle,
            isLink: true,
            linkUrl: data.links.website.link || normalizeUrl(data.links.website.
handle)
        };
    }
    if (data.email) {
        recordsMap['email'] = { label: 'Email', value: data.email };
    }
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
        } catch (err) { }
        recordsMap['createdAt'] = { label: 'Created', value: formattedDate };
    }

    // Process all links from profile.links
    if (data.links && typeof data.links === 'object') {
        Object.entries(data.links).forEach(([platform, linkData]) => {
            if (platform !== 'website' && linkData.handle) {
                let label = '';
                if (linkData.sources && linkData.sources.length > 0) {
                    label = linkData.sources[0].charAt(0).toUpperCase() + linkDa
ta.sources[0].slice(1);
                } else {
                    label = platform.charAt(0).toUpperCase() + platform.slice(1)
;
                }

                otherRecords.push({
                    label: label,
                    value: linkData.handle,
                    isLink: true,
                    linkUrl: linkData.link || normalizeUrl(linkData.handle)
                });
            }
        });
    }

    // Process all other fields
    Object.entries(data).forEach(([key, value]) => {
        if (!Object.keys(recordsMap).includes(key) && key !== 'links' && key !==
 'address') {
            processValue(key, value, otherRecords, headerRenames, linkableRecords, normalizeUrl);
        }
    });

    // Create ordered records array
    let orderedRecords = [];
    if (recordsMap['identity']) orderedRecords.push(recordsMap['identity']);
    if (recordsMap['displayName']) orderedRecords.push(recordsMap['displayName']
);
    if (recordsMap['followers']) orderedRecords.push(recordsMap['followers']);
    if (recordsMap['following']) orderedRecords.push(recordsMap['following']);
    if (recordsMap['location']) orderedRecords.push(recordsMap['location']);
    if (recordsMap['status']) orderedRecords.push(recordsMap['status']);
    if (recordsMap['description']) orderedRecords.push(recordsMap['description']
);
    if (recordsMap['email']) orderedRecords.push(recordsMap['email']);
    if (recordsMap['website']) orderedRecords.push(recordsMap['website']);

    // Sort other records alphabetically
    otherRecords.sort((a, b) => a.label.localeCompare(b.label));
    orderedRecords = orderedRecords.concat(otherRecords);

    // Add "Created" as the last record if it exists
    if (recordsMap['createdAt']) {
        orderedRecords = orderedRecords.filter(record => record.label !== 'Creat
ed');
        orderedRecords.push(recordsMap['createdAt']);
    }

    // Add all records to the container
    orderedRecords.forEach(record => {
        if (record) {
            if (record.isLink && record.linkUrl) {
                const linkElement = document.createElement('a');
                linkElement.href = record.linkUrl;
                linkElement.target = '_blank';
                linkElement.rel = 'noopener noreferrer';
                linkElement.textContent = record.value; // Set text content for
the link
                addRecord(record.label, linkElement); // Pass the created <a> el
ement
            } else {
                addRecord(record.label, record.value); // Pass the string value
            }
        }
    });

    // If no records were added, show a message
    if (recordsContainer.children.length === 0) {
        addRecord('Status', 'No records found');
    }

    // Show style panel
    document.querySelector('.style-panel').style.display = 'flex';

    // Remove any existing download button container
    const existingDownloadContainer = document.querySelector('.download-website-
container');
    if (existingDownloadContainer) {
        existingDownloadContainer.remove();
    }

    // Create download button container
    const downloadContainer = document.createElement('div');
    downloadContainer.className = 'download-website-container';
    downloadContainer.style.cssText = `
        width: var(--container-width);
        max-width: var(--max-width);
        display: flex;
        justify-content: center;
        margin: 20px auto;
    `;

    // Create download button with theme toggle styling
    const downloadButton = document.createElement('button');
    downloadButton.textContent = 'Download Website';
    downloadButton.className = 'download-website-button';
    downloadButton.style.cssText = `
        padding: 8px 15px;
        background: var(--background-color);
        color: var(--primary-color);
        border: 1px solid var(--border-color);
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 0.9em;
        text-decoration: none;
        text-align: center;
    `;

    // Add hover effect
    downloadButton.addEventListener('mouseover', () => {
        downloadButton.style.opacity = '0.8';
    });
    downloadButton.addEventListener('mouseout', () => {
        downloadButton.style.opacity = '1';
    });

    // Add button to container
    downloadContainer.appendChild(downloadButton);

    // Insert the download button container after the profile records
    recordsContainer.parentNode.insertBefore(downloadContainer, recordsContainer
.nextSibling);

    // Initialize color pickers
    initializeColorPickers();

    // Remove any existing click handlers from the nav logo
    setupNavLogoClickHandler();

    // Add the download functionality using an IIFE for isolation
    downloadButton.addEventListener('click', (function(currentEnsNameFromDisplay
Profile) {
        return function() {
            try {
                const pageTitle = currentEnsNameFromDisplayProfile;
                let currentAvatarSrc = document.getElementById('nav-logo-img').s
rc;
                if (!currentAvatarSrc || currentAvatarSrc === window.location.hr
ef || currentAvatarSrc.startsWith('data:image/png;base64,')) {
                    const firstLetter = currentEnsNameFromDisplayProfile.charAt(
0);
                    currentAvatarSrc = createDefaultAvatar(firstLetter) || DEFAU
LT_AVATAR;
                }

                const computedPageStyle = getComputedStyle(document.documentElem
ent);
                const bgColor = computedPageStyle.getPropertyValue('--background
-color').trim();
                const textColor = computedPageStyle.getPropertyValue('--primary-
color').trim();
                const borderColor = computedPageStyle.getPropertyValue('--border
-color').trim();
                const activeEffectName = effectSelect.value;

                const themeColorsForDownload = { primary: textColor, background:
 bgColor, border: borderColor };

                const themeCssVariablesString = `
    --primary-color: ${textColor};
    --background-color: ${bgColor};
    --border-color: ${borderColor};
    --font-main: sans-serif;
                `;

                const allKeyframesCssString = `
    @keyframes spin-downloaded { to { transform: rotate(360deg); } }
    @keyframes glowPulse { 0%, 100% { box-shadow: 0 0 5px var(--border-color), 0
 0 10px var(--border-color); } 50% { box-shadow: 0 0 10px var(--border-color), 0
 0 20px var(--border-color); } }
    @keyframes neonPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.8; } }
    @keyframes snowFall { 0% { transform: translateY(-100vh); } 100% { transform
: translateY(100vh); } }
    @keyframes starTwinkle { 0%, 100% { opacity: 0.2; transform: scale(0.8); } 5
0% { opacity: 1; transform: scale(1.2); } }
    @keyframes rainbowBorder { 0% { border-color: #ff0000; } 16.666% { border-co
lor: #ff8000; } 33.333% { border-color: #ffff00; } 50% { border-color: #00ff00;
} 66.666% { border-color: #0000ff; } 83.333% { border-color: #8000ff; } 100% { b
order-color: #ff0000; } }
    @keyframes matrixFall { 0% { transform: translateY(-100%); opacity: 0; } 10%
 { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(100%); opacity
: 0; } }
    @keyframes fireflyFloat { 0%, 100% { transform: translate(0, 0); } 25% { tra
nsform: translate(10px, -20px); } 50% { transform: translate(-30px, 15px); } 75%
 { transform: translate(20px, 30px); } }
    @keyframes confettiFall { 0% { transform: translateY(0) rotate(0deg); } 100%
 { transform: translateY(100vh) rotate(360deg); } }
                `;

                const createDefaultAvatarForDownloadString = createDefaultAvatar
.toString();
                const setAvatarForDownloadString = setAvatar.toString()
                    .replace("document.getElementById('nav-logo-img')", "documen
t.getElementById('nav-logo-img-downloaded')")
                    .replace("document.getElementById('favicon')", "document.get
ElementById('favicon-downloaded')");
                const addRecordForDownloadString = addRecord.toString()
                    .replace("document.querySelector('.profile-records')", "docu
ment.querySelector('.profile-records-downloaded')");
                const normalizeUrlString = normalizeUrl.toString();
                const processValueString = processValue.toString();

                const showLoadingForDownloadString = function() { const spinner
= document.getElementById('loading-spinner-downloaded'); if(spinner) spinner.sty
le.display = 'block'; }.toString();
                const hideLoadingForDownloadString = function() { const spinner
= document.getElementById('loading-spinner-downloaded'); if(spinner) spinner.sty
le.display = 'none'; }.toString();
                const showErrorForDownloadString = function(message) { const err
orEl = document.getElementById('error-message-downloaded'); if(errorEl) { errorE
l.textContent = message; errorEl.style.display = 'block';} }.toString();
                const hideErrorForDownloadString = function() { const errorEl =
document.getElementById('error-message-downloaded'); if(errorEl) errorEl.style.d
isplay = 'none'; }.toString();

                const effectFunctionsStrings = {
                    applyGlow: function(bColor) { const els = document.querySele
ctorAll('.nav-logo-img-downloaded, .profile-records-downloaded, .profile-record,
 .profile-header-image-downloaded, .footer-downloaded'); els.forEach(el => { el.
style.boxShadow = '0 0 5px ' + bColor + ', 0 0 10px ' + bColor; el.style.animati
on = 'glowPulse 2s infinite'; }); }.toString(),
                    removeGlow: function() { const els = document.querySelectorA
ll('.nav-logo-img-downloaded, .profile-records-downloaded, .profile-record, .pro
file-header-image-downloaded, .footer-downloaded'); els.forEach(el => { el.style
.boxShadow = 'none'; el.style.animation = 'none'; }); }.toString(),
                    addSnow: addSnowEffect.toString().replace(/document\.body\.a
ppendChild\(snowContainer\)/g, "document.querySelector('.profile-container-downl
oaded').appendChild(snowContainer)"),
                    removeSnow: removeSnowEffect.toString(),
                    applyStars: applyStarsEffect.toString().replace(/document\.b
ody\.appendChild\(starsContainer\)/g, "document.querySelector('.profile-containe
r-downloaded').appendChild(starsContainer)"),
                    removeStars: removeStarsEffect.toString(),
                    applyRainbow: function() { const els = document.querySelecto
rAll('.nav-logo-img-downloaded, .profile-records-downloaded, .profile-record, .p
rofile-header-image-downloaded, .footer-downloaded'); els.forEach(el => { el.sty
le.animation = 'rainbowBorder 3s linear infinite'; }); }.toString(),
                    removeRainbow: function() { const els = document.querySelect
orAll('.nav-logo-img-downloaded, .profile-records-downloaded, .profile-record, .
profile-header-image-downloaded, .footer-downloaded'); els.forEach(el => { el.st
yle.animation = ''; }); }.toString(),
                    applyMatrix: applyMatrixEffect.toString().replace(/document\
.body\.appendChild\(matrixContainer\)/g, "document.querySelector('.profile-conta
iner-downloaded').appendChild(matrixContainer)").replace("document.head.appendCh
ild(matrixStyle);", "").replace("const matrixStyle = document.createElement('sty
le');", "").replace("matrixStyle.id = 'matrix-effect-keyframes-style';", ""),
                    removeMatrix: removeMatrixEffect.toString().replace("const s
tyleTag = document.getElementById('matrix-effect-keyframes-style'); if (styleTag
) styleTag.remove();",""),
                    applyFireflies: applyFirefliesEffect.toString().replace(/doc
ument\.body\.appendChild\(firefliesContainer\)/g, "document.querySelector('.prof
ile-container-downloaded').appendChild(firefliesContainer)").replace("document.h
ead.appendChild(fireflyStyle);", "").replace("const fireflyStyle = document.crea
teElement('style');", "").replace("fireflyStyle.id = 'fireflies-effect-keyframes
-style';", ""),
                    removeFireflies: removeFirefliesEffect.toString().replace("c
onst styleTag = document.getElementById('fireflies-effect-keyframes-style'); if
(styleTag) styleTag.remove();",""),
                    applyConfetti: applyConfettiEffect.toString().replace(/docum
ent\.body\.appendChild\(confettiContainer\)/g, "document.querySelector('.profile
-container-downloaded').appendChild(confettiContainer)").replace("document.head.
appendChild(confettiStyle);", "").replace("const confettiStyle = document.create
Element('style');", "").replace("confettiStyle.id = 'confetti-effect-keyframes-s
tyle';", ""),
                    removeConfetti: removeConfettiEffect.toString().replace("con
st styleTag = document.getElementById('confetti-effect-keyframes-style'); if (st
yleTag) styleTag.remove();",""),
                    applyNeon: function(bColor) { const els = document.querySele
ctorAll('.nav-logo-img-downloaded, .profile-records-downloaded, .profile-record,
 .profile-header-image-downloaded, .footer-downloaded'); els.forEach(el => { el.
style.textShadow = '0 0 5px ' + bColor + ', 0 0 10px ' + bColor; el.style.boxSha
dow = '0 0 5px ' + bColor + ', 0 0 10px ' + bColor; el.style.animation = 'neonPu
lse 1.5s ease-in-out infinite'; }); }.toString(),
                    removeNeon: function() { const els = document.querySelectorA
ll('.nav-logo-img-downloaded, .profile-records-downloaded, .profile-record, .pro
file-header-image-downloaded, .footer-downloaded'); els.forEach(el => { el.style
.textShadow = ''; el.style.boxShadow = ''; el.style.animation = ''; }); }.toStri
ng(),
                    applyVaporware: function() { document.body.style.background
= 'linear-gradient(45deg, #ff00ff, #00ffff)'; document.body.style.backgroundSize
 = '100% 100%'; const nb = document.querySelector('.nav-bar-downloaded'); if (nb
) { nb.style.backgroundColor = 'transparent'; nb.style.borderColor = '#ffffff';}
 }.toString(),
                    removeVaporware: function() { document.body.style.background
 = ''; document.body.style.backgroundSize = ''; const nb = document.querySelecto
r('.nav-bar-downloaded'); if (nb) { nb.style.backgroundColor = ''; nb.style.bord
erColor = ''; } }.toString()
                };

                const fetchAndDisplayProfileOnLoadString = `
async function fetchAndDisplayProfileOnLoad(ensToFetch, themeColors) {
    app.showLoading();
    app.hideError();
    try {
        let url = \`\${app.API_BASE_URL}/profile/ens/\${ensToFetch}\`;
        if (ensToFetch.endsWith('.base.eth')) { url = \`\${app.API_BASE_URL}/pro
file/basenames/\${ensToFetch}\`; }
        const response = await fetch(url);
        let data;
        if (response.ok) { data = await response.json(); }
        else if (response.status === 404) { data = { _unregistered: true }; }
        else { let errorText = \`Error: \${response.statusText}\`; try { const e
rrorData = await response.json(); errorText = errorData?.message || errorData?.e
rror || errorText; } catch (e) {} throw new Error(errorText); }

        const recordsContainer = document.querySelector('.profile-records-downlo
aded');
        if (recordsContainer) recordsContainer.innerHTML = '';
        const headerContainer = document.querySelector('.profile-header-image-do
wnloaded');
        if (headerContainer) headerContainer.innerHTML = '';

        if (data._unregistered) {
            app.setAvatar(app.createDefaultAvatar(ensToFetch.charAt(0), themeCol
ors), app.DEFAULT_AVATAR);
            if (headerContainer) headerContainer.style.display = 'none';
            app.addRecord(ensToFetch.endsWith('.base.eth') ? 'Basename' : 'ENS',
 ensToFetch);
            app.addRecord('Status', 'This name is not registered.');
        } else {
            app.setAvatar(data.avatar || app.createDefaultAvatar(ensToFetch.char
At(0), themeColors), app.DEFAULT_AVATAR);
            if (headerContainer) {
                if (data.header) {
                    const headerImg = document.createElement('img'); headerImg.s
rc = data.header; headerImg.alt = ensToFetch + ' header';
                    headerContainer.appendChild(headerImg); headerContainer.styl
e.display = 'block';
                } else { headerContainer.style.display = 'none'; }
            }
            let recordsMap = {'identity': null, 'displayName': null, 'followers'
: null, 'following': null, 'location': null, 'status': null, 'description': null
, 'website': null, 'email': null, 'createdAt': null };
            let otherRecords = [];
            const isBase = ensToFetch.endsWith('.base.eth');
            recordsMap['identity'] = { label: isBase ? 'Basename' : 'ENS', value
: ensToFetch };
            if (data.displayName && data.displayName !== ensToFetch) recordsMap[
'displayName'] = { label: 'Name', value: data.displayName };
            recordsMap['followers'] = { label: 'Followers', value: data.social?.
follower !== undefined ? data.social.follower : 0 };
            recordsMap['following'] = { label: 'Following', value: data.social?.
following !== undefined ? data.social.following : 0 };
            if (data.location) recordsMap['location'] = { label: 'Location', val
ue: data.location };
            if (data.status) recordsMap['status'] = { label: 'Status', value: da
ta.status };
            if (data.description) recordsMap['description'] = { label: 'Bio', va
lue: data.description };
            if (data.links?.website?.handle) recordsMap['website'] = { label: 'W
ebsite', value: data.links.website.handle, isLink: true, linkUrl: data.links.web
site.link || app.normalizeUrl(data.links.website.handle) };
            if (data.email) recordsMap['email'] = { label: 'Email', value: data.
email };
            if (data.createdAt) {
                let formattedDate = data.createdAt;
                try { const date = new Date(data.createdAt); if (!isNaN(date.get
Time())) formattedDate = date.toLocaleDateString('en-US', { month: '2-digit', da
y: '2-digit', year: 'numeric' }); } catch (err) {}
                recordsMap['createdAt'] = { label: 'Created', value: formattedDa
te };
            }
            if (data.links && typeof data.links === 'object') {
                Object.entries(data.links).forEach(([platform, linkData]) => {
                    if (platform !== 'website' && linkData.handle) {
                        let label = '';
                        if (linkData.sources && linkData.sources.length > 0) lab
el = linkData.sources[0].charAt(0).toUpperCase() + linkData.sources[0].slice(1);
                        else label = platform.charAt(0).toUpperCase() + platform
.slice(1);
                        otherRecords.push({ label: label, value: linkData.handle
, isLink: true, linkUrl: linkData.link || app.normalizeUrl(linkData.handle) });
                    }
                });
            }
            Object.entries(data).forEach(([key, value]) => {
                if (!Object.keys(recordsMap).includes(key) && key !== 'links' &&
 key !== 'address') {
                    app.processValue(key, value, otherRecords, app.HEADER_RENAME
S, app.LINKABLE_RECORDS, app.normalizeUrl);
                }
            });
            let orderedRecords = [];
            if (recordsMap['identity']) orderedRecords.push(recordsMap['identity
']);
            if (recordsMap['displayName']) orderedRecords.push(recordsMap['displ
ayName']);
            if (recordsMap['followers']) orderedRecords.push(recordsMap['followe
rs']);
            if (recordsMap['following']) orderedRecords.push(recordsMap['followi
ng']);
            if (recordsMap['location']) orderedRecords.push(recordsMap['location
']);
            if (recordsMap['status']) orderedRecords.push(recordsMap['status']);
            if (recordsMap['description']) orderedRecords.push(recordsMap['descr
iption']);
            if (recordsMap['email']) orderedRecords.push(recordsMap['email']);
            if (recordsMap['website']) orderedRecords.push(recordsMap['website']
);
            otherRecords.sort((a, b) => a.label.localeCompare(b.label));
            orderedRecords = orderedRecords.concat(otherRecords);
            if (recordsMap['createdAt']) {
                 orderedRecords = orderedRecords.filter(record => record.label !
== 'Created');
                 orderedRecords.push(recordsMap['createdAt']);
            }
            orderedRecords.forEach(record => {
                if (record) {
                    if (record.isLink && record.linkUrl) {
                        const linkElement = document.createElement('a');
                        linkElement.href = record.linkUrl; linkElement.target =
'_blank'; linkElement.rel = 'noopener noreferrer';
                        linkElement.textContent = record.value;
                        app.addRecord(record.label, linkElement);
                    } else { app.addRecord(record.label, record.value); }
                }
            });
            if (recordsContainer && recordsContainer.children.length === 0) { ap
p.addRecord('Status', 'No records found'); }
        }
    } catch (error) { app.showError(error.message); }
    finally { app.hideLoading(); }
}`;

                const embeddedJavaScriptString = `
window.downloadedProfileApp = {};
(function(app) {
    app.API_BASE_URL = '${API_BASE_URL}';
    app.DEFAULT_AVATAR = '${DEFAULT_AVATAR}';
    app.HEADER_RENAMES = ${JSON.stringify(headerRenames)};
    app.LINKABLE_RECORDS = ${JSON.stringify(linkableRecords)};
    app.THEME_COLORS = ${JSON.stringify(themeColorsForDownload)};
    app.ENS_TO_FETCH = '${currentEnsNameFromDisplayProfile}';
    app.ACTIVE_EFFECT_NAME = '${activeEffectName}';
    app.CAPTURED_BORDER_COLOR = '${borderColor}';

    app.createDefaultAvatar = ${createDefaultAvatarForDownloadString};
    app.setAvatar = ${setAvatarForDownloadString};
    app.addRecord = ${addRecordForDownloadString};
    app.normalizeUrl = ${normalizeUrlString};
    app.processValue = ${processValueString};
    app.showLoading = ${showLoadingForDownloadString};
    app.hideLoading = ${hideLoadingForDownloadString};
    app.showError = ${showErrorForDownloadString};
    app.hideError = ${hideErrorForDownloadString};

    app.applyGlowEffect = ${effectFunctionsStrings.applyGlow};
    app.removeGlowEffect = ${effectFunctionsStrings.removeGlow};
    app.addSnowEffect = ${effectFunctionsStrings.addSnow};
    app.removeSnowEffect = ${effectFunctionsStrings.removeSnow};
    app.applyStarsEffect = ${effectFunctionsStrings.applyStars};
    app.removeStarsEffect = ${effectFunctionsStrings.removeStars};
    app.applyRainbowEffect = ${effectFunctionsStrings.applyRainbow};
    app.removeRainbowEffect = ${effectFunctionsStrings.removeRainbow};
    app.applyMatrixEffect = ${effectFunctionsStrings.applyMatrix};
    app.removeMatrixEffect = ${effectFunctionsStrings.removeMatrix};
    app.applyFirefliesEffect = ${effectFunctionsStrings.applyFireflies};
    app.removeFirefliesEffect = ${effectFunctionsStrings.removeFireflies};
    app.applyConfettiEffect = ${effectFunctionsStrings.applyConfetti};
    app.removeConfettiEffect = ${effectFunctionsStrings.removeConfetti};
    app.applyNeonEffect = ${effectFunctionsStrings.applyNeon};
    app.removeNeonEffect = ${effectFunctionsStrings.removeNeon};
    app.applyVaporwareEffect = ${effectFunctionsStrings.applyVaporware};
    app.removeVaporwareEffect = ${effectFunctionsStrings.removeVaporware};

    app.fetchAndDisplayProfileOnLoad = ${fetchAndDisplayProfileOnLoadString};

    app.init = async function() {
        await app.fetchAndDisplayProfileOnLoad(app.ENS_TO_FETCH, app.THEME_COLOR
S);
        switch (app.ACTIVE_EFFECT_NAME) {
            case 'glow': app.applyGlowEffect(app.CAPTURED_BORDER_COLOR); break;
            case 'snow': app.addSnowEffect(); break;
            case 'stars': app.applyStarsEffect(); break;
            case 'rainbow': app.applyRainbowEffect(); break;
            case 'matrix': app.applyMatrixEffect(); break;
            case 'fireflies': app.applyFirefliesEffect(); break;
            case 'confetti': app.applyConfettiEffect(); break;
            case 'neon': app.applyNeonEffect(app.CAPTURED_BORDER_COLOR); break;
            case 'vaporware': app.applyVaporwareEffect(); break;
            default: break;
        }
    };

    document.addEventListener('DOMContentLoaded', function() { app.init(); });
})(window.downloadedProfileApp);
        <\/script>`;

                        let populatedTemplate = DOWNLOAD_TEMPLATE_STRING;
                        populatedTemplate = populatedTemplate.replace('<!--ENS_N
AME_TITLE_PLACEHOLDER-->', pageTitle);
                        populatedTemplate = populatedTemplate.replace('<!--FAVIC
ON_SRC_PLACEHOLDER-->', currentAvatarSrc);
                        populatedTemplate = populatedTemplate.replace('<!--AVATA
R_SRC_PLACEHOLDER-->', currentAvatarSrc);
                        populatedTemplate = populatedTemplate.replace('/* THEME_
CSS_VARIABLES_PLACEHOLDER */', themeCssVariablesString);
                        populatedTemplate = populatedTemplate.replace('/* EFFECT
_KEYFRAMES_PLACEHOLDER */', allKeyframesCssString);
                        populatedTemplate = populatedTemplate.replace('// EMBEDD
ED_JS_LOGIC_PLACEHOLDER', embeddedJavaScriptString);

                        const downloadLink = document.createElement('a');
                        downloadLink.setAttribute('href', 'data:text/html;charse
t=utf-8,' + encodeURIComponent(populatedTemplate));
                        downloadLink.setAttribute('download', `${currentEnsNameF
romDisplayProfile.replace(/\s+/g, '-').toLowerCase()}.html`);

                        document.body.appendChild(downloadLink);
                        downloadLink.click();
                        document.body.removeChild(downloadLink);

                    } catch (error) {
                        console.error('Error generating download:', error);
                        const errorToast = document.createElement('div');
                        errorToast.textContent = 'Error downloading website. Ple
ase try again.';
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
                            setTimeout(() => document.body.removeChild(errorToas
t), 500);
                        }, 3000);
                    }
                };
            })(ensName)); // Pass ensName to the IIFE here
        }

        // Helper function to normalize URLs
// (The rest of the script content from the fetched URL,
// including normalizeUrl, addRecord, processValue,
// displayUnregisteredProfile, setupNavLogoClickHandler, etc.
// should follow here, unchanged from the fetched content)

function addRecord(label, value) {
    const recordDiv = document.createElement('div');
    recordDiv.className = 'profile-record';

    const labelSpan = document.createElement('span');
    labelSpan.className = 'record-label';
    labelSpan.textContent = label;
    recordDiv.appendChild(labelSpan);

    const valueSpan = document.createElement('span');
    valueSpan.className = 'record-value';
    if (typeof value === 'string') {
        valueSpan.textContent = value;
    } else {
        valueSpan.appendChild(value); // Assuming value is an HTML element (like
an <a> tag)
    }
    recordDiv.appendChild(valueSpan);

    document.querySelector('.profile-records').appendChild(recordDiv);
}

function normalizeUrl(url) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        return 'https://' + url;
    }
    return url;
}

function processValue(key, value, recordsArray, renames, linkables, urlNormaliz
er) {
    if (typeof value === 'string' && value.trim() !== '') {
        const label = renames[key] || key.charAt(0).toUpperCase() + key.slice(1)
;
        if (linkables.includes(label) && value.includes('.')) { // Basic check f
or a link-like value
            recordsArray.push({
                label: label,
                value: value,
                isLink: true,
                linkUrl: urlNormalizer(value)
            });
        } else {
            recordsArray.push({ label: label, value: value });
        }
    } else if (typeof value === 'object' && value !== null) {
        // If the value is an object, iterate over its properties
        Object.entries(value).forEach(([subKey, subValue]) => {
            // Create a combined key for display, e.g., "Social.Twitter"
            const combinedKey = `${key.charAt(0).toUpperCase() + key.slice(1)}.${
subKey.charAt(0).toUpperCase() + subKey.slice(1)}`;
            processValue(combinedKey, subValue, recordsArray, renames, linkables
, urlNormalizer); // Recursive call
        });
    }
    // Numbers, booleans, nulls, or empty strings are ignored in this version
}

function displayUnregisteredProfile(ensName) {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('#homepage-geocities').style.display = 'none';

    const profilePage = document.getElementById('profile-page');
    profilePage.style.display = 'flex';

    const searchContainer = document.querySelector('.search-container');
    searchContainer.style.margin = '10px auto 20px';
    profilePage.insertBefore(searchContainer, profilePage.firstChild);

    stylePanel.style.margin = '10px auto 20px';
    profilePage.insertBefore(stylePanel, document.querySelector('.profile-contai
ner'));

    const firstLetter = ensName.charAt(0);
    const defaultAvatar = createDefaultAvatar(firstLetter);
    setAvatar(defaultAvatar);

    document.querySelector('.profile-header-image').style.display = 'none';
    const recordsContainer = document.querySelector('.profile-records');
    recordsContainer.innerHTML = '';

    addRecord(ensName.endsWith('.base.eth') ? 'Basename' : 'ENS', ensName);
    addRecord('Status', 'This name is not registered.');

    const existingRegisterContainer = document.querySelector('.register-containe
r');
    if (existingRegisterContainer) {
        existingRegisterContainer.remove();
    }

    const registerContainer = document.createElement('div');
    registerContainer.className = 'register-container';
    registerContainer.style.cssText = `
        width: var(--container-width);
        max-width: var(--max-width);
        display: flex;
        justify-content: center;
        margin: 20px auto;
    `;

    const registerButton = document.createElement('a');
    const isBaseName = ensName.endsWith('.base.eth');
    const registerUrl = isBaseName ? `https://app.basetoken.eth.limo/#/name/${en
sName}` : `https://app.ens.domains/${ensName}`;
    registerButton.href = registerUrl;
    registerButton.target = '_blank';
    registerButton.rel = 'noopener noreferrer';
    registerButton.textContent = isBaseName ? 'Register on Base Name' : 'Registe
r on ENS';
    registerButton.className = 'register-button'; // Use a class for styling
    registerButton.style.cssText = `
        padding: 8px 15px;
        background: var(--background-color);
        color: var(--primary-color);
        border: 1px solid var(--border-color);
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 0.9em;
        text-decoration: none;
        text-align: center;
    `;

    registerButton.addEventListener('mouseover', () => {
        registerButton.style.opacity = '0.8';
    });
    registerButton.addEventListener('mouseout', () => {
        registerButton.style.opacity = '1';
    });

    registerContainer.appendChild(registerButton);
    recordsContainer.parentNode.insertBefore(registerContainer, recordsContainer
.nextSibling);

    initializeColorPickers();
    setupNavLogoClickHandler();
}

function setupNavLogoClickHandler() {
    const navLogoLink = document.querySelector('.nav-logo');
    const newNavLogoLink = navLogoLink.cloneNode(true); // Clone to remove exist
ing listeners
    navLogoLink.parentNode.replaceChild(newNavLogoLink, navLogoLink);

    newNavLogoLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor action

        // Hide profile page and its specific elements
        document.getElementById('profile-page').style.display = 'none';

        // Show homepage elements
        document.querySelector('.container').style.display = 'block';
        document.querySelector('#homepage-geocities').style.display = 'block';

        // Move search container back to main page
        const searchContainer = document.querySelector('.search-container');
        document.querySelector('.container').appendChild(searchContainer);
        searchContainer.style.margin = '20px auto'; // Reset margin

        // Hide style panel
        document.querySelector('.style-panel').style.display = 'none';

        // Reset avatar to GeoCities default
        initializeGeoCitiesAvatar();

        // Clear search input
        document.querySelector('.search-input').value = '';

        // Remove any existing register button container
        const existingRegisterContainer = document.querySelector('.register-cont
ainer');
        if (existingRegisterContainer) {
            existingRegisterContainer.remove();
        }
        // Remove any existing download button container
        const existingDownloadContainer = document.querySelector('.download-webs
ite-container');
        if (existingDownloadContainer) {
            existingDownloadContainer.remove();
        }
    });
}
