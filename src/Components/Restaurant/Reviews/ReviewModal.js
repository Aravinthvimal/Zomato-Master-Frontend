import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import ReviewStars from './ReviewStars'
import { IoMdClose } from "react-icons/io";

export default function ReviewModal({isOpen, setIsOpen, ...props}) {

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
          <div className="min-h-screen lg:px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title as="h3" className="flex items-center justify-between text-lg font-medium leading-6 text-gray-900"> 
                  <p> Write a Review </p>  
                  <button onClick={closeModal} > <IoMdClose /> </button>
                </Dialog.Title>
                <div className="my-8">
                  <div className="flex items-center text-lg gap-28 my-4 ">
                    <label className="flex items-center gap-1">
                        <input type="radio" name="radio" checked />
                        <span className=""> Dining </span>
                    </label>
                    <label className="flex items-center gap-1">
                        <input type="radio" name="radio" />
                        <span className=""> Delivery </span>
                    </label>
                  </div>
                  <ReviewStars isModal = {true} />
                </div>
                <div className=" mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-navcolor-400 border border-transparent rounded-md hover:bg-navcolor-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navcolor-500"
                    onClick={closeModal}
                  >
                    Add Review
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
