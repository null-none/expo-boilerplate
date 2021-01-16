import * as React from "react";
import { StyleSheet } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  Container,
  Content,
  Button,
  StyleProvider,
  Item,
  Label,
  Input,
  Text,
} from "native-base";
import getTheme from "../theme/components";
import platform from "../theme/variables/platform";

export default function LoginScreen() {
  return (
    <StyleProvider style={getTheme(platform)}>
      <Container>
        <Content padder enableOnAndroid>
          <Grid>
            <Row>
              <Col>
                <Item stackedLabel>
                  <Label>Email</Label>
                  <Input keyboardType="email-address" />
                </Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Item stackedLabel>
                  <Label>Password</Label>
                  <Input secureTextEntry={true} />
                </Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button onPress={() => {}} block>
                  <Text> Sign In</Text>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button dark transparent onPress={() => {}} block>
                  <Text>Forget Your Password?</Text>
                </Button>
              </Col>
            </Row>
          </Grid>
        </Content>
        <Button dark transparent onPress={() => {}} full>
          <Text> Don't have an account? Sign Up</Text>
        </Button>
      </Container>
    </StyleProvider>
  );
}

const styles = StyleSheet.create({});
