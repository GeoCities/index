document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');
    const neighborhoodSelect = document.querySelector('.neighborhood-select');
    const profilePage = document.getElementById('profile-page');
    const homepage = document.querySelector('.container');
    const registerButton = document.querySelector('.register-button');
    const ipfsButton = document.querySelector('.ipfs-button');
    const themeToggle = document.getElementById('theme-toggle');
    let currentProfileData = null;

    // Theme Toggle
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        updateThemeStyles();
    });

    // Update theme styles for neighborhood
    function updateThemeStyles() {
        const isLightMode = document.body.classList.contains('light-mode');
        const neighborhood = neighborhoodSelect.value.toLowerCase().replace(/\s+/g, '');
        const neighborhoodContainer = document.querySelector('.neighborhood-container');
        
        neighborhoodContainer.className = `neighborhood-container neighborhood-${neighborhood} ${isLightMode ? 'light-mode' : ''}`;
        
        // Update profile elements
        if (currentProfileData) {
            updateProfileDisplay(currentProfileData);
        }
    }

    // Search Functionality
    searchButton.addEventListener('click', async () => {
        const query = searchInput.value.trim();
        const neighborhood = neighborhoodSelect.value;
        if (query) {
            try {
                const response = await fetch(`https://api.geocities.com/search?username=${encodeURIComponent(query)}&neighborhood=${encodeURIComponent(neighborhood)}`);
                const data = await response.json();
                currentProfileData = data;
                displayProfile(data);
            } catch (error) {
                console.error('Error fetching profile:', error);
                alert('Error fetching profile. Please try again.');
            }
        }
    });

    // Display Profile
    function displayProfile(data) {
        homepage.style.display = 'none';
        profilePage.style.display = 'flex';
        updateProfileDisplay(data);
    }

    // Update Profile Display
    function updateProfileDisplay(data) {
        const isLightMode = document.body.classList.contains('light-mode');
        const neighborhood = neighborhoodSelect.value.toLowerCase().replace(/\s+/g, '');
        
        profilePage.innerHTML = `
            <div class="neighborhood-container neighborhood-${neighborhood} ${isLightMode ? 'light-mode' : ''}">
                <div class="profile-box" style="animation: fadeIn 1s;">
                    <img id="profile-avatar" src="${data.avatar || 'default-avatar.png'}" alt="Avatar">
                </div>
                <h2 id="profile-header">${data.username || 'Unknown User'}</h2>
                <div class="profile-box">
                    <p><strong>Neighborhood:</strong> ${data.neighborhood || 'N/A'}</p>
                    <p><strong>Bio:</strong> ${data.bio || 'No bio available'}</p>
                    <p><strong>Website:</strong> <a href="${data.website || '#'}" target="_blank">${data.website || 'No website'}</a></p>
                </div>
            </div>
        `;
    }

    // Register Button
    if (registerButton) {
        registerButton.addEventListener('click', async () => {
            const username = prompt('Enter desired username:');
            const neighborhood = neighborhoodSelect.value;
            if (username) {
                try {
                    const response = await fetch('https://api.geocities.com/register', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ username, neighborhood })
                    });
                    const result = await response.json();
                    alert(result.message || 'Registration successful!');
                } catch (error) {
                    console.error('Error registering:', error);
                    alert('Error registering. Please try again.');
                }
            }
        });
    }

    // IPFS Button
    if (ipfsButton) {
        ipfsButton.addEventListener('click', async () => {
            const content = prompt('Enter content to upload to IPFS:');
            if (content) {
                try {
                    const response = await fetch('https://api.geocities.com/upload-ipfs', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ content })
                    });
                    const result = await response.json();
                    alert(`IPFS Hash: ${result.hash}`);
                } catch (error) {
                    console.error('Error uploading to IPFS:', error);
                    alert('Error uploading to IPFS. Please try again.');
                }
            }
        });
    }

    // Neighborhood Change
    neighborhoodSelect.addEventListener('change', () => {
        updateThemeStyles();
    });
});
