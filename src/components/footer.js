import { Link, Typography } from "@mui/material";

export default function Copyright(props) {
    return (
      <Typography variant="body2" align="center" {...props} style={{fontSize: '22px',margin: '20px 0px',color: 'lightgrey'}}>
        {'Copyright © '}
        <Link color="inherit" href="https://willjobs.netlify.com/" style={{textDecoration: 'none'}}>
          Princewill
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }