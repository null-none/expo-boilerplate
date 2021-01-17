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
import getTheme from "../../theme/components";
import platform from "../../theme/variables/platform";

export default function SettingsScreen({ navigation }) {
  return (
    <StyleProvider style={getTheme(platform)}>
      <Container>
        <Content padder enableOnAndroid>
          <Grid>
            <Row>
              <Col>
                <Item stackedLabel>
                  <Label>First Name</Label>
                  <Input />
                </Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Item stackedLabel>
                  <Label>Last Name</Label>
                  <Input secureTextEntry={true} />
                </Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button onPress={() => {}} block>
                  <Text>Update</Text>
                </Button>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    </StyleProvider>
  );
}

const styles = StyleSheet.create({});
