import { Box, Fade, Typography, IconButton } from '@mui/material';
import ModalComponent from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

interface IModalProps {
  title: string;
  description: string;
  isModalOpen: boolean;
  closeModal: () => void;
  children: string | JSX.Element;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 1,
  boxShadow: 24,
};

const Modal = ({
  title,
  description,
  isModalOpen,
  closeModal,
  children,
}: IModalProps) => (
  <ModalComponent
    open={isModalOpen}
    onClose={closeModal}
    aria-labelledby={`modal-${title}`}
    aria-describedby={`modal-${description}`}>
    <Fade in={isModalOpen}>
      <Box sx={style}>
        <Box
          px={2}
          py={1}
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          borderBottom={1}
          sx={{ borderColor: 'text.secondary' }}>
          <Typography id='transition-modal-title' variant='h6' component='h2'>
            {title}
          </Typography>
          <IconButton
            color='inherit'
            aria-label='close-modal'
            onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </Box>
        {children}
      </Box>
    </Fade>
  </ModalComponent>
);

export default Modal;
