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
    with exiftool.ExifToolHelper() as dataTool:        
        """
        dataTool.set_tags(tags=metadata, files=file_name)        
        x = dataTool.get_tags(tags=["SourceFile", "File:FileSize"], files=file_name)
        print(x)
        
        dataTool.set_tags(
            "file_name.pdf",
            tags={"SourceFile": "hola.pdf"}
            params=["-P", "-overwrite_original"]
        )

    with exiftool.ExifTool() as dataTool:        
        dataTool.execute(b"-SourceFile", b"Hola", bytes(file_name, encoding='utf-8'))
        """     
        for data in metadata:
            print(f"{data}: {metadata[data]}")

        return metadata   
    
    