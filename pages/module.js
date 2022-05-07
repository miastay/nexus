import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Module = ({name, id, query}) => {

    const router = useRouter();

    return (
        <div class="module large" onClick={() => router.push(`posts?id=${id}`)}>
            {name + '; ' + query}
        </div>
    )
}

export default Module;