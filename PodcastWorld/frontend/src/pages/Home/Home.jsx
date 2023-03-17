import React from "react";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {

  const signInLinkStyle = {
    color: '#0077ff',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginLeft: '10px'
  }

  const navigate = useNavigate()

  function startRegister() {
    navigate('/register')
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title={"Welcome to World of Podcast"} icon={"logo"}>
        <p className={styles.text}>
          We're working hard to get audio podcast ready for everyone! Join with best of the speakers in the world. Also become the speaker by creating your own podcast room.
        </p>
        <div>
          <Button onClick={startRegister} text={"Get your username"}/>
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link style={signInLinkStyle} to="/login">Sign in</Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
