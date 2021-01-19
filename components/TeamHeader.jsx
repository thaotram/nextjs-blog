import styles from './TeamHeader.module.scss';
import { ChevronDown, RotateCw } from 'react-feather';
import { Button } from './Button';

export const TeamHeader = props => {
    return (
        <div className={styles['team-header']}>
            <div className={styles['team-header-left']}>
                <div className="text-white">Team</div>
                <div className={styles['team-header-avatar']}>
                    <div>B</div>
                </div>
                <Button text="Sales Boston" suffixIcon={ChevronDown}></Button>
            </div>
            <Button onClick={props.onRefresh} prefixIcon={RotateCw}></Button>
        </div>
    );
};
