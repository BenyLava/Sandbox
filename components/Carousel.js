import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Head from 'next/head'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/Image';





export default function carousel () {
    return (
        <div>
           

           
            
      <div className="d-flex justify-content-center mt-5">
        <div className="item">
            <Carousel as="item" variant="dark" fade indicators={false}>
      <Carousel.Item as="item">
        <Image
          className="d-flex justify-content-center"
          src="/images/red.png"
          alt="First slide"
          width={500}
          height={600}
          
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p className="mb-5">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item as="item">
        <Image
          className="d-flex justify-content-center"
          src="/images/blue.png"
          alt="Second slide"
          width={500}
          height={600}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item as="item">
        <Image
          className="d-flex justify-content-center"
          src="/images/yellow.png"
          alt="Third slide"
          width={500}
          height={600}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p className="mb-5">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>


            
        


        </div>
    )



}