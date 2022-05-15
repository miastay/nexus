import React, { useState } from 'react'
import { useEffect } from 'react';

const Container = ({type, modules, refresh, comments}) => {

    let elem;
    switch(type) {
        case 'back-sidebar' : {
            elem =  (   <div class="container">
                            {'this is a sidebar'}
                        </div>
                    )
        } break;
        case 'modules' : {
            elem =  (   <div>
                            <h2>Recent Posts</h2><input type="button" class="refresh" value="Refresh"></input><br/>
                            <div class="container stretch in">
                                {modules}
                            </div>
                        </div>
                    )
        } break;
        case 'comments' : {
            elem =  (   <div class="container stretch in">
                            <h2>Comments</h2>
                            {comments}
                        </div>
                    )
        } break;
        default : {
            elem =  (   <div class="container stretch">
                            {}
                        </div>
                    )
        }
    }

    return elem;
}

export default Container;