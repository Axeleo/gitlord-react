import React from "react";
var _ = require('lodash');


export default function Hero(props) {
  const heroImgs = ['https://www.tryimg.com/u/2018/09/06/Sniper.png',
    'https://www.tryimg.com/u/2018/09/06/Pudge.png',
    'https://www.tryimg.com/u/2018/09/06/Archer.png',
    'https://www.tryimg.com/u/2018/09/06/Goblin.png',
    'https://www.tryimg.com/u/2018/09/06/Venom.png',
    'https://www.tryimg.com/u/2018/09/06/Riki.png',
    'https://www.tryimg.com/u/2018/09/06/NaturesPhrophet.png',
    'https://www.tryimg.com/u/2018/09/06/SpritBreaker.png',
    'https://www.tryimg.com/u/2018/09/06/Invoker.png',
    'https://www.tryimg.com/u/2018/09/06/TrollWarlord.png',
    'https://www.tryimg.com/u/2018/09/06/Alchemist.png',
    'https://www.tryimg.com/u/2018/09/06/EarthShaker.png',
    'https://www.tryimg.com/u/2018/09/06/Sven.png',
    'https://www.tryimg.com/u/2018/09/06/Kunkka.png',
    'https://www.tryimg.com/u/2018/09/06/Lich.png',
    'https://www.tryimg.com/u/2018/09/06/Meepo.png',
    'https://www.tryimg.com/u/2018/09/06/Lion.png',
    'https://www.tryimg.com/u/2018/09/06/BristleBack.png',
    'https://www.tryimg.com/u/2018/09/06/KepperOfTHeLight.png',
    'https://www.tryimg.com/u/2018/09/06/TwoDragon.png',
    'https://www.tryimg.com/u/2018/09/06/Weaver.png',
    'https://www.tryimg.com/u/2018/09/06/PhantomLancer.png',
    'https://www.tryimg.com/u/2018/09/06/Windrunner.png',
    'https://www.tryimg.com/u/2018/09/06/Juggernaught.png',
    'https://www.tryimg.com/u/2018/09/06/Mirana.png',
    'https://www.tryimg.com/u/2018/09/06/PhantomAssasin.png',
    'https://www.tryimg.com/u/2018/09/06/BloodSeeker.png',
    'https://www.tryimg.com/u/2018/09/06/Froxen.png',
    'https://www.tryimg.com/u/2018/09/06/LifeStealer.png',
    'https://www.tryimg.com/u/2018/09/06/Axe.png',
    'https://www.tryimg.com/u/2018/09/06/Rubik.png',
    'https://www.tryimg.com/u/2018/09/06/Huskar.png',
    'https://www.tryimg.com/u/2018/09/06/AntiMage.png',
    'https://www.tryimg.com/u/2018/09/06/Bearman.png',
    'https://www.tryimg.com/u/2018/09/06/TimeLord.png',
    'https://www.tryimg.com/u/2018/09/06/Soul.png',
    'https://www.tryimg.com/u/2018/09/06/QOP.png',
    'https://www.tryimg.com/u/2018/09/06/Zues.png',
    'https://www.tryimg.com/u/2018/09/06/Nyx.png',
    'https://www.tryimg.com/u/2018/09/06/Pyro.png',
    'https://www.tryimg.com/u/2018/09/06/VengfulSpirit.png',
    'https://www.tryimg.com/u/2018/09/06/SandKing.png',
    'https://www.tryimg.com/u/2018/09/06/Luna.png',
    'https://www.tryimg.com/u/2018/09/06/pixeldotabycptbuk_by_cptbuk-d7ohey0.png']

    const items = [
      'https://www.tryimg.com/u/2018/09/06/Item__01.png',
      'https://www.tryimg.com/u/2018/09/06/Item__02.png',
      'https://www.tryimg.com/u/2018/09/06/Item__03.png',
      'https://www.tryimg.com/u/2018/09/06/Item__04.png',
      'https://www.tryimg.com/u/2018/09/06/Item__05.png',
      'https://www.tryimg.com/u/2018/09/06/Item__06.png',
      'https://www.tryimg.com/u/2018/09/06/Item__07.png',
      'https://www.tryimg.com/u/2018/09/06/Item__08.png',
      'https://www.tryimg.com/u/2018/09/06/Item__09.png',
      'https://www.tryimg.com/u/2018/09/06/Item__10.png',
      'https://www.tryimg.com/u/2018/09/06/Item__11.png',
      'https://www.tryimg.com/u/2018/09/06/Item__12.png',
      'https://www.tryimg.com/u/2018/09/06/Item__13.png',
      'https://www.tryimg.com/u/2018/09/06/Item__14.png',
      'https://www.tryimg.com/u/2018/09/06/Item__15.png',
      'https://www.tryimg.com/u/2018/09/06/Item__16.png',
      'https://www.tryimg.com/u/2018/09/06/Item__17.png',
      'https://www.tryimg.com/u/2018/09/06/Item__18.png',
      'https://www.tryimg.com/u/2018/09/06/Item__19.png',
      'https://www.tryimg.com/u/2018/09/06/Item__20.png',
      'https://www.tryimg.com/u/2018/09/06/Item__21.png',
      'https://www.tryimg.com/u/2018/09/06/Item__22.png',
      'https://www.tryimg.com/u/2018/09/06/Item__23.png',
      'https://www.tryimg.com/u/2018/09/06/Item__24.png',
      'https://www.tryimg.com/u/2018/09/06/Item__25.png',
      'https://www.tryimg.com/u/2018/09/06/Item__26.png',
      'https://www.tryimg.com/u/2018/09/06/Item__27.png',
      'https://www.tryimg.com/u/2018/09/06/Item__28.png',
      'https://www.tryimg.com/u/2018/09/06/Item__29.png',
      'https://www.tryimg.com/u/2018/09/06/Item__30.png',
      'https://www.tryimg.com/u/2018/09/06/Item__31.png',
      'https://www.tryimg.com/u/2018/09/06/Item__32.png',
      'https://www.tryimg.com/u/2018/09/06/Item__33.png',
      'https://www.tryimg.com/u/2018/09/06/Item__34.png',
      'https://www.tryimg.com/u/2018/09/06/Item__35.png',
      'https://www.tryimg.com/u/2018/09/06/Item__36.png',
      'https://www.tryimg.com/u/2018/09/06/Item__37.png',
      'https://www.tryimg.com/u/2018/09/06/Item__38.png',
      'https://www.tryimg.com/u/2018/09/06/Item__39.png',
      'https://www.tryimg.com/u/2018/09/06/Item__40.png',
      'https://www.tryimg.com/u/2018/09/06/Item__41.png',
      'https://www.tryimg.com/u/2018/09/06/Item__42.png',
      'https://www.tryimg.com/u/2018/09/06/Item__43.png',
      'https://www.tryimg.com/u/2018/09/06/Item__44.png',
      'https://www.tryimg.com/u/2018/09/06/Item__45.png',
      'https://www.tryimg.com/u/2018/09/06/Item__46.png',
      'https://www.tryimg.com/u/2018/09/06/Item__47.png',
      'https://www.tryimg.com/u/2018/09/06/Item__48.png',
      'https://www.tryimg.com/u/2018/09/06/Item__49.png',
      'https://www.tryimg.com/u/2018/09/06/Item__50.png'
    ]

  console.log(props)
  if (props.gitlord) {
    return (
      <div className="hero-card">
        <div>GITLORD</div>
        <img src={_.sample(heroImgs)} alt="" />
        <div>{props.name}</div>
        <div>Exp {props.exp}</div>
        <div className="hero-inv">
          <img src={_.sample(items)} alt="" />
          <img src={_.sample(items)} alt="" />
          <img src={_.sample(items)} alt="" />
        </div>
      </div>
    ) 
  } else {
    return <div className="hero-card">
        {console.log("this really should be rendering by now")}
        <img src={_.sample(heroImgs)} alt="" />
        <div>{props.name}</div>
        <div>Exp {props.exp}</div>
        <div className="hero-inv">
          <img src={_.sample(items)} alt="" />
          <img src={_.sample(items)} alt="" />
          <img src={_.sample(items)} alt="" />
        </div>
      </div>;
  }
}