import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import vietnam from '../../images/vietnam-3.png';
import star from '../../images/star1.png';
import "./LeftSide.css";

const destinationArr = [
  {'title':'SAIGON','para':'Saigon was one of my favorite places I had visited in Vietnam. The hometown hero. The classic. If you visit Vietnam you should definitely stop by here. The city is bustling with life, food and adventure.', 'para2':'Some of the best food I had was in Saigon. Every type of Vietnamese food you can think of is available here. All kinds of foods to try but my favorite had to have been the Bahn Mi at Huynh Hoa. The nightlife there is also awesome. Parties every night of the week with really friendly locals and travelers!'},
  {'title':'DALAT','para':'Dalat is a beautiful place. It is a place where many couples visit. I can see why because it is very romantic. There are many flowers growing and the weather is cold and cloudy. The city itself is based inside a forest so there are many hills. It was difficult to ride the hills at times but the streets were not crowded which was nice. I had a great time checking out the lakes and nature there.', 'para2':'There was a very cool night market that I visited. I had fantastic night market food and spent the rest of the time people watching. People at Dalat are very nice and seem to have a relaxed demeanor. I miss that place, but I had to move on.'},
  {'title':'NHA TRANG','para':'Nha Trang is awesome. It is a beach town and I had so much fun relaxing and spending time there. The beach water is warm and easy to swim in. I spent a lot of time swimming at the beach. It is a beach town where many people from all over the world visit. I had fun meeting people there and hanging out. Seafood was amazing there. Crab, lobster, shrimp, clams…', 'para2':'Mai Tais on the beach. How could you beat that? Especially at night. It was an awesome experience. I would ride my motorcycle up and down the coast just enjoying all the views. I would definitely go back.'},
  {'title':'DA NANG','para':'Da Nang. Another beach town! I did not spend very much time here but it was a good time. This was a pretty big city so I was able to see some more of the urban lifestyle. Because it was a bigger city, the food was great! They are famous for their chicken rice plate, which I remember fondly. They also have a very cool Dragon bridge that I visited.', 'par2':'Da Nang is in the middle of Vietnam. It is a great stop to see the beach but also urban life. I felt like I should have spent more time here but I had to keep it moving. On to Hue!'},
  {'title':'HUE','para':'Hue is a very cool city because of it is has preserved the look and feel of an older Vietnam. Many of the ancient buildings are preserved so that you can get a feel of how it once was. Furthermore, it is just beautiful. They float lanterns on the river which is a sight to be seen at night. They are also famous for some traditional foods. I thought Hue was cool but it was not one of my favorites.', 'para2':'The roads are small so I had fun checking out the neighborhoods on my bike. The trusty bike took me far. I was able to return the bike here and flew the rest of the way to Hanoi. I made it safely! In all, it took me about 2 weeks to make it from Saigon to Hue by bike. It was a lot of riding!'},
  {'title':'HANOI','para':'Ah, Hanoi. The last leg of my trip. The capital. The famous. It was awesome to see the difference between the north and the south. They have very different feels. The north is more traditional and slower paced. After 10pm, the streets become quiet. Very strange to see from a large city. I think there is a curfew. Even though this was the case there is a neighborhood that goes later and has all of the nightlife. I had very good memories sipping beer and talking to locals.', 'para2':'I think Hanoi is a beautiful place and has a strong sense of patriotism. I would definitely recommend people to visit. This place is colder than the south but the people are warm. Goodbye Vietnam.'},
]

class RightSide extends React.Component {
  constructor(props) {
                // Required to call original constructor
                super(props);
                // Props are now accessible from here
                var v = props.reactProp;
            }
  render() {
  return (
    <div>
      <h1 className="right-h1">{this.props.reactProp}</h1>
      <p className="right-p1">{this.props.reactProp2}</p>
      <p className="right-p1">{this.props.reactProp3}</p>
      <p className="right-p2">Click on other destinations to find out more!</p>
    </div>
    )
  }
}

class leftSide extends Component {
    chooseSaigon = () => {
      ReactDOM.render(<RightSide reactProp={destinationArr[0].title} reactProp2={destinationArr[0].para} reactProp3={destinationArr[0].para2} />, document.getElementById('right'));
    }
    chooseDalat = () => {
      ReactDOM.render(<RightSide reactProp={destinationArr[1].title} reactProp2={destinationArr[1].para} reactProp3={destinationArr[1].para2} />, document.getElementById('right'));
    }
    chooseNhatrang = () => {
      ReactDOM.render(<RightSide reactProp={destinationArr[2].title} reactProp2={destinationArr[2].para} reactProp3={destinationArr[2].para2} />, document.getElementById('right'));
    }
    chooseDanang = () => {
      ReactDOM.render(<RightSide reactProp={destinationArr[3].title} reactProp2={destinationArr[3].para} reactProp3={destinationArr[3].para2} />, document.getElementById('right'));
    }
    chooseHue = () => {
      ReactDOM.render(<RightSide reactProp={destinationArr[4].title} reactProp2={destinationArr[4].para} reactProp3={destinationArr[4].para2} />, document.getElementById('right'));
    }
    chooseHanoi = () => {
      ReactDOM.render(<RightSide reactProp={destinationArr[5].title} reactProp2={destinationArr[5].para} reactProp3={destinationArr[5].para2} />, document.getElementById('right'));
    }
    render() {
      return (
        <div className="left-div">
            <h1 className="main-header">VIETNAM</h1>
            <img className="vietnam" src={vietnam} /> 
            <button className="button1" onClick={this.chooseSaigon}><img className="star" src={star} /></button>
            <button className="button1" onClick={this.chooseDalat}><img className="star2" src={star} /></button>
            <button className="button1" onClick={this.chooseNhatrang}><img className="star3" src={star} /></button>
            <button className="button1" onClick={this.chooseDanang}><img className="star4" src={star} /></button>
            <button className="button1" onClick={this.chooseHue}><img className="star5" src={star} /></button>
            <button className="button1" onClick={this.chooseHanoi}><img className="star6" src={star} /></button>
        </div>
      )
    }
  }



export default leftSide;