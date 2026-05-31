import UpdateTutorForm from '@/components/ui/UpdateTutorForm';
import { fetchSingleTutor } from '@/data/data';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const UpdateTutorPage = async ({params}) => {
    const {id} = await params;

    const {token} = await auth.api.getToken({
        headers: await headers(),
    })

    const tutorData = await fetchSingleTutor(id, token);
    
    return (
        <div>
            <UpdateTutorForm tutorData={tutorData} token={token} />
        </div>
    );
};

export default UpdateTutorPage;