import React, { useEffect } from 'react';
import Card from './Card';

const Playlist: React.FC = () => {
  const playlists = [
    { id: 1, title: "Boas festas", image: "../assets/playlist/1.jpeg" },
    { id: 2, title: "Feitos para você", image: "../assets/playlist/2.png" },
    { id: 3, title: "Lançamentos", image: "../assets/playlist/3.jpeg" },
    { id: 4, title: "Creators", image: "../assets/playlist/4.jpeg" },
    { id: 5, title: "Para treinar", image: "../assets/playlist/5.jpeg" },
    { id: 6, title: "Podcasts", image: "../assets/playlist/6.jpeg" },
    { id: 7, title: "Sertanejo", image: "../assets/playlist/7.jpeg" },
    { id: 8, title: "Samba e pagode", image: "../assets/playlist/8.jpeg" },
    { id: 9, title: "Funk", image: "../assets/playlist/9.jpeg" },
    { id: 10, title: "MPB", image: "../assets/playlist/10.jpeg" },
    { id: 11, title: "Rock", image: "../assets/playlist/11.jpeg" },
    { id: 12, title: "Hip Hop", image: "../assets/playlist/12.jpeg" },
    { id: 13, title: "Indie", image: "../assets/playlist/13.jpeg" },
    { id: 14, title: "Relax", image: "../assets/playlist/14.jpeg" },
    { id: 15, title: "Música Latina", image: "../assets/playlist/15.jpeg" },
  ];

  useEffect(() => {
    // Incluindo o script.js aqui, fazendo com que seja carregado na montagem do componente
    const script = document.createElement('script');
    script.src = '../script.ts'; // Substitua pelo caminho real do script
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpando o script quando o componente for desmontado
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="playlist-container">
      <div className="playlist">
        <h1 id="greeting">Boas-vindas</h1>
        <h2 className="session">Navegar por todas as seções</h2>
      </div>

      <div className="offer__scroll-container">
        <div className="offer__list">
          <section className="offer__list-item">
            {playlists.map(playlist => (
              <Card key={playlist.id} title={playlist.title} image={playlist.image} />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Playlist;