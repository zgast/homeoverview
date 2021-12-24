import styles from '../styles/style.module.css'
import logo from '../public/logo.png';
import Image from 'next/image'
import {Button, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";



export default function index({sites, logoProp}) {
    return (
        <div>
            <div className={styles.header}>
                {logoProp.customLogo ? 
                <img src={logoProp.logoURL}/>
                : 
                <Image src={logo} height={"240%"} width={"240%"}/>}
            </div>
           

            <div className={styles.cards}>
                {sites.map(site  => {
                    return (
                        <div key={site.name} className={styles.card}>
                            <Card sx={{maxWidth: 345}}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="160"
                                        image={site.logo}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {site.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">

                                            {strcmp(site.description,"") ?  <div>{site.description}</div> : <div>this is a website, you can open it by clicking the button below</div>}
                                        </Typography>
                                        <Button href={site.url}>WEBSITE</Button>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>

                    )
                })}


            </div>

        </div>
    )


}


export async function getStaticProps() {
    let json = require('../volume/config.json');
    let sites = json.sites;
    let logoProp = json.logo
    
    return {
        props: {
            sites,
            logoProp
        }
    }
}

function strcmp(a, b){   
    return (a<b?-1:(a>b?1:0));  
}


