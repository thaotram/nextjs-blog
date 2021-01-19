import styles from './UserTableRow.module.scss';
import cn from 'classnames';

const getColor = progress => {
    if (progress <= 20) return 1;
    if (progress <= 40) return 2;
    if (progress <= 60) return 3;
    if (progress <= 80) return 4;
    return 5;
};

export const UserTableRow = props => {
    const progress = props.user.progress;
    const color = getColor(progress);

    return (
        <tr
            className={cn(styles['user-table-row'], {
                [styles['color-gray']]: color == 1,
                [styles['color-pink']]: color == 2,
                [styles['color-purple']]: color == 3,
                [styles['color-blue']]: color == 4,
                [styles['color-green']]: color == 5,
            })}
        >
            <td>
                <img
                    className={styles['avatar']}
                    src={props.user.avatar}
                    alt=""
                />
            </td>
            <td>{props.user.name}</td>
            <td>
                <div className={styles['progress']}>
                    <div
                        className={styles['progress-bar']}
                        role="progressbar"
                        style={{ width: progress + '%' }}
                        aria-valuenow={progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    />
                </div>
            </td>
            <td>{progress}%</td>
            <td>{props.user.task}</td>
        </tr>
    );
};
