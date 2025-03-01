import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    // Incluindo o script.js aqui, fazendo com que seja carregado na montagem do componente
    const script = document.createElement('script');
    script.src = '/path/to/your/script.js'; // Substitua pelo caminho real do script
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpando o script quando o componente for desmontado
      document.body.removeChild(script);
    };
  }, []);

  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left" aria-label="Previous">
          <img src="/assets/icons/small-left.png" alt="left" />
        </button>
        <button className="arrow-right" aria-label="Next">
          <img src="/assets/icons/small-right.png" alt="right" />
        </button>
      </div>
      <div className="header__search">
        <img src="/assets/icons/search.png" alt="search" />
        <input
          id="search-input"
          maxLength={800}
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          placeholder="O que você quer ouvir?"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="header__login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  );
};

export default Header;