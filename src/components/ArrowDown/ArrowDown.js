import styles from './ArrowDown.module.css';

const ArrowDown = () => {
    let classesFirst = `${styles.arrow} ${styles.first} ${styles.next}`;
    let classesSecond = `${styles.arrow} ${styles.second} ${styles.next}`;
    return (
        <div className={styles.center}>
            <div className={styles.round}>
                <div className={styles.cta}>
                    <span className={classesFirst}></span>
                    <span className={classesSecond}></span>
                </div>
            </div>
        </div>
    );
};

export default ArrowDown;

// $('.round').click(function(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     $('.arrow').toggleClass('bounceAlpha');
// });
