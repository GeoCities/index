const pageBody = document.body;
const neighborhoodSelect = document.getElementById('neighborhood-select');
const neighborhoodContainer = document.getElementById('neighborhood-container');
const homepage = document.getElementById('homepage');
const profilePage = document.getElementById('profile-page');
const ensQueryHome = document.getElementById('ens-query-home');
const ensQueryProfile = document.getElementById('ens-query-profile');
const errorMessageHome = document.getElementById('error-message-home');
const errorMessageProfile = document.getElementById('error-message-profile');
const successMessageProfile = document.getElementById('success-message-profile');
const registerButton = document.getElementById('register-name-button');
const toggleButton = document.querySelector('.toggle-button');
let lightMode = false;
let currentNeighborhood = 'geocities';

function toggleTheme() {
    lightMode = !lightMode;
    pageBody.classList.toggle('light-mode', lightMode);
    toggleButton.textContent = lightMode ? 'Dark' : 'Light';
    changeNeighborhood();
}

function changeNeighborhood() {
    currentNeighborhood = neighborhoodSelect.value;
    neighborhoodContainer.className = `neighborhood-container neighborhood-${currentNeighborhood} ${lightMode ? 'light-mode' : ''}`;
    
    if (currentNeighborhood === 'geocities') {
        pageBody.style.background = lightMode ? '#fff' : '#000';
    } else if (currentNeighborhood === 'area51') {
        pageBody.style.background = lightMode ? 'linear-gradient(135deg, #E0E0E0 0%, #A0A0A0 100%)' : '#0A0A0A';
    } else if (currentNeighborhood === 'athens') {
        pageBody.style.background = lightMode ? '#F5F5DC' : '#2F4F4F';
    } else if (currentNeighborhood === 'augusta') {
        pageBody.style.background = lightMode ? '#90EE90' : '#006400';
    } else if (currentNeighborhood === 'baja') {
        pageBody.style.background = lightMode ? '#D2B48C' : '#F4A460';
    } else if (currentNeighborhood === 'bourbonstreet') {
        pageBody.style.background = lightMode ? '#E6E6FA' : '#4B0082';
    } else if (currentNeighborhood === 'broadway') {
        pageBody.style.background = lightMode ? '#FFFDD0' : '#1C2526';
    } else if (currentNeighborhood === 'capecanaveral') {
        pageBody.style.background = lightMode ? '#E6F3FA' : '#001F3F';
    } else if (currentNeighborhood === 'capitolhill') {
        pageBody.style.background = lightMode ? '#F5F5F5' : '#3C2F2F';
    } else if (currentNeighborhood === 'collegepark') {
        pageBody.style.background = lightMode ? '#FFF8DC' : '#2E1E0F';
    } else if (currentNeighborhood === 'colosseum') {
        pageBody.style.background = lightMode ? '#FFE4C4' : '#4A2C2A';
    } else if (currentNeighborhood === 'enchantedforest') {
        pageBody.style.background = lightMode ? '#F0FFF0' : '#2E2E2E';
    } else if (currentNeighborhood === 'eureka') {
        pageBody.style.background = lightMode ? '#F5FFFA' : '#1A2421';
    } else if (currentNeighborhood === 'fashionavenue') {
        pageBody.style.background = lightMode ? '#FFF0F5' : '#1C1C1C';
    } else if (currentNeighborhood === 'heartland') {
        pageBody.style.background = lightMode ? '#FAF0E6' : '#3F2A1D';
    } else if (currentNeighborhood === 'hollywood') {
        pageBody.style.background = lightMode ? '#F5F5F5' : '#0F0F0F';
    } else if (currentNeighborhood === 'hotsprings') {
        pageBody.style.background = lightMode ? '#F0FFF0' : '#2F4F4F';
    } else if (currentNeighborhood === 'madisonavenue') {
        pageBody.style.background = lightMode ? '#F0F8FF' : '#1B263B';
    } else if (currentNeighborhood === 'motorcity') {
        pageBody.style.background = lightMode ? '#F5F5F5' : '#2C2C2C';
    } else if (currentNeighborhood === 'napavalley') {
        pageBody.style.background = lightMode ? '#FFF5EE' : '#4A2C2A';
    } else if (currentNeighborhood === 'nashville') {
        pageBody.style.background = lightMode ? '#FAEBD7' : '#3C2F2F';
    } else if (currentNeighborhood === 'paris') {
        pageBody.style.background = lightMode ? '#FFF0F5' : '#2E1E2E';
    } else if (currentNeighborhood === 'pentagon') {
        pageBody.style.background = lightMode ? '#F5FFFA' : '#1A2421';
    } else if (currentNeighborhood === 'petsburgh') {
        pageBody.style.background = lightMode ? '#FAF0E6' : '#3F2A1D';
    } else if (currentNeighborhood === 'picketfence') {
        pageBody.style.background = lightMode ? '#F0FFF0' : '#2F4F4F';
    } else if (currentNeighborhood === 'pipeline') {
        pageBody.style.background = lightMode ? '#FFFDD0' : '#1C2526';
    } else if (currentNeighborhood === 'rainforest') {
        pageBody.style.background = lightMode ? '#F0FFF0' : '#1A3C34';
    } else if (currentNeighborhood === 'researchtriangle') {
        pageBody.style.background = lightMode ? '#E6F3FA' : '#001F3F';
    } else if (currentNeighborhood === 'rodeodrive') {
        pageBody.style.background = lightMode ? '#FFF0F5' : '#1C1C1C';
    } else if (currentNeighborhood === 'siliconvalley') {
        pageBody.style.background = lightMode ? '#E0E0E0' : '#0A0A0A';
    } else if (currentNeighborhood === 'soho') {
        pageBody.style.background = lightMode ? '#FFF0F5' : '#2E1E2E';
    } else if (currentNeighborhood === 'southbeach') {
        pageBody.style.background = lightMode ? '#F0F8FF' : '#1B263B';
    } else if (currentNeighborhood === 'sunsetstrip') {
        pageBody.style.background = lightMode ? '#FFFDD0' : '#1C2526';
    } else if (currentNeighborhood === 'televisioncity') {
        pageBody.style.background = lightMode ? '#F5F5F5' : '#0F0F0F';
    } else if (currentNeighborhood === 'thetropics') {
        pageBody.style.background = lightMode ? '#FFF5EE' : '#1A3C34';
    } else if (currentNeighborhood === 'timessquare') {
        pageBody.style.background = lightMode ? '#F0FFF0' : '#1C1C1C';
    } else if (currentNeighborhood === 'tokyo') {
        pageBody.style.background = lightMode ? '#F5F5F5' : '#2C2C2C';
    } else if (currentNeighborhood === 'vienna') {
        pageBody.style.background = lightMode ? '#FAEBD7' : '#3C2F2F';
    } else if (currentNeighborhood === 'wallstreet') {
        pageBody.style.background = lightMode ? '#F5FFFA' : '#1A2421';
    } else if (currentNeighborhood === 'wellesley') {
        pageBody.style.background = lightMode ? '#FFF0F5' : '#2E1E2E';
    } else if (currentNeighborhood === 'westhollywood') {
        pageBody.style.background = lightMode ? '#FFFDD0' : '#1C2526';
    } else if (currentNeighborhood === 'yosemite') {
        pageBody.style.background = lightMode ? '#FFF5EE' : '#1A3C34';
    } else if (currentNeighborhood === 'northpole') {
        pageBody.style.background = lightMode ? '#F0FFF0' : '#2F4F4F';
    }

    const profileContainer = document.querySelector('.profile-container');
    if (profileContainer) {
        profileContainer.innerHTML = '';
        displayProfile(currentProfileData);
    }
}

