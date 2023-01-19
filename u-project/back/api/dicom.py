from flask import Flask,request
import numpy as np
import pydicom
from PIL import Image
from flask_cors import CORS
import base64
app = Flask(__name__)
CORS(app)

def B64():
    print ("hello 22")
    with open("../api/image/change.jpg", "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read())
    return encoded_string

@app.route('/api')
def JPG():
    print ("hello 11")
    name = request.args['image']
    im = pydicom.dcmread(name)
    print ("hello 1")
    print (im)
    im = im.pixel_array.astype(float)
    print ("hello 2")
    print (im)
    print (im.shape)
    rescaled_image = (np.maximum(im,0)/im.max())*255
    print ("hello 3")
    print (rescaled_image)
    final_image = np.uint8(rescaled_image)
    final_image = Image.fromarray(final_image)
    final_image.save('../api/image/change.jpg')
    return B64()

if __name__ == "__main__":
    app.run(debug=True)