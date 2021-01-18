import { Button } from '../components/button';
import { ChevronDown, RotateCw } from 'react-feather';

export default function Index() {
    return (
        <div>
            <div className="p-3">
                <Button text="Sales Boston" prefixIcon={ChevronDown} />
                <Button text="Sales Boston" prefixIcon={ChevronDown} color="red" />
                <Button text="Sales Boston" prefixIcon={ChevronDown} color="blue" />
            </div>
        </div>
    );
}
