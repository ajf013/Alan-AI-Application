// Created by Francis Cruz - AJF013
// AJF logo

import React, { useState, useEffect, useRef } from 'react';
import { Typography, IconButton, Button } from '@material-ui/core';
import { Brightness4, Brightness7 } from '@material-ui/icons';
import wordsToNumbers from 'words-to-numbers';

// ... (imports remain)
import alanBtn from '@alan-ai/alan-sdk-web';
import AOS from 'aos';
import 'aos/dist/aos.css';

import NewsCards from '../src/components/NewsCards/NewsCards';
import Footer from './Footer/Footer';
import useStyles from './styles';

const App = () => {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const alanBtnInstance = useRef(null);

  const classes = useStyles();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key: process.env.REACT_APP_ALAN_KEY,
        onCommand: ({ command, articles, number }) => {
          if (command === 'newHeadlines') {
            setNewsArticles(articles);
            setActiveArticle(-1);
          } else if (command === 'instructions') {
            setIsOpen(true);
          } else if (command === 'highlight') {
            setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
          } else if (command === 'open') {
            const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
            const article = articles[parsedNumber - 1];

            if (parsedNumber > articles.length) {
              alanBtnInstance.current.playText('Please try that again...');
            } else if (article) {
              window.open(article.url, '_blank');
              alanBtnInstance.current.playText('Opening...');
            } else {
              alanBtnInstance.current.playText('Please try that again...');
            }
          }
        },
        rootEl: document.getElementById('alan-btn'),
      });
    }
  }, []);

  const openMic = () => {
    if (alanBtnInstance.current) {
      alanBtnInstance.current.activate();
    } else {
      console.error("Alan Instance not ready!");
    }
  };

  return (
    <div className={`${classes.themeContainer} ${darkMode ? classes.darkMode : classes.lightMode}`}>
      <div className={classes.themeButton}>
        <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </div>
      <div className={classes.logoContainer}>
        {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card} data-aos="fade-down" data-aos-delay="0"><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number [4]</Typography></div>
            <div className={classes.card} data-aos="fade-down" data-aos-delay="150"><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
          </div>
        ) : null}
        <Typography variant="h2" component="h1" className={classes.alanLogo} data-aos="zoom-in" style={{ fontSize: '3rem', fontWeight: 'bold', color: darkMode ? '#ffffff' : '#444444', textAlign: 'center', margin: 0 }}>
          Alan News App
        </Typography>
        <Button onClick={openMic} variant="contained" color="primary" size="small" style={{ margin: '10px 0' }}>Ask for News</Button>
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      <div id="alan-btn" />
      <Footer />
    </div>
  );
};

export default App;
