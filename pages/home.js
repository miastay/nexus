import React, { useState } from 'react'
import { useEffect } from 'react';
import SearchModule from './search';
import Container from './container';
import Module from './module';
import { useRouter } from 'next/router';


const Home = () => {

    //const [liveModules, setLiveModules] = useState(moduleList);
    const [query, setQuery] = useState("");

    const router = useRouter()

    // const runQuery = (evt) => {
    //     let str = evt.srcElement.value;
    //     return str;// ? setLiveModules(moduleList.filter(x => (x.props.searchable && x.props.name.indexOf(str) != -1))) : setLiveModules(moduleList);
    // }

    const moduleList = [<Module name={'module 1'} id={1} query={query} searchable/>,
                    <Module name={'this has a bunch of strings in its name'} id={2} query={query} searchable/>,
                    <Module name={'different'} id={3} query={query} searchable/>,
                    <Module name={'lorem ipsum'} id={4} query={query} searchable/>,
                    <Module name={'example text'} id={5} query={query} searchable/>,
                    <Module name={'abcdefghijklmn'} id={6} query={query} searchable/>,
                    <Module name={'opqrstwxyz'} id={7} query={query} searchable/>,
                    <Module name={'module 8'} id={8} query={query} searchable/>,]

    return (
      <div class={'grid top'}>
          <SearchModule query={setQuery} />
          <Container modules={moduleList} />
          <Container />
      </div>
    )
 }
  
export default Home;