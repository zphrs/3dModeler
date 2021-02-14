import numpy as np


def process_points(points):
    return points + [5, 3, 1, -2, 3]

#Precondition: we have an array of arrays, each containing a pt [x,y,z]
def normalizePts(npArr):
    result = np.empty([len(npArr), 3])
    for i in range (len(npArr)):
        result[i] = normalize(npArr[i])
    return result
    
def normalize(v):
    norm = np.linalg.norm(v)
    if norm == 0: 
       return v
    return v / norm

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
    for i in range(len(model)):
        # compare the distance between this set of points
        dist = numpy.linalg.norm(model[i]-input[i])
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
        if(len(listOfModels[i]) != len(npArr)):
            continue
        this_shape_normalized = normalizePts(listOfModels[i])
        # get the score for this model vs our shape
        scoringArray[i] = scoreModel(listOfModels[i], npArr)

    # finally, return the one with the least norm. This is our closest guess.
    return scoringArray.index(min(scoringArray))

print('hello')
pt = [[1,2,3],[4,5,6]]
print('normalize me')
print(normalizePts(pt))