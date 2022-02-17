import { useEffect, useState } from "react";
import {
  MenuItem,
  Select,
  TextField,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { Form } from "./style";
import { postUser } from "../../api";
import moment from "moment";

export default function Register() {
  const now = moment(new Date()).format("yyyy-MM-dd");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState(now);
  const [occupation, setOccupation] = useState("Cliente");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [role, setRole] = useState("USER");

  useEffect(() => {
    if (occupation === "Cliente") {
      setRole('USER');
    } else {
      setRole('ADMIN');
    }
  }, [occupation]);

  const data = {
    firstName,
    lastName,
    birthdate: birthdate + 'T00:00:00.000Z',
    occupation,
    email,
    password,
    passwordConfirmation,
    imageUrl,
    role
  };

  const handleSubmit = async () => {
    console.log(data);
    console.log(birthdate + 'T00:00:00.000Z');
    const response = await postUser(data);
    console.log(response);
  };

  return (
    <Form>
      <Grid
        container
        display="flex"
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Grid item>
          <Typography variant="h4">Cadastro</Typography>
        </Grid>
        <Grid
          container
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Grid item>
            <TextField
              label="Nome"
              variant="filled"
              defaultValue={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              name="firstName"
              type="text"
            />
          </Grid>
          <Grid item>
            <TextField
              label="Sobrenome"
              variant="filled"
              name="lastName"
              defaultValue={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
            />
          </Grid>
        </Grid>

        <Grid
          container
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Grid item>
            <TextField
              label="E-mail"
              variant="filled"
              name="email"
              type="email"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Senha"
              variant="filled"
              name="password"
              type="password"
              defaultValue={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid
          container
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Grid item>
            <TextField
              label="Confirme a senha"
              variant="filled"
              name="passwordConfirmation"
              type="password"
              defaultValue={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Foto de perfil"
              variant="filled"
              name="imageUrl"
              type="text"
              defaultValue={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid item>
          <TextField
            label="Data de nascimento"
            variant="filled"
            name="birthdate"
            type="date"
            InputLabelProps={{ shrink: true }}
            defaultValue={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Select
            variant="filled"
            name="occupation"
            defaultValue={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          >
            <MenuItem value="Cliente">Cliente</MenuItem>
            <MenuItem value="Garçom">Garçom</MenuItem>
            <MenuItem value="Chefe">Chefe</MenuItem>
            <MenuItem value="Cozinheiro">Cozinheiro</MenuItem>
            <MenuItem value="Auxiliar">Auxiliar de Cozinha</MenuItem>
            <MenuItem value="Bartender">Bartender</MenuItem>
            <MenuItem value="Zelador">Zelador</MenuItem>
            <MenuItem value="Segurança">Segurança</MenuItem>
          </Select>
        </Grid>

        <Grid item>
          <Button variant="contained" onClick={() => handleSubmit()}>
            Confirmar
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
}
