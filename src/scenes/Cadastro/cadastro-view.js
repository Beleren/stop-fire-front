import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom'
import MenuContainer from "../../components/MenuContainer";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
}));

const Cadastro = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: '',
        school: '',
        schoolid: ''
    });
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    const schools = [
        'School 1',
        'School 2',
        'School 3',
        'School 4'
    ]

    return (
        <MenuContainer>
            <section>
                <h1>Register your account</h1>
                <form>
                    <TextField
                        id="name"
                        label="Name"
                        className={classes.textField}
                        value={values.name}
                        onChange={handleChange('name')}
                        placeholder='Name'
                        margin="normal"
                    />
                    <br></br>
                    <TextField
                        id="schoolid"
                        label="School ID"
                        className={classes.textField}
                        value={values.schoolid}
                        onChange={handleChange('schoolid')}
                        placeholder='School ID'
                        margin="normal"
                    />
                    <br></br>
                    <TextField
                        id="school"
                        label="School Name"
                        className={classes.textField}
                        value={values.school}
                        onChange={handleChange('school')}
                        placeholder='School Name'
                        margin="normal"
                    />
                    <br></br>
                    {/* <TextField
                        id="school"
                        select
                        label="Choose your school"
                        className={classes.textField}
                        value={values.school}
                        onChange={handleChange('school')}
                        SelectProps={{
                            native: true,
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        helperText="Please select your school"
                        margin="normal"
                    >
                        {schools.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}}
                </TextField>
                <br></br> */}
                    <Link to="/thankyou">
                        <Button variant="contained" color="primary">Submit</Button>
                    </Link>
                </form>
            </section>
        </MenuContainer>
    )
}

export default Cadastro;