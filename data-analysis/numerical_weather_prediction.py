
import pandas as pd
from fbprophet import Prophet
#Numerical weather prediction
#df is data frame for time series analysis
#frequency of the instances(hourly,daily,monthly,yearly)

def predict(df,frequency,period) 

	df[str(frequency)] = pd.DatetimeIndex(df[str(frequency)])
	df = df.rename(columns={str(frequency): 'ds','y': 'y'})
	my_model = Prophet(interval_width=0.95)
	my_model.fit(df)
	future_dates = my_model.make_future_dataframe(periods=period, freq=str(frequency))
	forecast = my_model.predict(future_dates)

return forecast


