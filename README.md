# 3D Modeler
## grid of points which allows you to 3D model - also reccomendation algorithm

### Backend:
* take in array of 3D points ex: [0, 0, 0, 1, 1, 1, 1, 0, 1]
* normalize - divide all numbers by the greatest absolute value in the array ex: [0, 0, 4, 1, 1, -5] - divide each element by 5
* get models in database with a length greater than the length of the input array
* do some algorithm that compares the inputted model to the models in the database and returns a score 
* return 3-5 models
* add the inputted array of 3D points to the database