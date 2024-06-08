from gtts import gTTS
from playsound import playsound


def voiceNotif(text):
    newText = f"important.... {text}"
    tts = gTTS(newText, lang='en')
    tts.save("output.mp3")


    playsound("output.mp3")
    playsound("output.mp3")
    playsound("output.mp3")




