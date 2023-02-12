import React, {useEffect} from 'react';

function ReturnPolicy() {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
  return (
    <div className='footer-returnPolicy'>
        <div className='return-stmt'>Return Policy</div>
        <div className='container'>
            <p>
                At Beelittle, We work very hard to curate only the very best products for you and each product goes 
                through a tenacious quality check before we dispatch. In case you received a defective product or you have 
                changed your mind after placing the order, we are here to help you.
            </p>
            <p style={{fontWeight:'bold'}}>
                Please Note: Certain products have a no return/exchange policy. It includes Kapok silk cotton bed, 
                Bed with net, Carry nest, Pillow and bolsters set, Feeding pillow, Diaper caddy (Storage box), Hair 
                accessories, and Baby briefs.
            </p>
            <h4>Initiate Request</h4>
            <ul>
                <li>Please write to us within 48 hours of receiving your product at <span style={{color:'red',cursor:'pointer'}}>support@beelittle.in</span>.</li>
                <li>Include your order number, description of the issue, and a photo.</li>
                <li>Make sure to retain the original invoice/tags and</li>
                <li>Allow 1-2 business days for our team to get back to you and the return will be initiated by us.</li>
            </ul>
            <h4>Reverse Pick up</h4>
            <ul>
                <li>
                    Reverse pick-up: We provide reverse pick up to most of the pin codes. In this case, the shipment reaches back to us 
                    within 7-10 business days owing to courier company policy. Pick-up will be attempted twice. If the courier 
                    service is unable to pick up after two attempts, you are responsible to ship it back to us.
                </li>
                <li>
                    Self-courier: In some pin codes due to lack of serviceability, you would need to courier back the parcel to us. 
                    Fret not! An additional amount of Rs.100 will be added to your credit note for self-couriering the shipment.
                </li>
            </ul>
            <h4>Exchange / Credit Note / Refund</h4>
            <p>Once we receive your products in 1 – 2 business days our QC team will check the products and return or credit note 
                will be issued as per policy below.
            </p>
            <ul>
                <li>
                    <span style={{fontWeight:'bold'}}>In case of non-defective items – </span> Once we receive the product(s) and on validation by our QC team, we will either 
                    initiate a credit note or exchange based on your choice.
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>In case of defective/damaged item – </span> If the product has a manufacturing defect. (i.e torn, stained, stitched incorrectly) , 
                    we can either offer a replacement of the same product or exchange or a credit note or a refund (only in case of
                    a defective product).
                </li>
                <li>
                    <span style={{fontWeight:'bold'}}>In case of incomplete/wrong order – </span> In case of an incomplete/wrong order sent by us, we will send the complete 
                    order with the correct products on priority.
                </li>
            </ul>
            <h5>Exchange</h5>
            <ul>
                <li>
                    In case of an exchange, the new product will be dispatched only after the receipt and validation of the returned 
                    original product.
                </li>
                <li>
                    Exchange product: Product(s) of the same value can be chosen, if the value is higher the difference amount has to be 
                    paid by you before dispatching (our team will assist you on the same). No credit note will be provided for the 
                    balance amount (if any)
                </li>
                <li>
                    Please note that exchange is allowed only once per order
                </li>
            </ul>
            <h5>Credit Note </h5>
            <ul>
                <li>
                    On receipt of the product in the original condition, we will send a coupon code with the full amount to you in 1 to 2 
                    business days.
                </li>
                <li>
                    This Coupon Code will have a validity of 6 months from the day we give it to you and can be used only on our website
                </li>
            </ul>
            <h5>Refund</h5>
            <ul>
                <li>
                    In case of refund, it will be initiated within 1 -2 business days after QC validation.
                </li>
                <li>
                    Refund will be credited to the account you used for placing the order
                </li>
                <li>
                    In case of COD order, our team will get in touch with you to get your bank details.
                </li>
                <li>
                    It may take 2 – 10 business days to reflect in your account depending on your bank
                </li>
            </ul>
            <p>
                <span style={{fontWeight:'bold'}}>Note: </span> For a successful Return and exchange, ensure that the products are 
                unused, unwashed and are sent back in original packing.
            </p>
            <h4>SALE ITEMS</h4>
            <p>
                Any items purchased during a flash/clearance sale cannot be exchanged or returned.
            </p>
            <h4>MODIFY / CANCEL</h4>
            <p>
                The order amount will be refunded or a credit note will be provided if the order is cancelled. 
                You may modify/cancel your order as long as it has not been shipped. To do so, please get in touch with our 
                team by calling +91 7708356742 or email us at <span style={{color:'red',cursor:'pointer'}}>support@beelittle.in</span> 
                with your order details as soon as possible as orders are sometimes shipped on the same day.
            </p>
            <p style={{textAlign:'center',fontWeight:'bold'}}>As always we are looking forward to starting a conversation with YOU.</p>
        </div>
    </div>
  )
}

export default ReturnPolicy