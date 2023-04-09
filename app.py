from flask import Flask, jsonify, request, json
from flask_cors import CORS
from dependencies.manage_metadata import get_file_metadata, get_file_with_updated_metadata, save_updated_file_in_directory

app = Flask(__name__)
CORS(app)

@app.route('/upload_file', methods = ['POST'])
def upload_file():
    file = request.files['file']
    file_name = file.filename
    
    # Save the file to a temporary location    
    file.save(file_name)
    return {"file_name": file_name}
     

@app.route('/get_updated_file', methods = ['GET'])
def get_updated_file():    
    new_metadata = json.loads(request.headers["metadata"])
    file_name = request.headers["file"]
    directory = request.headers["directory"]

    file = get_file_with_updated_metadata(f"./{file_name}", new_metadata) 

    save_updated_file_in_directory(directory, file)
    
    return {"file_location": directory}


@app.route('/get_file_metadata', methods = ['GET'])
def get_stored_file_metadata():
    file_name = request.headers.get("file")

    if not file_name:
        return {"message": "File not found"}
    
    response = jsonify(message=get_file_metadata(file_name))
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response    