import React, {Component} from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text
} from 'native-base';

export default class NativeBase extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name = "menu"/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                    <Text>//Your Main Content</Text>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>

            </Container>
        );
    }
}