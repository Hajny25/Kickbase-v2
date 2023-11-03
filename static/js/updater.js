function update(data) {
    const total = document.querySelector(".total-points");
    total.innerText = `Total: ${data.totalPoints}`;

    for (const [playerId, playerPoints] of Object.entries(data.players)) {
        const playerDiv = document.getElementById(playerId);
        const pointsDiv = playerDiv.querySelector(".player-points"); 
        let diff = playerPoints - pointsDiv.textContent;
        if (diff > 0) {
            diff = `+${diff}`
        }
        playerDiv.querySelector(".player-points-diff").textContent = diff;
        pointsDiv.textContent = playerPoints;
        const container = playerDiv.parentNode;
        var prev = playerDiv.previousElementSibling;
        while (prev && prev.querySelector(".player-points").textContent < playerPoints) {
            prev = prev.previousElementSibling;
        }
        if (prev) {
            container.insertBefore(playerDiv, prev.nextSibling);
        } else {
            container.prepend(playerDiv);
        }
    }

}
