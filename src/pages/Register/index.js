import { useEffect, useRef, useState } from "react";
import {
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { Form } from "./style";
import { postUser } from "../../api";

export default function Register() {
 const [data, setData] = useState({
     firstName: '',
     lastName: '',
     birthdate: '',
     occupation: '',
     email: '',
     password: '',
     passwordConfirmation: '',
     imageUrl: '',
     role: 'USER'
 });

  const handleSubmit = () => {

      
      
};
console.log(data)

  return (
    <Form onSubmit={handleSubmit}>
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
              defaultValue={data.firstName}
              onChange={(e) => data.firstName = e.targetValue && setData(data)}
              name="firstName"
              type="text"
            />
          </Grid>
          <Grid item>
            <TextField
              label="Sobrenome"
              variant="filled"
              name="lastName"
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
            />
          </Grid>
          <Grid item>
            <TextField
              label="Senha"
              variant="filled"
              name="password"
              type="password"
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
            />
          </Grid>
          <Grid item>
            <TextField
              label="Foto de perfil"
              variant="filled"
              name="imageUrl"
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
              label="Data de nascimento"
              variant="filled"
              name="birthdate"
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item>
            <Select variant="filled" name="occupation" defaultValue="Cliente">
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
        </Grid>
        <Grid item>
            <Button type="submit" variant="contained">
                Confirmar
            </Button>
        </Grid>
      </Grid>
    </Form>
  );
}
