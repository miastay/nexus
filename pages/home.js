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

    const generateModules = () => {
        let modules = [];
        getPosts().then((posts) => {
            posts.forEach(x => {
                modules.push(<Module title={x.data.title} body={x.data.body} author={x.data.author} date={x.data.date} score={x.data.score} id={x.id} query={query} searchable/>)
            })
            modules.sort((a, b) => b.props.date - a.props.date)
            setModuleList(modules);
        })
    }

    // useEffect(() => {
    //     window.addEventListener('load', generateModules());
    // })

    return (
      <div class={'grid top'}>
          <SearchModule query={setQuery} />
          <Container type={'modules'} modules={moduleList} refresh={() => generateModules()}/>
          <button value={"refresh posts"} onClick={() => generateModules()} />
          <Container />
      </div>
    )
 }
  
export default Home;