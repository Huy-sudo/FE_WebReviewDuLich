import React, { useState } from "react";
import classes from "./MostReviewedPlacesChart.module.css";
import Button from "../../helpers/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function MostReviewedPlacesChart(props) {

  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(null);

  //const [mostReviewedPlaces, setMostReviewedPlaces] = useState([]);
  // const getMostReviewedPlaces = useCallback(async function () {

  // useEffect(() => {
  //   getMostReviewedPlaces();
  // }, [getMostReviewedPlaces]); //makes sure it runs whenever functions changes

  //
  const movies = [
    {
      rank: 1,
      placeImageSource: "https://ik.imagekit.io/tvlk/loc-asset/gNr3hLh55ZCkPJisyxFK-v9MmzxPu57ZRVI+10VZ2S4b1PNW4T++cbA6yK4gzhAhs9o2HLZ9vs7gy3rpcIU+oKi5EygzQLRjTUv7fRblEVA=/images/1549877055589-1500x1125-FIT_AND_TRIM-d64887b59ca65db37bef37d629e6d80d.jpeg?_src=imagekit&tr=c-at_max,h-400,q-40,w-1024",
      placeName: "Phú Quốc",
      totalReview: "750",
    },
    {
      rank: 2,
      placeImageSource: "https://media-cdn.tripadvisor.com/media/photo-s/1a/26/c0/ec/getlstd-property-photo.jpg",
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
      placeImageSource: "https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/locations/fur1616991815.png",
      placeName: "Đà Lạt",
      totalReview: "450",
    },
    {
      rank: 5,
      placeImageSource: "https://img.peapix.com/95a51ce3d4974e89be356cbce0965430_480.jpg",
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
            <Button className={classes.arrow}><FontAwesomeIcon className={classes.rightbutton}  icon={faArrowRight}/></Button>
          </div>
        );
      })}
      <Button className={classes.more}><div className={classes.morebutton}>Xem thêm</div></Button>
    </div>
  );
}

export default MostReviewedPlacesChart;

