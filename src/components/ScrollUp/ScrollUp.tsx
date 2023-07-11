import React, { useState, useEffect } from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const buttonStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '75px',
    right: '20px',
    width: '75px',
    height: '75px',
    backgroundColor: 'transparent',
    display: isVisible ? 'block' : 'none',
    color: 'brown',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    fontSize: 'inherit', // Додано цей стиль
  };

  const iconStyle: React.CSSProperties = {
    fontSize: '48px', // Змінено розмір іконки на 48 пікселів
  };

  return (
    <button onClick={scrollToTop} style={buttonStyle}>
      <KeyboardDoubleArrowUpIcon style={iconStyle} />{' '}
      {/* Додано стилі до іконки */}
    </button>
  );
};

export default ScrollToTopButton;
