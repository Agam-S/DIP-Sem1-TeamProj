from os import name
import numpy as np
import pandas as pd
import sys


import matplotlib.pyplot as plt
plt.style.use('fivethirtyeight')
plt.rcParams['lines.linewidth'] = 1.5

import warnings
warnings.filterwarnings('ignore')

from sklearn.ensemble import RandomForestRegressor

from skforecast.ForecasterAutoreg import ForecasterAutoreg

nba_data = pd.read_csv("CSV_2017-18_PER.csv", sep=",")
dataFrame = []
playerList = sys.argv[1]


playerList = playerList.split(",")
listLength = len(playerList)

playerList = [name.lstrip() for name in playerList]
    
for player in playerList:
    for index, row in nba_data.iterrows():
        if row["PLAYER_NAME"] == player:
            dataFrame.append(row["PER"])
                
predictList = pd.Series(dataFrame)
df = pd.DataFrame({'PER':predictList.values})


forecaster = ForecasterAutoreg (
        regressor = RandomForestRegressor(random_state=123),
            lags = 1
    )

forecaster.fit(y=df['PER'])
forecaster

steps = listLength
    
predictions = forecaster.predict(steps=steps)
predictions[0:listLength]  
    
finalList = predictions.tolist()

sumof = sum(finalList)

f = (sumof/listLength)
fa = f * 0.10
fii = (sumof / 2)

if fii > 80:
    print(fii / 2)
else:
    print(fii)







# print(str(sys.argv[1]))
# sys.stdout.write(str(sys.argv[1]))