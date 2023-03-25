from flask import Flask, jsonify
from flask_cors import CORS
from dependencies.read_metadata import get_metadata

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    response = jsonify(message=get_metadata())    
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response