function showHomepage() {
    homepage.style.display = 'block';
    profilePage.style.display = 'none';
    errorMessageHome.textContent = '';
    errorMessageProfile.textContent = '';
    successMessageProfile.textContent = '';
    ensQueryHome.value = '';
    ensQueryProfile.value = '';
}

let currentProfileData = null;

async function searchENS() {
    const query = ensQueryHome.value.trim() || ensQueryProfile.value.trim();
    if (!query) {
        errorMessageHome.textContent = 'Please enter an ENS or Base name';
        errorMessageProfile.textContent = 'Please enter an ENS or Base name';
        return;
    }

    errorMessageHome.textContent = '';
    errorMessageProfile.textContent = '';
    successMessageProfile.textContent = '';

    try {
        // Placeholder API call - replace with actual ENS/Base resolution API
        const response = await fetch(`https://api.example.com/resolve?name=${encodeURIComponent(query)}`);
        if (!response.ok) throw new Error('Name not found');
        const data = await response.json();

        currentProfileData = {
            name: data.name || query,
            avatar: data.avatar || '',
            header: data.header || '',
            description: data.description || '',
            url: data.url || '',
            social: data.social || {}
        };

        homepage.style.display = 'none';
        profilePage.style.display = 'block';
        displayProfile(currentProfileData);

        // Simulate register button state
        registerButton.textContent = 'Register Name';
        registerButton.onclick = () => registerName(query);
    } catch (error) {
        errorMessageHome.textContent = 'Error: Name not found or invalid';
        errorMessageProfile.textContent = 'Error: Name not found or invalid';
    }
}

