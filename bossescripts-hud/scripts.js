document.addEventListener('DOMContentLoaded', function () {
    function updateStatus(hunger, thirst, health, stamina) {
        const hungerBar = document.getElementById('hunger-bar');
        const hungerText = document.getElementById('hunger-text');
        const thirstBar = document.getElementById('thirst-bar');
        const thirstText = document.getElementById('thirst-text');
        const healthBar = document.getElementById('health-bar');
        const healthText = document.getElementById('health-text');
        const staminaBar = document.getElementById('stamina-bar');
        const staminaText = document.getElementById('stamina-text');

        if (hungerBar && hungerText) {
            hungerBar.style.width = `${hunger}%`;
            hungerText.textContent = hunger;
            if (hunger < 25) {
                hungerBar.style.backgroundColor = 'purple'; /*If you want to change the changing color that the hud switches in adjust purple to any other color*/
            } else if (hunger < 50) {
                hungerBar.style.backgroundColor = 'purple'; /*If you want to change the changing color that the hud switches in adjust purple to any other color*/
            } else {
                hungerBar.style.backgroundColor = 'purple'; /*If you want to change the changing color that the hud switches in adjust purple to any other color*/
            }
        }

        if (thirstBar && thirstText) {
            thirstBar.style.width = `${thirst}%`;
            thirstText.textContent = thirst;
            if (thirst < 25) {
                thirstBar.style.backgroundColor = 'purple'; /*If you want to change the changing color that the hud switches in adjust purple to any other color*/
            } else if (thirst < 50) {
                thirstBar.style.backgroundColor = 'purple'; /*If you want to change the changing color that the hud switches in adjust purple to any other color*/
            } else {
                thirstBar.style.backgroundColor = 'purple'; /*If you want to change the changing color that the hud switches in adjust purple to any other color*/
            }
        }

        if (healthBar && healthText) {
            healthBar.style.width = `${health}%`;
            healthText.textContent = health;
            if (health < 25) {
                healthBar.style.backgroundColor = 'purple'; /*If you want to change the changing color that the hud switches in adjust purple to any other color*/
            } else if (health < 50) {
                healthBar.style.backgroundColor = 'purple'; /*If you want to change the changing color that the hud switches in adjust purple to any other color*/
            } else {
                healthBar.style.backgroundColor = 'purple'; /*If you want to change the changing color that the hud switches in adjust purple to any other color*/
            }
        }

        if (staminaBar && staminaText) {
            staminaBar.style.width = `${stamina}%`;
            staminaText.textContent = stamina;
            if (stamina < 25) {
                staminaBar.style.backgroundColor = 'purple'; /*If you want to change the changing color that the hud switches in adjust purple to any other color*/
            } else if (stamina < 50) {
                staminaBar.style.backgroundColor = 'purple'; /*If you want to change the changing color that the hud switches in adjust purple to any other color*/
            } else {
                staminaBar.style.backgroundColor = 'purple'; /*If you want to change the changing color that the hud switches in adjust purple to any other color*/
            }
        }
    }

    window.addEventListener('message', function (event) {
        if (event.data.type === 'updateStatus') {
            updateStatus(event.data.hunger, event.data.thirst, event.data.health, event.data.stamina);
        }
    });
});
