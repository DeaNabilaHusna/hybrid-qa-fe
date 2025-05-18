import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/button.module.scss';

interface ButtonProps {
  to: string;
  children: React.ReactNode;
}

export default function Button({ to, children }: ButtonProps) {
  return (
    <Link to={to} className={styles.button}>
      {children}
    </Link>
  );
}