import { useState, useEffect, useCallback} from "react";
import styled from 'styled-components';
import NxWelcome from './nx-welcome';

import { Route, Link } from 'react-router-dom';
import { PageTitle } from '@nx-tcc/ui-header';
import { UiSidebar } from '@nx-tcc/ui-sidebar';

import axios from 'axios';
//import { Service } from "@nx-tcc/api-interface";
import { Services } from '@nx-tcc/shared-types'

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  
  const [service, setService] = useState<Services[]>([]);
  //const [apiResponse, setApiResponse] = useState({message: 'Loading...'});

  const getServices = useCallback(async () => {
    const resp = await axios.get<Services[]>('http://localhost:3000/services')
    setService(resp.data)
    console.log(resp)
  }, [])
 
  useEffect(() => {
    getServices()
  }, []);

  return (
    <StyledApp>
       <PageTitle/>
       <UiSidebar/>
      <main>
        <p>
          { JSON.stringify(service) }
        </p>
      </main>
      <NxWelcome title="eagency" />
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </StyledApp>
  );
}

export default App;
