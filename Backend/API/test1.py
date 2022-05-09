import numpy as np
import pandas as pd


import matplotlib.pyplot as plt
plt.style.use('fivethirtyeight')
plt.rcParams['lines.linewidth'] = 1.5

import warnings
warnings.filterwarnings('ignore')

from sklearn.ensemble import RandomForestRegressor

from skforecast.ForecasterAutoreg import ForecasterAutoreg


def print_player_data():
    nba_data = pd.read_csv("CSV_2017-18_PER.csv", sep=",")
    dataList = []
   

    player_names = input("Enter a list of player names: ")
    player_names = player_names.split(",")
    player_names = [name.lstrip() for name in player_names]
    print(player_names)
    
    for player in player_names:
        for index, row in nba_data.iterrows():
            if row["PLAYER_NAME"] == player:
                dataList.append(row["PER"])
                
    predictList = pd.Series(dataList)
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

    f = (sumof/len(player_names))
    fa = f * 0.10
    print(fa)
    fii = (sumof / 2)

    if fii > 80:
        print(fii / 2)
    else:
        print(fii)


print_player_data()