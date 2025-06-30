<button onclick="playNext()">🎵 Relaxing</button>
<br><br>
<audio id="player" controls></audio>

<script>
  const songs = [
    "https://docs.google.com/uc?export=open&id=1MGHZD5LdocYEtvTtuJpPbDOXyxCIyFn-",
    "https://docs.google.com/uc?export=open&id=1zyW2i5vu3eddtsn4P2QenchzkgG1zBUl",
    "https://docs.google.com/uc?export=open&id=1XCEcvfr2J-q_aT5wct5g2MMoMoMtjLo7",
    "https://docs.google.com/uc?export=open&id=1gHCEY9xWDuCHpheAwhU2G-odW4ec8g7Q",
    "https://docs.google.com/uc?export=open&id=1Z-In5cqY-iFd8SxXX9GqzzYyTB0Imk4F",
    "https://docs.google.com/uc?export=open&id=1YAIlwWf2e4ml3H35OCQoJQtEvkYBhBFq"
  ];

  let currentIndex = 0;

  function playNext() {
    const player = document.getElementById("player");
    player.src = songs[currentIndex];
    player.play();
    currentIndex = (currentIndex + 1) % songs.length;
  }
</script>
