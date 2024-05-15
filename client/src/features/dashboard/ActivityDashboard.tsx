
import { Grid} from 'semantic-ui-react';
import { Activity } from '../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../activities/details/ActivityDetails';
import ActivityForm from '../activities/details/form/ActivityForm';
interface Props{
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    edit: (activity: Activity) => void;
    deleteact: (id:string) => void;
}
export default function ActivityDashboard({activities, selectedActivity, selectActivity, cancelSelectActivity, editMode, openForm, closeForm, edit,deleteact}: Props){
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} selectActivity={selectActivity} deleteact = {deleteact}/>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode && 
                <ActivityDetails activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} openForm={openForm}/>}
                {editMode && <ActivityForm activity={selectedActivity} closeForm = {closeForm} edit={edit}/>}
                
            </Grid.Column>
        </Grid>
    )
}