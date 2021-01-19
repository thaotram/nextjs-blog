import styles from './Button.module.scss';
import cn from 'classnames';

export function Button({
    text,
    color,
    prefixIcon: PrefixIcon,
    suffixIcon: SuffixIcon,
    onClick,
}) {
    return (
        <button
            onClick={onClick}
            className={cn(styles.btn, {
                [styles.red]: color === 'red',
                [styles.blue]: color === 'blue',
            })}
        >
            {PrefixIcon && <PrefixIcon />}
            {text && <div>{text}</div>}
            {SuffixIcon && <SuffixIcon />}
        </button>
    );
}
