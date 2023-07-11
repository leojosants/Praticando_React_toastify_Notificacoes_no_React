import React from 'react';
import { toast } from 'react-toastify';
import { Container, Buttons } from './styles';

function Notifications() {

    function handleDefault() {
        toast('Mensagem default');
    }


    function handleError() {
        toast.error('Requisição mal sucessida!', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    }


    function handleSuccess() {
        toast.success('Sua requisição foi bem sucessida!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    }


    function handleInfo() {
        toast.info('Carregando...', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            isLoading: true,
        });
    }


    function handleWarn() {
        toast.warn('Cuidado!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: 'dark',
            progress: undefined,
        });
    }


    function handleCustom() {
        toast('Mensagem customizada', {
            position: toast.POSITION.BOTTOM_CENTER,
            className: 'sua-classe',
        });
    }

    return (
        <Container>
            <Buttons>
                <button type="button" onClick={handleDefault}>
                    Default
                </button>

                <button type="button" onClick={handleError}>
                    Error
                </button>

                <button type="button" onClick={handleSuccess}>
                    Success
                </button>

                <button type="button" onClick={handleWarn}>
                    Warn
                </button>

                <button type="button" onClick={handleInfo}>
                    Info
                </button>

                <button type="button" onClick={handleCustom}>
                    Custom
                </button>
            </Buttons>
        </Container>
    );
}
export default Notifications;