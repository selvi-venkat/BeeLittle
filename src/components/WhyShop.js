import React from 'react';

const WhyShop = () => {
    return (
        <div style={{backgroundColor:'#DDF3E8'}}>
            <h1 className='text-center p-4'>WHY BEELITTLE?</h1>
            <div className='shopWhy'>
                <div className='shopVariety'>
                    <div className='img-store'>
                        <img style={{borderRadius:20}} className='variety-store' src='images/variety1.webp' alt=''/>
                    </div>                    
                    <h4 className='text-center head-variety'>Comfy Clothing</h4>
                    <p style={{fontSize:20}} className='text-center'>Fill up your baby's wardrobe with exceptional outfits</p>
                </div>
                <div className='shopVariety'>
                    <div className='img-store'>
                        <img style={{borderRadius:20}} className='variety-store' src='images/variety2.webp' alt=''/>
                    </div>
                    <h4 className='text-center head-variety'>Cosy Bedding</h4>
                    <p style={{fontSize:20}} className='text-center'>Designed for your baby's safe & snug sleeping spot</p>
                </div>
                <div className='shopVariety'>
                    <div className='img-store'>
                        <img style={{borderRadius:20}} className='variety-store' src='images/variety3.webp' alt=''/>
                    </div>
                    <h4 className='text-center head-variety'>Newborn kits</h4>
                    <p style={{fontSize:20}} className='text-center'>Tackle the surprises of parenthood with utmost ease</p>
                </div>
                <div className='shopVariety'>
                    <div className='img-store'>
                        <img style={{borderRadius:20}} className='variety-store' src='images/variety4.webp' alt=''/>
                    </div>
                    <h4 className='text-center head-variety'>Nursery</h4>
                    <p style={{fontSize:20}} className='text-center'>Shop the finest gifts & smart accessories from our store</p>
                </div>
            </div>
        </div>
    )
}

export default WhyShop;