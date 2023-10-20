import React from "react";
import PropTypes from "prop-types";
import {Transition, Dialog} from "@headlessui/react";

const ModalTerms = ({open, acceptTerms, onClose}) => {
    /** References */
    const cancelButtonRef = React.useRef(null);

    return (
        <Transition.Root show={open} as={React.Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={onClose}>
                <Transition.Child
                    as={React.Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={React.Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all h-full sm:my-8 max-w-[95%] w-full">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 relative h-[85%]">
                                    <div className="sm:flex sm:items-start relative h-[85%]">
                                        <iframe src="https://juegoseml.co/images-recover/terminos-condiciones.pdf" className="h-[370px]" width="100%" height="100%"></iframe>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={acceptTerms}
                                        ref={cancelButtonRef}
                                    >
                                        Aceptar
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

ModalTerms.propTypes = {
    open: PropTypes.bool.isRequired,
    acceptTerms: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
}

export default ModalTerms;