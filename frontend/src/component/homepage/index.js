import HeaderHomepage from './HeaderHomepage';
import Bar from './bar';
import './homepage.css';
import Categories from './categories';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../URL';

const Homepage = () => {
  const CATEGORIES = [
    {
      name: 'English',
      listDecks: [
        { name: 'IELTS Vocabulary', words: 4000, cards: 8000, displayLink: 'IELTS' },
        { name: 'TOEFL Vocabulary', words: 5000, cards: 10000, displayLink: 'TOEFL' },
        { name: 'TOEIC Vocabulary', words: 1000, cards: 2000, displayLink: 'TOEIC' },
      ],
    },
    {
      name: 'French',
      listDecks: [
        { name: 'A2 Vocabulary', words: 1000, cards: 2000, displayLink: 'A2' },
        { name: 'B2 Vocabulary', words: 2500, cards: 5000, displayLink: 'B2' },
        { name: 'C2 Vocabulary', words: 5000, cards: 10000, displayLink: 'C2' },
      ],
    },
    {
      name: 'Ubuntu',
      listDecks: [
        { name: 'A2 Vocabulary', words: 1000, cards: 2000, displayLink: 'A2' },
        { name: 'B2 Vocabulary', words: 2500, cards: 5000, displayLink: 'B2' },
        { name: 'C2 Vocabulary', words: 5000, cards: 10000, displayLink: 'C2' },
      ],
    },
    {
      name: 'Windows',
      listDecks: [
        { name: 'A2 Vocabulary', words: 1000, cards: 2000, displayLink: 'A2' },
        { name: 'B2 Vocabulary', words: 2500, cards: 5000, displayLink: 'B2' },
        { name: 'C2 Vocabulary', words: 5000, cards: 10000, displayLink: 'C2' },
      ],
    },
    {
      name: 'Macbook',
      listDecks: [
        { name: 'A2 Vocabulary', words: 1000, cards: 2000, displayLink: 'A2' },
        { name: 'B2 Vocabulary', words: 2500, cards: 5000, displayLink: 'B2' },
        { name: 'C2 Vocabulary', words: 5000, cards: 10000, displayLink: 'C2' },
      ],
    },
    {
      name: 'Lenovo',
      listDecks: [
        { name: 'A2 Vocabulary', words: 1000, cards: 2000, displayLink: 'A2' },
        { name: 'B2 Vocabulary', words: 2500, cards: 5000, displayLink: 'B2' },
        { name: 'C2 Vocabulary', words: 5000, cards: 10000, displayLink: 'C2' },
      ],
    },
    {
      name: 'Asus',
      listDecks: [
        { name: 'A2 Vocabulary', words: 1000, cards: 2000, displayLink: 'A2' },
        { name: 'B2 Vocabulary', words: 2500, cards: 5000, displayLink: 'B2' },
        { name: 'C2 Vocabulary', words: 5000, cards: 10000, displayLink: 'C2' },
      ],
    },
    {
      name: 'Axios',
      listDecks: [
        { name: 'A2 Vocabulary', words: 1000, cards: 2000, displayLink: 'A2' },
        { name: 'B2 Vocabulary', words: 2500, cards: 5000, displayLink: 'B2' },
        { name: 'C2 Vocabulary', words: 5000, cards: 10000, displayLink: 'C2' },
      ],
    },
    {
      name: 'PHP',
      listDecks: [
        { name: 'A2 Vocabulary', words: 1000, cards: 2000, displayLink: 'A2' },
        { name: 'B2 Vocabulary', words: 2500, cards: 5000, displayLink: 'B2' },
        { name: 'C2 Vocabulary', words: 5000, cards: 10000, displayLink: 'C2' },
      ],
    },
    {
      name: 'JavaScript',
      listDecks: [
        { name: 'A2 Vocabulary', words: 1000, cards: 2000, displayLink: 'A2' },
        { name: 'B2 Vocabulary', words: 2500, cards: 5000, displayLink: 'B2' },
        { name: 'C2 Vocabulary', words: 5000, cards: 10000, displayLink: 'C2' },
      ],
    },
    {
      name: 'YEYEYE',
      listDecks: [
        { name: 'A2 Vocabulary', words: 1000, cards: 2000, displayLink: 'A2' },
        { name: 'B2 Vocabulary', words: 2500, cards: 5000, displayLink: 'B2' },
        { name: 'C2 Vocabulary', words: 5000, cards: 10000, displayLink: 'C2' },
      ],
    },

  ];

  const [categories, setCategories] = useState(CATEGORIES.map((category, index) => ({ key: index, ...category, innerRef: React.createRef()})));



  // useEffect(() => {
  //   const getCategories = async () => {
  //     const categories = await axios.get(API_URL + '/getCategories', {
  //       params: {
  //         userId: localStorage.getItem('userId'),
  //       }
  //     });
  //     categories.map(category => ({...category, ref: React.createRef()}));
  //     setCategories(categories);
  //   }

  //   getCategories();
  // }, []);

  return (
    <div className='homepage'>
      <HeaderHomepage />
      <Bar categories={categories} />
      <Categories categories={categories} />
    </div>
  );
}

export default Homepage;