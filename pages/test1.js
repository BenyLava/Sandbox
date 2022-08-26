import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Head from 'next/head'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/Image';
import Alert from '../components/Alert';
import Accordion from '../components/Accordion';





export default function test1 () {
    return (
        <div className="fullDiv">
            <Head>
                <title>One</title>
                <meta name="description" content="" />
                <link rel="icon" href="/images/favicon.png" />
            </Head>

       
            <Header/>

            <br/>
            <br/>
            <br/>

            <div className=" d-flex justify-content-center mt-5">
            <Accordion/>
            </div>


        </div>
     


            
        


      
    )



}