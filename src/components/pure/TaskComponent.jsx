import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const TaskComponent = ({task}) => {
  return (
    <Card sx={{ maxWidth: 350 }}>   
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Name:{task.name}
      </Typography>
      <Typography variant="body1" color="text.primary">
       {task.description}
      </Typography>
      <Typography variant="h8" color="text.primary">
       Level:{task.level}
      </Typography>
      <Typography variant="h6" color="text.primary">
       This task is: {task.completed ? 'Completed' : 'Pending'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent