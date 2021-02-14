import numpy as np


def process_points(points):
    return points + [5, 3, 1, -2, 3]

#Precondition: we have an array of arrays, each containing a pt [x,y,z]
def normalizePts(npArr):
    np.amax(npArr)
    return npArr/np.amax(npArr)

def getModelsInDatabase(npArr):
    listOfModels = np.array()
    return listOfModels

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
    for i in range(len(input)):
        # compare the distance between this set of points
        dist = np.linalg.norm(model[i]-input[i])
        result += dist

    return result

def compareModels(listOfModels, npArr):
    # call score model for each model in list and store score + model
    # sort the models based on score
    # return score


    # normalize shape
    our_shape_normalized = normalizePts(npArr)

    # contains shape i's score
    scoringArray = np.zeroes(len(listOfModels))
    for i in range(len(listOfModels)):
        # skip this shape if it doesnt have the same amount of points as us
        this_shape_normalized = normalizePts(listOfModels[i])
        # get the score for this model vs our shape
        scoringArray[i] = scoreModel(this_shape_normalized, our_shape_normalized)

    # finally, return the one with the least norm. This is our closest guess.
    return scoringArray.index(min(scoringArray))

print('hello')
pts = np.array([1, 2, 3, 4, 5, 6])
pt = [[1,2,3],[4,5,6]]
print('normalize me')
print(normalizePts(pt))