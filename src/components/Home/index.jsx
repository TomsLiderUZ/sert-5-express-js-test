import { useState, useEffect } from "react";
import { Container, Title, Form, TextArea, Button, Table, Th, Td } from "./style";

const Home = () => {
  const [formData, setFormData] = useState({ message: "" });
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://sert-5-express-js-test-production.up.railway.app/data-base");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://sert-5-express-js-test-production.up.railway.app/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);
      fetchData();
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    }
  };

  return (
    <Container>
      <Title>Ma’lumot Jo‘natish</Title>
      <Form onSubmit={handleSubmit}>
        <TextArea name="message" placeholder="Xabar" onChange={handleChange} required></TextArea>
        <Button type="submit">Jo‘natish</Button>
      </Form>

      <Title>Ma’lumotlar</Title>
      <Table>
        <thead>
          <tr>
            <Th>Xabar</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <Td>({index}) - {item.message}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
