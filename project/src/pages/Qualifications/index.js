import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useState,useEffect} from 'react';   
import {Circularprogress,Box} from '@mui/material';


export default function Qualifications() {
  let [loader,setLoader] = useState(true);
    let [qualifications,setQualifications] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Qualifications')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setQualifications(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
         useEffect(()=>{
          connectToServer();
   
         },[])
         console.log("Qualifications",Qualifications)
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sree chaitanya" src="https://tse2.mm.bing.net/th?id=OIP.EGzVJy3sM80VX8RtnV8_DAHaGi&pid=Api&P=0" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree chaitanya Institutes of Technological Sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                68% CGPA
              </Typography>
              {"- BTech(ECE)"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sri Gayatri" src="https://tse1.mm.bing.net/th?id=OIP.lPvqQ05frpTig8LaKRGrVQHaFj&pid=Api&P=0" />
        </ListItemAvatar>
        <ListItemText
          primary="Sri Gayatri Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                90% CGPA
              </Typography>
              {" — MPC"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Scholars" src="https://scontent.fhyd5-1.fna.fbcdn.net/v/t39.30808-6/292143773_550909500068303_563307185802771192_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=Sdfll6SCSPEAX-yP1tN&_nc_ht=scontent.fhyd5-1.fna&oh=00_AfAUU5ksZuH81nUKbSWjjlPFPY98DwboIeQMQoKUN5CuzA&oe=6424B4DE" />
        </ListItemAvatar>
        <ListItemText
          primary="Scholars High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                87% CGPA
              </Typography>
              {' — Higher Secondary Education'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}