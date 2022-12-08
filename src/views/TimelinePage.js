import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Typography from '@mui/material/Typography';
import '../assets/css/journey.css';

import { IoLogoReact, IoBag, IoSchool, IoCodeSlash, IoCube } from 'react-icons/io5';


export default function CustomizedTimeline() {

  const items = ["Create high-quality and user-friendly applications and software that meet the needs of clients and users.", 
                "Continuously improve technical skills and knowledge through training, learning, and staying updated on industry trends and developments.",    
                "Collaborate with teams and clients to understand project requirements and provide effective solutions.",    
                "Maintain code integrity and adhere to coding standards and best practices.",   
                "Keep up-to-date with the latest technologies and tools to enhance productivity and efficiency.",    
                "Identify and resolve technical issues in a timely and effective manner.",    
                "Meet project deadlines and deliverables within budget.",    
                "Foster a positive and collaborative work environment with colleagues.",    
                "Seek out opportunities for professional growth and career advancement.",    
                "Contribute to the development community through sharing knowledge, code, and insights with peers."];


  return (

    <div className="container">
      <div className="journey-box">
        <div className="description">
          <h1>My Goals</h1>
          <ul>
            {items.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>


        </div>


        <div className="timeline">
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.primary"
              >
                2022 - present
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                <TimelineDot color="primary">
                  <IoCodeSlash />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Project Proposals
                </Typography>
                <Typography>Developing proposal projects entitled Blockchain-Based Permits Storing and Digital Signing  Using Smart Contract  for Municipality of Murcia.</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.primary"
              >
                2022 July-August
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                <TimelineDot color="primary">
                  <IoBag />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  On-the-job training
                </Typography>
                <Typography>Started on the job training STIWNU Having the task to deployed and maintain projects</Typography>
              </TimelineContent>
            </TimelineItem>


            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.primary"
              >
                2021-present
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                <TimelineDot color="primary">
                  <IoLogoReact />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Started Exploring ReactJS
                </Typography>
                <Typography>self-studied react js.</Typography>
              </TimelineContent>
            </TimelineItem>


            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.primary"
              >
                2020 September
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                <TimelineDot color="primary">
                  <IoCube />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Encontered Blockchain Technology
                </Typography>
                <Typography>Trying my skills using this technology</Typography>
              </TimelineContent>
            </TimelineItem>
            
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.primary"
              >
                2019
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                <TimelineDot color="primary">
                  <IoCodeSlash />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  My first client
                </Typography>
                <Typography>Started developing project by client offers</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.primary"
              >
                2019-present
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                <TimelineDot color="primary">
                  <IoSchool />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Went To
                </Typography>
                <Typography>Taking up my Bachelor Degree In Computer Science at STIWNU</Typography>
              </TimelineContent>
            </TimelineItem>



            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.primary"
              >
                2018-2019
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                <TimelineDot color="primary">
                  <IoCodeSlash />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Developed OAMS
                </Typography>
                <Typography>Become lead programmer</Typography>
              </TimelineContent>
            </TimelineItem>
            

            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.primary"
              >
                S.Y. 2017-2019
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                <TimelineDot color="primary">
                  <IoSchool />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Went To
                </Typography>
                <Typography>Taking up my SHS IT course in STIWNU</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
          </div>
      </div>
    </div>
  );
}
