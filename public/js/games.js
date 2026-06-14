// Games and scoring functionality

document.getElementById('saveScoreBtn').addEventListener('click', saveScore);

async function saveScore() {
    if (!currentUser) {
        alert('Please login to save scores');
        return;
    }

    try {
        const response = await fetch('/api/scores', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: currentUser.id,
                score: Math.floor(Math.random() * 10000)
            })
        });

        if (response.ok) {
            alert('Score saved!');
            loadLeaderboard();
        }
    } catch (error) {
        console.error('Error saving score:', error);
    }
}
