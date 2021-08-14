
// make a class to deal with the sound in the game
export class Sound {
    private tone: HTMLAudioElement;
    private name: string
    constructor(name: string) {
        this.name = name
        this.tone = new Audio(this.name)
        // this.tone = new Audio("../assets/music/finalTone.mp3")

    }
    //plays the sound of drum when spin is clicked (it will play only for once)
    public playMusic() {
        this.tone.play();
    }

    // plays the song in loop (background-tone)
    public loopPlay() {
        this.tone.play();
        this.tone.loop;
    }
}