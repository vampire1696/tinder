import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./SwipeButton.css";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import useAuth from "../useAuth";

function TinderCards() {
  const [people, setPeople] = useState([]);
  // const [people2, setPeople2] = useState([]);
  const tempPeople = [
    {
      name: "duc hung",
      url: "https://scontent.ftxl3-2.fna.fbcdn.net/v/t1.6435-9/74529548_2785090951509606_4344335338022371328_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2ckXM4inRMoAX-4342X&_nc_ht=scontent.ftxl3-2.fna&oh=00_AfBTk991whz8zYuy1AaUJXJMEIRELgqUmML-s6fZoGoBPg&oe=64483186",
    },
  ];
  const { user } = useAuth();
  useEffect(() => {
    getDocs(collection(database, "people"))
      .then((querySnapshot) => {
        const array = [];
        querySnapshot.forEach((doc) => {
          array.push(doc.data());
        }); //tao array rong roi set
        setPeople(array);
      })
      .catch((error) => console.log(error));

    // getDocs(collection(database, "users"))
    // .then((querySnapshot) => {
    //   const array = [];
    //   querySnapshot.forEach((doc) => {
    //     array.push(doc.data());
    //   }); //tao array rong roi set
    //   const filterArray = array.filter((doc) => doc.id !== user.uid); // filter id giong cua minh ra
    //   setPeople(filterArray);
    // })
    // .catch((error) => console.log(error));

    // getDocs(collection(database, "people")).then((querySnapshot) => {
    //   const array = [];
    //   querySnapshot.forEach((doc) => {array.push(doc.data())}); //tao array rong roi set
    //   // const filterArray = array.filter((doc)=>doc.id !==user.uid) // filter id giong cua minh ra
    //   setPeople2(array);
    // }).catch(error=>console.log(error))
  }, []);
  const newArray = [...people];
  // const newArray2 = [...people2];
  console.log(newArray);
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, personName) => {
    if (direction === "right") {
      console.log("da keo sang phai roi", personName);
    }
    if (direction === "left") {
      console.log("miss mat roi", personName);
    }
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  return (
    <div>
      <h1>Day la Tindercarts</h1>
      <div className="tinder_container">
        {newArray.map(
          (
            person,
            index //thay doi person 2 cho interview, nho doi lai newArray
          ) => (
            <TinderCard
              className="swipe"
              key={person.name}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{ backgroundImage: "url(" + person.url + ")" }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          )
        )}
        <h3>No more profile</h3>
        {/* {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />} */}
        <div className="swipeButtons">
          <IconButton
            onClick={() => {
              swiped("left");
            }}
          >
            <CloseIcon className="button_close" fontSize="large" />
          </IconButton>

          <IconButton
            onClick={() => {
              swiped("right");
            }}
          >
            <FavoriteIcon className="button_favorite" fontSize="large" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default TinderCards;
