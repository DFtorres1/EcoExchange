
const Chat = () => {
  return (
    <div className="chat">
      {/* Aquí puedes agregar el código para el chat */}
      <h2>Chat de Negociación</h2>
      <div className="messages">
        {/* Mensajes del chat */}
      </div>
      {/* Formulario para enviar mensajes */}
      <form className="message-form">
        <input type="text" placeholder="Escribe un mensaje..." />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Chat;
