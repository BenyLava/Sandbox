import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import Image from 'next/image';

const Related = () => {
  const products = [
   { title : "Wilton Industries Perfect Results Mega Cooling Rack", desc : "Wilton Industries Perfect Results Mega Cooling Rack, Black", image: "/images/item15.jpg" , price: "$7.99", plink: "/product/15", link:"https://www.amazon.ca/Wilton-Industries-Perfect-Results-Cooling/dp/B003W0UNM0/ref=sr_1_46?gclid=Cj0KCQjwr4eYBhDrARIsANPywCiZk3UKPM6p3wy3o0QGdMRNIZjc-IZhscUmgLlB6iFkoLaRyRiFW8gaArFiEALw_wcB&hvadid=596079514466&hvdev=c&hvlocphy=9001314&hvnetw=g&hvqmt=e&hvrand=14636581063635512960&hvtargid=kwd-301827503455&hydadcr=21260_13355336&keywords=cool+cooking+gadgets&qid=1661196548&sr=8-46"},
    { title : "Good Cook Touch High-Temp Hamburger Meat Chopper", desc : "Good Cook Touch High-Temp Hamburger Meat Chopper, Black", image: "/images/item16.jpg" , price: "$7.77", plink: "/product/22",  link:"https://www.amazon.ca/Good-Cook-High-Temp-Hamburger-Chopper/dp/B00TTZGVSC/ref=sr_1_50?gclid=Cj0KCQjwr4eYBhDrARIsANPywCiZk3UKPM6p3wy3o0QGdMRNIZjc-IZhscUmgLlB6iFkoLaRyRiFW8gaArFiEALw_wcB&hvadid=596079514466&hvdev=c&hvlocphy=9001314&hvnetw=g&hvqmt=e&hvrand=14636581063635512960&hvtargid=kwd-301827503455&hydadcr=21260_13355336&keywords=cool%2Bcooking%2Bgadgets&qid=1661196548&sr=8-50&th=1"},
    { title : "Revolution InstaGLO R180 Toaster", desc : "Revolution InstaGLO R180 Toaster. 2-Slice, high-end stainless steel design. Features touchscreen with high-speed smart settings for perfectly toasted bagels, English muffins, toast, Pop-Tarts and waffles. Fresh, frozen, or reheat with 7 toastiness levels.", image: "/images/item17.jpg" , price: "$449.98",  plink: "/product/17",  link:"https://www.amazon.ca/Revolution-Cooking-R180-High-Speed-Stainless/dp/B086H69SJ2/ref=sr_1_56?gclid=Cj0KCQjwr4eYBhDrARIsANPywCiZk3UKPM6p3wy3o0QGdMRNIZjc-IZhscUmgLlB6iFkoLaRyRiFW8gaArFiEALw_wcB&hvadid=596079514466&hvdev=c&hvlocphy=9001314&hvnetw=g&hvqmt=e&hvrand=14636581063635512960&hvtargid=kwd-301827503455&hydadcr=21260_13355336&keywords=cool+cooking+gadgets&qid=1661196548&sr=8-56"},
    { title : "VEVOR Commercial Ice Cream Cone Waffle Maker Machine", desc : "VEVOR Commercial Ice Cream Cone Waffle Maker Machine, 110V Electric Waffle Cone Machine, 1200W Stainless Steel Egg Cone Baker w/Non-Stick Teflon Coating, Temp & Time Control for Restaurant Bakeries", image: "/images/item18.jpg" , price: "$139.99", plink: "/product/18",  link:"https://www.amazon.ca/VEVOR-Commercial-Cone-Waffle-Restaurant/dp/B09SW696LM/ref=sr_1_59_sspa?gclid=Cj0KCQjwr4eYBhDrARIsANPywCiZk3UKPM6p3wy3o0QGdMRNIZjc-IZhscUmgLlB6iFkoLaRyRiFW8gaArFiEALw_wcB&hvadid=596079514466&hvdev=c&hvlocphy=9001314&hvnetw=g&hvqmt=e&hvrand=14636581063635512960&hvtargid=kwd-301827503455&hydadcr=21260_13355336&keywords=cool+cooking+gadgets&qid=1661196548&sr=8-59-spons&psc=1"},
    { title : "GVODE Stainless Steel Food Grinder Attachment", desc : "GVODE Stainless Steel Food Grinder Attachment fit KitchenAid Stand Mixers Including Sausage Stuffer, Dishwasher Safe,Durable Meat Processor Accessories(Mixer Machine Not Included)", image: "/images/item19.jpg" , price: "$199.99",  plink: "/product/19",  link:"https://www.amazon.ca/Attachment-KitchenAid-Including-Dishwasher-Accessories/dp/B07D5PLN2N/ref=sr_1_52_sspa?gclid=Cj0KCQjwr4eYBhDrARIsANPywCiZk3UKPM6p3wy3o0QGdMRNIZjc-IZhscUmgLlB6iFkoLaRyRiFW8gaArFiEALw_wcB&hvadid=596079514466&hvdev=c&hvlocphy=9001314&hvnetw=g&hvqmt=e&hvrand=14636581063635512960&hvtargid=kwd-301827503455&hydadcr=21260_13355336&keywords=cool+cooking+gadgets&qid=1661197097&sr=8-52-spons&psc=1"},
    { title : "Peleg Design Egguins 3-in-1 Cook, Store and Serve Egg Holder", desc : "Peleg Design Egguins 3-in-1 Cook, Store and Serve Egg Holder, Penguin-Shaped Boiled Egg Cooker for Making Soft or Hard Boiled Eggs, Eggies, Holds 6 Eggs for Easy Cooking and Fridge Storage", image: "/images/item20.jpg" , price: "$22.99",  plink: "/product/20",  link:"https://www.amazon.ca/Design-Egguins-Penguin-Shaped-Cooking-Storage/dp/B07WD8MF7W/ref=sr_1_49?gclid=Cj0KCQjwr4eYBhDrARIsANPywCiZk3UKPM6p3wy3o0QGdMRNIZjc-IZhscUmgLlB6iFkoLaRyRiFW8gaArFiEALw_wcB&hvadid=596079514466&hvdev=c&hvlocphy=9001314&hvnetw=g&hvqmt=e&hvrand=14636581063635512960&hvtargid=kwd-301827503455&hydadcr=21260_13355336&keywords=cool+cooking+gadgets&qid=1661197097&sr=8-49"},
    { title : "Silicone Cooking Utensils Set", desc : "Silicone Cooking Utensils Set, 43Pcs Non-Stick Heat Resistant Kitchen Utensils Spatula Set with Wooden Handle for Baking, Cooking, and Mixing, Best Kitchen Gadgets Tools with Holder (Khaki)", image: "/images/item21.jpg" , price: "$51.99", plink: "/product/21",  link:"https://www.amazon.ca/Silicone-Cooking-Utensils-Non-Stick-Resistant/dp/B096NQXKJV/ref=sr_1_51?gclid=Cj0KCQjwr4eYBhDrARIsANPywCiZk3UKPM6p3wy3o0QGdMRNIZjc-IZhscUmgLlB6iFkoLaRyRiFW8gaArFiEALw_wcB&hvadid=596079514466&hvdev=c&hvlocphy=9001314&hvnetw=g&hvqmt=e&hvrand=14636581063635512960&hvtargid=kwd-301827503455&hydadcr=21260_13355336&keywords=cool+cooking+gadgets&qid=1661197097&sr=8-51"},
    { title : "Oster Belgian Waffle Maker", desc : "Oster Belgian Waffle Maker, Stainless Steel - CKSTWF2000-033", image: "/images/item22.jpg" , price: "$34.98", plink: "/product/22",  link:"https://www.amazon.ca/Oster-Belgian-Waffle-Maker-Stainless/dp/B00DI1HIRG/ref=sr_1_58?gclid=Cj0KCQjwr4eYBhDrARIsANPywCiZk3UKPM6p3wy3o0QGdMRNIZjc-IZhscUmgLlB6iFkoLaRyRiFW8gaArFiEALw_wcB&hvadid=596079514466&hvdev=c&hvlocphy=9001314&hvnetw=g&hvqmt=e&hvrand=14636581063635512960&hvtargid=kwd-301827503455&hydadcr=21260_13355336&keywords=cool+cooking+gadgets&qid=1661197097&sr=8-58"},
  ]
  
  return (
    <section className="section" id="products">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mt-5 mb-5">
              <h3 className="font-weight-medium text-light ">Related Products</h3><br/>
              <p className="text-dark"></p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            products.map((products, key) =>
              <Col className=" d-flex justify-content-center text-align-center" key={key}  lg={3} md={6}>
                <Card href={products.link} className="cardcust mb-3 mt-3 d-flex" style={{ width: '18rem' }}>
                    <Card.Img className=" img-size border img-radius" variant="top" src={products.image}/> 
                  <Card.Body  className="card-btm  flex-fill">
                    <Card.Title className=" justify-content-start d-flex card-top">{products.title}</Card.Title>
                    <Card.Text className="m-3 d-flex flex-wrap text-hide">
                       {products.desc}
                    </Card.Text>
                    <h5 className="align-self-end d-flex me-2">{products.price}</h5>
                    <a href={products.plink}  className="  stretched-link"></a>
                    <Button  href={products.link} target="_blank" className="stretched-link flex-column d-flex justify-content-center text-align-center card-btm">View on Amazon</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}

export default Related;