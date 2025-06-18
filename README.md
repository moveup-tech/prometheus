# Prometheus

Prometheus é um Design System desenvolvido para a empresa **Festval**, utilizando **React**, **TailwindCSS** e **Radix UI**. Ele fornece componentes reutilizáveis e acessíveis para a construção de interfaces consistentes e modernas.

## 📖 Documentação

A documentação completa do Prometheus pode ser encontrada no seguinte link:

🔗 [Prometheus Documentation](https://moveup-tech.github.io/prometheus/)

## 📌 Índice

- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Componentes Disponíveis](#-componentes-disponíveis)
- [Instalação](#-instalação)
- [Exemplo de uso](#-uso)
  - [AlertDialog](#-AlertDialog)
  - [Avatar](#-Avatar)
  - [Button](#-Button)
  - [Calendar](#-Calendar)
  - [Card](#-Card)
- [Licença](#-licença)

## 🚀 Tecnologias Utilizadas

- **React** - Biblioteca para construção de interfaces de usuário
- **TailwindCSS** - Framework para estilização rápida e eficiente
- **Radix UI** - Componentes acessíveis e de alta qualidade para React

## 📦 Componentes Disponíveis

| Componente     | Status               |
| -------------- | -------------------- |
| AlertDialog    | ✅ Implementado       |
| Avatar         | ✅ Implementado       |
| Button         | ✅ Implementado       |
| Calendar       | ✅ Implementado       |
| Card           | ✅ Implementado       |
| Checkbox       | ✅ Implementado       |
| DatePicker     | ✅ Implementado       |
| Dialog         | ✅ Implementado       |
| Footer         | ✅ Implementado       |
| Header         | ✅ Implementado       |
| Heading        | ✅ Implementado       |
| Input          | ✅ Implementado       |
| InputFile      | ✅ Implementado       |
| Label          | ✅ Implementado       |
| Menu           | ✅ Implementado       |
| MonthPicker    | ✅ Implementado       |
| NavigationMenu | ✅ Implementado       |
| Popover        | ✅ Implementado       |
| Select         | ✅ Implementado       |
| Table          | ✅ Implementado       |
| Text           | ✅ Implementado       |
| TextArea       | ✅ Implementado       |
| YearPicker     | ✅ Implementado       |
| Notification   | ⏳ Em desenvolvimento |
| CheckboxGroup  | ⏳ Em desenvolvimento |

## 📌 Instalação

Para instalar o Prometheus em seu projeto, utilize:

```sh
npm install prometheus-ui-library
```

Ou com Yarn:

```sh
yarn add prometheus-ui-library
```

## 🛠️ Uso

```js
** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}", "./node_modules/**/*.{js,ts,jsx,tsx}"], // add node_modules file to tailwind content
    // ...rest of your code
  }
```

### AlertDialog

```tsx
import { AlertDialog } from "prometheus-ui-library";

function AlertExample() {
  return (
    <AlertDialog>
      <AlertDialog.Trigger>Open</AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Confirmação</AlertDialog.Title>
        <AlertDialog.Description>Tem certeza que deseja continuar?</AlertDialog.Description>
        <AlertDialog.Action>Confirmar</AlertDialog.Action>
        <AlertDialog.Cancel>Cancelar</AlertDialog.Cancel>
      </AlertDialog.Content>
    </AlertDialog>
  );
}
```

### Avatar

```tsx
import { Avatar } from "prometheus-ui-library";

function AvatarExample() {
  return <Avatar src="https://via.placeholder.com/150" alt="Usuário" />;
}
```

### Button

```tsx
import { Button } from "prometheus-ui-library";

function ButtonExample() {
  return <Button variant="primary">Clique Aqui</Button>;
}
```

### Calendar

```tsx
import { Calendar } from "prometheus-ui-library";

function CalendarExample() {
  return <Calendar />;
}
```

### Card

```tsx
import { Card } from "prometheus-ui-library";

function CardExample() {
  return (
    <Card>
      <Card.Header>Título do Card</Card.Header>
      <Card.Body>Conteúdo do Card</Card.Body>
    </Card>
  );
}
```

## 📄 Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

