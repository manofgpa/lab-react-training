import React from 'react'
import { BoxColor } from './components/BoxColor'
import { CreditCard } from './components/CreditCard'
import { DriverCard } from './components/DriverCard'
import { IdCard } from './components/IdCard'
import { Random } from './components/Random'
import { Rating } from './components/Rating'
import data from './data/berlin.json'

import { Greetings } from './components/Greetings'
import { ClickablePicture } from './components/ClickablePicture'
import { LikeButton } from './components/LikeButton'
import { Dice } from './components/Dice'
import { Carousel } from './components/Carousel'
import { NumbersTable } from './components/NumbersTable'
import { Facebook } from './components/Facebook'


function App() {
  return (
    <div className="App">
      <h1>Iteration 1</h1>
      {data.map(user => (
        <IdCard data={user} />
      ))}

      <h1>Iteration 2</h1>
      <Greetings lang={'de'} >Felipe</Greetings>

      <h1>Iteration 3</h1>
      <Random min={1} max={100} />

      <h1>Iteration 4</h1>
      <BoxColor r={14} g={223} b={102} />

      <h1>Iteration 5</h1>
      <div style={{ display: 'flex' }}>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222" />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" />
      </div>

      <h1>Iteration 6</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <h1>Iteration 7</h1>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }} />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }} />

      <h1>Iteration 8</h1>
      <LikeButton />

      <h1>Iteration 9</h1>
      <ClickablePicture
        img='img/persons/maxence.png'
        imgClicked='img/persons/maxence-glasses.png'
      />

      <h1>Iteration 10</h1>
      <Dice />

      <h1>Iteration 11</h1>
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />

      <h1>Iteration 12</h1>
      <NumbersTable limit={19} />

      <h1>Iteration 13</h1>
      <Facebook />

    </div>
  )
}

export default App
