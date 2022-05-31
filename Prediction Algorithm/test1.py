from os import name
import numpy as np
import pandas as pd


import matplotlib.pyplot as plt
plt.style.use('fivethirtyeight')
plt.rcParams['lines.linewidth'] = 1.5

import warnings
warnings.filterwarnings('ignore')

from sklearn.ensemble import RandomForestRegressor

from skforecast.ForecasterAutoreg import ForecasterAutoreg


def print_player_data(playerList = [],*args):
    nba_data = pd.read_csv("CSV_2017-18_PER.csv", sep=",")
    dataList = []
    dataFrame = []
   
    for x in range(len(playerList)):
        dataList.append(playerList[x])

    # dataList = dataList.split(",")
    # dataList = [name.lstrip() for name in dataList]
    print(dataList)
    
    for player in dataList:
        for index, row in nba_data.iterrows():
            if row["PLAYER_NAME"] == player:
                dataFrame.append(row["PER"])
                
    predictList = pd.Series(dataFrame)
    df = pd.DataFrame({'PER':predictList.values})
    print(df)

    
    forecaster = ForecasterAutoreg (
            regressor = RandomForestRegressor(random_state=123),
            lags = 1
        )

    forecaster.fit(y=df['PER'])
    forecaster

    
    steps = 12
    
    predictions = forecaster.predict(steps=steps)
    predictions[0:12]  
    print(predictions)    
    
    finalList = predictions.tolist()

    sumof = sum(finalList)

    f = (sumof/len(dataList))
    fa = f * 0.10
    print(fa)
    fii = (sumof / 2)

    if fii > 80:
        print(fii / 2)
    else:
        print(fii)

# pass in a list of player names


names = ['Delon Wright', 'Jalen Johnson', 'Sharife Cooper', 'Kevin Huerter', 'Skylar Mays', 'Kevin Knox', 'Lou Williams', 'Timothe Luwawu-Cabarrot', 'Danilo Gallinari', 'Gorgui Dieng', 'Trae Young', "De'Andre Hunter", 'Bogdan Bogdanovic', 'Clint Capela', 'Onyeka Okongwu', 'John Collins']
print_player_data(names)