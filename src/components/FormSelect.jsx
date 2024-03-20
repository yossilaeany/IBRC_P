import React, { useEffect, useState } from 'react'
import { OpenStreetMapProvider } from "leaflet-geosearch";
import Weather from './Weather';
import Map from './Map';
export const Choice = React.createContext();

const FormSelect = () => {
  const arrPos = [
    { x: 32.542563, y: 34.908035 },  //מעגן מיכאל
    { x: 33.099361, y: 35.616210 }, //אגמון החולה
    { x: 32.095100, y: 34.805854 }, // ראש ציפור
    { x: 31.779129, y: 35.206149 }, // jbo
    { x: 29.572767, y: 34.972397 },  // אילת
    { x: 32.371790, y: 34.933889 }, // אגמון חפר
    { x: 31.741293, y: 34.831802 }, // המטשיה
    { x: 31.741215, y: 34.831414 }  // ביצת פולג
  ]
    ;
  const [city, setCity] = useState('מעגן מיכאל');
  const [position, setPosition] = useState([arrPos[0].x, arrPos[0].y])
  const mapProvider = new OpenStreetMapProvider();

  const locationSearch = async () => {
    try {
      const cities = await mapProvider.search({ query: city });
      console.log(cities);
      if (cities.length > 0)
        (city === "מעגן מיכאל" ? setPosition([arrPos[0].x, arrPos[0].y]) :
          (city === "יסוד המעלה" ? setPosition([arrPos[1].x, arrPos[1].y]) :
            (city === "תל אביב" ? setPosition([arrPos[2].x, arrPos[2].y]) :
              (city === "ירושלים" ? setPosition([arrPos[3].x, arrPos[3].y]) :
                (city === "אילת" ? setPosition([arrPos[4].x, arrPos[4].y]) :
                  (city === "העוגן" ? setPosition([arrPos[5].x, arrPos[5].y]) :
                    (city === "כפר מנחם" ? setPosition([arrPos[6].x, arrPos[6].y]) :
                      (city === "בית יהושוע" ? setPosition([arrPos[7].x, arrPos[7].y]) :
                        setPosition([cities[0].y, cities[0].x])
                      )
                    )))))))
    } catch (error) {
      console.error("Error fetching location:", error);
      // Handle the error as needed (e.g., display a message to the user)
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await locationSearch();
      } catch (error) {
        console.error("Error fetching location:", error);
        // Handle the error as needed
      }
    };

    fetchData();
  }, [city]);


  const toSend = { city: city, position: position };
  return (
    <>
      <Choice.Provider value={toSend}>
        <div className='row'>
          <div className="col-md-6 text-center">
          
              <select onChange={(event) => {
              const value = event.target.value;
              setCity(value);
            }} className='mx-2 rounded-3 justify-content-center'>
                <option value="מעגן מיכאל">מעגן מיכאל</option>
                <option value="יסוד המעלה">אגמון החולה</option>
                <option value="תל אביב">ראש ציפור</option>
                <option value="ירושלים">התחנה לחקר ציפורי ירושלים</option>
                <option value="אילת">אילת</option>
                <option value="העוגן">אגמון חפר</option>
                <option value="כפר מנחם">המטשיה</option>
                <option value="בית יהושוע">ביצת פולג</option>
              </select>
            <Weather />
          </div>
          <div className='col-md-6'>
            <Map />
          </div>
        </div>
      </Choice.Provider>
    </>
  )
}

export default FormSelect