import React, { useState } from "react";
import {
    AppShell,
    useMantineTheme,
    MediaQuery,
    Burger,
    Header,
    ColorScheme
} from "@mantine/core";
import styled from "styled-components";
import { useDisclosure } from "@mantine/hooks";


import SingleTaskField from "../components/SingleTaskField";
import ControlPanel from "../components/ControlPanel";

// markup
const IndexPage = () => {
    const theme = useMantineTheme();
    const [opened, handler] = useDisclosure(false);
    const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
    const toggleTheme = () => {
        return setColorScheme(colorScheme === "dark" ? "light" : "dark");
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
                        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                            <ControlPanel
                                colorScheme={colorScheme}
                                toggleTheme={toggleTheme}
                            />
                        </MediaQuery>
                    </Header >
                }
            >
                <SingleTaskField></SingleTaskField>
            </AppShell >
        </Body>
    );
};

export default IndexPage;

const Body = styled.body`
    margin: 0;
`;

const NavIcons = styled.div`
  display: flex;
  flex-direction: column;
`;
