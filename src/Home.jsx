import React from "react";
import Navbar from "./Navbar";
import HomePageText from "./HomePageText";
import { images } from "./Data";
import TextAndImages from "./TextAndImages";
import { displayItems } from './Data'
import AssetClasses from "./AssetClasses";
import { asset } from "./Data";
import Buildwealth from "./buildwealth";
import Comfort from "./Comfort";
import UseRise from './UseRise'
import {testimonys} from './Data'
import JoinRise from "./JoinRise";
import MinWeb from "./MinWeb";
import Footer from "./Footer";
import {footerList} from "./Data"
import Button from './Button'
import { Link } from 'react-router-dom'




function Home() {
 

  return (
    <div className="home-cotainer">
      <Navbar home="Home" product="Products" club="Investment Club" about="About Us" fq="FAQs" blog="Blog" sign="Sign In"
      />
      <div className="up-page">
        <div>
          <HomePageText header="Dollar investments that help you grow"
            paragraph="We put your money in high quality assets that help you build wealth and achieve your financial goals."

          />
          <Link to="/Form"><Button homebutton1="Download App"/>
          <Button   homebutton2="Sign up" /></Link>
          
        </div>
        <div>
          <img
            src="https://risevest.com/_next/static/media/rise-app-phone.c7dc0912.webp"
            alt=""
          />
        </div>
      </div>
        <div className="second-slide">
          {images.map((image, i)=>(
              <img key={i} src={image.techstars} alt="" />
          ))}
        </div>
        {displayItems.map((displayitem)=>(
            <TextAndImages 
                  title={displayitem.title}
                  text={displayitem.text}
                  link={displayitem.link}
                  image={displayitem.image}
                  />
        ))}
        <div className='asset-text'>
        <h1>Asset Classes</h1>
        <p>It’s your money, choose where you invest it</p>
        </div>
        <div className="split">
        
            {asset.map((set)=>(
                <AssetClasses 
                pics={set.pics}
                text1={set.text1}
                text2={set.text2}
                desc1={set.desc1}
                desc2={set.desc2}
                learn={set.learn}
                />
            ))}
            </div>
            <Buildwealth 
            first='The Rise App'
            second='Save for your'
            third='With Rise, you achieve your financial goals faster. Save for school, your home,
             vacations, your children’s future and more.'
             fourth='Start Saving'
            />
            <Comfort 
            comfort='What comfort do you have?'
            comfortText='We have a professional engagement through a trusteeship agreement 
            with Meristem Trustees Limited, who oversees investments on behalf of users and 
            members of Risevest (Victoria Island) Cooperative Multipurpose Society Ltd. 
            All assets are also held in regulated third parties in the relevant jurisdictions.'
            />
            <div className='use-rise'>
            <h1>From The People Who Use Rise</h1>
            <p>Our mission at Risevest is to empower more people just like you to achieve your personal financial goals</p>
        </div>
        <div className='use-rise-conntainer'>
            {testimonys.map((testimony)=>(
           <UseRise 
            testi={testimony.testi}
            imgport={testimony.imgport}
            testname={testimony.testname}
            />
            
            ))}
            </div>
            <div></div>
            <JoinRise 
            joincommunity = 'Join The Rise Community'
            jointext = "If you want to go far, go together. Our Telegram community surrounds you with others who can help you along your financial journey with tips, support, advice and learning. It's completely free and open to new and seasoned investors"
            />
            <MinWeb 
            download='Download The Rise App'
            longtext='Join our 200,000+ users investing and setting long term goals!'
            investment='Dollar investments that help you grow'
            />
              <div className="footer">
            {footerList.map((list)=>(
              
              <Footer title={list.title} 
              />
                
            ))}
            </div>
            
    </div>
  );
}

export default Home;
