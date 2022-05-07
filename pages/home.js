import React, { useState } from 'react'
import { useEffect } from 'react';
import SearchModule from './search';
import Container from './container';
import Module from './module';
import { useRouter } from 'next/router';
import { getPosts } from './query.js';


const Home = () => {

    //const [liveModules, setLiveModules] = useState(moduleList);
    const [query, setQuery] = useState("");
    const [moduleList, setModuleList] = useState([]);

    const router = useRouter()

    const generateModules = () => {
        let modules = [];
        //console.log('fetching posts...')
        getPosts().then((posts) => {
            posts.forEach(x => {
                modules.push(<Module title={x.data.title} body={x.data.body} author={x.data.author} date={x.data.date} id={x.id} query={query} searchable/>)
            })
            //console.log('posts retrieved')
            setModuleList(modules);
        })
    }

    return (
      <div class={'grid top'}>
          <SearchModule query={setQuery} />
          {generateModules()}
          <Container type={'modules'} modules={moduleList}/>
          <Container />
      </div>
    )
 }
  
export default Home;