import { Button } from '../components/button';

export default function () {
    return (
        <div>
            <button
                type="button"
                className="border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline"
            >
                Info
            </button>
            <Button>Hahaha</Button>
        </div>
    );
}
