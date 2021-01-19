import { TeamHeader } from './TeamHeader';
import { UserTable } from './UserTable';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const rand = (min, max) => {
    return Math.round(min + Math.random() * (max - min));
};

export const Team = () => {
    const [users, setUsers] = useState([]);

    const fetchDataAsync = async () => {
        try {
            const rawUsers = await axios.get(
                'https://randomuser.me/api/?results=5',
            );
            const listUsers = rawUsers.data.results.map(user => ({
                name: user.name.first + ' ' + user.name.last,
                avatar: user.picture.medium,
                progress: rand(0, 100),
                task: rand(50, 200),
            }));
            setUsers(listUsers);
        } catch (error) {
            console.error('Lỗi rồi', error);
            setUsers([]);
        }

        console.log('chạy xong rồi');
    };

    useEffect(() => {
        fetchDataAsync();
    }, []);

    return (
        <div className="max-w-3xl text-blue-light bg-gray-dark rounded-2xl">
            <TeamHeader onRefresh={fetchDataAsync} />
            <UserTable users={users} />
        </div>
    );
};
