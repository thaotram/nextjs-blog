import styles from './Button.module.scss';
import cn from 'classnames';
import { MouseEventHandler } from 'react';
import { Icon } from 'react-feather';

export function Button({
    text,
    color,
    prefixIcon: PrefixIcon,
    suffixIcon: SuffixIcon,
    onClick,
    className,
}: {
    text?: string;
    color?: 'white' | 'blue' | 'red';
    prefixIcon?: Icon;
    suffixIcon?: Icon;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}) {
    return (
        <button
            onClick={onClick}
            className={cn(className, styles.btn, {
                [styles.white]: color === 'white',
                [styles.blue]: color === 'blue',
                [styles.red]: color === 'red',
            })}
        >
            {PrefixIcon && <PrefixIcon />}
            {text && <div>{text}</div>}
            {SuffixIcon && <SuffixIcon />}
        </button>
    );
}
