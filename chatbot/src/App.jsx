import styled from "styled-components"
import { useEffect, useState } from "react"
import { auth, db } from "./firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { collection, query, onSnapshot } from "firebase/firestore"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #4368bf;
`
const SubTitle = styled.h2`
  font-size: 1.2em;
  text-align: center;
  color: #4368bf;
`

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 2em;
`

const Form = styled.form`
  margin-top: 1rem;
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border: 1px solid #ccc;
`
const FormInput = styled.input`
  padding: 0.5em;
  font-size: 1rem;
  border: 1px solid #ccc;
`
const FormButton = styled.button`
  padding: 0.5em;
  font-size: 1rem;
  background-color: #4368bf;
  border: none;
  color: white;
  cursor: pointer;
`

function App() {
  const [formValues, setFormValues] = useState({
    email: "",
    senha: "",
  })
  const [user, setUser] = useState(null)
  const [messages, setMessages] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await signInWithEmailAndPassword(auth, formValues.email, formValues.password)
    setUser(response.user)
  }

  useEffect(() => {
    const q = query(collection(db, "messages"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const dbMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(dbMessages);
    });
    return () => unsubscribe();
  }, [user]);
  return (
    <Wrapper>
      <Title> chatbot </Title>
      {!user ? (
        <Form onSubmit={handleSubmit}>
          <SubTitle> Login</SubTitle>
          <FormInput
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setFormValues({
                ...formValues,
                email: e.target.value,
              })
            }}
          />
          <FormInput
            type="password"
            placeholder="Senha"
            onChange={(e) => {
              setFormValues({
                ...formValues,
                password: e.target.value,
              })
            }}
          />

          <FormButton>Enviar</FormButton>
        </Form>
      ) : (
        <div> 
        <SubTitle> Bem-vindo ao chat {user.email}</SubTitle>
        <div> {messages.map((message, key)=>(
          <p key={`message-${message.id}-${key}`}>{message.text}</p>

        ))}</div>
        </div>
      )}
    </Wrapper>
  )
}

export default App
