"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, TextField, Card, CardContent, Typography } from "@mui/material";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (user === "admin" && password === "admin") {
      setError("");
      router.push("/dashboard"); // redireciona pro dashboard mock
    } else {
      console.log("Usuário ou senha inválidos");
      setError("Usuário ou senha inválidos");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[linear-gradient(to_bottom_right,#ea580c,#a855f7)]">
      <Card className="w-1/3 max-w-md shadow-2xl">
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          className="p-6"
        >
          <Typography variant="h5" className="text-center font-bold text-primary">
            Login
          </Typography>
          <TextField
            label="Usuário"
            variant="outlined"
            fullWidth
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Typography variant="body2" color="error" className="text-center">
              {error}
            </Typography>
          )}
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
            Entrar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
