import requests
import math
import numpy as np

def weather(lat,long,month,day,first,last,metric,frequency):
    from datetime import datetime as dt
    latlong = str(lat)+','+str(long)
    url = 'https://api.forecast.io/forecast/f50864984f202c5f1548f1e29a59f4b2/{}'.format(latlong)
    r = requests.get(url)
    data = r.json()
    data = data[str(frequency)]['data'][0]
    old= []
    
    for i in range(first,last):

        time = str(dt(i, month, day))
        time = str.join("",time.splitlines())
        time = time[0:10]+'T'+time[11:19]
        history = 'https://api.forecast.io/forecast/f50864984f202c5f1548f1e29a59f4b2/{},{}'.format(latlong,time)
        req = requests.get(history)
        hist = req.json()
        hist =  hist[str(frequency)]['data'][0]
        weatheer = hist[str(metric)]
        old.append(weather)
     
    
    return dict
