import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
/** Local Modules */
import useApi from 'api';
import useModels from 'models';

const useLogin = () => {
    /** Variable */
    const router = useNavigate();

    /** Api */
    const { useActions } = useApi();
    const { dispatch, useAuthActions } = useActions();
    const { actLogin } = useAuthActions();

    /** Models */
    const { useSelectors } = useModels();
    const { useSelector, useAuthSelectors } = useSelectors();
    const { loginSelector } = useAuthSelectors();
    const login = useSelector(loginSelector);

    /** Use Form */
    const {
        control,
        handleSubmit,
        setValue,
        clearErrors,
        formState: { isValid, errors },
    } = useForm({ mode: 'onChange' });

    /**
     * This function retrieves the form data and sends it to the API.
     * If everything goes well, it redirects the user to the instructions page.
     * Otherwise, it informs that an error occurred when registering the user.
     * @returns {void}
     */
    const handleSentRegister = handleSubmit((data) => {
        dispatch(
            actLogin({
                data: { ...data, password: 'password' },
                onSuccess: () => router('/instructions'),
                onError: (error) => {
                    if(error.response) {
                        Swal.fire({
                            icon: 'error',
                            text: error.response.data.message.content
                        });
                    } else {
                        Swal.fire({
                            icon: 'error',
                            text: 'Ocurrio un problema...!'
                        });
                    }
                    

                    console.error(error);
                },
            })
        );
    });

    /** Effects */
    useEffect(() => {
        if (login.token) {
            router('/instructions');
        }
    }, [login, router]);

    return {
        control,
        handleSentRegister,
        isValid,
        setValue,
        errors,
        clearErrors,
    };
};

export default useLogin;
