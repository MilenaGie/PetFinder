import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormSeen from './FormSeen';
import FormFound from './FormFound';
import FormLost from './FormLost';
import { useState } from 'react';

const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
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
            <Button size="large" variant="contained" onClick={handleOpen}>
                {text}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={modalStyle}>
                    {children}
                </Box>
            </Modal>
        </>
    );
}

function Buttons({currentFilter, changeFilter}) {
    return (
        <Stack direction="row" spacing={2} p={1} justifyContent="center"
        alignItems="baseline" sx={{position: 'fixed', width: '80%'}}>
            <ButtonTemplate text="WIDZIANE">
                <FormSeen />    
            </ButtonTemplate>
            <ButtonTemplate text="ZNALEZIONE">
                <FormFound /> 
                </ButtonTemplate>
            <ButtonTemplate text="ZAGINIONE">
                <FormLost />  
            </ButtonTemplate>
        </Stack>
    );
}

export default Buttons;