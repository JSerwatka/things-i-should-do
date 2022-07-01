import * as React from "react";
import { useState } from "react";
import {
    AppShell,
    Navbar,
    Text,
    useMantineTheme,
    MediaQuery,
    Burger,
    Header,
    ActionIcon,
    ColorScheme,
    Center
} from "@mantine/core";
import styled from "styled-components";
import { useDisclosure } from "@mantine/hooks";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";



// markup
const IndexPage = () => {
    const theme = useMantineTheme();
    const [opened, handler] = useDisclosure(false);
    const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
    const toggleTheme = () => {
        setColorScheme(colorScheme === "dark" ? "light" : "dark");
        // TODO save info about theme to cookie https://mantine.dev/theming/dark-theme/#save-color-scheme-in-cookie
    };

    return (
        <Body>
            <AppShell
                styles={{
                    root: {
                        background: colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
                    }
                }}
                navbar={
                    <Navbar
                        hidden={!opened}
                        width={{ lg: 100 }}
                        styles={{
                            root: {
                                background: colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
                            }
                        }}
                    >
                        <Center mt="sm">
                            <ActionIcon
                                onClick={toggleTheme}
                                title="toggle theme"
                                variant={colorScheme === "dark" ? "filled" : "hover"}
                            >
                                {colorScheme === "dark" ? (
                                    <HiOutlineSun size="20" color="white" />
                                ) : (
                                    <HiOutlineMoon size="20" color="black" />
                                )}
                            </ActionIcon>
                        </Center>
                    </Navbar >
                }
                header={
                    < Header height={70} p="md"  >
                        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                            <Burger
                                opened={opened}
                                onClick={handler.toggle}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>
                    </Header >
                }
            >
                <Text>Main text</Text>
            </AppShell >
        </Body>
    );
};

export default IndexPage;

const Body = styled.body`
    margin: 0;
`;