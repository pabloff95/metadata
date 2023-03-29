import exiftool

# Note: exiftool has to be installed in the computer: https://exiftool.org/

def get_file_metadata():        
    # Read metadata using exiftool
    with exiftool.ExifToolHelper() as dataTool:
        metadata = dataTool.get_metadata("temporary_file")   
        return metadata    