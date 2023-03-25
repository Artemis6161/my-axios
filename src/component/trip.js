import React from 'react'
import Tripdata from "./tripdata"
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/6.jpg"
import "./trip.css"
export default function trip() {
  return (
    <div className='trip'>
    <h1>Reacent Trips</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, expedita. Optio officia culpa rem voluptatem molestiae quidem, architecto necessitatibus ratione provident nihil repudiandae est delectus obcaecati aspernatur aperiam porro tempore.</p>
 <div className="tripcard">
      <Tripdata
      img1={Trip1}
        heading="trip in Indonesia"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repellendus doloremque. Beatae exercitationem distinctio quo a, magni dolorum sit autem error architecto accusantium. Iste amet, sapiente nemo non maiores itaque."
      />
        <Tripdata
      img1={Trip2}
        heading="trip in Malaysia"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repellendus doloremque. Beatae exercitationem distinctio quo a, magni dolorum sit autem error architecto accusantium. Iste amet, sapiente nemo non maiores itaque."
      />
        <Tripdata
      img1={Trip3}
        heading="trip in France"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repellendus doloremque. Beatae exercitationem distinctio quo a, magni dolorum sit autem error architecto accusantium. Iste amet, sapiente nemo non maiores itaque."
      />
      </div>
    </div>
  )
}
