import styles from './TeamHeader.module.css';
import { ChevronDown, RotateCw } from 'react-feather';
import { Button } from './Button';

export const TeamHeader = () => {
    return (
        <div className={styles['team-header']}>
            <div className={styles['team-header-left']}>
                <div className="text-white">Team</div>
                <div className={styles['team-header-avatar']}>
                    <div>B</div>
                </div>
                <Button text="Sales Boston" suffixIcon={ChevronDown}></Button>
            </div>
            <Button prefixIcon={RotateCw}></Button>
        </div>
    );
};
