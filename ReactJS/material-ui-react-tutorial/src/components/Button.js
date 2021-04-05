import Button from '@material-ui/core/Button' 
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import {makeStyles} from '@material-ui/core/styles/'

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FF7777, #0025FF)',
        border: 0,
        borderRadius: 15,
        color: 'white',
        padding: '0 30px',
        marginBottom: '3vh'
    }
})

const Buttons = ({isHoveredOn, onMouseEnter, onMouseLeave})=> {
    const classes = useStyles()
    return(
        <>
            <Button className={classes.root}>Test Styled Button </Button>

            <ButtonGroup>
                <Button 
                    startIcon={<SaveIcon />}
                    // endIcon={<SaveIcon />}
                    size= {isHoveredOn ? 'large' : 'small'}
                    // disabled
                    variant="contained" 
                    color="primary"
                    onClick = {()=>alert('Click')}
                    onMouseEnter = {onMouseEnter}
                    onMouseLeave = {onMouseLeave}
                >
                    Save
                </Button>

                
                <Button 
                    startIcon={<DeleteIcon />}
                    // endIcon={<SaveIcon />}
                    size= {isHoveredOn ? 'large' : 'small'}
                    // disabled
                    variant="contained" 
                    color="secondary"
                    onClick = {()=>alert('Click')}
                >
                    Delete
                </Button>
            </ButtonGroup>
        </>
    )
}

export default Buttons