import { TeamHeader } from './TeamHeader';
import { UserTable } from './UserTable';

export const Team = () => {
    const users = [
        {
            name: 'Sean Digernes',
            avatar: 'https://randomuser.me/api/portraits/med/men/9.jpg',
            progress: 80,
            task: 80,
        },
        {
            name: 'Debra Kennedy',
            avatar: 'https://randomuser.me/api/portraits/med/women/59.jpg',
            progress: 30,
            task: 30,
        },
    ];
    return (
        <div className="max-w-3xl text-blue-light bg-gray-dark rounded-2xl">
            <TeamHeader />
            <UserTable users={users} />
        </div>
    );
};
