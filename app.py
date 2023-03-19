from flask import Flask, Response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    response = Response('Hello, World!')
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response
