const Styles = {
    generateNeighborhoodStyles(neighborhoods) {
        const styleElement = document.getElementById('neighborhood-styles');
        let css = '';

        neighborhoods.forEach(neighborhood => {
            const { id, font, dark, light, effects } = neighborhood;
            const mode = GeoCities.state.lightMode ? light : dark;

            css += `
                .neighborhood-${id} {
                    font-family: ${font};
                    color: ${mode.text};
                    border-color: ${mode.border};
                }
                .neighborhood-${id} .profile-box {
                    background: ${mode.boxBackground};
                    border: 1px solid ${mode.border};
                    padding: 15px;
                    margin-bottom: 20px;
                    border-radius: 5px;
                    box-sizing: border-box;
                    position: relative;
                    overflow: hidden;
                }
                .neighborhood-${id} .profile-box img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 5px;
                }
                .neighborhood-${id} .record {
                    margin: 10px 0;
                    word-break: break-word;
                }
                .neighborhood-${id} .record a {
                    color: ${mode.text};
                    text-decoration: none;
                }
                .neighborhood-${id} .record a:hover {
                    text-decoration: underline;
                }
            `;

            if (effects && effects.profileBox) {
                const { type, value } = effects.profileBox;
                css += `
                    .neighborhood-${id} .profile-box {
                        ${type}: ${value};
                    }
                `;
            }

            if (effects && effects.profileBoxHover) {
                const { type, value } = effects.profileBoxHover;
                css += `
                    .neighborhood-${id} .profile-box:hover {
                        ${type}: ${value};
                    }
                `;
            }
        });

        styleElement.textContent = css;
    }
};
