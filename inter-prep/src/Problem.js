import React, { useEffect, useState } from 'react';

function Card({ title, text, target, linkTitle, href, rel, onClick, linkClassName }) {
  return (
    <div className="card">
      <div className="card__title">{title}</div>
      <div className="card__text">{text}</div>
      <a className={`default-link card__link ${linkClassName}`} target={target} rel={rel} href={href} onClick={onClick}>
        {linkTitle}
      </a>
    </div>
  );
}

export default function Page() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/savayer/demo/posts');
        const jsonData = await response.json();

        const newData = jsonData.map((item) => ({
          id: item.id,
          title: item.title.en, // Adjust property name based on your API response
          link_title: item.link_title, // Adjust property name based on your API response
          link: item.link, // Adjust property name based on your API response
          text: item.body.en.substr(0, 50) + '...', // Adjust property name based on your API response
        }));

        setCards(newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  function analyticsTrackClick(url) {
    // sending clicked link url to analytics
    console.log(url);
  }

  return (
    <div>
      {cards.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          linkTitle={item.link_title}
          href={item.link}
          text={item.text}
          linkClassName={item.id === 1 ? 'card__link--red' : ''}
          target={item.id === 1 ? '_blank' : ''}
          onClick={() => analyticsTrackClick(item.link)}
        />
      ))}
    </div>
  );
}
