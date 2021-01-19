import styles from './UserTable.module.css';
import { UserTableRow } from './UserTableRow';

export const UserTable = props => {
    return (
        <table className={styles['user-table']}>
            <thead>
                <tr>
                    <th colSpan="2">Name</th>
                    <th colSpan="2">Progress</th>
                    <th>Tasks</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map((user, index) => (
                    <UserTableRow user={user} key={index} />
                ))}
            </tbody>
        </table>
    );
};
