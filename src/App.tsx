import Button from "./components/ui/Button/Button";

const App = () => {
  return (
    <>
      <Button color="primary" className="rounded-sm">
        Hello World
      </Button>
      <Button color="danger">Hello World</Button>
      <Button color="warning">Hello World</Button>
      <Button color="success">Hello World</Button>
    </>
  );
};

export default App;
