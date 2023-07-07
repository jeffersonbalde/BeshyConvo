import Message from "./Message"

const ChatBox = () => {

    const messages = [
        {
            id: 1,
            text: "Morning",
            name: "Jeff"
        },
        {
            id: 2,
            text:  "afternoon",
            name: "Marke"
        }
    ]
  return (
    <div className="pb-44 pt-20 containerWrap">
        {messages.map(message => (
            <Message message={message} key={message.id} />
        ))}
    </div>
  )
}

export default ChatBox