from flask import Flask, jsonify, request
from flask_cors import CORS
from dependencies.read_metadata import get_file_metadata

app = Flask(__name__)
CORS(app)

@app.route('/upload', methods = ['GET', 'POST'])
def upload_file():
    file = request.files['file']
    file_name = file.filename
    
    # Save the file to a temporary location    
    file.save(file_name)
    return {"file_name": file_name}
     

@app.route('/get_file_metadata', methods = ['GET'])
def get_stored_file_metadata():
    file_name = request.headers.get("file")

    if not file_name:
        return {"message": "File not found"}
    
    response = jsonify(message=get_file_metadata(file_name))
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response    