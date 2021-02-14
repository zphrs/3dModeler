import numpy as np
from . import ai
from . import database
def process_points(points):
    return ai.compareModels(database.getModelsInDatabase(points), np.array(points))

def scoreModel(model, input):
    score = 0
    return score