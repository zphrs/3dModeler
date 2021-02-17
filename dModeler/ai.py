import numpy as np


def process_points(points):
    return points + [5, 3, 1, -2, 3]

#Precondition: we have an array of arrays, each containing a pt [x,y,z]
def normalizePts(npArr):
    if (npArr):
        return npArr/max(np.amax(npArr), abs(np.amin(npArr)))
    return npArr

def scoreModel(model, input):
    # score = 0
    # #[[xnorm, ynorm, znorm]]
    # #all is all the pts
    # def find_nearest(array, value):
    #     array = np.asarray(array)
    #     idx = (np.abs(array - value)).argmin()
    #     return array[idx]
    # closeX = 0
    # closeY = 0
    # closeZ = 0
    # # for i in range(3):
    # #     for j in range(len(all))
    # #     threeNearest = find_nearest(all, inp[i])
    
    # new strat:
    # find the distance b/w the points
    result = 0
    print(len(input))
    for i in range(len(input)):
        # compare the distance between this set of points
        dist = np.linalg.norm(model[i]-input[i])
        result += dist

    return result

def compareModels(listOfModels, npArr):
    # call score model for each model in list and store score + model
    # sort the models based on score
    # return score
    if len(listOfModels) == 0:
        return
    npArr = normalizePts(npArr)
    our_shape_normalized = np.reshape(npArr, (-1, 3))
    # normalize shape

    # contains shape i's score
    scoringArray = np.zeros(len(listOfModels))
    for i in range(len(listOfModels)):
        # skip this shape if it doesnt have the same amount of points as us
        # get the score for this model vs our shape
        scoringArray[i] = scoreModel(listOfModels[i], our_shape_normalized)
    print(len(listOfModels))
    # finally, return the one with the least norm. This is our closest guess.
    return listOfModels[np.argmin(scoringArray)]

def sortArr(arr):
    return arr[np.lexsort((arr[:,1],arr[:,0]))]