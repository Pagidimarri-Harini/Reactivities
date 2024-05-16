
import { useEffect, useState } from 'react'
import './styles.css'
import { observer } from 'mobx-react-lite';
import {Container} from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
function App() {
  const {activityStore} = useStore();
  useEffect(()=>{
    activityStore.loadActivities();
    },[activityStore])


  if(activityStore.loadingInitial) return <LoadingComponent content='Loading app' inverted={true}/>
  return (
    <>
      <NavBar/>
      <Container style={{marginTop:'7em'}}>
        <ActivityDashboard />
        
        
      </Container>
      
    </>
    
  )
}

export default observer(App)
