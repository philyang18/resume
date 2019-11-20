import React from 'react';
import WebLink from './WebLink';
import NavBar from './NavBar';
import {NavLink} from 'react-router-dom';

export default function Projects(props) {
  //try onHover and create a function to fill in link-desc
	return (
    <div>
      <NavBar/>
	    <div id="web-body" className="container" >
        <p>Web Projects - Languages: HTML, CSS, JS, PHP Libraries: Bootstrap</p>
        <div className="row rowOfUnits">
          <WebLink title={"Source Code of This Page"} imageSrc={"./images/github.png"} url={} isWeb={true}/>
          <WebLink title={"Movie Database"} imageSrc={"./images/movies.png"} url={"http://303.itpwebdev.com/~yangphil/assignment5/movie.html"} isWeb={true}/>
          <WebLink title={"Memeversity"} imageSrc={"./images/meme.png"} url={"http://303.itpwebdev.com/~yangphil/final_project/login.php"} isWeb={true}/>
          <WebLink title={"Fake Restaurant"} imageSrc={"./images/restaurant.png"} url={"https://philyang18.github.io/phils-burger.github.io/"} isWeb={true}/>
        </div>
        <div className="row rowOfUnits">
          <WebLink title={"JS Calculator"} imageSrc={"./images/calculator.png"} url={"https://philyang18.github.io/js-calculator.github.io/"} isWeb={true}/>
          <WebLink title={"DVD Database"} imageSrc={"./images/dvd.jpg"} url={"http://303.itpwebdev.com/~yangphil/assignment10/index.php"} isWeb={true}/>
          <WebLink title={"LAUSD HelpDesk"} imageSrc={"./images/lausd.png"} url={"https://achieve.lausd.net/helpdesk"} isWeb={true}/>
          <WebLink title={"The Office Review"} imageSrc={"./images/office.png"} url={"https://philyang18.github.io/the-office.github.io/"} isWeb={true}/>
        </div>
        <div className="row rowOfUnits">
          <WebLink title={"Sieve of Erastosthenes"} imageSrc={"./images/github.png"} url={"/projects/sieveoferastothenes"} isWeb={false}/>
          <WebLink title={"Sieve of Erastosthenes"} imageSrc={"./images/github.png"} url={"/projects/sieveoferastothenes"} isWeb={false}/>
          <WebLink title={"Sieve of Erastosthenes"} imageSrc={"./images/github.png"} url={"/projects/sieveoferastothenes"} isWeb={false}/>
          <WebLink title={"Sieve of Erastosthenes"} imageSrc={"./images/github.png"} url={"/projects/sieveoferastothenes"} isWeb={false}/>
        </div>
      </div>
    </div>
	);
}