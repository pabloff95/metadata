from flask import Flask, jsonify, request
from flask_cors import CORS
from dependencies.read_metadata import get_file_metadata


app = Flask(__name__)
CORS(app)

@app.route('/upload', methods = ['GET', 'POST'])
def upload_file():
    file = request.files['file']
    # Save the file to a temporary location    
    file.save("temporary_file")
    return {"message": "File successfully loaded"}
     

@app.route('/get_file_metadata', methods = ['GET'])
def get_stored_file_metadata():
    response = jsonify(message=get_file_metadata())    
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response    