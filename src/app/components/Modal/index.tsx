import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const TodoListModal = ({ open, handleClose, todos, description }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCloseModal = () => {
    handleClose();
    setCheckedItems({}); // Clear checked items when closing the modal
  };

  const handleSave = () => {
    // Handle save logic with checkedItems
    console.log('Checked Items:', checkedItems);
    handleCloseModal();
  };

  return (
    <Modal open={open} onClose={handleCloseModal} aria-labelledby="modal-title">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          // width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-title" marginBottom={2}>
          {description}
        </Typography>
        <FormGroup onSubmit={() => console.log('test')} sx={{ mt: 4 }}>
          {todos.map(todo => (
            <FormControlLabel
              style={{ marginTop: 6 }}
              control={<Checkbox value="remember" color="primary" />}
              label={todo.title}
            />
          ))}
        </FormGroup>
        <Box display="flex" justifyContent="space-between" marginTop={2}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Dodaj jako zadanie
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCloseModal}
          >
            Anuluj
            <CloseIcon />
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default TodoListModal;
