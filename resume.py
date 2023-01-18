import os
import requests
import json
from datetime import datetime
from dotenv import load_dotenv


def log(message):
    print(f"[RESUME] {datetime.now()} - {message}")


log("Loading environment variables...")
load_dotenv()

url = "https://hackerresume.com/api/generate/resume"

log("Loading JSON data...")
resume_data = json.load(open(os.path.abspath(".")+"/resume-data.json", 'r', encoding='utf-8'))

resume_data['selectedTemplate'] = os.getenv('SELECTED_TEMPLATE')
resume_data['user']['uid'] = os.getenv('HACKERRANK_UID')
resume_data['user']['username'] = os.getenv('HACKERRANK_USERNAME')
resume_data['user']['token'] = os.getenv('HACKERRANK_TOKEN')
resume_data['resumeId'] = os.getenv('RESUME_ID')


log("Generating Resume...")
response = requests.request(
    "POST",
    url,
    headers={
    'Content-Type': 'application/json'
},
data=json.dumps(resume_data)
)

if response.status_code != 200:
    log(f"Error: {response.text}")
    exit()

log(f"Writing new resume...")
with open(os.path.abspath(".")+"/resources/Basudev Tyagi.pdf", 'wb') as file:
    file.write(response.content)
log(f"SUCCESS")
