import styles from './button.module.scss';

export function Button(props) {
    return <button className={styles.btn}>{props.children}</button>;
}
