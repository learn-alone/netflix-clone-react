import React, { useState } from 'react'
import './FirstPage.css'

function FirstPage(props) {
    const [isOpen, setIsOpen] = useState('')
    const titleClick = (data) => setIsOpen(isOpen === data ? "" : data)
  return (
    <div className='firstPage'>
          <nav class="fnavbar">
    <div class="navbar__brand">
      <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="logo" class="brand__logo" />
    </div>

    <div class="navbar__nav__items">
      <div class="nav__item">
        <div class="dropdown__container">
          <i class="fas fa-globe"></i>

            English
            हिन्दी

        </div>
      </div>

      <div class="nav__item">
        <button class="signin__button">Sign in</button>
      </div>
    </div>
  </nav>

  <section className="hero">
    <div className="hero__bg__image__container">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/710d74e0-7158-408e-8d9b-23c219dee5df/IN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="BG hero" className="hero__bg__image" />
    </div>
    <div className="hero__bg__overlay"></div>

    <div className="hero__card">
      <h1 className="hero__title">
        Unlimited Movies, TV<br />
        Shows and More.
      </h1>
      <p className="hero__subtitle">Watch anywhere and cancel anytime.</p>
      <p className="hero__description">
        Ready to watch? Enter your email to create or restart your
        membership .
      </p>

      <div className="email__form__container">
        <div className="form__container">

          <label className="email__label">Email Address</label>
        </div>
        <button className="primary__button" onClick={()=>props.updateFirstPage(false)}>
          Get Started <i className="fal fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
  <section className="features__container">
    {/* -- Feature 1 -- */}
    <div className="feature">
      <div className="feature__details">
        <h3 className="feature__title">Enjoy on your TV.</h3>
        <h5 className="feature__sub__title">
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
          Blu-ray players and more.
        </h5>
      </div>
      <div className="feature__image__container">
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="Feature" className="feature__image" />
        <div className="feature__backgroud__video__container">
          <video autoplay="" loop="" muted="" className="feature__backgroud__video">

          </video>
        </div>
      </div>
    </div>
    {/* -- Feature 2 -- */}
    <div className="feature">
      <div className="feature__details">
        <h3 className="feature__title">
          Download your shows to watch offline.
        </h3>
        <h5 className="feature__sub__title">
          Save your favourites easily and always have something to watch.
        </h5>
      </div>
      <div className="feature__image__container">
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="Feature" className="feature__image" />
        <div className="feature__2__poster__container">
          <div className="poster__container">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="poster" className="poster" />
          </div>
          <div className="poster__details">
            <h4>Stranger Things</h4>
            <h6>Downloading...</h6>
          </div>
          <div className="download__gif__container">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="downloading gif" className="gif" />
          </div>
        </div>
      </div>
    </div>
    {/* -- Feature 3 -- */}
    <div className="feature">
      <div className="feature__details">
        <h3 className="feature__title">Watch everywhere.</h3>
        <h5 className="feature__sub__title">
          Stream unlimited movies and TV shows on your phone, tablet,
          laptop, and TV.
        </h5>
      </div>
      <div className="feature__image__container feature__3__image__container">
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="Feature" className="feature__image feature__3__image" />
        <div className="feature__backgroud__video__container feature__3__backgroud__video__container">
          <video autoplay="" loop="" muted="" className="feature__backgroud__video feature__3__backgroud__video">

          </video>
        </div>
      </div>
    </div>
    {/* -- Feature 4 -- */}
    <div className="feature">
      <div className="feature__details">
        <h3 className="feature__title">Create profiles for children.</h3>
        <h5 className="feature__sub__title">
          Send children on adventures with their favourite characters in a
          space made just for them—free with your membership.
        </h5>
      </div>
      <div className="feature__image__container">
        <img src="https://occ-0-4023-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf" alt="Feature" className="feature__image" />
      </div>
    </div>
  </section>
  
  
  <section className="FAQ__list__container">
    <h1 className="FAQ__heading">Frequently Asked Questions</h1>
    <div className="FAQ__list">
      <div className="FAQ__accordian" >
        <button className="FAQ__title" onClick={()=>titleClick(1)}>
          What is Netflix?<i className="fal fa-times"></i>
        </button>
        <div className="FAQ__visible" style={{ maxHeight: isOpen === 1 ? null : 0 }}>
          <p>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries and more –
            on thousands of internet-connected devices.
          </p>
          <p>
            You can watch as much as you want, whenever you want, without a
            single ad – all for one low monthly price. There's always
            something new to discover, and new TV shows and movies are added
            every week!
          </p>
        </div>
      </div>
      <div className="FAQ__accordian">
        <button className="FAQ__title" onClick={()=>titleClick(2)}>
          How much does netflix cost?<i className="fal fa-plus"></i>
        </button>
        <div className="FAQ__visible" style={{ maxHeight: isOpen === 2 ? null : 0 }}>
          <p>
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range
            from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.
          </p>
        </div>
      </div>
      <div className="FAQ__accordian">
        <button className="FAQ__title" onClick={()=>titleClick(3)}>
          Where can i watch?<i className="fal fa-plus"></i>
        </button>
        <div className="FAQ__visible" style={{ maxHeight: isOpen === 3 ? null : 0 }}>
          <p>
            Watch anywhere, anytime, on an unlimited number of devices. Sign
            in with your Netflix account to watch instantly on the web at
            netflix.com from your personal computer or on any
            internet-connected device that offers the Netflix app, including
            smart TVs, smartphones, tablets, streaming media players and
            game consoles.
          </p>
          <p>
            You can also download your favourite shows with the iOS,
            Android, or Windows 10 app. Use downloads to watch while you're
            on the go and without an internet connection. Take Netflix with
            you anywhere.
          </p>
        </div>
      </div>
      <div className="FAQ__accordian">
        <button className="FAQ__title" onClick={()=>titleClick(4)}>
          How do I cancel?<i className="fal fa-plus"></i>
        </button>
        <div className="FAQ__visible" style={{ maxHeight: isOpen === 4 ? null : 0 }}>
          <p>
            Netflix is flexible. There are no annoying contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your
            account anytime.
          </p>
        </div>
      </div>
      <div className="FAQ__accordian">
        <button className="FAQ__title" onClick={()=>titleClick(5)}>
          What can I watch from Netflix?<i className="fal fa-plus"></i>
        </button>
        <div className="FAQ__visible" style={{ maxHeight: isOpen === 5 ? null : 0 }}>
          <p>
            Netflix has an extensive library of feature films,
            documentaries, TV shows, anime, award-winning Netflix originals,
            and more. Watch as much as you want, anytime you want.
          </p>
        </div>
      </div>
      <div className="FAQ__accordian">
        <button className="FAQ__title" onClick={()=>titleClick(6)}>
          Is Netflix good for kids?<i className="fal fa-plus"></i>
        </button>
        <div className="FAQ__visible" style={{ maxHeight: isOpen === 6 ? null : 0 }}>
          <p>
            The Netflix Kids experience is included in your membership to
            give parents control while kids enjoy family-friendly TV shows
            and films in their own space.
          </p>
          <p>
            Kids profiles come with PIN-protected parental controls that let
            you restrict the maturity rating of content kids can watch and
            block specific titles you don’t want kids to see.
          </p>
        </div>
      </div>
    </div>
    <div className="FAQ__get__started__email">
      <h3>
        Ready to watch? Enter your email to create or restart your
        membership.
      </h3>
      <div className="email__form__container">
        <div className="form__container">

          <label className="email__label">Email Address</label>
        </div>
        <button className="primary__button">
          Get Started <i className="fal fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>

    </div>
  )
}

export default FirstPage
