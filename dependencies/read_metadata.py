import exiftool

# Note: exiftool has to be installed in the computer: https://exiftool.org/

def get_file_metadata(file_name):        
    # Read metadata using exiftool
    with exiftool.ExifToolHelper() as dataTool:
        metadata = dataTool.get_metadata(file_name)   
        return metadata    