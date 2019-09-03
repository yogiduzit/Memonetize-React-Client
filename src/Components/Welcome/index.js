import React from 'react';
import image1 from '../../img/meme-1.jpg';
import image2 from '../../img/meme-2.jpeg';
import image3 from '../../img/meme-3.jpg';
import image4 from '../../img/meme-4.jpg';
import image5 from '../../img/meme-5.jpg';
import image6 from '../../img/meme-6.jpg';


export default function Welcome(props) {
  return(
    <div className="welcome-container">
      <div className="top-container">
        <div class="gallery">
          <figure class="gallery__item gallery__item--1">
            <img src={image1} class="gallery__img" alt="Image 1"/>
          </figure>
          <figure class="gallery__item gallery__item--2">
            <img src={image2} class="gallery__img" alt="Image 2"/>
          </figure>
          <figure class="gallery__item gallery__item--3">
            <img src={image3} class="gallery__img" alt="Image 3"/>
          </figure>
          <figure class="gallery__item gallery__item--4">
            <img src={image4} class="gallery__img" alt="Image 4"/>
          </figure>
          <figure class="gallery__item gallery__item--5">
            <img src={image5} class="gallery__img" alt="Image 5"/>
          </figure>
          <figure class="gallery__item gallery__item--6">
            <img src={image6} class="gallery__img" alt="Image 6"/>
          </figure>
        </div>
        <section className="intro-container">
          <div className="row-headings-container">
            <div className="heading-1">
              <h2 className="heading">Buy</h2>
              <h2 className="heading">Sell</h2>
              <h2 className="heading">Create</h2>
            </div>
            <div className="heading-2">
              <h2 className="heading">Dank</h2>
              <h2 className="heading">Memes</h2>
            </div>
          </div>

          <div className="welcome button-container">
            {props.isAuth 
            ?
              props.isPro ?
              <button className="ui yellow massive button">
              <a href="/meme/new" className="text-white">You're gold</a>
              </button> :
            <div className="ui animated massive button">
              <div className="visible content">Buy Gold Plan</div>
              <div className="hidden content"><a href="/payments">$2.99 a month</a>

              </div>
            </div>
            : 
            <button className="ui primary massive button">
              <a href="/user/new" className="text-white">Sign Up</a>
              </button>
              }
          </div>
          <div className="heading">
            <h2>Show your creativity and make money out of it</h2>
          </div>
        </section>
      </div>
      <div className="content-bars-container">
        <div className="content-bar bg-white">
          <h2 className="about-app-heading">What is Memonetize ?</h2>
          <p className="about-app-body">
            It is a platform where you can post, monetize and enjoy dankest memes created by users all around the world
          </p>
        </div>
        <div className="content-bar bg-grey">
          <h2 className="usage-heading">Can anybody use my memes ?</h2>
          <p className="usage-body">
            Yes, anybody can use your memes for whatever purpose they like.
          </p>
        </div>
        <div className="content-bar bg-white">
          <h2 className="usage-heading">What about plagiarizing ?</h2>
          <p className="usage-body">
            Right now there's no such feature to prevent plagiarizing, but we're working on it and it will be added very soon.
          </p>
        </div>
        <div className="content-bar bg-grey">
          <h2 className="cost-heading">What does it cost ?</h2>
          <p className="cost-body">
            This app is completely free to user up to a certain limit. Check out more here
          </p>
          <a href={props.isAuth ? "/meme/new" : "/user/new"} className="text-white">
            <button className="ui primary massive button">Get Started</button>
          </a>
        </div>
      </div>
    </div>

  )
}