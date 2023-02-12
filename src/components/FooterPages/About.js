import React, { useEffect } from 'react';

const About = () => {
    useEffect(()=>{
         window.scrollTo(0,0);
    },[]);
  return (
    <div className='footer-about'>
        <img className='col-12' src='images/about-founder.webp' alt='aboutFounder'/>
        <div className='container about-content'>
            <p>Hi, Mommies, Daddies, and everyone else who is eager to welcome a little munchkin into your lives 
                (we are looking at you grannies, grandpa, uncles & aunts).
            </p>
            <h3>We are glad to have you here at Beelittle!</h3>
            <div>
                <p>
                Welcoming a child into your lives is a beautiful beautiful feeling (oh don’t even get us started on those cute little 
                smiles and twinkly eyes), but we do understand that it’s also the most overwhelming experience for anyone and everyone. 
                You get nervous and confused over the most minute of things, probably spending hours researching everything about babies from 
                baby clothes to baby products, to cute baby videos, Ok Google what was I searching for again? (it’s ok we get distracted too). 
                The internet can tire you and scare you without giving away much of the needed information. Our hearts sink as well when we 
                read about toxic materials, skin issues and anything that could harm our little ones. Trust us, we know! Initiated and 
                incepted by three friends-cum-mothers in 2015,
                </p>
                <p>
                Beelittle isn’t just a startup for toddler garment & accessories but a safe haven formed after years of 
                research on how chemicals, heat and toxins present in clothes, beds and other accessories are easily absorbed 
                by a baby’s thin and fragile skin. Born and raised in the knit city of India, we always had a profound thought 
                on why our older generations preferred a pre-washed and used cotton sarees to swaddle or blanket a baby. Inventing 
                by the way of necessity, our quest for a comfortable and sustainable product came to an end when we tried muslin 
                swaddles on our babies. From then we never looked back and determined to startup our Dream-Venture, ‘BeeLittle’ 
                We made it our mission to help out all future mommies by offering economical, all-natural new-born and toddler clothes,
                beds and other accessories, in customized designs and sizes as required during the entire spectrum of their growth and
                development.
                </p>
            </div>
            <h3>Our Vision</h3>
            <p>
            Our vision is to offer toxin-free childhood to our little ones and with that intent, we came together to source, 
            design and produce clothes and accessories made from natural fibres and organic substances. Tried by families and 
            friends, tested for quality (we let only the best of best pass through), and with the precious feedbacks by our 
            beloved users, we keep on improving and innovating our range to deliver only the finest of products. We love it 
            when mommies find what they are looking for and do the little happy mommy dance. We are super excited to show you 
            what we have created and to welcome you in the Beelittle family.
            </p>
            <h3>Happy Shopping.</h3>      
        </div>  
    </div>
  )
}

export default About;