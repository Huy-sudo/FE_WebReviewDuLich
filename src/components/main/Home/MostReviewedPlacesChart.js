import React, { useState } from "react";
import classes from "./MostReviewedPlacesChart.module.css";
import Button from "../../helpers/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function PlacesChart(props) {
  //re-render
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(null);

  //const [mostReviewedPlaces, setMostReviewedPlaces] = useState([]);
  // const getMostReviewedPlaces = useCallback(async function () {
  //useCallBack makes sure the function actually changes not because of Javascript
  //   setIsLoading(true);
  //   setIsError(null);
  //   try {
  //     const response = await fetch(""); //url for GET Method, it returns a promise axios
  //     if (!response.ok) {
  //       throw new Error(
  //         "Something went wrong on our end! Please refresh or try again later."
  //       );
  //     }
  //     const obtainedData = await response.json(); //use json() to resolve json to Javascript object

  //     const processedData = obtainedData.results.map((data) => {
  //change "results" if the json content is different
  //       return {
  //         placeID: data.id, //assune json returned has many fields including id, name, review, imagesrc, totalreview,... but we extract placeID, placeName, totalReviews
  //         placeName: data.name,
  //         totalReview: data.totalreview,
  //         placeImageSource: data.imagesrc,
  //       }; //processing json file
  //     });
  //     setMostReviewedPlaces(processedData);
  //   } catch (isError) {
  //     setIsError(isError.message);
  //   }

  //   setIsLoading(false); //done loading
  // }, []);

  // useEffect(() => {
  //   getMostReviewedPlaces();
  // }, [getMostReviewedPlaces]); //makes sure it runs whenever functions changes

  const movies = [
    {
      rank: 1,
      placeImageSource: "https://ik.imagekit.io/tvlk/loc-asset/gNr3hLh55ZCkPJisyxFK-v9MmzxPu57ZRVI+10VZ2S4b1PNW4T++cbA6yK4gzhAhs9o2HLZ9vs7gy3rpcIU+oKi5EygzQLRjTUv7fRblEVA=/images/1549877055589-1500x1125-FIT_AND_TRIM-d64887b59ca65db37bef37d629e6d80d.jpeg?_src=imagekit&tr=c-at_max,h-400,q-40,w-1024",
      placeName: "Phú Quốc",
      totalReview: "750",
    },
    {
      rank: 2,
      placeImageSource: "/photo/nhatrang.jpg",
      placeName: "Nha Trang",
      totalReview: "650",
    },
    {
      rank: 3,
      placeImageSource: "https://lp-cms-production.imgix.net/image_browser/Ho%20Chi%20Minh%20City%20skyline.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850",
      placeName: "Hồ Chí Minh",
      totalReview: "550",
    },
    {
      rank: 4,
      placeImageSource: "/photo/dalat.jpg",
      placeName: "Đà Lạt",
      totalReview: "450",
    },
    {
      rank: 5,
      placeImageSource: "/photo/gialai.jpg",
      placeName: "Gia Lai",
      totalReview: "350",
    },
  ];

  return (
    <div className={classes['mostreviewed-wrapper']}>
      {movies.map((place) => {
        return (
          <div key={place.rank} className={classes["place-content"]}>
            <p className={classes.rank}>{place.rank}</p>
            <img
              className={classes.image}
              src={place.placeImageSource}
              alt={`${place.placeName} example`}
            />
            <div className={classes['name-wrapper']}>
            <p className={classes.name}>{place.placeName} <br/><span className={classes.totalreview}>Số bài review: {place.totalReview}</span></p>
            </div>
            <Button className={classes.more}><FontAwesomeIcon icon={faArrowRight}/></Button>
          </div>
        );
      })}
    </div>
  );
}

export default PlacesChart;
