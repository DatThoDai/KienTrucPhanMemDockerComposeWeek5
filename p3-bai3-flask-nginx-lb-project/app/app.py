from flask import Flask
import os

app = Flask(__name__)

@app.route('/')
def hello():
    return f"Hello from Flask! Running on {os.getenv('HOSTNAME', 'unknown host')}"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)