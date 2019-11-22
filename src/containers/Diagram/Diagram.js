import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
      maxWidth: '99%',
      margin: '10px auto',
      width: 'fit-content',
    },
    column: {
      width: '25px',
      margin: '3px',
      background: 'blue'
    },
    column_container: {
        display: 'inline-block',
    },
    diagram: {
        height: '150px',
        display: 'table-cell',
        'vertical-align': 'bottom',
    }
  });

const diagram = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Диаграмма
                </Typography>
                <div className={classes.diagram} >
                    { props.data.map((item, i) => {
                        return ( 
                            <div key={i} className={classes.column_container}>
                                <div className={classes.column} style={{height: item}}></div>
                                <div>{item}</div>
                            </div>);
                    })
                    }
                </div>
            </CardContent>
        </Card>
    );
}

export default diagram;