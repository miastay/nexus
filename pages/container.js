import React, { useState } from 'react'
import { useEffect } from 'react';

const Container = ({type, modules, query, refresh, comments}) => {

    const testQuery = (querystr, props) => {
        let score = 0;
        let score_threshold = 2;
        let query_arr = querystr.split(' ');
        for(var q of query_arr) {
            if(props.title.indexOf(q) != -1) 
                { score += 2; break; } 
            else if(props.body.indexOf(q) != -1)
                { score += 2; break; } 
            else if(props.author.indexOf(q) != -1) 
                { score += 2; break; } 
            else { score--; }
        }
        return score >= (query_arr.length / 2);
    }

    let elem;
    switch(type) {
        case 'back-sidebar' : {
            elem =  (   <div class="container">
                            {'this is a sidebar'}
                        </div>
                    )
        } break;
        case 'modules' : {
            elem =  (   <div class="module_wrapper">
                            <h2>Recent Posts</h2><br/>
                            <div class="container stretch in scroll">
                                {modules && modules.map((x, i) => {
                                    return (testQuery(query, x.props)
                                    ? x : null);
                                })}
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