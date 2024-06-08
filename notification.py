import os
import subprocess

icon_svg = 'upwork-1.svg'
def notify(text,body, icon_name=icon_svg):
    textAndBody=f"{text}\n{body}"
    command = ['zenity', '--notification', '--text', textAndBody]
    if icon_name:
        icon_path = os.path.join(os.getcwd(), icon_name)
        command.extend(['--window-icon', icon_path])    
    subprocess.run(command)



