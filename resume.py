import os
import requests
import json
from dotenv import load_dotenv

load_dotenv()

url = "https://hackerresume.com/api/generate/resume"

resume_data = json.load(open('resume-data.json', 'r', encoding='utf-8'))

resume_data['selectedTemplate'] = os.getenv('SELECTED_TEMPLATE')
resume_data['user']['uid'] = os.getenv('HACKERRANK_UID')
resume_data['user']['username'] = os.getenv('HACKERRANK_USERNAME')
resume_data['user']['token'] = os.getenv('HACKERRANK_TOKEN')
resume_data['resumeId'] = os.getenv('RESUME_ID')


response = requests.request(
    "POST",
    url,
    headers={
    'Content-Type': 'application/json'
},
data=json.dumps(resume_data))

if response.status_code != 200:
    print(response.text)
    exit()

with open("./resources/Basudev Tyagi.pdf", 'wb') as file:
    file.write(response.content)
