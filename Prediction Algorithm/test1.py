# imports 

import numpy as np
import pandas as pd

import matplotlib.pyplot as plt
plt.style.use('fivethirtyeight')
plt.rcParams['lines.linewidth'] = 1.5



import warnings
warnings.filterwarnings('ignore')

from sklearn.linear_model import LinearRegression
from sklearn.linear_model import Lasso
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import make_pipeline

from skforecast.ForecasterAutoreg import ForecasterAutoreg
from skforecast.ForecasterAutoregCustom import ForecasterAutoregCustom
from skforecast.ForecasterAutoregMultiOutput import ForecasterAutoregMultiOutput
from skforecast.model_selection import grid_search_forecaster
from skforecast.model_selection import backtesting_forecaster

from joblib import dump, load

# data
nba_data = pd.read_csv("csv_data.csv", sep=",")

print(nba_data.shape)
# temp_data = nba_data[["TEAM_ABBREVIATION", "W/R percentage"]]
# temp_data.head(10)

data = nba_data.set_index('TEAM_ABBREVIATION')
data = nba_data.rename(columns={'x': 'y'})
data = nba_data.asfreq('MS')
data = nba_data.sort_index()
data.head()

steps = 12
data_train = nba_data[:-steps]
data_test  = nba_data[-steps:]

fig, ax=plt.subplots(figsize=(9, 4))
data_train['GP'].plot(ax=ax, label='train')
data_test['GP'].plot(ax=ax, label='test')
ax.legend();

# forecaster = ForecasterAutoreg(
#                 regressor = RandomForestRegressor(random_state=123),
#                 lags = 6
#              )

# forecaster.fit(y=data_train['GP'])

# forecaster
