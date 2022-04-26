import React, { useState } from 'react'
import { useEffect } from 'react';

const Container = ({modules}) => {
    return (
        <div class="container stretch">
            {modules}
        </div>
    )
}

export default Container;