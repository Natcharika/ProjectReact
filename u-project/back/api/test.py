import numpy as np
import pydicom
from PIL import Image

def JPG():
    name = './Image-88.dcm'
    print (name)
    im = pydicom.dcmread(name)
    im = im.pixel_array.astype(float)
    print(im)
    print(im.shape)
    print(im[0][0])
    print(im[0][1])
    res = (np.maximum(im,0)/im.max())*255
    print (im.max())
    L_image = np.uint8(res)
    L_image = Image.fromarray(L_image)
    L_image.save("./change5.jpg")
    print (res)
    
JPG()
    
