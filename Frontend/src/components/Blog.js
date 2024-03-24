import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

function Blog({ title, description, imageURL, userName }) {
    console.log(userName)

    return (
        <div style={{ marginTop: '64px', padding: '16px', display: 'flex', justifyContent: 'center' }}>
            <Card
                sx={{
                    width: '40%',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                    transition: 'box-shadow 0.3s',
                    '&:hover': {
                        boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.2)',
                    },
                }}
            >
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {userName}
                        </Avatar>
                    }

                    title={title}
                    subheader={`By ${userName}`}

                />
                <CardMedia
                    component="img"
                    height="194"
                    image={imageURL} // Using prop for image URL
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {description}          </Typography> // Using prop for description
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
                <Collapse timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            {/* Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes. */}
                        </Typography>
                        {/* Other content */}
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
}

export default Blog;
