import React from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  Container,
  Content,
  Button,
  Item,
  Input,
  StyleProvider,
  Left,
  Body,
  Text,
  Label,
} from "native-base";

import { StyleSheet, Switch, TouchableOpacity } from "react-native";

import getTheme from "../theme/components";
import platform from "../theme/variables/platform";

export default function RegistrationScreen() {
  return (
    <StyleProvider style={getTheme(platform)}>
      <Container>
        <Content padder enableOnAndroid>
          <Grid>
            <Row>
              <Col>
                <Item stackedLabel>
                  <Label>Last name</Label>
                  <Input />
                </Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Item stackedLabel>
                  <Label>First name</Label>
                  <Input />
                </Item>
              </Col>
            </Row>
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
                <Item stackedLabel>
                  <Label>Repeat password</Label>
                  <Input secureTextEntry={true} />
                </Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Item style={styles.terms}>
                  <Left>
                    <TouchableOpacity onPress={() => {}}>
                      <Text>
                        By clicking checkbox, you agree to our Terms and that
                        you have read our Privacy Policy and Content Policy.
                      </Text>
                    </TouchableOpacity>
                  </Left>
                  <Body>
                    <Switch />
                  </Body>
                </Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button block>
                  <Text>Sign Up</Text>
                </Button>
              </Col>
            </Row>
          </Grid>
        </Content>
        <Button onPress={() => {}} full dark>
          <Text>Already have account?</Text>
        </Button>
      </Container>
    </StyleProvider>
  );
}

const styles = StyleSheet.create({
  terms: {
    height: 100,
  },
});
