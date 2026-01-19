const Modal = ({ modal }: any) => {
  return (
    <main className="fixed h-dvh bg-white z-30 inset-0 flex justify-center items-center overflow-hidden">
      <div>{modal}</div>
    </main>
  );
};

export default Modal;
