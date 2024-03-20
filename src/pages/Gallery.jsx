import { React, useEffect, useState } from "react";
import birdsArray from "../birdsArray.json";
import MyBtn from "../components/MyBtn";
import Bird from "../components/Bird";


const Gallery = () => {
  const originArray = birdsArray;
  const CARDS_PER_PAGE = 3;
  const [arr, setArr] = useState(originArray.slice(0, CARDS_PER_PAGE));
  const [start, setStart] = useState(0);
  const [activeButton, setActiveButton] = useState(1);
  const [buttonNumber, setButtonNumber] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [choice, setChoice] = useState("שם הציפור");
  const [totalPages, setTotalPages] =
    useState(Math.ceil(originArray.length / CARDS_PER_PAGE));
  const [filterArr, setFilterArr] = useState(originArray);

  const filterArray = () => {
    let newArray = birdsArray.filter((item) => {
      if (choice == "שם הציפור")
        return item.bird_name == searchValue;
      if (choice == "שם מדעי")
        return item.scientific_name.toLocaleLowerCase().includes(
          searchValue.toLocaleLowerCase());
      if (choice == "סוג טבעת")
          return item.ring.toLocaleUpperCase() ==
          searchValue.toLocaleUpperCase();
    }) 
    return newArray;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchValue === "") {
      setFilterArr(originArray)
      setArr(filterArr.slice(0, CARDS_PER_PAGE))
      setTotalPages(Math.ceil(filterArr.length / CARDS_PER_PAGE))
    }
    else{
      const filterArr = filterArray();
      setArr(filterArr.slice(0, CARDS_PER_PAGE));
      if(filterArr.length == 0){
        alert("ערך לא קיים,נסה שוב");
       setFilterArr(originArray);
       setArr(originArray.slice(0, CARDS_PER_PAGE))
       setTotalPages(Math.ceil(originArray.length / CARDS_PER_PAGE)); 
       setActiveButton(1);
     }
     else{
      setFilterArr(filterArr);
      setTotalPages(Math.ceil(filterArr.length / CARDS_PER_PAGE));
     }
    }
  }

  const createPaginationButtons = () => {
    const myButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      myButtons.push(<MyBtn key={i} onEach={onEachBtn} number={i} activeButton={activeButton} />)
    }
    return myButtons;
  }
  const onEachBtn = (pageNum) => {
    const startIndex = (pageNum - 1) * CARDS_PER_PAGE;
    const endIndex = startIndex + CARDS_PER_PAGE;
    const tempArr = filterArr.slice(startIndex, endIndex);
    setArr(tempArr);
    setStart(startIndex);
    setActiveButton(pageNum);
    setButtonNumber(pageNum);
  };
  const onNextBtn = () => {
    const startIndex = start + CARDS_PER_PAGE;
    const tempArr = filterArr.slice(startIndex, startIndex +
      CARDS_PER_PAGE);
    setArr(tempArr);
    setStart(startIndex);
    setButtonNumber(buttonNumber + 1);
    setActiveButton(buttonNumber + 1);
  };
  const onBackBtn = () => {
    const startIndex = start - CARDS_PER_PAGE;
    const tempArr = filterArr.slice(startIndex, startIndex +
      CARDS_PER_PAGE);
    setArr(tempArr);
    setStart(startIndex);
    setButtonNumber(buttonNumber - 1);
    setActiveButton(buttonNumber - 1);
  };
  const createAllCards = (arr) => {
    const compsArr =
      arr.map((item) => {
        return <Bird
          key={item.id}
          image={item.image}
          bird_name={item.bird_name}
          scientific_name={item.scientific_name}
          ring={item.ring}
        />
      });
    return compsArr;
  };


  return (
    <>
      <main className="container-fluid">
        <h2 className="fontGallery text-center display-2 ">תמונות וסרטונים</h2>
        <form onSubmit={handleSubmit} className='text-center py-4 '>
          <input onChange={(e) =>
            setSearchValue(e.target.value)} type="text" className=' w-25 m-auto '
          />
          <select onChange={(e) =>
            setChoice(e.target.value)} className='m-2'>
            <option value='שם הציפור'>שם הציפור</option>
            <option value='שם מדעי'>שם מדעי</option>
            <option value='סוג טבעת'>סוג טבעת</option>
          </select>
          <button className='btn btn-warning'>חפש</button>
        </form>
        <div className="container text-center">
          <div className="container mt-4 mb-4 ">
            <div className="row justify-content-evenly">
              {createAllCards(arr)}
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center mt-3 pb-4 '>
        <button className='btn btn-outline-warning mx-2 '
            onClick={onBackBtn} disabled={start === 0}>{`<<`}</button>
            <div className="d-none d-md-block"> {createPaginationButtons()}</div>
          <button className='btn btn-outline-warning  mx-2'
            onClick={onNextBtn} disabled={start + CARDS_PER_PAGE >=
              filterArr.length}>{`>>`}</button>        
        </div>
        <br/>
        <div className="container pt-5">
        <div className="row flex-wrap align-items-center justify-content-around d-flex">
         
            
                <iframe className=" col-md-5  m-2 align-items-center pe-2 mb-5 p-0 justify-content-between rounded-4" width="560" height="315" src="https://www.youtube.com/embed/_yZGys6tp8k" title="הסבר של ירון על תהליך שחרור השעירים" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            
            <iframe className=" col-md-5  m-2 align-items-center pe-2 mb-5 p-0 justify-content-between rounded-4" width="560" height="315" src="https://www.youtube.com/embed/uJKE97m_WhQ" title="טיבוע ציפורים באגמון החולה-קק&quot;ל" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            
              
                <iframe className=" col-md-5  m-2 align-items-center pe-2 mb-5 p-0 justify-content-between rounded-4" width="560" height="315" src="https://www.youtube.com/embed/nHKGBVvMlOg" title="שמירת טבע וטיבוע" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
           
              
                <iframe className=" col-md-5  m-2 align-items-center pe-2 mb-5 p-0 justify-content-between rounded-4" width="560" height="315" src="https://www.youtube.com/embed/e4KfhmTWKRM" title="ראשית טיבוע ציפורים בישראל -עוזי פז" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                
        </div>
    </div>
      </main>
    </>
  )
}

export default Gallery