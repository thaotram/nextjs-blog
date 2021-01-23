import { Button } from './Button';
import { ChevronLeft, ChevronRight } from 'react-feather';
import styles from './DatePicker.module.scss';

const days: number[] = [
    31,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    1,
    2,
    3,
];

export const DatePicker = () => {
    return (
        <div className={styles.datepicker}>
            <div className={styles['datepicker-navigator']}>
                <Button text="Today" />
                <Button text="Today" />
                <Button text="Tomorrow" />
                <Button text="In 2 days" />
            </div>
            <div className={styles['datepicker-month']}>
                <Button color="white" prefixIcon={ChevronLeft} />
                <div className="font-medium">April 2021</div>
                <Button color="white" prefixIcon={ChevronRight} />
            </div>
            <div className={styles['datepicker-weekdays']}>
                <div>Mo</div>
                <div>Tu</div>
                <div>We</div>
                <div>Th</div>
                <div>Fr</div>
                <div>Sa</div>
                <div>Su</div>
            </div>
            <div className={styles['datepicker-days']}>
                {days.map((day, index) => (
                    <div key={index}>{day}</div>
                ))}
            </div>
        </div>
    );
};
