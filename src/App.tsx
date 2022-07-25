import Picasso from "@toptal/picasso-provider";
import { Button, Page, Container, Helpbox } from "@toptal/picasso";

function App() {
  return (
    <Picasso>
      <Page>
        <Page.TopBar title="App Page" />
        <Page.Content>
          <Page.Article>
            <Container
              top={7}
              bottom={7}
              flex
              justifyContent="center"
              direction="column"
            >
              <Container bottom={2}>Your application goes here</Container>
              <Container bottom={2}>
                <Button>Hello world!</Button>
              </Container>

              <Helpbox>
                <Helpbox.Title>Heading Small</Helpbox.Title>
                <Helpbox.Content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Helpbox.Content>
              </Helpbox>
            </Container>
          </Page.Article>
        </Page.Content>
        <Page.Footer />
      </Page>
    </Picasso>
  );
}

export default App;
