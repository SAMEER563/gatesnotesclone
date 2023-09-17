import { Container, Fab, Grid } from '@mui/material';
import React from 'react'
import Card from './Card';

const Hero = (props) => {
  return (
    <Container>
        <Grid container>
            {props.posts
            .filter((post) => post.featured === 1)
            .slice(0,5)
            .map((post, i) =>{
                return i ===0 ?  (
                    <Grid item xs={12} mb={2} mt={2}>
                <Card direction={'row'}
                imgWidth={566}
                imgHeight={400}
                myColor={'black'}
                linkSrc='/'
                fontSize={'40px'}
                imgSrc={
                    post.imageUrl
                }
                heading={'Example'}
                title={'The Unlimited NEXTJS13 Course with MUI5 by Cloning GatesNotes Blog'}
                Desc={'Complete NEXT API and CRUD with Respopnsive MUI5 Blog Codingstrade Coding'}
                author={"By BillGates | Aug 22, 2023"}
                EditButton={
                    <Fab
                    size="small"
                    variant='extended'
                    color='success'
                    aria-label='edit'
                    >
                        Edit
                    </Fab>
                }
                />
            </Grid>
                ):(
                    <Grid item md={3} spacing={1}>
                    <Card direction={'column'}
                        imgWidth={280}
                        imgHeight={220}
                        myColor={'black'}
                        linkSrc='/'
                        fontSize={'18px'}
                        imgSrc={post.imageUrl}
                        title={'The Unlimited NEXTJS13 Course with MUI5 by Cloning GatesNotes Blog'}
                        Desc={'Complete NEXT API and CRUD with Respopnsive MUI5 Blog Codingstrade Coding'}
                        
                        EditButton={
                            <Fab
                            size="small"
                            variant='extended'
                            color='success'
                            aria-label='edit'
                            >
                                Edit
                            </Fab>
                        }
                        />
                    </Grid>
                )
            })}
            
            <Grid item md={3} spacing={1}>
            <Card direction={'column'}
                imgWidth={280}
                imgHeight={220}
                myColor={'black'}
                linkSrc='/'
                fontSize={'18px'}
                imgSrc='https://cdn.pixabay.com/photo/2023/08/13/00/43/blue-8186653_640.jpg'
                
                title={'The Unlimited NEXTJS13 Course with MUI5 by Cloning GatesNotes Blog'}
                Desc={'Complete NEXT API and CRUD with Respopnsive MUI5 Blog Codingstrade Coding'}
                
                EditButton={
                    <Fab
                    size="small"
                    variant='extended'
                    color='success'
                    aria-label='edit'
                    >
                        Edit
                    </Fab>
                }
                />
            </Grid>
        </Grid>
    </Container>
  )
};

export default Hero;