function displayProfile(data) {
    if (!data) return;

    neighborhoodContainer.innerHTML = '';

    // Profile Header
    const profileHeader = document.createElement('div');
    profileHeader.id = 'profile-header';
    if (data.header) {
        profileHeader.style.backgroundImage = `url(${data.header})`;
        profileHeader.style.display = 'block';
    }
    if (data.url) {
        const headerLink = document.createElement('a');
        headerLink.id = 'profile-header-link';
        headerLink.href = data.url;
        headerLink.appendChild(profileHeader);
        neighborhoodContainer.appendChild(headerLink);
    } else {
        neighborhoodContainer.appendChild(profileHeader);
    }

    // Profile Avatar
    const profileAvatar = document.createElement('div');
    profileAvatar.id = 'profile-avatar';
    if (data.avatar) {
        profileAvatar.style.backgroundImage = `url(${data.avatar})`;
    } else {
        profileAvatar.textContent = data.name.charAt(0).toUpperCase();
    }
    if (data.url) {
        const avatarLink = document.createElement('a');
        avatarLink.id = 'profile-avatar-link';
        avatarLink.href = data.url;
        avatarLink.appendChild(profileAvatar);
        neighborhoodContainer.appendChild(avatarLink);
    } else {
        neighborhoodContainer.appendChild(profileAvatar);
    }

    // Profile Container
    const profileContainer = document.createElement('div');
    profileContainer.className = 'profile-container';
    neighborhoodContainer.appendChild(profileContainer);

    // Profile Records
    const records = [
        { key: 'Name', value: data.name },
        { key: 'Description', value: data.description },
        { key: 'URL', value: data.url },
        ...Object.entries(data.social).map(([key, value]) => ({ key, value }))
    ].filter(record => record.value);

    records.forEach(record => {
        const profileBox = document.createElement('div');
        profileBox.className = 'profile-box';
        profileBox.innerHTML = `
            <span class="profile-box-header">${record.key}:</span>
            <span class="profile-box-value">${record.value}</span>
        `;
        profileContainer.appendChild(profileBox);
    });
}

async function registerName(name) {
    try {
        // Simulate registration - replace with actual registration API
        await new Promise(resolve => setTimeout(resolve, 1000));
        successMessageProfile.textContent = `Successfully registered ${name}!`;
        errorMessageProfile.textContent = '';
        registerButton.style.display = 'none';
    } catch (error) {
        errorMessageProfile.textContent = 'Error registering name';
        successMessageProfile.textContent = '';
    }
}

async function deployToIPFS() {
    if (!currentProfileData) {
        errorMessageProfile.textContent = 'No profile data to deploy';
        return;
    }

    try {
        // Simulate IPFS deployment - replace with actual IPFS API
        const content = JSON.stringify(currentProfileData);
        await new Promise(resolve => setTimeout(resolve, 1000));
        const cid = 'QmExampleCID' + Math.random().toString(36).substring(2, 15);
        successMessageProfile.textContent = `Deployed to IPFS with CID: ${cid}`;
        errorMessageProfile.textContent = '';
    } catch (error) {
        errorMessageProfile.textContent = 'Error deploying to IPFS';
        successMessageProfile.textContent = '';
    }
}

// Initialize
neighborhoodContainer.className = `neighborhood-container neighborhood-${currentNeighborhood} ${lightMode ? 'light-mode' : ''}`;
toggleButton.textContent = lightMode ? 'Dark' : 'Light';
