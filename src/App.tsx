import Picasso from "@toptal/picasso-provider";
import { Button, Page, Container } from "@toptal/picasso";

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
              <Container flex bottom={2}>
                Your application goes here
              </Container>
              <Container>
                <Button>Hello world!</Button>
              </Container>
            </Container>
          </Page.Article>
        </Page.Content>
        <Page.Footer />
      </Page>
    </Picasso>
  );
}

export default App;
