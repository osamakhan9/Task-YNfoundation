import React from "react";
import styles from "../styles/Templates.module.css";

const Templates = () => {
  return (
    <div className={styles.Templates}>
    <h2>Templates for absolutely anything</h2>
    <p>
      Customize an office template, or design something more personal, like an
      invitation.
    </p>
    <div className={styles.grid}>
      <div className={styles.one}>
        <img
          src="https://i.etsystatic.com/19585973/r/il/f1bc43/2550704767/il_1588xN.2550704767_6hll.jpg"
          alt=""
        />
      </div>
      <div className={styles.two}>
        <img src='https://template.canva.com/EADZ4JnHDfI/3/0/286w-ZlWNaw0QaX8.jpg' alt="" />
      </div>
      <div className={styles.three}>
        <img src='https://template.canva.com/EADapG51fls/3/0/400w-aChlnr5L_Ww.jpg' alt="" />
      </div>
      <div className={styles.four}>
        <img src='https://template.canva.com/EAEXA859wm0/2/0/400w-jRAxCD5Qpy4.jpg' alt="" />
      </div>
      <div className={styles.five}>
        <img src='https://template.canva.com/EADzZv2-vpk/1/0/400w-ogkaP-Wi21g.jpg' alt="" />
      </div>
      <div className={styles.six}>
        <img src='https://template.canva.com/EADaogF5JtM/5/0/400w-gOabQZ-2x58.jpg' alt="" />
      </div>
      <div className={styles.seven}>
        <img src='https://template.canva.com/EAEGDHjLsXk/10/0/400w-qLQxVs9xg-Q.jpg' alt="" />
      </div>
      <div className={styles.eight}>
        <img src='https://template.canva.com/EADakBMT2L8/7/0/400w-wHZFkdNCb4g.jpg' alt="" />
      </div>
      <div className={styles.nine}>
        <img src='https://template.canva.com/EADannRC2Cs/2/0/400w-zdxoayS1dW4.jpg' alt="" />
      </div>
      <div className={styles.ten}>
        <img src='https://template.canva.com/EAEWSCtgF7E/1/0/400w-Ur_cwx4NbVE.jpg' alt="" />
      </div>
      <div className={styles.eleven}>
        <img src='https://template.canva.com/EADaosVPiEU/1/0/400w-HI9ygtHJxXI.jpg' alt="" />
      </div>
      <div className={styles.twelve}>
        <img src='https://template.canva.com/EAEgGRQ-LHs/7/0/400w-zHUy6GwfcuI.jpg' alt="" />
      </div>
      <div className={styles.thirteen}>
        <img src='https://template.canva.com/EADao85M6_0/1/0/400w-4vwp1100Ykw.jpg' alt="" />
      </div>
      <div className={styles.fourteen}>
        <img src='https://template.canva.com/EAD8SnpZkbk/2/0/400w-7el5iY3r3Cw.jpg' alt="" />
      </div>
    </div>

    <button>Browse all templates</button>
  </div>
  );
};

export default Templates;
