import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Head from 'next/head'
import ButtonBadge from '../components/ButtonBadge';
import TicTacToe from '../components/TicTacToe';
import Card from 'react-bootstrap/Card';






export default function test3 () {
    return (
        <div>
            <Head>
                <title>Three</title>
                <meta name="description" content="" />
                <link rel="icon" href="/images/favicon.png" />
                <meta name="viewport" content='width=device-width, intitial-scale=1.0'></meta>

            </Head>

           
            <Header/>


            <div className=" d-flex justify-content-center mt-5">
           
            <TicTacToe/>
          
            </div>
        


        </div>
    )



}