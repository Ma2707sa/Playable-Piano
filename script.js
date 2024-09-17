const pianoKeys = document.querySelectorAll(".piano-keys .key");
keysCheckbox = document.querySelector(".keys-checkbox input");
volumeSlider = document.querySelector(".volume-slider input");

let allKeys = [];
const audio = new Audio();

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    if (clickedKey) {
        clickedKey.classList.add("active");
        setTimeout(() => {
            clickedKey.classList.remove("active");
        }, 150);
    }
};

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("mousedown", () => {
        playTune(key.dataset.key);
        key.classList.add("active");
    });
    key.addEventListener("mouseup", () => {
        key.classList.remove("active");
    });
    key.addEventListener("mouseleave", () => {
        key.classList.remove("active");
    });
});

const pressedKey = (e) => {
    if (allKeys.includes(e.key)) {
        const keyElement = document.querySelector(`[data-key="${e.key}"]`);
        if (keyElement) {
            playTune(e.key);
            keyElement.classList.add("active");
            setTimeout(() => {
                keyElement.classList.remove("active");
            }, 150);
        }
    }
};


const showHidekeys=()=>{
  pianoKeys.forEach(key=>key.classList.toggle("hide"));
}


const handleVolume=(e)=>{
  audio.volume = e.target.value;
}


document.addEventListener("keydown", (e) => {
  if (allKeys.includes(e.key)) {
      const keyElement = document.querySelector(`[data-key="${e.key}"]`);
      if (keyElement) {
          playTune(e.key);
          keyElement.classList.add("active");
      }
  }
});

document.addEventListener("keyup", (e) => {
  if (allKeys.includes(e.key)) {
      const keyElement = document.querySelector(`[data-key="${e.key}"]`);
      if (keyElement) {
          keyElement.classList.remove("active");
      }
  }
});
keysCheckbox.addEventListener("click",showHidekeys);
volumeSlider.addEventListener("input",handleVolume);