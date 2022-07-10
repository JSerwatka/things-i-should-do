import React, { useState } from "react";
import {
    ColorScheme,
    ActionIcon,
    Group,
} from "@mantine/core";
import {
    HiOutlineSun,
    HiOutlineMoon,
    HiOutlineAdjustments,
    HiOutlineCalendar
} from "react-icons/hi";
import styled from "styled-components";

interface ControlPanelProps {
    colorScheme: ColorScheme;
    toggleTheme(): void;
}

const ControlPanel = ({ colorScheme, toggleTheme }: ControlPanelProps) => {

    return (
        <Group align="center">
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
            <ActionIcon
                title="settings"
            >
                <HiOutlineAdjustments size="20" />
            </ActionIcon>
            <ActionIcon
                title="choose date"
                onClick={() => null}
            >
                <HiOutlineCalendar size="20" />

            </ActionIcon>
        </Group>
    );
};

export default ControlPanel;

const CalendarContainer = styled.div`
  position: absolute;
  left: 200px;
`;