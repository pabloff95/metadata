import exiftool

# Note: exiftool has to be installed in the computer: https://exiftool.org/

def get_metadata():
    with exiftool.ExifToolHelper() as dataTool:
        metadata = dataTool.get_metadata("dependencies/Routine.PNG")        
        return metadata