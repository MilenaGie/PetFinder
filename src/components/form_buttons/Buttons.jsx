import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormSeen from './FormSeen';
import FormFound from './FormFound';
import FormLost from './FormLost';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function ButtonTemplate(props) {
    const {text, children} = props;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button variant="contained" onClick={handleOpen}>
                {text}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    {children}
                </Box>
                {/* <Box sx={style}> */}
                    {/* <Content /> */}
                {/* </Box> */}
            </Modal>
        </>
    );
}

function Buttons({currentFilter, changeFilter}) {
    return (
        <Stack direction="row" spacing={2} p={1} sx={{position: 'fixed' }}>
            <ButtonTemplate text="WIDZIANE">
                <FormSeen filter={currentFilter} changeFilter={changeFilter} />    
            </ButtonTemplate>
            <ButtonTemplate text="ZNALEZIONE">
                <FormFound filter={currentFilter} changeFilter={changeFilter} /> 
                </ButtonTemplate>
            <ButtonTemplate text="ZAGINIONE">
                <FormLost filter={currentFilter} changeFilter={changeFilter} />  
            </ButtonTemplate>
        </Stack>
    );
}

export default Buttons;