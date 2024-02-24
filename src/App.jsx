import { useState } from "react";
import {
  Button,
  Container,
  DateIcon,
  InputStyled,
  InputWrapper,
  Label,
  LembreteContent,
  LembreteHeader,
  LembreteItem,
  LembreteItemContent,
  LembreteTitle,
  Title,
} from "./styles/Style";

export const App = () => {
  const [lembrete, setLembrete] = useState({ nome: "", data: "" });
  const [lembretes, setLembretes] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLembrete((prevLembrete) => ({ ...prevLembrete, [name]: value }));
  };

  const formatarData = (data) => {
    const options = { day: "numeric", month: "numeric", year: "numeric" };
    return new Date(data + "T00:00:00").toLocaleDateString("pt-BR", options);
  };

  const criarLembrete = () => {
    const dataAtual = new Date();
    const dataSelecionada = new Date(lembrete.data);

    if (!lembrete.data || dataSelecionada < dataAtual) {
      alert("Por favor, selecione uma data futura.");
      return;
    }

    if (!lembrete.nome) {
      alert("Por favor, preencha o campo 'Nome'.");
      return;
    }

    const lembreteExistente = lembretes.find(
      (l) => formatarData(l.data) === formatarData(lembrete.data)
    );

    if (lembreteExistente) {
      const updatedLembretes = lembretes.map((l) =>
        formatarData(l.data) === formatarData(lembrete.data)
          ? { ...l, nomes: [...l.nomes, lembrete.nome] }
          : l
      );
      setLembretes(updatedLembretes);
    } else {
      // Adicionando lembrete de forma ordenada por data
      setLembretes((prevLembretes) => {
        const newLembretes = [
          ...prevLembretes,
          { ...lembrete, nomes: [lembrete.nome] },
        ];
        return newLembretes.sort(
          (a, b) =>
            new Date(b.data + "T00:00:00") - new Date(a.data + "T00:00:00")
        );
      });
    }

    setLembrete({ nome: "", data: "" });
  };

  const fecharLembrete = (indexLembrete, indexNome) => {
    setLembretes((prevLembretes) => {
      const updatedLembretes = prevLembretes.map((l, i) =>
        i === indexLembrete
          ? { ...l, nomes: l.nomes.filter((_, j) => j !== indexNome) }
          : l
      );

      // Remover o lembrete se não houver nomes restantes
      return updatedLembretes.filter((l) => l.nomes.length > 0);
    });
  };

  return (
    <Container>
      <Title>Novo Lembrete</Title>

      <InputWrapper>
        <Label>Nome</Label>
        <InputStyled
          type="text"
          name="nome"
          placeholder="Nome do lembrete"
          value={lembrete.nome}
          onChange={handleChange}
        />
      </InputWrapper>

      <InputWrapper>
        <Label>Data</Label>
        <InputStyled
          type="date"
          name="data"
          value={lembrete.data}
          onChange={handleChange}
        />
      </InputWrapper>

      <Button onClick={criarLembrete}>Criar</Button>

      {lembretes.length > 0 && (
        <LembreteItem>
          <LembreteHeader>
            <LembreteTitle>
              <h2>Lista de Lembretes</h2>
            </LembreteTitle>
          </LembreteHeader>

          <LembreteContent>
            <ul>
              {lembretes
                .sort(
                  (a, b) =>
                    new Date(a.data + "T00:00:00") -
                    new Date(b.data + "T00:00:00")
                )
                .map((lembrete, index) => (
                  <li key={`${index}-data`}>
                    {formatarData(lembrete.data)}
                    <ul>
                      {lembrete.nomes.map((nome, i) => (
                        <LembreteItemContent key={`${index}-nome-${i}`}>
                          <div>{nome}</div>
                          <DateIcon onClick={() => fecharLembrete(index, i)} />
                        </LembreteItemContent>
                      ))}
                    </ul>
                  </li>
                ))}
            </ul>
          </LembreteContent>
        </LembreteItem>
      )}
    </Container>
  );
};
