import exiftool
import os
from datetime import datetime

# Note: exiftool has to be installed in the computer: https://exiftool.org/

def get_file_metadata(file_name):        
    # Read metadata using exiftool
    with exiftool.ExifToolHelper() as dataTool:
        metadata = dataTool.get_metadata(file_name)   
        os.remove(file_name)
        return metadata    
    

def get_file_with_updated_metadata(file_name, metadata):  
    with exiftool.ExifTool() as dataTool:        
        for data in metadata:      
            """
            if data == "File:Directory":
                data == "./"                
            
            if data == "File:FileName":
                new_name = data
            """ 
            dataTool.execute(bytes(f"-{data}={str(metadata[data])}", encoding='utf-8'), bytes(file_name, encoding='utf-8'))

    """            
    with exiftool.ExifToolHelper() as dataTool:
        metadata = dataTool.get_metadata(new_name)   
        
        for data, value in metadata[0].items():
            print(f"{data}: {value}")
    """
    
    return file_name
    
    