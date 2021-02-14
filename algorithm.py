import numpy as np
import ai
def process_points(points):
    return ai.compareModels(points, getModelsInDatabase(len(points)/3))


def getModelsInDatabase(ptLength):
    listOfModels = np.array()
    return listOfModels

def scoreModel(model, input):
    score = 0
    return score

